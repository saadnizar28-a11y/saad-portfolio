"use client";

import FadeIn from "@/components/FadeIn";
import LiveNewsTicker from "@/components/LiveNewsTicker";
import HeadingBurst from "@/components/HeadingBurst";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";
import { blogs } from "@/data/blogs";

export default function Blog() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleWheel = (e: WheelEvent) => {
      // If predominantly horizontal scroll (e.g. trackpad), allow native behavior
      if (Math.abs(e.deltaX) > Math.abs(e.deltaY)) return;

      // Prevent default vertical scroll and apply it to horizontal scroll instead
      if (e.deltaY !== 0) {
        e.preventDefault();
        container.scrollBy({
          left: e.deltaY * 1.5, // Scroll speed multiplier
          behavior: 'auto'
        });
      }
    };

    container.addEventListener("wheel", handleWheel, { passive: false });
    return () => container.removeEventListener("wheel", handleWheel);
  }, []);

  return (
    <main className="h-[100dvh] w-full relative overflow-hidden bg-[var(--background)] flex flex-col">
      {/* Background Ambience */}
      <div className="absolute top-0 right-1/4 w-[50vw] h-[50vh] bg-gradient-radial from-[var(--accent-pink)]/5 to-transparent blur-[150px] pointer-events-none rounded-full" />
      <div className="absolute bottom-1/4 left-0 w-[40vw] h-[40vh] bg-gradient-radial from-[var(--accent-cyan)]/5 to-transparent blur-[150px] pointer-events-none rounded-full z-0" />

      {/* Header Area (Fixed) */}
      <div className="pt-32 px-6 md:px-16 flex-shrink-0 relative z-10 w-full max-w-[100vw]">
        <div className="flex flex-col xl:flex-row xl:items-center justify-between gap-8 mb-8">
          <FadeIn>
            <div className="relative inline-block">
              <HeadingBurst />
              <h1 className="text-5xl md:text-7xl font-extrabold tracking-tighter mb-4 relative z-10">
                Insights & <span className="text-gradient hover:drop-shadow-[0_0_20px_rgba(0,240,255,0.4)] transition-all">News.</span>
              </h1>
            </div>
            <p className="text-lg md:text-xl text-white/50 font-light max-w-2xl">
              Live updates, technical breakdowns, and the engineering behind highly converting platforms.
            </p>
          </FadeIn>

          {/* Live Ticker Fixed in Header */}
          <FadeIn delay={400} className="w-full xl:w-[450px]">
            <div className="shadow-2xl">
              <LiveNewsTicker mini={true} />
            </div>
          </FadeIn>
        </div>
      </div>

      {/* Horizontal Scroll Area */}
      <div 
        ref={containerRef}
        className="flex-grow overflow-x-auto overflow-y-hidden hide-scrollbar flex items-center px-8 md:px-16 pb-12 relative z-20 cursor-grab active:cursor-grabbing snap-x snap-mandatory"
        style={{ scrollBehavior: 'smooth' }}
      >
        <div className="flex flex-nowrap gap-8 h-[60vh] min-h-[400px] items-stretch pr-[30vw]">
          {blogs.map((blog, idx) => (
            <FadeIn delay={100 + (idx * 50)} key={blog.slug} className="flex-shrink-0 snap-center w-[85vw] sm:w-[50vw] md:w-[35vw] xl:w-[25vw] h-full flex">
              <Link href={`/blog/${blog.slug}`} className="block w-full h-full">
                <div className="glass-card w-full h-full rounded-[2rem] p-0 relative overflow-hidden group cursor-pointer border border-white/5 hover:border-[var(--accent-cyan)]/40 transition-colors shadow-2xl flex flex-col justify-end">
                  
                  {/* Background Image layer */}
                  <Image 
                    src={blog.image || "/blog/meta_ai_ads.png"} 
                    alt={blog.title} 
                    fill 
                    className="object-cover opacity-60 group-hover:opacity-80 transition-opacity duration-700 ease-out" 
                  />
                  
                  {/* Dark Vignette / Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[var(--background)] via-[var(--background)]/80 to-transparent pointer-events-none" />
                  
                  {/* Content Overlay */}
                  <div className="absolute inset-x-0 bottom-0 p-8 transform translate-y-6 group-hover:translate-y-0 transition-transform duration-500 flex flex-col justify-end h-full">
                    <div className="flex gap-3 items-center mb-4 opacity-80 group-hover:opacity-100 transition-opacity">
                      <span className="text-[9px] font-bold tracking-widest text-[var(--accent-cyan)] uppercase bg-[var(--accent-cyan)]/10 px-3 py-1.5 rounded-full border border-[var(--accent-cyan)]/20 shadow-[0_0_10px_rgba(0,240,255,0.2)]">
                        {blog.category}
                      </span>
                      <span className="text-xs text-white/60 font-mono tracking-wider">{blog.readTime.toUpperCase()}</span>
                    </div>
                    <h2 className="text-2xl md:text-3xl font-black text-white tracking-tight leading-[1.2] mb-3 line-clamp-3">
                      {blog.title}
                    </h2>
                    <p className="text-white/60 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-100 line-clamp-3 mb-6">
                      {blog.content}
                    </p>
                    
                    {/* Read More button pushed out slightly */}
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity delay-200 mt-auto">
                       <span className="text-[11px] tracking-widest uppercase font-bold text-white border-b border-[var(--accent-pink)]/50 pb-1 hover:border-[var(--accent-pink)] hover:text-[var(--accent-pink)] transition-all flex items-center w-max gap-2 group/btn">
                         Read Article
                         <span className="group-hover/btn:translate-x-1 transition-transform">→</span>
                       </span>
                    </div>
                  </div>
                </div>
              </Link>
            </FadeIn>
          ))}



        </div>
      </div>

    </main>
  );
}
