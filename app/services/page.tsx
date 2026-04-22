import FadeIn from "@/components/FadeIn";
import TechMarquee from "@/components/TechMarquee";
import HeadingBurst from "@/components/HeadingBurst";
import PricingSection from "@/components/PricingSection";

export default function Services() {
  const services = [
    { title: "Brand Visual Design", desc: "Clean, modern visuals backed by strong creative direction." },
    { title: "Social Media Management", desc: "Strategy-driven content designed for consistency and engagement." },
    { title: "Digital Marketing Strategy", desc: "Conversion-focused campaigns built around user behavior." },
    { title: "WordPress Development", desc: "Fast, responsive websites built for performance and clarity." },
    { title: "SEO Optimization", desc: "Structured optimization for long-term visibility and growth." },
    { title: "AI Prompt Engineering", desc: "Creative automation systems powered by smart AI workflows." },
  ];

  const faqs = [
    { q: "How long does a project take?", a: "Typically 1–3 weeks depending on scope." },
    { q: "Do you provide ongoing support?", a: "Yes, maintenance and growth support are available." },
    { q: "Can you handle both design and marketing?", a: "Yes, I combine both for better results." }
  ];

  return (
    <main className="min-h-screen pt-40 pb-0 relative overflow-x-hidden bg-[var(--background)]">
      <div className="absolute top-1/2 right-1/4 w-[50vw] h-[50vh] bg-[var(--accent-purple)]/10 blur-[180px] pointer-events-none rounded-full" />
      <div className="absolute top-1/4 left-0 w-[40vw] h-[40vh] bg-[var(--accent-cyan)]/5 blur-[150px] pointer-events-none rounded-full" />

      <div className="max-w-6xl mx-auto px-6 relative z-10 mb-32">
        <FadeIn>
          <div className="relative inline-block w-full text-center">
            <HeadingBurst />
            <h1 className="text-6xl md:text-8xl font-extrabold tracking-tighter mb-20 relative z-10">
              Services <span className="text-gradient hover:drop-shadow-[0_0_20px_rgba(0,240,255,0.4)] transition-all">Offering.</span>
            </h1>
          </div>
        </FadeIn>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-32">
          {services.map((s, i) => (
            <FadeIn key={i} delay={i * 100}>
              <div className="glass-card hover:-translate-y-2 transition-all duration-500 p-10 rounded-3xl group hover:border-[rgba(0,240,255,0.4)] hover:shadow-[0_10px_40px_rgba(0,240,255,0.1)] h-full flex flex-col justify-center relative overflow-hidden">
                {/* Ultra-premium faint watermark numbering instead of a pill */}
                <div className="absolute -top-4 right-0 font-black text-8xl text-white/5 group-hover:text-[var(--accent-cyan)]/10 transition-colors pointer-events-none select-none transform -translate-y-4 translate-x-4">
                  0{i + 1}
                </div>
                
                <h3 className="text-2xl font-semibold text-white group-hover:text-[var(--accent-cyan)] transition-colors mb-4 relative z-10">{s.title}</h3>
                <p className="text-white/50 text-base leading-relaxed relative z-10">{s.desc}</p>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* SHOP SECTION */}
        <PricingSection />

        {/* FAQ Section */}
        <div className="max-w-3xl mx-auto border-t border-[var(--accent-cyan)]/20 pt-20">
          <FadeIn>
            <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">Frequently Asked</h2>
          </FadeIn>
          <div className="space-y-6">
            {faqs.map((faq, i) => (
              <FadeIn key={i} delay={i * 100}>
                <details className="glass-card p-6 rounded-2xl group cursor-pointer border-[rgba(255,255,255,0.05)] hover:border-[var(--accent-violet)]/40 transition-colors">
                  <summary className="text-xl font-medium text-white flex justify-between items-center outline-none list-none">
                    {faq.q}
                    <span className="text-[var(--accent-cyan)] opacity-70 group-hover:opacity-100 transition-opacity">+</span>
                  </summary>
                  <p className="mt-4 text-white/50 text-lg leading-relaxed pt-4 border-t border-white/5">
                    {faq.a}
                  </p>
                </details>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>

      <TechMarquee />
    </main>
  );
}
