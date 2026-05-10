"use client";

import { useEffect, useState } from "react";

const rawNews = [
  {
    flag: "🇦🇪",
    title: "Dubai Accelerates AI-Driven Digital Economy",
    desc: "Dubai is launching new AI platforms and startup programs to boost its digital ecosystem and become a global tech hub.",
  },
  {
    flag: "🌍",
    title: "GCC Digital Ad Spend Surges with Mobile Growth",
    desc: "Across GCC markets, digital advertising is rapidly increasing due to high mobile usage and e-commerce expansion.",
  },
  {
    flag: "🤖",
    title: "AEO & GEO Replace Traditional SEO Strategies",
    desc: "New concepts like Answer Engine Optimization (AEO) and Generative Engine Optimization (GEO) are reshaping how brands rank in AI search results.",
  },
  {
    flag: "📢",
    title: "Meta Moves Toward Fully AI-Generated Advertising",
    desc: "Meta Platforms is developing AI systems that can create complete ad campaigns automatically from just a product input.",
  },
  {
    flag: "🧠",
    title: "Claude AI Expands with $100M Partner Network",
    desc: "Anthropic is investing $100M to scale Claude AI adoption through enterprise partnerships and training programs.",
  }
];

export default function LiveNewsTicker({ mini = false }: { mini?: boolean }) {
  const [news, setNews] = useState(() => {
    // Start with 10 items (2 full loops) so the bottom is pre-filled
    const initial = rawNews.map((n, i) => ({ ...n, id: i, timeAgo: 5 + (i * 12) }));
    const loop2 = rawNews.map((n, i) => ({ ...n, id: i + 5, timeAgo: 1 }));
    return [...initial, ...loop2];
  });
  
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    // Auto-slide to the next news block every 4 seconds
    const slideInterval = setInterval(() => {
      setActiveIndex((prev) => prev + 1);
      
      // Append the next item in the sequence to the bottom of the array infinitely
      setNews((prev) => {
        const nextRawItem = rawNews[prev.length % rawNews.length];
        return [...prev, { ...nextRawItem, id: prev.length, timeAgo: 1 }];
      });
    }, 4000);

    // Update timestamps dynamically so it feels "live"
    const timeInterval = setInterval(() => {
      setNews((prev) => prev.map((item, i) => {
        // Only update items that are currently visible or close to visible
        if (i < activeIndex || i > activeIndex + 5) return item;
        
        if (i === activeIndex && Math.random() > 0.8) {
            return { ...item, timeAgo: 1 }; // Live injection pulse
        }
        return { ...item, timeAgo: item.timeAgo + 1 };
      }));
    }, 1000);

    return () => {
      clearInterval(slideInterval);
      clearInterval(timeInterval);
    };
  }, [activeIndex]);

  const jumpHeight = mini ? 104 : 132;

  return (
    <div className={`glass-card rounded-[2rem] relative overflow-hidden flex flex-col border border-[var(--accent-cyan)]/20 shadow-[0_0_40px_rgba(0,240,255,0.05)] bg-[rgba(10,10,12,0.8)] w-full ${mini ? 'p-5 h-[170px]' : 'p-6 lg:p-8 h-full min-h-[450px] max-h-[600px]'}`}>
      
      {/* Header Container */}
      <div className={`flex items-center justify-between border-b border-white/5 relative z-10 shrink-0 ${mini ? 'mb-4 pb-3' : 'mb-6 pb-6'}`}>
        <div className="flex items-center gap-4">
          <span className="relative flex h-3.5 w-3.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#10b981] opacity-60"></span>
            <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-[#10b981] shadow-[0_0_12px_#10b981]"></span>
          </span>
          <h2 className={`${mini ? 'text-sm' : 'text-xl'} font-bold tracking-tight text-white m-0`}>Live Updates</h2>
        </div>
        <div className={`text-[8px] tracking-[0.2em] text-[#10b981] uppercase font-bold bg-[#10b981]/10 rounded-md border border-[#10b981]/20 ${mini ? 'px-2 py-1' : 'px-3 py-1.5'}`}>
          Syncing...
        </div>
      </div>

      {/* Slider Window Container */}
      <div className={`relative flex-1 w-full overflow-hidden -mx-2 px-2 ${!mini ? 'mask-fade-y' : ''}`}>
        <div 
          className="absolute inset-x-0 w-full flex flex-col transition-transform duration-[800ms] ease-[cubic-bezier(0.2,0.8,0.2,1)]"
          style={{ 
            transform: `translateY(-${activeIndex * jumpHeight}px)`,
            gap: mini ? '16px' : '24px' // the gap plus the height defines the jump
          }}
        >
          {news.map((item, i) => (
             <div 
                key={`${item.id}-${i}`} 
                className={`flex rounded-2xl transition-all duration-700 shrink-0 overflow-hidden ${mini ? 'gap-3 px-3 h-[88px] items-center' : 'gap-5 p-5 h-[108px]'} ${
                  i === activeIndex 
                    ? (mini ? "opacity-100" : "bg-white/5 border border-white/10 shadow-[0_4px_20px_rgba(0,0,0,0.4)] translate-x-1") 
                    : (mini ? "opacity-0 scale-95" : "opacity-30 scale-95 hover:opacity-50")
                }`}
              >
                <div className={`${mini ? 'text-2xl' : 'text-3xl'} shrink-0 leading-none drop-shadow-md`}>{item.flag}</div>
                <div className="flex flex-col gap-1 w-full">
                   <div className="flex justify-between items-start gap-2">
                     <div className={`${mini ? 'text-[12px]' : 'text-[13px] md:text-sm'} font-bold text-white/90 leading-snug line-clamp-1`}>{item.title}</div>
                     <span className={`whitespace-nowrap text-[var(--accent-cyan)] font-mono shrink-0 font-bold bg-[var(--accent-cyan)]/10 rounded tracking-wider ${mini ? 'text-[8px] px-1.5 py-0.5' : 'text-[10px] px-2 py-0.5'}`}>
                       {item.timeAgo}s
                     </span>
                   </div>
                   <p className="text-[11px] md:text-xs text-white/40 leading-relaxed font-light line-clamp-2">{item.desc}</p>
                </div>
             </div>
          ))}
          
          {/* Append a phantom spacer so the last item can scroll comfortably up */}
          <div className="h-[300px] shrink-0 pointer-events-none opacity-0" />
        </div>
      </div>
      
      {/* CSS Utility for fading edges of slider */}
      {!mini && (
        <style dangerouslySetInnerHTML={{__html: `
          .mask-fade-y {
            -webkit-mask-image: linear-gradient(to bottom, transparent 0%, black 15%, black 85%, transparent 100%);
            mask-image: linear-gradient(to bottom, transparent 0%, black 15%, black 85%, transparent 100%);
          }
        `}} />
      )}
    </div>
  );
}
