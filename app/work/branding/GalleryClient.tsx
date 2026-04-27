"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const galleryData = [
  {
    id: 1,
    title: "Juice Bay",
    subtitle: "Brand Identity & Packaging",
    tags: ["FMCG", "Identity"],
    image: "/branding_gallery_1.png"
  },
  {
    id: 2,
    title: "Casa",
    subtitle: "Luxury Real Estate",
    tags: ["Real Estate", "Print"],
    image: "/branding_gallery_2.png"
  },
  {
    id: 3,
    title: "Cafy",
    subtitle: "Coffee Shop Branding",
    tags: ["Retail", "Packaging"],
    image: "/branding_gallery_3.png"
  },
  {
    id: 4,
    title: "BU",
    subtitle: "Digital Brand System",
    tags: ["Digital", "UI/UX"],
    image: "/branding_gallery_4.png"
  },
  {
    id: 5,
    title: "W-aura",
    subtitle: "Corporate Identity",
    tags: ["Corporate", "Identity"],
    image: "/branding_gallery_5.png"
  },
  {
    id: 6,
    title: "DelV",
    subtitle: "Visual Identity System",
    tags: ["Identity", "Digital"],
    image: "/branding_gallery_6.png"
  },
  {
    id: 7,
    title: "Lumiere",
    subtitle: "SaaS Branding",
    tags: ["Tech", "SaaS"],
    image: "/branding_gallery_7.png"
  }
];

export default function GalleryClient() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [hoverIndex, setHoverIndex] = useState<number | null>(null);
  const carouselRef = useRef<HTMLDivElement>(null);

  const displayItem = hoverIndex !== null ? galleryData[hoverIndex] : galleryData[activeIndex];
  const activeItem = galleryData[activeIndex];

  const scrollCarousel = (direction: "left" | "right") => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: direction === "right" ? 350 : -350, behavior: "smooth" });
    }
  };

  return (
    <main className="h-[100svh] w-full relative overflow-hidden bg-black text-white selection:bg-[var(--accent-violet)]/30">
      
      {/* Background Crossfade (Blurred) */}
      <AnimatePresence mode="popLayout">
        <motion.div
          key={`bg-${displayItem.id}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.3 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
          className="absolute inset-0 z-0"
        >
          <Image src={displayItem.image} alt="Background Blur" fill className="object-cover blur-3xl scale-110" sizes="100vw" quality={10} priority />
        </motion.div>
      </AnimatePresence>

      {/* Main Sharp Image (Object Contain to prevent cropping) */}
      <AnimatePresence mode="popLayout">
        <motion.div
          key={`img-${displayItem.id}`}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="absolute inset-0 z-10 md:left-[33%] p-6 md:p-12 pointer-events-none"
        >
          <Image
            src={displayItem.image}
            alt={displayItem.title}
            fill
            priority
            className="object-contain object-center md:object-right drop-shadow-[0_20px_50px_rgba(0,0,0,0.8)]"
            sizes="100vw"
            quality={100}
          />
        </motion.div>
      </AnimatePresence>

      {/* Subtle gradient overlays for text readability */}
      <div className="absolute bottom-0 left-0 w-full h-1/4 bg-gradient-to-t from-black/90 to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-transparent to-transparent z-10 pointer-events-none" />

      {/* Foreground Content */}
      <div className="absolute inset-0 z-20 pointer-events-none">
        
        {/* Top Header */}
        <div className="absolute top-6 md:top-12 left-16 md:left-40 lg:left-48 right-6 md:right-12 flex justify-between items-start pointer-events-auto">
          <Link href="/work" className="inline-flex items-center bg-black/40 backdrop-blur-md px-5 py-2.5 rounded-full border border-white/10 text-white/70 hover:text-white transition-colors text-sm font-medium tracking-widest uppercase group">
            <span className="mr-2 transform group-hover:-translate-x-1 transition-transform">←</span> Back
          </Link>
          
          <div className="bg-black/40 backdrop-blur-md px-6 py-3 rounded-full border border-white/10 hidden md:block">
            <h1 className="text-sm font-bold tracking-widest uppercase">
              Brand <span className="text-[var(--accent-violet)]">Identity</span>
            </h1>
          </div>
        </div>

        {/* Top Left: Name Block (Upside & Wider, shifted right to avoid sidebar) */}
        <div className="absolute top-20 md:top-24 left-16 md:left-40 lg:left-48 z-30 pointer-events-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeItem.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.4 }}
              className="bg-black/60 backdrop-blur-md border border-white/10 p-5 md:p-6 rounded-2xl flex flex-col gap-2 w-[65vw] max-w-[280px] md:w-[360px] md:max-w-none shadow-[0_10px_40px_rgba(0,0,0,0.5)]"
            >
              <div className="flex flex-wrap gap-1">
                <span className="px-3 py-1 rounded-full bg-[var(--accent-cyan)]/10 text-[10px] uppercase tracking-wider font-bold text-[var(--accent-cyan)] border border-[var(--accent-cyan)]/30">
                  BRANDING
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-white leading-tight mt-2 drop-shadow-md">
                {activeItem.title}
              </h2>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Middle Left: Thumbnail Carousel */}
        <div className="absolute left-16 md:left-40 lg:left-48 top-[55%] -translate-y-1/2 w-[calc(100%-4rem)] md:w-[50vw] z-30 pointer-events-auto flex flex-col">
          
          <div 
            ref={carouselRef}
            className="flex gap-4 overflow-x-auto py-6 scrollbar-none relative z-10 scroll-smooth pr-12"
            style={{ 
              maskImage: "linear-gradient(to right, black 80%, transparent 100%)", 
              WebkitMaskImage: "linear-gradient(to right, black 80%, transparent 100%)" 
            }}
          >
            {galleryData.map((item, idx) => (
              <button
                key={item.id}
                onClick={() => setActiveIndex(idx)}
                onMouseEnter={() => setHoverIndex(idx)}
                onMouseLeave={() => setHoverIndex(null)}
                className={`relative shrink-0 w-32 h-48 md:w-40 md:h-60 rounded-2xl overflow-hidden cursor-pointer transition-all duration-300 transform ${
                  activeIndex === idx 
                  ? "ring-2 ring-[var(--accent-cyan)] scale-105 opacity-100 shadow-[0_10px_40px_rgba(0,210,255,0.4)] z-20" 
                  : "scale-90 opacity-50 hover:opacity-100 hover:scale-95 hover:-translate-y-1 z-10"
                }`}
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 768px) 128px, 160px"
                  className="object-cover"
                />
                {/* Overlay Text for inactive cards */}
                {activeIndex !== idx && (
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center p-2 transition-colors hover:bg-black/10">
                    <span className="text-[10px] font-bold text-white/90 uppercase tracking-widest text-center drop-shadow-md">
                      {item.title}
                    </span>
                  </div>
                )}
              </button>
            ))}
            
            {/* Spacer for mask at end */}
            <div className="shrink-0 w-12 md:w-32" />
          </div>

          {/* Scroll Buttons Below Carousel */}
          <div className="flex gap-8 mt-8 md:mt-10">
            <button 
              onClick={() => scrollCarousel("left")}
              className="w-12 h-12 rounded-full bg-black/60 backdrop-blur-md border border-white/20 flex items-center justify-center text-white/70 hover:text-white hover:border-[var(--accent-cyan)] hover:shadow-[0_0_15px_rgba(0,210,255,0.3)] transition-all"
            >
              ←
            </button>
            <button 
              onClick={() => scrollCarousel("right")}
              className="w-12 h-12 rounded-full bg-black/60 backdrop-blur-md border border-white/20 flex items-center justify-center text-white/70 hover:text-white hover:border-[var(--accent-cyan)] hover:shadow-[0_0_15px_rgba(0,210,255,0.3)] transition-all"
            >
              →
            </button>
          </div>

        </div>

      </div>

    </main>
  );
}
