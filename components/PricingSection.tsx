"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import FadeIn from "./FadeIn";

export default function PricingSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [-100, 100]);

  const activePackages = [
    { title: "Starter Pro", followers: "1,000", inr: "₹999", aed: "AED 55", delivery: "Gradual delivery until fully completed (natural speed)", feature: "Natural growth" },
    { title: "Growth Pro", followers: "3,000", inr: "₹2,699", aed: "AED 139", delivery: "Gradual delivery until fully completed (natural speed)", feature: "Faster scaling" },
    { title: "Authority Pro", followers: "5,000", inr: "₹4,499", aed: "AED 239", delivery: "Gradual delivery until fully completed (natural speed)", feature: "Strong social proof" },
    { title: "Elite Max", followers: "10,000", inr: "₹7,999", aed: "AED 399", delivery: "Gradual delivery until fully completed (natural speed)", feature: "Maximum credibility" }
  ];

  const nonActivePackages = [
    { title: "Basic Lite", followers: "1,000", inr: "₹699", aed: "AED 39", delivery: "12–24 hours", feature: "Cheapest option" },
    { title: "Value Boost", followers: "3,000", inr: "₹1,999", aed: "AED 109", delivery: "1–2 days", feature: "Good value" },
    { title: "Bulk Boost", followers: "5,000", inr: "₹2,999", aed: "AED 159", delivery: "1–3 days", feature: "Strong profile boost" },
    { title: "Mega Boost", followers: "10,000", inr: "₹5,499", aed: "AED 279", delivery: "2–5 days", feature: "Maximum numbers" }
  ];

  const globalFeatures = [
    "No password required",
    "Safe & secure process",
    "Refill guarantee"
  ];

  const createWhatsAppLink = (pkgName: string, followers: string, priceAed: string) => {
    const text = encodeURIComponent(`Hi! I'm interested in the ${pkgName} package (${followers} followers) for ${priceAed}.`);
    return `https://wa.me/971500000000?text=${text}`; // Replace with actual number
  };

  return (
    <div ref={containerRef} className="relative border-t border-[rgba(255,255,255,0.05)] pt-32 pb-32 overflow-hidden bg-gradient-to-b from-black via-[#0a0514] to-black">
      {/* Floating Particles Background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full"
            style={{
              width: Math.random() * 4 + 1 + "px",
              height: Math.random() * 4 + 1 + "px",
              top: Math.random() * 100 + "%",
              left: Math.random() * 100 + "%",
              backgroundColor: i % 2 === 0 ? "var(--accent-cyan)" : "var(--accent-pink)",
              opacity: Math.random() * 0.4 + 0.1,
              filter: "blur(1px)",
            }}
            animate={{
              y: [0, -100 - Math.random() * 100],
              x: Math.sin(i) * 30,
              opacity: [0.1, 0.5, 0.1],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        ))}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[var(--accent-pink)]/5 blur-[120px] rounded-full mix-blend-screen" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[var(--accent-cyan)]/5 blur-[120px] rounded-full mix-blend-screen" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <FadeIn>
          <div className="text-center mb-24">
            <h2 className="text-5xl md:text-7xl font-extrabold tracking-tighter mb-6">
              Growth <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--accent-cyan)] to-[var(--accent-pink)] drop-shadow-[0_0_15px_rgba(236,72,153,0.5)]">Shop.</span>
            </h2>
            <p className="text-white/50 max-w-2xl mx-auto text-lg leading-relaxed">
              Premium & Budget follower packages engineered to elevate your social proof instantly.
            </p>
          </div>
        </FadeIn>

        {/* Premium Active Followers */}
        <motion.div className="mb-32">
          <FadeIn delay={100}>
            <h3 className="text-3xl font-bold text-white mb-12 flex items-center justify-center gap-4">
              <span className="text-[var(--accent-pink)] drop-shadow-[0_0_10px_rgba(236,72,153,0.8)]">🔥</span> Active Packages 
              <span className="text-[10px] font-black uppercase tracking-widest bg-[var(--accent-pink)]/10 text-[var(--accent-pink)] px-4 py-1.5 rounded-full border border-[var(--accent-pink)]/30 shadow-[0_0_15px_rgba(236,72,153,0.2)]">Premium</span>
            </h3>
          </FadeIn>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {activePackages.map((pkg, i) => (
              <motion.div 
                key={i} 
                className="flex h-full"
                whileHover={{ scale: 1.05, y: -10 }}
                transition={{ duration: 0.3 }}
              >
                <div className="w-full backdrop-blur-2xl bg-white/[0.03] p-8 rounded-2xl group border border-white/10 hover:border-[var(--accent-pink)]/50 transition-all duration-300 flex flex-col relative overflow-hidden shadow-[0_8px_32px_rgba(0,0,0,0.3)] hover:shadow-[0_20px_50px_rgba(236,72,153,0.15)]">
                  <div className="absolute -top-10 -right-10 w-40 h-40 bg-[var(--accent-pink)]/20 blur-[50px] rounded-full pointer-events-none group-hover:bg-[var(--accent-pink)]/30 transition-colors" />
                  
                  <div className="flex-1 relative z-10">
                    <p className="text-xs font-black text-[var(--accent-pink)] tracking-widest uppercase mb-4">{pkg.title}</p>
                    <div className="text-5xl font-black text-white mb-2 tracking-tighter drop-shadow-md">{pkg.followers}</div>
                    <p className="text-sm font-medium text-white/40 mb-8">Active Followers</p>
                    
                    <div className="space-y-4 mb-8">
                      <p className="text-sm flex items-start gap-3 text-white/80 font-medium leading-relaxed">
                        <span className="text-[var(--accent-cyan)] shrink-0 mt-0.5">✔</span> {pkg.feature}
                      </p>
                      <p className="text-sm flex items-start gap-3 text-white/80 font-medium leading-relaxed">
                        <span className="text-[var(--accent-violet)] shrink-0 mt-0.5">⏱</span> {pkg.delivery}
                      </p>
                      {globalFeatures.map((feat, idx) => (
                        <p key={idx} className="text-sm flex items-start gap-3 text-white/60 font-medium">
                          <span className="text-green-400/80 shrink-0 mt-0.5">✔</span> {feat}
                        </p>
                      ))}
                    </div>
                  </div>
                  
                  <div className="border-t border-white/10 pt-8 mt-auto relative z-10">
                    <div className="mb-6">
                      <p className="text-4xl font-black text-white tracking-tight drop-shadow-lg">{pkg.aed}</p>
                      <p className="text-sm font-medium text-white/40 mt-1">{pkg.inr}</p>
                    </div>
                    <motion.a 
                      href={createWhatsAppLink(pkg.title, pkg.followers, pkg.aed)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full inline-flex items-center justify-center py-4 rounded-xl font-bold text-sm tracking-widest uppercase transition-all duration-300 border border-[var(--accent-pink)]/50 bg-[var(--accent-pink)]/10 hover:bg-[var(--accent-pink)] hover:shadow-[0_0_20px_rgba(236,72,153,0.4)] text-white group"
                      whileTap={{ scale: 0.95 }}
                    >
                      <span className="relative z-10 flex items-center gap-2">
                        Buy Now
                        <motion.span 
                          animate={{ x: [0, 5, 0] }} 
                          transition={{ duration: 1.5, repeat: Infinity }}
                        >
                          →
                        </motion.span>
                      </span>
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Budget Non-Active Followers */}
        <motion.div>
          <FadeIn delay={200}>
            <h3 className="text-3xl font-bold text-white mb-12 flex items-center justify-center gap-4">
              <span className="text-[var(--accent-cyan)] drop-shadow-[0_0_10px_rgba(0,240,255,0.8)]">💸</span> Non-Active Packages 
              <span className="text-[10px] font-black uppercase tracking-widest bg-[var(--accent-cyan)]/10 text-[var(--accent-cyan)] px-4 py-1.5 rounded-full border border-[var(--accent-cyan)]/30 shadow-[0_0_15px_rgba(0,240,255,0.2)]">Budget</span>
            </h3>
          </FadeIn>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {nonActivePackages.map((pkg, i) => (
              <motion.div 
                key={i} 
                className="flex h-full"
                whileHover={{ scale: 1.05, y: -10 }}
                transition={{ duration: 0.3 }}
              >
                <div className="w-full backdrop-blur-2xl bg-white/[0.02] p-8 rounded-2xl group border border-white/5 hover:border-[var(--accent-cyan)]/40 transition-all duration-300 flex flex-col relative overflow-hidden shadow-[0_8px_32px_rgba(0,0,0,0.2)] hover:shadow-[0_20px_50px_rgba(0,240,255,0.1)]">
                  <div className="absolute -top-10 -right-10 w-40 h-40 bg-[var(--accent-cyan)]/10 blur-[50px] rounded-full pointer-events-none group-hover:bg-[var(--accent-cyan)]/20 transition-colors" />
                  
                  <div className="flex-1 relative z-10">
                    <p className="text-xs font-black text-[var(--accent-cyan)] tracking-widest uppercase mb-4">{pkg.title}</p>
                    <div className="text-5xl font-black text-white mb-2 tracking-tighter drop-shadow-md">{pkg.followers}</div>
                    <p className="text-sm font-medium text-white/30 mb-8">Followers</p>
                    
                    <div className="space-y-4 mb-8">
                      <p className="text-sm flex items-start gap-3 text-white/70 font-medium leading-relaxed">
                        <span className="text-[var(--accent-cyan)]/70 shrink-0 mt-0.5">✔</span> {pkg.feature}
                      </p>
                      <p className="text-sm flex items-start gap-3 text-white/70 font-medium leading-relaxed">
                        <span className="text-[var(--accent-violet)]/70 shrink-0 mt-0.5">⏱</span> {pkg.delivery}
                      </p>
                      {globalFeatures.map((feat, idx) => (
                        <p key={idx} className="text-sm flex items-start gap-3 text-white/50 font-medium">
                          <span className="text-green-400/50 shrink-0 mt-0.5">✔</span> {feat}
                        </p>
                      ))}
                    </div>
                  </div>
                  
                  <div className="border-t border-white/5 pt-8 mt-auto relative z-10">
                    <div className="mb-6">
                      <p className="text-4xl font-black text-white/90 tracking-tight drop-shadow-lg">{pkg.aed}</p>
                      <p className="text-sm font-medium text-white/30 mt-1">{pkg.inr}</p>
                    </div>
                    <motion.a 
                      href={createWhatsAppLink(pkg.title, pkg.followers, pkg.aed)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full inline-flex items-center justify-center py-4 rounded-xl font-bold text-sm tracking-widest uppercase transition-all duration-300 border border-[var(--accent-cyan)]/30 bg-[var(--accent-cyan)]/5 hover:bg-[var(--accent-cyan)]/20 hover:border-[var(--accent-cyan)] hover:shadow-[0_0_20px_rgba(0,240,255,0.3)] text-white/80 hover:text-white group"
                      whileTap={{ scale: 0.95 }}
                    >
                      <span className="relative z-10 flex items-center gap-2">
                        Buy Now
                        <motion.span 
                          animate={{ x: [0, 5, 0] }} 
                          transition={{ duration: 1.5, repeat: Infinity }}
                        >
                          →
                        </motion.span>
                      </span>
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
