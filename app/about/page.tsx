import FadeIn from "@/components/FadeIn";
import Counter from "@/components/Counter";
import SystemStatus from "@/components/SystemStatus";
import ActivityGraph from "@/components/ActivityGraph";
import HeadingBurst from "@/components/HeadingBurst";

export default function About() {
  return (
    <main className="min-h-screen pt-40 pb-32 px-6 relative overflow-hidden bg-[var(--background)] selection:bg-[var(--accent-cyan)] selection:text-black">
      {/* Cinematic Background glow */}
      <div className="absolute top-0 right-0 w-[60vw] h-[60vh] bg-gradient-radial from-[var(--accent-cyan)]/5 to-transparent blur-[150px] pointer-events-none rounded-full" />
      <div className="absolute bottom-0 left-0 w-[50vw] h-[50vh] bg-gradient-radial from-[var(--accent-violet)]/5 to-transparent blur-[150px] pointer-events-none rounded-full" />
      
      <div className="max-w-5xl mx-auto relative z-10 flex flex-col lg:flex-row gap-16">
        
        {/* Left Column Text Narrative */}
        <div className="w-full lg:w-3/5">
          <FadeIn delay={100}>
            <div className="relative inline-block">
              <HeadingBurst />
              <h1 className="text-4xl md:text-6xl font-extrabold tracking-tighter mb-16 leading-tight relative z-10">
                I’m <span className="text-gradient">Saad.</span>
              </h1>
            </div>
          </FadeIn>
          
          <div className="space-y-8 text-lg font-light text-white/70 leading-relaxed">
            <FadeIn delay={300}>
              <p>My journey didn’t start in design — it started in understanding people.</p>
            </FadeIn>
            
            <FadeIn delay={400}>
              <p className="text-white/90 text-xl font-medium">
                From sales floors to digital spaces, I learned how attention works, how decisions are made, and what actually drives action.
              </p>
            </FadeIn>

            <FadeIn delay={500}>
              <p>
                I didn’t follow the usual path. I built mine through experience — pressure, rejection, and constant learning. While working in sales, creativity never left me. I kept experimenting, designing, and observing how visuals influence behavior.
              </p>
            </FadeIn>

            <FadeIn delay={600}>
              <p className="text-[var(--accent-cyan)] font-medium text-xl border-l-2 border-[var(--accent-cyan)] pl-4 my-8">
                That’s where everything changed.
              </p>
            </FadeIn>

            <FadeIn delay={700}>
              <p>
                Today, I combine strategy, design, and marketing to create systems that don’t just look good — but natively perform at high levels.
              </p>
            </FadeIn>

            <FadeIn delay={800}>
              <div className="pt-10 mt-10 border-t border-white/5 space-y-4">
                <p>I don’t believe in random design. Every detail should have a purpose. Every element should move people.</p>
                <p className="text-white font-medium text-xl pt-2">I’m not here to just create websites.<br/>I’m here to build digital presence that <span className="text-[var(--accent-pink)]">converts.</span></p>
              </div>
            </FadeIn>
          </div>
        </div>

        {/* Right Column Interactive Widgets */}
        <div className="w-full lg:w-2/5 flex flex-col gap-6 pt-6">
          
          <FadeIn delay={300}>
            <SystemStatus />
          </FadeIn>

          {/* Stats Box */}
          <FadeIn delay={400}>
            <div className="glass-card p-8 rounded-3xl border border-[rgba(255,255,255,0.05)] shadow-xl relative overflow-hidden group hover:border-[var(--accent-cyan)]/30 transition-colors">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[var(--accent-cyan)]/10 blur-3xl rounded-full" />
              <div className="grid grid-cols-2 gap-6 relative z-10">
                <div>
                  <h4 className="text-4xl font-black text-white tracking-tighter mb-1"><Counter end={50} suffix="+" /></h4>
                  <p className="text-[var(--accent-cyan)] text-[10px] tracking-widest uppercase font-bold">Projects Built</p>
                </div>
                <div>
                  <h4 className="text-4xl font-black text-white tracking-tighter mb-1"><Counter end={30} suffix="+" /></h4>
                  <p className="text-[var(--accent-violet)] text-[10px] tracking-widest uppercase font-bold">Happy Clients</p>
                </div>
                <div className="col-span-2 border-t border-white/5 pt-6 mt-2">
                  <h4 className="text-4xl font-black text-white tracking-tighter mb-1"><Counter end={10} prefix="₹" suffix="k" /> <span className="text-xl text-white/30 font-light">to</span> <Counter end={230} suffix="+" /></h4>
                  <p className="text-[#10b981] text-[10px] tracking-widest uppercase font-bold mt-1">Lead Generation Metrics</p>
                </div>
              </div>
            </div>
          </FadeIn>

          {/* Tools Expertise Box */}
          <FadeIn delay={600}>
            <div className="glass-card p-8 rounded-3xl border border-[rgba(255,255,255,0.05)] shadow-xl relative overflow-hidden group hover:border-[var(--accent-pink)]/30 transition-colors">
              <div className="absolute bottom-0 right-0 w-40 h-40 bg-[var(--accent-pink)]/10 blur-3xl rounded-full" />
              <h3 className="text-xl font-bold mb-6 text-white relative z-10">Platforms & Stack.</h3>
              <div className="flex flex-wrap gap-2 relative z-10">
                {['Meta', 'Google Ads', 'Adobe Photoshop', 'Adobe Illustrator', 'Google Search Console', 'SEMrush', 'Ahrefs', 'Moz Pro', 'Surfer SEO', 'WordPress', 'Claude AI', 'Gemini Pro', 'ChatGPT', 'Antigravity', 'Google Flow'].map(tool => (
                  <span key={tool} className="text-[10px] font-semibold px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-white/80 hover:bg-[var(--accent-pink)]/20 hover:border-[var(--accent-pink)]/50 transition-colors cursor-default">{tool}</span>
                ))}
              </div>
            </div>
          </FadeIn>

          {/* Live Activity Graph */}
          <FadeIn delay={800} className="flex-1 min-h-[250px]">
            <ActivityGraph />
          </FadeIn>

        </div>
      </div>
    </main>
  );
}
