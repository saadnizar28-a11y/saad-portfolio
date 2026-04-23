"use client";

import { useEffect, useRef } from "react";

export default function AmoebaBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = window.innerWidth;
    let height = window.innerHeight;
    
    // Pure White Dots
    const numParticles = 200; 
    const particles: { 
      ox: number, oy: number, oz: number, 
      speedModifier: number, 
      drawnX: number | null, drawnY: number | null,
      baseRadius: number
    }[] = [];
    
    // Create organic dot cluster
    for (let i = 0; i < numParticles; i++) {
       const u = Math.random();
       const v = Math.random();
       const theta = u * 2.0 * Math.PI;
       const phi = Math.acos(2.0 * v - 1.0);
       const r = Math.cbrt(Math.random()); // Volume distribution
       
       particles.push({
         ox: r * Math.sin(phi) * Math.cos(theta),
         oy: r * Math.sin(phi) * Math.sin(theta),
         oz: r * Math.cos(phi),
         speedModifier: 0.5 + Math.random(),
         drawnX: null,
         drawnY: null,
         baseRadius: 0.5 + Math.random() * 0.8, // Very small, minimalist white dots
       });
    }

    let time = 0;
    
    // Mouse tracks where the shape should "go" and distort
    let mouse = {
      x: width / 2,
      y: height / 2,
      targetX: width / 2,
      targetY: height / 2,
      vx: 0,
      vy: 0
    };

    let cx = mouse.x;
    let cy = mouse.y;

    const resize = () => {
      const parent = canvas.parentElement;
      if (parent) {
        width = parent.clientWidth;
        height = parent.clientHeight;
      } else {
        width = window.innerWidth;
        height = window.innerHeight;
      }
      canvas.width = width;
      canvas.height = height;
    };

    const draw = () => {
      ctx.clearRect(0, 0, width, height);

      // Smooth time for breathing
      time += 0.02;

      // Mouse velocity for "Octopus" drag effect (Reduced for very slow gummy feel)
      const dx = mouse.targetX - mouse.x;
      const dy = mouse.targetY - mouse.y;
      
      mouse.vx = dx * 0.015;
      mouse.vy = dy * 0.015;

      mouse.x += mouse.vx;
      mouse.y += mouse.vy;

      // The core follows the cursor slowly (syrupy)
      cx += (mouse.x - cx) * 0.015;
      cy += (mouse.y - cy) * 0.015;

      // Deep, smooth breathing (scaling up and down organically)
      const breathingScale = 1 + Math.sin(time * 1.2) * 0.15;
      
      const isMobile = width < 768;
      const sphereRadius = Math.min(width, height) * (isMobile ? 0.75 : 0.5) * breathingScale;
      const focalLength = 800;

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        // Slight natural drift to make it feel alive, but NO continuous rotation
        const swayAngleX = Math.sin(time * 0.2) * 0.1;
        const swayAngleY = Math.cos(time * 0.2) * 0.1;
        
        const cosX = Math.cos(swayAngleX);
        const sinX = Math.sin(swayAngleX);
        const cosY = Math.cos(swayAngleY);
        const sinY = Math.sin(swayAngleY);

        const x1 = p.ox * cosY - p.oz * sinY;
        const z1 = p.oz * cosY + p.ox * sinY;
        const y2 = p.oy * cosX - z1 * sinX;
        const z2 = z1 * cosX + p.oy * sinX;

        const scale = focalLength / (focalLength + z2 * sphereRadius);
        if (scale < 0) continue;

        let targetX = cx + x1 * sphereRadius * scale;
        let targetY = cy + y2 * sphereRadius * scale;

        // Octopus / Amoeba organic deformation
        const waveAngle = Math.atan2(y2, x1);
        // Distorts the shape into flowing tentacles/waves
        const waveDistortion = Math.sin(p.speedModifier * 5 + time * 3) * 30 + Math.cos(waveAngle * 3 - time * 2) * 20;
        
        targetX += Math.cos(waveAngle) * waveDistortion * scale;
        targetY += Math.sin(waveAngle) * waveDistortion * scale;

        if (p.drawnX === null || p.drawnY === null) {
            p.drawnX = targetX;
            p.drawnY = targetY;
        }

        // Gummy mouse physics: dragging creates the octopus head/tail effect
        let swayX = targetX + mouse.vx * 10;
        let swayY = targetY + mouse.vy * 10;

        p.drawnX += (swayX - p.drawnX) * 0.04;
        p.drawnY += (swayY - p.drawnY) * 0.04;

        const alpha = Math.min(1, Math.max(0.05, scale * 1.5 - 0.5));
        
        // Draw pure white dots
        ctx.beginPath();
        ctx.arc(p.drawnX, p.drawnY, p.baseRadius * scale, 0, Math.PI * 2);
        ctx.fillStyle = "#ffffff";
        ctx.globalAlpha = alpha * 0.8;
        ctx.fill();
        
        // Add a very subtle tiny glow to a few dots so it's not overpowering
        if (p.speedModifier > 1.3) {
           ctx.beginPath();
           ctx.arc(p.drawnX, p.drawnY, p.baseRadius * scale * 2, 0, Math.PI * 2);
           ctx.fillStyle = "#ffffff";
           ctx.globalAlpha = alpha * 0.05;
           ctx.fill();
        }
      }

      animationFrameId = requestAnimationFrame(draw);
    };

    window.addEventListener("resize", resize);
    
    // Global mouse tracking
    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouse.targetX = e.clientX - rect.left;
      mouse.targetY = e.clientY - rect.top;
    };

    // Mobile touch tracking
    const handleTouchMove = (e: TouchEvent) => {
      const rect = canvas.getBoundingClientRect();
      if (e.touches.length > 0) {
        mouse.targetX = e.touches[0].clientX - rect.left;
        mouse.targetY = e.touches[0].clientY - rect.top;
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("touchmove", handleTouchMove, { passive: true });

    resize();
    draw();

    return () => {
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("touchmove", handleTouchMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full pointer-events-none z-0 mix-blend-screen opacity-90"
      style={{
        background: "transparent",
      }}
    />
  );
}
