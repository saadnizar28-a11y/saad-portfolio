"use client";

import { useState, useRef, MouseEvent, useEffect } from 'react';

export default function InteractivePortrait() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  
  // Simple popup entrance animation state
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Trigger the slide-up animation shortly after mount for a smooth entrance
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  const handleMouseMove = (e: MouseEvent) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <div 
      ref={containerRef}
      // Added slide-up transition classes based on isVisible state
      className={`relative w-[130%] -left-[15%] group [transform-style:preserve-3d] hover:rotate-y-[-2deg] hover:rotate-x-[1deg] ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-32'
      }`}
      style={{ 
        // Custom Apple-style cubic bezier for a buttery smooth entrance
        transition: 'all 1.8s cubic-bezier(0.16, 1, 0.3, 1)' 
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      {/* Background/Base Image (Unmasked Person) */}
      <img 
        src="/about-unmasked.png" 
        alt="Saad Nizar" 
        className="w-full h-auto block transition-all duration-1000"
        style={{
          // Creates a "hole" in the unmasked image exactly where the lens is, 
          // so the unmasked guy's hair doesn't show through the transparent parts of the masked image.
          WebkitMaskImage: isHovering ? `radial-gradient(circle 140px at ${mousePos.x}px ${mousePos.y}px, transparent 140px, black 141px)` : 'none',
          maskImage: isHovering ? `radial-gradient(circle 140px at ${mousePos.x}px ${mousePos.y}px, transparent 140px, black 141px)` : 'none'
        }}
      />

      {/* Foreground/Masked Image (Masked Alter Ego - revealed by lens) */}
      <div 
        className="absolute inset-0 pointer-events-none transition-opacity duration-300"
        style={{
          opacity: isHovering ? 1 : 0,
          clipPath: `circle(140px at ${mousePos.x}px ${mousePos.y}px)`,
        }}
      >
        <img 
          src="/about-masked.png" 
          alt="Saad Nizar Masked" 
          className="absolute top-0 left-0 w-full h-auto"
          // Shifted up to align the faces better
          style={{ transform: 'scale(1.06) translateY(-1.5%)', transformOrigin: 'top center' }}
        />
      </div>

      {/* Massive Bottom fade mask to seamlessly blend into background and hide the leg cut */}
      <div className="absolute bottom-0 left-0 w-full h-[40%] bg-gradient-to-t from-[var(--background)] via-[var(--background)]/95 to-transparent pointer-events-none z-30" />
    </div>
  );
}
