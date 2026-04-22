"use client";

import { useEffect, useRef } from "react";

export default function TechMarquee() {
  const items = [
    "AI AUTOMATION", "CLAUDE PRO", "GEMINI ADVANCED", "LEAD GENERATION", "CONVERSION OPTIMIZATION", 
    "GROWTH STRATEGY", "WORDPRESS B2B", "SEO ARCHITECTURE", "DATA-DRIVEN DESIGN", "SOCIAL ENGAGEMENT", "REVENUE SYSTEMS"
  ];
  
  // Triple the array to provide plenty of flawless looping runway
  const duplicatedItems = [...items, ...items, ...items];
  const scrollerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scroller = scrollerRef.current;
    if (!scroller) return;

    let animationFrameId: number;
    let position = 0;
    // Mathematical pixels per frame for flawless sub-pixel rendering. 
    // This locks directly into the monitor's native refresh rate (e.g. 120hz)
    const speed = 0.5; 

    const animate = () => {
      position -= speed;
      
      // Since we duplicated the array by 3, scrollWidth/3 is exactly one true loop.
      if (Math.abs(position) >= scroller.scrollWidth / 3) {
        position += scroller.scrollWidth / 3;
      }
      
      // Hardware-accelerated transformation logic pushing pixels directly to GPU
      scroller.style.transform = `translate3d(${position}px, 0, 0)`;
      
      animationFrameId = requestAnimationFrame(animate);
    };

    animationFrameId = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  return (
    <div className="w-full relative overflow-hidden py-4 border-y border-[rgba(255,255,255,0.05)] bg-black/40 backdrop-blur-sm">
      {/* Fade Edges */}
      <div className="absolute left-0 top-0 w-32 h-full bg-gradient-to-r from-[var(--background)] to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 w-32 h-full bg-gradient-to-l from-[var(--background)] to-transparent z-10 pointer-events-none" />
      
      <div 
        ref={scrollerRef}
        className="flex whitespace-nowrap items-center opacity-40 hover:opacity-80 transition-opacity duration-700 w-max will-change-transform"
      >
        {duplicatedItems.map((item, index) => (
          <div key={index} className="flex items-center">
            <span className="text-white text-xs md:text-sm font-black tracking-[0.2em] uppercase px-8 shrink-0">
              {item}
            </span>
            <span className="w-1.5 h-1.5 shrink-0 rounded-full bg-[var(--accent-cyan)] opacity-50" />
          </div>
        ))}
      </div>
    </div>
  );
}
