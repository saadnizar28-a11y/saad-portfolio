"use client";

import { useEffect, useRef } from "react";

export default function HeadingBurst() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Trigger burst slightly after mount to sync with text fade-in
    const timeout = setTimeout(() => {
      const colors = ['#00f0ff', '#ff00e5', '#8a2be2', '#ffffff', '#00f0ff'];
      const particleCount = 45; // Dense burst matching the screenshot

      for (let i = 0; i < particleCount; i++) {
        const p = document.createElement('div');
        
        const size = Math.random() * 4 + 2; // 2px to 6px
        const color = colors[Math.floor(Math.random() * colors.length)];
        
        // Random explosion math
        const angle = Math.random() * Math.PI * 2;
        const velocity = Math.random() * 100 + 50; // Distance to travel
        const tx = Math.cos(angle) * velocity;
        const ty = Math.sin(angle) * velocity;

        p.className = "absolute left-1/2 top-1/2 rounded-full opacity-0 mix-blend-screen pointer-events-none";
        p.style.width = `${size}px`;
        p.style.height = `${size}px`;
        p.style.backgroundColor = color;
        p.style.boxShadow = `0 0 ${size * 2}px ${color}, 0 0 ${size * 4}px ${color}`;
        
        // Use custom properties for the keyframe animation
        p.style.setProperty('--tx', `${tx}px`);
        p.style.setProperty('--ty', `${ty}px`);
        
        const duration = Math.random() * 1 + 1; // 1s to 2s
        p.style.animation = `burstAnimation ${duration}s cubic-bezier(0.1, 0.8, 0.3, 1) forwards`;

        container.appendChild(p);

        // Cleanup
        setTimeout(() => {
          if (container.contains(p)) container.removeChild(p);
        }, duration * 1000);
      }
    }, 300); // 300ms delay perfectly syncs with text FadeIn appearing

    return () => clearTimeout(timeout);
  }, []);

  return (
    <div ref={containerRef} className="absolute inset-0 pointer-events-none z-0 flex items-center justify-center overflow-visible">
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes burstAnimation {
          0% { transform: translate(-50%, -50%) scale(0); opacity: 1; }
          50% { opacity: 0.8; }
          100% { transform: translate(calc(-50% + var(--tx)), calc(-50% + var(--ty))) scale(1); opacity: 0; }
        }
      `}} />
    </div>
  );
}
