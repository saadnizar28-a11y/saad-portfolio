"use client";

import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function FloatingRobot() {
  const [isVisible, setIsVisible] = useState(false);
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [isInitialized, setIsInitialized] = useState(false);
  const robotRef = useRef<HTMLDivElement>(null);

  // Show after scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > window.innerHeight * 0.3) {
        setIsVisible(true);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Set initial position (bottom right)
  useEffect(() => {
    if (isVisible && !isInitialized && typeof window !== "undefined") {
      setPosition({
        x: window.innerWidth - 80,
        y: window.innerHeight - 80
      });
      setIsInitialized(true);
    }
  }, [isVisible, isInitialized]);

  // Space Repulsion Logic
  useEffect(() => {
    if (!isVisible) return;

    let targetX = position.x;
    let targetY = position.y;

    const handleMouseMove = (e: MouseEvent) => {
      if (!robotRef.current) return;

      const rect = robotRef.current.getBoundingClientRect();
      const robotCenterX = rect.left + rect.width / 2;
      const robotCenterY = rect.top + rect.height / 2;

      // Calculate distance from mouse to robot center
      const deltaX = robotCenterX - e.clientX;
      const deltaY = robotCenterY - e.clientY;
      const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);

      // Repulsion radius
      const repelRadius = 180;

      if (distance < repelRadius) {
        // Calculate repulsion vector (opposite direction)
        const angle = Math.atan2(deltaY, deltaX);
        const repelForce = (repelRadius - distance) / repelRadius; 
        
        // Push it away (Astronaut zero-g slip)
        const moveDist = repelForce * 150; 
        
        targetX = targetX + Math.cos(angle) * moveDist;
        targetY = targetY + Math.sin(angle) * moveDist;

        // Keep within bounds so it doesn't leave the screen completely
        const padding = 40;
        if (targetX < padding) targetX = padding;
        if (targetX > window.innerWidth - padding) targetX = window.innerWidth - padding;
        if (targetY < padding) targetY = padding;
        if (targetY > window.innerHeight - padding) targetY = window.innerHeight - padding;

        setPosition({ x: targetX, y: targetY });
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [isVisible, position]);

  if (!isVisible) return null;

  return (
    <motion.div
      ref={robotRef}
      className="fixed z-[100] pointer-events-auto"
      animate={{ 
        x: position.x, 
        y: position.y,
      }}
      transition={{ 
        type: "spring", 
        stiffness: 25, // Very low stiffness = slow to react
        damping: 12,   // Very low damping = glides far and smoothly
        mass: 1.5,     // Gives it heavy inertia
      }}
      style={{
        width: 54, // Tiny size, slightly larger than mouse cursor
        height: 54,
        marginLeft: -27, // Center offset
        marginTop: -27,
      }}
    >
      <motion.div
        animate={{
          y: [-15, 15, -15],
          rotate: [-8, 8, -8]
        }}
        transition={{
          repeat: Infinity,
          duration: 7,
          ease: "easeInOut"
        }}
        className="w-full h-full relative cursor-crosshair"
      >
        <Image
          src="/astro-robot.png"
          alt="Interactive Robot"
          fill
          className="object-contain drop-shadow-[0_0_15px_rgba(0,210,255,0.8)]"
        />
      </motion.div>
    </motion.div>
  );
}
