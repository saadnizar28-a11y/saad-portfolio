"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

const rooms = [
  {
    id: 1,
    title: "Social Media Management",
    description: "Retro-modern workspace equipped for viral engagement. We craft content that sparks absolute devotion, tracking every metric via holographic interfaces.",
    image: "/rooms/room_1.png",
    accent: "var(--accent-cyan)",
  },
  {
    id: 2,
    title: "Search Engine Optimization",
    description: "Futuristic analytics laboratory. We dominate algorithms to guarantee absolute market visibility through precision engineered data rendering.",
    image: "/rooms/room_2.png",
    accent: "var(--accent-pink)",
  },
  {
    id: 3,
    title: "Google Ads & Meta Ads",
    description: "High-tech advertising command center. Precision-engineered campaigns driving unprecedented conversion rates globally.",
    image: "/rooms/room_3.png",
    accent: "var(--accent-violet)",
  },
  {
    id: 4,
    title: "Creative & Graphic Design",
    description: "Premium creative studio. Elevating visual identity with hyper-realistic art direction and floating digital canvases.",
    image: "/rooms/room_4.png",
    accent: "var(--accent-cyan)",
  },
  {
    id: 5,
    title: "Waura Marketing Studio",
    description: "Building Creative Digital Ideas That Actually Convert.",
    image: "/rooms/room_5.png",
    accent: "var(--accent-pink)",
  }
];

function RoomSection({ room }: { room: typeof rooms[0] }) {
  const containerRef = useRef<HTMLDivElement>(null);

  // Offset allows the parallax to calculate smoothly as it enters and leaves the screen.
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Layer speeds enforcing user instructions: background slow, mid medium, fore fast
  const yBg = useTransform(scrollYProgress, [0, 1], ["-20%", "20%"]);   // ~0.3x
  const yMid = useTransform(scrollYProgress, [0, 1], ["-40%", "40%"]);  // ~0.6x 
  const yFore = useTransform(scrollYProgress, [0, 1], ["-60%", "60%"]); // ~0.9x

  return (
    <div ref={containerRef} className="relative h-screen w-full overflow-hidden flex items-center justify-center bg-[#0A0A0A] border-b border-white/5 last:border-b-0">
      
      {/* Background Layer: Slow Pan */}
      <motion.div 
        className="absolute inset-0 w-full h-[150%] top-[-25%]" 
        style={{ y: yBg }}
      >
        <Image
          src={room.image}
          alt={room.title}
          fill
          className="object-cover opacity-40 mix-blend-screen"
          sizes="100vw"
          quality={90}
        />
        {/* Soft immersive dark gradient overlays to fuse rooms together seamlessly */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-[#0A0A0A] opacity-100 z-10" />
        <div className="absolute inset-0 bg-black/60 z-10" />
      </motion.div>

      {/* Midground Layer: Ambient Glowing Holograms */}
      <motion.div 
        className="absolute inset-x-0 top-1/4 h-full pointer-events-none flex justify-center items-center z-10"
        style={{ y: yMid }}
      >
         <div 
           className="w-[60vw] h-[60vw] md:w-[30vw] md:h-[30vw] opacity-30 blur-[130px] rounded-full mix-blend-plus-lighter" 
           style={{ backgroundColor: room.accent }} 
         />
      </motion.div>

      {/* Foreground Layer: Fast Tech Scanlines / Particles */}
      <motion.div 
        className="absolute inset-x-0 h-full pointer-events-none flex flex-col justify-between py-32 z-20 opacity-40 mix-blend-overlay"
        style={{ y: yFore }}
      >
         <div className="w-full h-[1px] shadow-[0_0_20px_currentColor] hidden md:block" style={{ color: room.accent, backgroundColor: room.accent }} />
         <div className="w-[1px] h-[30vh] mx-auto shadow-[0_0_20px_currentColor]" style={{ color: room.accent, backgroundColor: room.accent }} />
      </motion.div>
      
      {/* Fixed/Subtle Parallax UI Layer */}
      <div className="relative z-30 max-w-5xl px-6 text-center flex flex-col items-center">
        {/* Neon accent line */}
        <motion.div 
          initial={{ height: 0, opacity: 0 }}
          whileInView={{ height: 80, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="w-[2px] mb-8" 
          style={{ background: `linear-gradient(to bottom, transparent, ${room.accent}, ${room.accent})` }} 
        />
        
        <motion.div
           initial={{ y: 50, opacity: 0 }}
           whileInView={{ y: 0, opacity: 1 }}
           transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
        >
          <h2 className="text-4xl md:text-5xl lg:text-7xl font-black tracking-tighter text-white uppercase drop-shadow-[0_0_30px_rgba(0,0,0,0.8)] leading-[1.1]">
            {room.title}
          </h2>
        </motion.div>
        
        <motion.p 
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
          className="mt-6 text-base md:text-xl text-white/70 max-w-2xl font-light tracking-wide leading-relaxed"
        >
          {room.description}
        </motion.p>
      </div>
    </div>
  );
}

export default function ImmersiveRooms() {
  return (
    <section className="relative w-full bg-[#0A0A0A] z-10 shadow-[0_-20px_60px_-15px_rgba(0,0,0,1)]">
      {/* Intro Header */}
      <div className="w-full flex flex-col items-center pt-32 pb-16 relative z-20">
        <div className="w-[1px] h-24 bg-gradient-to-b from-white/30 to-transparent opacity-50 mb-8" />
        <h2 className="text-[10px] md:text-xs font-bold tracking-[0.4em] uppercase text-white/50 mb-4 px-4 text-center">
          IMMERSIVE DIGITAL ECOSYSTEM
        </h2>
      </div>

      {/* The Parallax Rooms */}
      <div className="w-full flex flex-col">
        {rooms.map((room, index) => (
          <RoomSection key={room.id} room={room} index={index} />
        ))}
      </div>
    </section>
  );
}
