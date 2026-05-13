"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function FanGallery({ images, href = "/work/branding" }: { images: string[], href?: string }) {
  const displayImages = images.slice(0, 5);
  const [isHovered, setIsHovered] = useState(false);
  const [mouseX, setMouseX] = useState(0); // -1 to 1

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
    setMouseX(x);
  };

  return (
    <Link 
      href={href}
      className="relative w-full h-[300px] flex items-center justify-center cursor-pointer group perspective-[1000px] z-10"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => { setIsHovered(false); setMouseX(0); }}
      onMouseMove={handleMouseMove}
    >
      {displayImages.map((src, i) => {
        const indexOffset = i - 2; // -2, -1, 0, 1, 2
        
        // Base spread angles and translations
        const baseRotate = isHovered ? indexOffset * 15 : indexOffset * 4;
        const baseX = isHovered ? indexOffset * 50 : indexOffset * 15;
        const baseY = isHovered ? Math.abs(indexOffset) * 10 : Math.abs(indexOffset) * 2;

        // Dynamic tilt based on mouse position
        const dynamicRotate = isHovered ? mouseX * 8 * indexOffset : 0;
        const dynamicX = isHovered ? mouseX * 20 * indexOffset : 0;

        const scale = isHovered 
          ? (indexOffset === 0 ? 1.1 : 1 - Math.abs(indexOffset) * 0.05)
          : (indexOffset === 0 ? 1.05 : 1 - Math.abs(indexOffset) * 0.03);
          
        const zIndex = 10 - Math.abs(indexOffset);

        return (
          <motion.div
            key={i}
            className="absolute w-36 md:w-44 h-56 md:h-64 rounded-xl overflow-hidden border border-white/10 shadow-[0_10px_40px_rgba(0,0,0,0.8)] origin-bottom bg-black"
            style={{ zIndex }}
            animate={{
              rotate: baseRotate + dynamicRotate,
              x: baseX + dynamicX,
              y: baseY,
              scale: scale
            }}
            transition={{
              type: "spring",
              stiffness: 150,
              damping: 20,
              mass: 0.8
            }}
          >
            <Image 
              src={src} 
              alt={`Brand Identity ${i + 1}`} 
              fill 
              className="object-cover" 
              sizes="(max-width: 768px) 144px, 176px"
            />
            {/* Subtle overlay that lightens when hovered */}
            <div className={`absolute inset-0 bg-black transition-opacity duration-500 pointer-events-none ${isHovered && indexOffset === 0 ? 'opacity-0' : 'opacity-30'}`} />
            
            {/* Edge highlight to fit the glassmorphism aesthetic */}
            <div className="absolute inset-0 border border-white/10 rounded-xl pointer-events-none mix-blend-overlay" />
          </motion.div>
        );
      })}
    </Link>
  );
}
