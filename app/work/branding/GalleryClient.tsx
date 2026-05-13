"use client";

import { useState, useRef, MouseEvent, useEffect } from "react";
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
  const [isZoomActive, setIsZoomActive] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHoveringImage, setIsHoveringImage] = useState(false);
  const carouselRef = useRef<HTMLDivElement>(null);
  
  const activeItem = galleryData[activeIndex];

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!isZoomActive) return;
    const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - left) / width) * 100;
    const y = ((e.clientY - top) / height) * 100;
    
    // Clamp values
    setMousePos({ 
      x: Math.max(0, Math.min(100, x)), 
      y: Math.max(0, Math.min(100, y)) 
    });
  };

  const scrollCarousel = (direction: "left" | "right") => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: direction === "right" ? 300 : -300, behavior: "smooth" });
    }
  };

  // Turn off zoom when changing images
  useEffect(() => {
    setIsZoomActive(false);
  }, [activeIndex]);

  return (
    <main className="h-[100svh] w-full relative overflow-hidden bg-black text-white selection:bg-[var(--accent-violet)]/30 font-sans">
      
      {/* Background Crossfade */}
      <AnimatePresence mode="popLayout">
        <motion.div
          key={`bg-${activeItem.id}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.15 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
          className="absolute inset-0 z-0"
        >
          <Image src={activeItem.image} alt="Background Blur" fill className="object-cover blur-3xl scale-110" sizes="100vw" quality={10} priority />
        </motion.div>
      </AnimatePresence>

      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/90 z-10 pointer-events-none" />

      {/* Top Header */}
      <div className="absolute top-6 md:top-12 left-6 md:left-16 right-6 md:right-16 flex justify-between items-start z-40 pointer-events-auto">
        <Link href="/work" className="inline-flex items-center bg-black/40 backdrop-blur-md px-5 py-2.5 rounded-full border border-white/10 text-white/70 hover:text-white transition-colors text-sm font-medium tracking-widest uppercase group">
          <span className="mr-2 transform group-hover:-translate-x-1 transition-transform">←</span> Back
        </Link>
        <div className="bg-black/40 backdrop-blur-md px-6 py-3 rounded-full border border-white/10 hidden md:block">
          <h1 className="text-sm font-bold tracking-widest uppercase">
            Brand <span className="text-[var(--accent-cyan)]">Identity</span>
          </h1>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="absolute inset-0 z-20 flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16 pt-10 pb-40 px-6 md:px-16 pointer-events-none">
        
        {/* Left Side: Main Image Viewer Wrapper */}
        <div className="relative w-full md:w-[40vw] md:max-w-[450px] h-[65vh] flex items-center justify-center pointer-events-none">
          <AnimatePresence mode="wait">
            <motion.div
              key={`main-${activeItem.id}`}
              initial={{ opacity: 0, filter: "blur(10px)" }}
              animate={{ opacity: 1, filter: "blur(0px)" }}
              exit={{ opacity: 0, filter: "blur(10px)" }}
              transition={{ duration: 0.3 }}
              // This inline-flex container shrink-wraps the image exactly to its rendered dimensions.
              // This guarantees zero letterboxing and zero cropping.
              className="relative max-w-full max-h-full shadow-[0_20px_50px_rgba(0,0,0,0.8)] border border-white/10 bg-black pointer-events-auto rounded-2xl overflow-hidden inline-flex cursor-crosshair"
              onMouseMove={handleMouseMove}
              onMouseEnter={() => setIsHoveringImage(true)}
              onMouseLeave={() => setIsHoveringImage(false)}
            >
              <img
                src={activeItem.image}
                alt={activeItem.title}
                className="max-w-full max-h-[65vh] block object-contain"
              />
              
              {/* Zoom Activation Overlay */}
              {!isZoomActive && (
                <div 
                  className="absolute inset-0 bg-black/60 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300 cursor-pointer group z-20"
                  onClick={() => setIsZoomActive(true)}
                >
                  <div className="bg-[var(--accent-cyan)] text-black px-6 py-4 rounded-full font-bold uppercase tracking-widest text-xs flex items-center gap-3 transform group-hover:scale-105 transition-transform shadow-[0_0_30px_rgba(0,210,255,0.4)]">
                    <span className="text-xl">🔍</span> Enable Deep Zoom
                  </div>
                </div>
              )}

              {/* Instructional Tooltip if zoom is active but not hovering */}
              {isZoomActive && !isHoveringImage && (
                <div className="absolute top-4 left-1/2 -translate-x-1/2 bg-white/10 backdrop-blur-md border border-white/20 px-4 py-2 rounded-full pointer-events-none shadow-xl z-20">
                  <span className="text-white text-xs font-bold uppercase tracking-widest flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[var(--accent-cyan)] animate-pulse" /> Hover to inspect details
                  </span>
                </div>
              )}

              {/* The "Lens" Box over the image */}
              {isZoomActive && isHoveringImage && (
                <div 
                  className="absolute pointer-events-none border-2 border-[var(--accent-cyan)] bg-[var(--accent-cyan)]/10 shadow-[0_0_15px_rgba(0,210,255,0.3)] z-20"
                  style={{
                    width: '120px',
                    height: '120px',
                    left: `calc(${mousePos.x}% - 60px)`,
                    top: `calc(${mousePos.y}% - 60px)`,
                  }}
                >
                  <div className="absolute top-1/2 left-1/2 w-1 h-1 bg-[var(--accent-cyan)] rounded-full -translate-x-1/2 -translate-y-1/2 opacity-50" />
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Right Side: Side Lens Panel */}
        <div className="hidden md:block relative w-[40vw] max-w-[500px] h-[65vh] rounded-2xl overflow-hidden border border-white/10 bg-black/40 backdrop-blur-md shadow-2xl pointer-events-none">
          {isZoomActive && isHoveringImage ? (
            <div 
              className="absolute inset-0"
              style={{
                backgroundImage: `url(${activeItem.image})`,
                backgroundPosition: `${mousePos.x}% ${mousePos.y}%`,
                // Using a massive fixed percentage ensures it covers the panel regardless of aspect ratio differences
                backgroundSize: "300% auto", 
                backgroundRepeat: "no-repeat",
                backgroundColor: "black"
              }}
            />
          ) : (
            <div className="absolute inset-0 flex flex-col items-center justify-center p-12 text-center">
              <div className="w-16 h-16 rounded-full border border-white/10 flex items-center justify-center mb-6 bg-white/5 relative">
                <span className="text-2xl opacity-50">🔍</span>
                {isZoomActive && <span className="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-[var(--accent-cyan)] animate-ping" />}
              </div>
              <h3 className="text-2xl font-bold mb-2">Deep Zoom Lens</h3>
              <p className="text-white/40 text-sm leading-relaxed max-w-xs">
                {isZoomActive 
                  ? "Move your mouse over the image on the left to inspect high-resolution details here." 
                  : "Click the \"Enable Deep Zoom\" button on the image to activate the inspection lens."}
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Bottom Area: Info & Carousel */}
      <div className="absolute bottom-0 left-0 w-full z-40 bg-gradient-to-t from-black via-black/90 to-transparent pt-20 pb-8 pointer-events-none">
        <div className="max-w-[1400px] mx-auto px-6 md:px-16 flex flex-col lg:flex-row items-end gap-8">
          
          {/* Active Item Info */}
          <div className="w-full lg:w-1/3 pointer-events-auto">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeItem.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
              >
                <div className="flex gap-2 mb-3">
                  {activeItem.tags.map(tag => (
                    <span key={tag} className="px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-[9px] uppercase tracking-widest font-bold text-[var(--accent-cyan)]">
                      {tag}
                    </span>
                  ))}
                </div>
                <h2 className="text-3xl md:text-5xl font-extrabold tracking-tighter text-white drop-shadow-lg mb-2">
                  {activeItem.title}
                </h2>
                <p className="text-white/50 text-sm font-medium tracking-wide">
                  {activeItem.subtitle}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Infinite Marquee Carousel */}
          <div 
            className="w-full lg:w-2/3 overflow-hidden pointer-events-auto py-4 relative group"
            style={{ 
              maskImage: "linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)", 
              WebkitMaskImage: "linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)" 
            }}
          >
            <div 
              className="flex animate-marquee gap-4 group-hover:[animation-play-state:paused] w-max"
              style={{ animationDuration: "60s" }} // Slower, elegant scroll
            >
              {[...galleryData, ...galleryData, ...galleryData, ...galleryData, ...galleryData, ...galleryData, ...galleryData, ...galleryData].map((item, index) => {
                const realIndex = index % galleryData.length;
                const isActive = activeIndex === realIndex;
                return (
                  <button
                    key={`${item.id}-${index}`}
                    onClick={() => setActiveIndex(realIndex)}
                    className={`relative shrink-0 w-24 h-32 md:w-32 md:h-44 rounded-xl overflow-hidden cursor-pointer transition-all duration-300 border ${
                      isActive 
                      ? "border-[var(--accent-cyan)] shadow-[0_0_20px_rgba(0,210,255,0.3)] scale-100 opacity-100" 
                      : "border-white/10 scale-95 opacity-40 hover:opacity-100 hover:scale-100"
                    }`}
                  >
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      sizes="128px"
                      className="object-cover"
                    />
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>

    </main>
  );
}
