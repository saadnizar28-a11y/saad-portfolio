import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import FadeIn from "@/components/FadeIn";
import SystemStatus from "@/components/SystemStatus";
import TechMarquee from "@/components/TechMarquee";
import HeadingBurst from "@/components/HeadingBurst";

export const metadata: Metadata = {
  title: "Selected Work & Portfolio | Saad Nizar",
  description: "Explore the selected design, branding, and system-driven work by Saad Nizar. Featuring visual campaigns, brand identity, logofolios, and digital interfaces.",
  keywords: ["Portfolio", "Design Portfolio", "Saad Nizar Work", "UI/UX Portfolio", "Branding Portfolio", "Graphic Designer Dubai", "Creative Director"],
  openGraph: {
    title: "Selected Work & Portfolio | Saad Nizar",
    description: "Explore the selected design, branding, and system-driven work by Saad Nizar.",
    url: "https://saadnizar.com/work",
    siteName: "Saad Nizar Portfolio",
    images: [
      {
        url: "/poster_real_2.png", // Using one of the best realistic images
        width: 1200,
        height: 630,
        alt: "Saad Nizar Selected Work Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  "name": "Saad Nizar Selected Work Portfolio",
  "description": "A collection of design, branding, and system-driven work.",
  "author": {
    "@type": "Person",
    "name": "Saad Nizar"
  }
};

export default function Work() {
  return (
    <main className="min-h-screen pt-40 pb-0 relative overflow-hidden bg-[var(--background)]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="absolute top-0 right-0 w-[50vw] h-[50vh] bg-gradient-radial from-[var(--accent-violet)]/10 to-transparent blur-[150px] pointer-events-none rounded-full" />
      <div className="absolute bottom-0 left-0 w-[40vw] h-[40vh] bg-gradient-radial from-[var(--accent-cyan)]/10 to-transparent blur-[150px] pointer-events-none rounded-full" />

      <div className="max-w-6xl mx-auto px-6 relative z-10 mb-32">
        <FadeIn className="flex flex-col md:flex-row md:items-end justify-between mb-24 gap-8">
          <div>
            <div className="relative inline-block">
              <HeadingBurst />
              <h1 className="text-6xl md:text-8xl font-extrabold tracking-tighter mb-6 relative z-10">
                Selected <span className="text-gradient hover:drop-shadow-[0_0_20px_rgba(0,240,255,0.4)] transition-all">Work.</span>
              </h1>
            </div>
            <p className="text-xl md:text-2xl text-white/50 font-light max-w-2xl">
              A collection of design, branding, and system-driven work.
            </p>
          </div>
          <div className="hidden md:block">
            <SystemStatus />
          </div>
        </FadeIn>
        
        <div className="flex flex-col md:flex-row gap-6">
          
          {/* Main 4 Cards taking the flexible remaining space */}
          <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* 1. Visual Campaigns */}
            <FadeIn delay={100}>
              <Link href="/work/posters" className="glass-card flex flex-col justify-between p-10 rounded-[2.5rem] h-full min-h-[360px] group hover:border-[var(--accent-pink)]/40 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(0,0,0,0.6)] transition-all duration-500 overflow-hidden relative block bg-white/5">
                
                {/* Floating Images Background */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-60 group-hover:opacity-100 transition-opacity duration-700 flex items-center justify-center">
                  <Image src="/poster_real_2.png" width={800} height={1000} className="absolute w-[50%] h-auto -rotate-12 -translate-x-[40%] translate-y-8 rounded-xl shadow-2xl group-hover:-translate-x-[50%] group-hover:-rotate-6 transition-all duration-700 object-cover" alt="Product Poster" />
                  <Image src="/poster_real_3.png" width={800} height={1000} className="absolute w-[50%] h-auto rotate-12 translate-x-[40%] translate-y-8 rounded-xl shadow-2xl group-hover:translate-x-[50%] group-hover:rotate-6 transition-all duration-700 object-cover" alt="Education Poster" />
                  <Image src="/poster_real_1.png" width={800} height={1000} className="absolute w-[55%] h-auto z-10 rounded-xl shadow-[0_0_40px_rgba(0,0,0,0.8)] group-hover:-translate-y-4 transition-all duration-700 object-cover" alt="Swiss Poster" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--background)] via-[var(--background)]/80 to-transparent pointer-events-none z-10" />
                <div className="absolute inset-0 bg-gradient-to-br from-transparent to-[var(--accent-pink)]/10 pointer-events-none group-hover:opacity-100 opacity-50 transition-opacity z-10" />
                
                <div className="absolute top-0 right-0 p-10 opacity-0 group-hover:opacity-100 transform translate-x-4 group-hover:translate-x-0 transition-all duration-500 text-[var(--accent-pink)] z-20">
                 <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
                </div>
                
                <div className="relative z-20 mb-auto">
                  <div className="inline-block px-3 py-1.5 rounded-full border border-white/10 bg-black/40 backdrop-blur-md text-[10px] font-bold tracking-widest text-[var(--accent-pink)] uppercase mb-6">
                    WORK
                  </div>
                </div>
                <div className="relative z-20 mt-16">
                  <h3 className="text-3xl font-extrabold tracking-tighter text-white mb-2 group-hover:text-[var(--accent-pink)] transition-colors drop-shadow-lg">Visual Campaigns.</h3>
                  <p className="text-white/60 text-sm drop-shadow-md">Posters & Social Design</p>
                </div>
              </Link>
            </FadeIn>

            {/* 2. Brand Identity */}
            <FadeIn delay={200}>
              <Link href="/work/branding" className="glass-card flex flex-col justify-between p-10 rounded-[2.5rem] h-full min-h-[360px] group hover:border-[var(--accent-violet)]/40 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(0,0,0,0.6)] transition-all duration-500 overflow-hidden relative block bg-white/5">
                
                {/* Floating Images Background */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-60 group-hover:opacity-100 transition-opacity duration-700">
                  <Image src="/branding_real_1.png" width={800} height={1000} className="absolute top-[-5%] right-[-10%] w-[70%] h-auto rounded-2xl shadow-2xl rotate-6 group-hover:rotate-3 group-hover:scale-105 transition-all duration-700 object-cover" alt="Stationery Mockup" />
                  <Image src="/branding_real_2.png" width={800} height={1000} className="absolute bottom-[20%] left-[-10%] w-[60%] h-auto rounded-2xl shadow-2xl -rotate-6 group-hover:-rotate-3 group-hover:-translate-y-4 transition-all duration-700 object-cover" alt="Skincare Packaging" />
                  <Image src="/branding_real_3.png" width={800} height={1000} className="absolute bottom-[5%] right-[10%] w-[50%] h-auto rounded-2xl shadow-[0_0_40px_rgba(0,0,0,0.8)] rotate-12 group-hover:rotate-6 group-hover:-translate-y-8 z-10 transition-all duration-700 object-cover" alt="Coffee Branding" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--background)] via-[var(--background)]/80 to-transparent pointer-events-none z-10" />
                <div className="absolute inset-0 bg-gradient-to-br from-transparent to-[var(--accent-violet)]/10 pointer-events-none group-hover:opacity-100 opacity-50 transition-opacity z-10" />

                <div className="absolute top-0 right-0 p-10 opacity-0 group-hover:opacity-100 transform translate-x-4 group-hover:translate-x-0 transition-all duration-500 text-[var(--accent-violet)] z-20">
                 <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
                </div>
                
                <div className="relative z-20 mb-auto">
                  <div className="inline-block px-3 py-1.5 rounded-full border border-white/10 bg-black/40 backdrop-blur-md text-[10px] font-bold tracking-widest text-[var(--accent-violet)] uppercase mb-6">
                    WORK
                  </div>
                </div>
                <div className="relative z-20 mt-16">
                  <h3 className="text-3xl font-extrabold tracking-tighter text-white mb-2 group-hover:text-[var(--accent-violet)] transition-colors drop-shadow-lg">Brand Identity.</h3>
                  <p className="text-white/60 text-sm drop-shadow-md">Logos & Brand Systems</p>
                </div>
              </Link>
            </FadeIn>

            {/* 3. Logofolio */}
            <FadeIn delay={300}>
              <Link href="/work/logo" className="glass-card flex flex-col justify-between p-10 rounded-[2.5rem] h-full min-h-[360px] group hover:border-[var(--accent-purple)]/40 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(0,0,0,0.6)] transition-all duration-500 overflow-hidden relative block bg-white/5">
                
                {/* Floating Images Background */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-50 group-hover:opacity-100 transition-opacity duration-700 flex items-center justify-center">
                  <Image src="/logo_real_1.png" width={800} height={800} className="absolute w-[60%] h-auto -translate-x-12 -translate-y-8 rounded-xl shadow-[0_0_40px_rgba(0,0,0,0.5)] group-hover:-translate-x-16 -rotate-6 transition-all duration-700 object-cover" alt="Corporate Logo" />
                  <Image src="/logo_real_2.png" width={800} height={800} className="absolute w-[60%] h-auto translate-x-12 translate-y-8 rounded-xl shadow-[0_0_40px_rgba(0,0,0,0.5)] group-hover:translate-x-16 rotate-6 z-10 transition-all duration-700 object-cover" alt="Fashion Logo" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--background)] via-[var(--background)]/80 to-transparent pointer-events-none z-10" />
                <div className="absolute inset-0 bg-gradient-to-br from-transparent to-[var(--accent-purple)]/10 pointer-events-none group-hover:opacity-100 opacity-50 transition-opacity z-10" />

                <div className="absolute top-0 right-0 p-10 opacity-0 group-hover:opacity-100 transform translate-x-4 group-hover:translate-x-0 transition-all duration-500 text-[var(--accent-purple)] z-20">
                 <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
                </div>
                
                <div className="relative z-20 mb-auto">
                  <div className="inline-block px-3 py-1.5 rounded-full border border-white/10 bg-black/40 backdrop-blur-md text-[10px] font-bold tracking-widest text-[var(--accent-purple)] uppercase mb-6">
                    WORK
                  </div>
                </div>
                <div className="relative z-20 mt-16">
                  <h3 className="text-3xl font-extrabold tracking-tighter text-white mb-2 group-hover:text-[var(--accent-purple)] transition-colors drop-shadow-lg">Logofolio.</h3>
                  <p className="text-white/60 text-sm drop-shadow-md">Logo Exploration & Philosophy</p>
                </div>
              </Link>
            </FadeIn>

            {/* 4. Digital Interfaces */}
            <FadeIn delay={400}>
              <Link href="/work/ui-ux" className="glass-card flex flex-col justify-between p-10 rounded-[2.5rem] h-full min-h-[360px] group hover:border-[var(--accent-cyan)]/40 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(0,0,0,0.6)] transition-all duration-500 overflow-hidden relative block bg-white/5">
                
                {/* Floating Images Background */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-60 group-hover:opacity-100 transition-opacity duration-700 flex items-center justify-center">
                  <Image src="/ui_real_2.png" width={800} height={1000} className="absolute w-[60%] h-auto -translate-x-16 -rotate-12 rounded-xl shadow-[0_0_50px_rgba(0,0,0,0.6)] group-hover:-translate-x-20 group-hover:scale-105 transition-all duration-700 object-cover" alt="Mobile App UI" />
                  <Image src="/ui_real_1.png" width={1000} height={800} className="absolute w-[80%] h-auto translate-x-12 translate-y-8 rounded-xl shadow-[0_0_50px_rgba(0,0,0,0.9)] group-hover:translate-x-16 group-hover:-translate-y-4 group-hover:scale-105 z-10 transition-all duration-700 object-cover" alt="SaaS Dashboard" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--background)] via-[var(--background)]/80 to-transparent pointer-events-none z-10" />
                <div className="absolute inset-0 bg-gradient-to-br from-transparent to-[var(--accent-cyan)]/10 pointer-events-none group-hover:opacity-100 opacity-50 transition-opacity z-10" />

                <div className="absolute top-0 right-0 p-10 opacity-0 group-hover:opacity-100 transform translate-x-4 group-hover:translate-x-0 transition-all duration-500 text-[var(--accent-cyan)] z-20">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
                </div>
                
                <div className="relative z-20 mb-auto">
                  <div className="inline-block px-3 py-1.5 rounded-full border border-white/10 bg-black/40 backdrop-blur-md text-[10px] font-bold tracking-widest text-[var(--accent-cyan)] uppercase mb-6">
                    WORK
                  </div>
                </div>
                <div className="relative z-20 mt-16">
                  <h3 className="text-3xl font-extrabold tracking-tighter text-white mb-2 group-hover:text-[var(--accent-cyan)] transition-colors drop-shadow-lg">Digital Interfaces.</h3>
                  <p className="text-white/60 text-sm drop-shadow-md">Selected UI/UX Work</p>
                </div>
              </Link>
            </FadeIn>

          </div>

          {/* Right Column: Growth Systems (Very Tiny Sidebar) */}
          <div className="w-full md:w-56 shrink-0 flex flex-col">
            <FadeIn delay={500} className="h-full flex-1">
              <div className="glass-card flex flex-col justify-between p-6 rounded-[2rem] h-full min-h-[320px] group hover:border-emerald-500/30 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(0,0,0,0.4)] transition-all duration-500 overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-emerald-500/5 pointer-events-none group-hover:opacity-100 opacity-50 transition-opacity" />
                
                <div className="relative z-10 mb-auto flex flex-col items-center text-center">
                  <div className="inline-block px-3 py-1 rounded-full border border-emerald-500/20 bg-emerald-500/10 text-[8px] font-bold tracking-widest text-emerald-400 uppercase mb-4">
                    SYSTEM
                  </div>
                  
                  <div className="mt-2 mb-4">
                    <h3 className="text-lg font-extrabold tracking-tight text-white mb-2 group-hover:text-emerald-400 transition-colors">Growth Systems.</h3>
                    <p className="text-white/50 text-[10px] leading-relaxed">
                      Scalable acquisition systems built to reduce cost.
                    </p>
                  </div>
                </div>

                <div className="relative z-10 flex flex-col gap-2 w-full mt-auto">
                  <div className="bg-black/40 border border-white/5 rounded-xl p-3 backdrop-blur-sm shadow-xl hover:bg-black/60 transition-colors text-center">
                    <p className="text-white/40 text-[7px] uppercase font-bold tracking-wider mb-0.5">CPA Reduced</p>
                    <p className="text-lg font-black text-white">-42%</p>
                  </div>
                  <div className="bg-emerald-500/10 border border-emerald-500/20 rounded-xl p-3 backdrop-blur-sm shadow-[0_0_20px_rgba(16,185,129,0.1)] hover:border-emerald-500/40 transition-colors text-center">
                    <p className="text-emerald-500/70 text-[7px] uppercase font-bold tracking-wider mb-0.5">Volume</p>
                    <p className="text-lg font-black text-white">45k+</p>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>

        </div>

        {/* Prompt Gallery Banner */}
        <FadeIn delay={600} className="mt-8">
            <Link href="/prompt-gallery" className="glass-card relative overflow-hidden rounded-[2.5rem] p-10 flex flex-col md:flex-row items-center justify-between group hover:border-[var(--accent-cyan)]/40 transition-all cursor-pointer block">
              <div className="absolute top-0 right-0 w-[50%] h-[200%] bg-gradient-to-l from-[var(--accent-cyan)]/10 to-transparent blur-3xl transform rotate-12 pointer-events-none" />
              
              <div className="relative z-10 md:w-2/3">
                <div className="text-[var(--accent-cyan)] font-bold tracking-widest text-[10px] uppercase mb-4 bg-[var(--accent-cyan)]/10 inline-block px-3 py-1 rounded-full border border-[var(--accent-cyan)]/20 shadow-[0_0_10px_rgba(0,210,255,0.2)]">AI Creativity Lab</div>
                <h3 className="text-4xl md:text-5xl font-black mb-4 tracking-tighter group-hover:text-[var(--accent-cyan)] transition-colors">
                  Prompt Gallery.
                </h3>
                <p className="text-white/50 text-base max-w-xl">
                  A dedicated space showcasing high-end AI visuals, their specific prompts, and creative engineering workflows.
                </p>
              </div>

              <div className="relative z-10 mt-8 md:mt-0 flex items-center justify-center">
                 <div className="w-20 h-20 rounded-full border border-white/10 group-hover:border-[var(--accent-cyan)]/50 group-hover:bg-[var(--accent-cyan)]/10 flex items-center justify-center transition-all bg-black/50 backdrop-blur-md shadow-2xl">
                    <span className="text-2xl group-hover:translate-x-2 transition-transform duration-500">→</span>
                 </div>
              </div>
            </Link>
          </FadeIn>

      </div>

      <TechMarquee />
    </main>
  );
}
