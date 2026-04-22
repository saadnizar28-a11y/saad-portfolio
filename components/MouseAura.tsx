"use client";

import { useEffect, useRef } from "react";

export default function MouseAura() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Colors matching the "Avatar plants" glowing vibe
    const colors = ['#00f0ff', '#ff00e5', '#8a2be2', '#ffffff', '#00f0ff'];

    const handleMouseMove = (e: MouseEvent) => {
      // Throttle spawn rate (only spawn 80% of the time to avoid browser collapse)
      if (Math.random() > 0.8) return;

      const container = containerRef.current;
      if (!container) return;

      // Spawn 1 to 3 tiny dots per tick
      const spawnCount = Math.floor(Math.random() * 3) + 1;

      for (let i = 0; i < spawnCount; i++) {
        const p = document.createElement('div');
        
        // Random organic offsets from mouse pointer
        const offsetX = (Math.random() - 0.5) * 30;
        const offsetY = (Math.random() - 0.5) * 30;
        
        // Very tiny, dense sizes (1px to 4px max)
        const size = Math.random() * 3 + 1;
        const color = colors[Math.floor(Math.random() * colors.length)];

        // Assign core styles
        p.className = "absolute rounded-full opacity-60 mix-blend-screen pointer-events-none";
        p.style.width = `${size}px`;
        p.style.height = `${size}px`;
        p.style.left = `${e.clientX + offsetX}px`;
        p.style.top = `${e.clientY + offsetY}px`;
        p.style.backgroundColor = color;
        p.style.boxShadow = `0 0 ${size * 3}px ${color}, 0 0 ${size * 6}px ${color}`;
        p.style.transform = `translate(-50%, -50%)`;
        
        // Add specific keyframe animation referencing the global stylesheet or inline pseudo-class
        p.style.animation = `floatAndFade 1.2s ease-out forwards`;

        container.appendChild(p);

        // Clean up DOM node smoothly after animation completes
        setTimeout(() => {
          if (container.contains(p)) {
            container.removeChild(p);
          }
        }, 1200);
      }
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      // Clean up existing particles on unmount
      if (containerRef.current) containerRef.current.innerHTML = "";
    };
  }, []);

  return (
    <div ref={containerRef} className="pointer-events-none fixed inset-0 z-[100] overflow-hidden">
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes floatAndFade {
          0% { transform: translate(-50%, -50%) scale(0.5); opacity: 0; }
          20% { transform: translate(-50%, -50%) scale(1.2); opacity: 0.8; }
          100% { transform: translate(-50%, calc(-50% - 20px)) scale(0); opacity: 0; }
        }
      `}} />
    </div>
  );
}
