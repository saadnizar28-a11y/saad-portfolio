"use client";

import Counter from "./Counter";

export default function ServicesMarquee() {
  const items = [
    "Poster Making",
    "Social Media Management",
    "Logo Design",
    "SEO & SEM",
    "UI/UX Design",
    "Personal Branding"
  ];

  return (
    <section className="w-full relative z-20 bg-[var(--background)] py-12 md:py-20 flex flex-col gap-12 border-y border-white/5">
      
      {/* Sleek Minimal Marquee Section */}
      <div className="relative flex overflow-x-hidden py-4 border-y border-white/5 bg-black/20 backdrop-blur-md">
        
        {/* Subtle Ambient Glow Behind Text */}
        <div className="absolute inset-0 bg-gradient-to-r from-[var(--accent-cyan)]/5 via-[var(--accent-violet)]/5 to-[var(--accent-pink)]/5 blur-[20px] pointer-events-none" />
        
        {/* Infinite Scrolling Container */}
        <div className="animate-marquee whitespace-nowrap flex items-center gap-8 px-4">
          {[...items, ...items, ...items, ...items].map((item, i) => (
            <div key={i} className="flex items-center gap-8">
              <span className="text-2xl md:text-4xl font-light tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-[var(--accent-violet)] to-[var(--accent-cyan)] select-none">
                {item}
              </span>
              <span className="text-lg text-white/20 select-none">
                ✦
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Sleek Minimal Stats Section */}
      <div className="max-w-5xl mx-auto w-full grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-0 mt-2 px-6">
        
        {/* Stat 1 */}
        <div className="flex flex-col items-center justify-center relative md:after:content-[''] md:after:absolute md:after:right-0 md:after:top-1/2 md:after:-translate-y-1/2 md:after:w-[1px] md:after:h-12 md:after:bg-white/10">
          <div className="text-4xl md:text-5xl font-medium text-white tracking-tight mb-2">
            <Counter end={50} suffix="+" />
          </div>
          <p className="text-white/50 text-[10px] md:text-xs tracking-[0.2em] uppercase font-medium">Projects Built</p>
        </div>

        {/* Stat 2 */}
        <div className="flex flex-col items-center justify-center relative md:after:content-[''] md:after:absolute md:after:right-0 md:after:top-1/2 md:after:-translate-y-1/2 md:after:w-[1px] md:after:h-12 md:after:bg-white/10">
          <div className="text-4xl md:text-5xl font-medium text-white tracking-tight mb-2">
            <Counter end={30} suffix="+" />
          </div>
          <p className="text-white/50 text-[10px] md:text-xs tracking-[0.2em] uppercase font-medium">Happy Clients</p>
        </div>

        {/* Stat 3 */}
        <div className="flex flex-col items-center justify-center">
          <div className="text-4xl md:text-5xl font-medium text-white tracking-tight mb-2">
            <Counter end={100} suffix="%" />
          </div>
          <p className="text-white/50 text-[10px] md:text-xs tracking-[0.2em] uppercase font-medium">Positive Feedback</p>
        </div>

      </div>

    </section>
  );
}
