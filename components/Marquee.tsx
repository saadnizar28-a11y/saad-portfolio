"use client";

import { useEffect, useRef } from "react";

export default function Marquee() {
  const items = [
    "SEO Optimization",
    "Poster Making",
    "Social Media Management",
    "Logo Creation",
    "AI Prompt Engineering",
    "Brand Visual Design",
    "Web Experiences"
  ];

  // Quadruple array to provide plenty of loop length
  const duplicatedItems = [...items, ...items, ...items, ...items];
  const scrollerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scroller = scrollerRef.current;
    if (!scroller) return;

    let animationFrameId: number;
    let position = 0;
    const speed = 0.8; // slightly faster than the tiny text

    const animate = () => {
      position -= speed;
      
      // Since it's quadrupled, dividing by 4 gets us exactly one full loop length
      if (Math.abs(position) >= scroller.scrollWidth / 4) {
        position += scroller.scrollWidth / 4;
      }
      
      scroller.style.transform = `translate3d(${position}px, 0, 0)`;
      animationFrameId = requestAnimationFrame(animate);
    };

    animationFrameId = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  return (
    <div className="relative py-12 w-full overflow-hidden bg-[var(--background)] flex flex-col items-center">
      
      {/* Top Avatar Beam */}
      <div className="h-[4px] w-full avatar-beam absolute top-0 opacity-80" />
      
      {/* Heavy Glowing Overlay for edges */}
      <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[var(--background)] to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[var(--background)] to-transparent z-10 pointer-events-none" />
      
      <div 
        ref={scrollerRef}
        className="flex gap-10 whitespace-nowrap px-10 w-max will-change-transform"
      >
        {duplicatedItems.map((item, idx) => (
          <div key={idx} className="flex items-center gap-10">
            <span className="text-4xl md:text-6xl font-extrabold text-transparent bg-clip-text text-gradient opacity-90 drop-shadow-[0_0_15px_rgba(0,210,255,0.4)] tracking-tight shrink-0">
              {item}
            </span>
            <span className="text-[var(--accent-pink)] opacity-50 text-2xl shrink-0">✦</span>
          </div>
        ))}
      </div>

      {/* Bottom Avatar Beam */}
      <div className="h-[4px] w-full avatar-beam absolute bottom-0 opacity-80" />
      
    </div>
  );
}
