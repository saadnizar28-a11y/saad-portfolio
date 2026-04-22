"use client";

import { useRef, useEffect, useState } from "react";
import PromptCard from "./PromptCard";

export default function KineticGallery({ prompts }: { prompts: any[] }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const targetOffset = useRef({ x: 0, y: 0 });
  const lastTouch = useRef({ x: 0, y: 0 });

  useEffect(() => {
    let animationFrameId: number;
    const lerp = (start: number, end: number, factor: number) => {
      return start + (end - start) * factor;
    };

    const updatePosition = () => {
      setOffset(prev => ({
        x: lerp(prev.x, targetOffset.current.x, 0.08),
        y: lerp(prev.y, targetOffset.current.y, 0.08)
      }));
      animationFrameId = requestAnimationFrame(updatePosition);
    };
    updatePosition();
    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current) return;
    const { left, top, width, height } = containerRef.current.getBoundingClientRect();
    
    // Normalized position (-1.5 to 1.5) to allow deep panning
    const x = ((e.clientX - left) / width - 0.5) * 2;
    const y = ((e.clientY - top) / height - 0.5) * 2;

    // Aggressive panning restored
    targetOffset.current = { x: -x * 400, y: -y * 800 };
  };

  // Add scroll to also allow navigating down through the massive vertical list
  const handleWheel = (e: React.WheelEvent) => {
    // Scroll shifts the target Y offset directly
    targetOffset.current = {
      x: targetOffset.current.x,
      y: targetOffset.current.y - (e.deltaY * 0.8)
    };
    
    // Bounds check roughly
    if (targetOffset.current.y > 800) targetOffset.current.y = 800;
    if (targetOffset.current.y < -1500) targetOffset.current.y = -1500;
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    if (e.touches.length > 0) {
      lastTouch.current = { x: e.touches[0].clientX, y: e.touches[0].clientY };
    }
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (e.touches.length > 0) {
      const touch = e.touches[0];
      const deltaX = touch.clientX - lastTouch.current.x;
      const deltaY = touch.clientY - lastTouch.current.y;
      
      lastTouch.current = { x: touch.clientX, y: touch.clientY };

      targetOffset.current = {
        x: targetOffset.current.x + deltaX * 2,
        y: targetOffset.current.y + deltaY * 2
      };
      
      if (targetOffset.current.y > 800) targetOffset.current.y = 800;
      if (targetOffset.current.y < -1500) targetOffset.current.y = -1500;
      if (targetOffset.current.x > 800) targetOffset.current.x = 800;
      if (targetOffset.current.x < -1500) targetOffset.current.x = -1500;
    }
  };

  return (
    <div 
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onWheel={handleWheel}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      className="relative w-full h-[100vh] overflow-hidden flex justify-center items-center cursor-move z-10 touch-none"
      style={{ WebkitMaskImage: 'radial-gradient(ellipse at center, rgba(0,0,0,1) 40%, rgba(0,0,0,0) 90%)', maskImage: 'radial-gradient(ellipse at center, rgba(0,0,0,1) 40%, rgba(0,0,0,0) 90%)' }}
    >
      <div 
        className="absolute w-[200vw] lg:w-[150vw] flex justify-center gap-4 lg:gap-8 transform pt-20 pb-40 px-20 will-change-transform"
        style={{
          transform: `rotate(-12deg) scale(1.1) translate3d(${offset.x}px, ${offset.y}px, 0)`
        }}
      >
        {/* Column 1 */}
        <div className="flex flex-col gap-4 lg:gap-8 w-[250px] lg:w-[350px] mt-24">
          {prompts.slice(0, 4).map((item) => (
             <PromptCard key={item.id} imageUrl={item.imageUrl} title={item.title} promptText={item.promptText} />
          ))}
        </div>

        {/* Column 2 */}
        <div className="flex flex-col gap-4 lg:gap-8 w-[250px] lg:w-[350px] -mt-32">
          {prompts.slice(4, 8).map((item) => (
             <PromptCard key={item.id} imageUrl={item.imageUrl} title={item.title} promptText={item.promptText} />
          ))}
        </div>

        {/* Column 3 */}
        <div className="flex flex-col gap-4 lg:gap-8 w-[250px] lg:w-[350px] mt-10">
          {prompts.slice(8, 12).map((item) => (
             <PromptCard key={item.id} imageUrl={item.imageUrl} title={item.title} promptText={item.promptText} />
          ))}
        </div>
        
        {/* Column 4 */}
        <div className="flex flex-col gap-4 lg:gap-8 w-[250px] lg:w-[350px] -mt-20">
          {prompts.slice(12, 15).map((item) => (
             <PromptCard key={item.id} imageUrl={item.imageUrl} title={item.title} promptText={item.promptText} />
          ))}
        </div>
      </div>
    </div>
  );
}
