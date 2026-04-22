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
    
    // Mouse tracks where the shape should "go"
    let mouse = {
      x: width / 3, // Start slightly left
      y: height / 2,
      targetX: width / 3,
      targetY: height / 2,
      vx: 0,
      vy: 0
    };

    // User requested white, violet, and light blue colors
    const colors = ["#ffffff", "#ffffff", "#ffffff", "#8e2de2", "#00f0ff"];

    // Reduced density drastically as requested
    const numParticles = 450; 
    const particles: { 
      ox: number, oy: number, oz: number, 
      color: string, 
      drawnX: number | null, drawnY: number | null, 
      speedModifier: number, 
      hasGlow: boolean
    }[] = [];
    
    // Organic, scattered random layout instead of structured pattern
    for (let i = 0; i < numParticles; i++) {
       // Random volumetric distribution to destroy perfect patterns
       const r = Math.cbrt(Math.random()); 
       const u = Math.random();
       const v = Math.random();
       const theta = u * 2.0 * Math.PI;
       const phi = Math.acos(2.0 * v - 1.0);
       
       particles.push({
         ox: r * Math.sin(phi) * Math.cos(theta),
         oy: r * Math.sin(phi) * Math.sin(theta),
         oz: r * Math.cos(phi),
         color: colors[Math.floor(Math.random() * colors.length)],
         drawnX: null,
         drawnY: null,
         speedModifier: 0.5 + Math.random(), // Unique random speeds for each dot
         hasGlow: Math.random() > 0.65, // 35% of dots will have a heavy glow
       });
    }

    let time = 0;
    let angleX = 0;
    let angleY = 0;
    
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

      // Mouse velocity calculation
      const dx = mouse.targetX - mouse.x;
      const dy = mouse.targetY - mouse.y;
      
      // Gummy mouse tracking (reduced to 0.05 for slower heavy drag)
      mouse.vx = dx * 0.08;
      mouse.vy = dy * 0.08;

      mouse.x += mouse.vx;
      mouse.y += mouse.vy;

      // The entire scattered cloud follows the cursor very slowly for ambient feel
      cx += (mouse.x - cx) * 0.015;
      cy += (mouse.y - cy) * 0.015;

      // Drastically slowed down for a calm, slow-motion effect
      time += 0.003;
      angleX += 0.0002;
      angleY -= 0.0003;

      const cosX = Math.cos(angleX);
      const sinX = Math.sin(angleX);
      const cosY = Math.cos(angleY);
      const sinY = Math.sin(angleY);

      // Massive scattered cloud
      const sphereRadius = Math.min(width, height) * 1.1;
      const focalLength = 800;

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        // 3D Rotation matrices
        const x1 = p.ox * cosY - p.oz * sinY;
        const z1 = p.oz * cosY + p.ox * sinY;
        const y2 = p.oy * cosX - z1 * sinX;
        const z2 = z1 * cosX + p.oy * sinX;

        // Skip far back particles to reduce clutter
        if (z2 < -0.1) continue; 

        const scale = focalLength / (focalLength + z2 * sphereRadius);
        
        // Ensure scale doesn't flip weirdly if camera gets too close
        if (scale < 0) continue;

        let targetX = cx + x1 * sphereRadius * scale;
        let targetY = cy + y2 * sphereRadius * scale;

        // ==========================================
        // FLUID AMOEBA DEFORMATION MATH (Randomized)
        // ==========================================
        // Applying organic waving motion so it behaves organically instead of perfectly
        const waveAngle = Math.atan2(y2, x1);
        const waveDistortion = Math.sin(p.speedModifier * 5 + time * 3) * 30 + Math.cos(waveAngle * 2 - time * 2) * 20;
        
        targetX += Math.cos(waveAngle) * waveDistortion * scale;
        targetY += Math.sin(waveAngle) * waveDistortion * scale;

        if (p.drawnX === null || p.drawnY === null) {
            p.drawnX = targetX;
            p.drawnY = targetY;
        }

        // ==========================================
        // GUMMY SWARM PHYSICS
        // ==========================================
        // The dots sway heavily in the direction of the mouse wind (swarming)
        let swayX = targetX + mouse.vx * 15;
        let swayY = targetY + mouse.vy * 15;

        // Slower positional dragging makes the dots feel like they are moving through syrup
        p.drawnX += (swayX - p.drawnX) * 0.04;
        p.drawnY += (swayY - p.drawnY) * 0.04;

        const alpha = Math.min(1, Math.max(0.1, scale * 1.5 - 0.3));
        
        // Clear shadow blur as it's unreliable in Canvas on some browsers
        ctx.shadowBlur = 0;

        // Base dot drawing
        ctx.beginPath();
        const baseRadius = Math.max(0.5, (p.hasGlow ? 1.5 : 0.8) * scale);
        ctx.arc(p.drawnX, p.drawnY, baseRadius, 0, Math.PI * 2);
        
        ctx.globalAlpha = p.hasGlow ? alpha : alpha * 0.4;
        ctx.fillStyle = p.color;
        ctx.fill();

        // Native Explicit Glow / Aura (Guaranteed to render reliably)
        if (p.hasGlow) {
           ctx.beginPath();
           const glowRadius = baseRadius * 4;
           ctx.arc(p.drawnX, p.drawnY, glowRadius, 0, Math.PI * 2);
           ctx.globalAlpha = alpha * 0.15; // Soft translucent aura
           ctx.fillStyle = p.color;
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

    window.addEventListener("mousemove", handleMouseMove);

    resize();
    draw();

    return () => {
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute top-0 left-0 w-full h-full pointer-events-none z-0 mix-blend-screen opacity-70"
      style={{
        background: "transparent",
      }}
    />
  );
}
