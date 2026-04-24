import FadeIn from "@/components/FadeIn";
import Counter from "@/components/Counter";
import SystemStatus from "@/components/SystemStatus";
import ActivityGraph from "@/components/ActivityGraph";
import HeadingBurst from "@/components/HeadingBurst";
import InteractivePortrait from "@/components/InteractivePortrait";
import Image from "next/image";

export default function About() {
  return (
    <main className="min-h-screen pt-40 pb-32 px-6 relative overflow-hidden bg-[var(--background)] selection:bg-[var(--accent-cyan)] selection:text-black">
      {/* Cinematic Background glow */}
      <div className="absolute top-0 right-0 w-[60vw] h-[60vh] bg-gradient-radial from-[var(--accent-cyan)]/5 to-transparent blur-[150px] pointer-events-none rounded-full" />
      <div className="absolute bottom-0 left-0 w-[50vw] h-[50vh] bg-gradient-radial from-[var(--accent-violet)]/5 to-transparent blur-[150px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12">

        {/* 1. Left Column: 3D Interactive Portrait */}
        <div className="lg:col-span-4 h-[600px] md:h-[800px] lg:h-auto relative">
          <FadeIn delay={100} className="w-full h-full">
            <InteractivePortrait />
          </FadeIn>
        </div>

        {/* 2. Middle Column: Text Narrative */}
        <div className="lg:col-span-5">
          <FadeIn delay={200}>
            <div className="relative inline-block">
              <HeadingBurst />
              <h1 className="text-4xl md:text-5xl font-extrabold tracking-tighter mb-4 leading-tight relative z-10">
                I’m <span className="text-gradient">Saad Nizar</span>
              </h1>
              <h2 className="text-lg md:text-xl text-[var(--accent-cyan)] font-medium mb-12 max-w-lg">
                Freelance Digital Marketing Specialist & Graphic Designer
              </h2>
            </div>
          </FadeIn>

          <div className="space-y-8 text-lg font-light text-white/70 leading-relaxed">
            <FadeIn delay={200}>
              <p>
                Focused on brand strategy, creative marketing, and performance-driven growth. Having been raised in Dubai and with 8 years of professional experience in the UAE, I have developed a strong understanding of GCC market expectations, brand standards, and consumer behavior. This exposure allows me to approach marketing with a perspective aligned with Dubai’s competitive and high-quality business environment.
              </p>
            </FadeIn>

            <FadeIn delay={300}>
              <p>
                With a strong foundation in client-facing roles, I understand how people think, decide, and engage. I apply this insight to build marketing systems that are not only visually strong but strategically designed to attract, engage, and convert the right audience.
              </p>
            </FadeIn>

            <FadeIn delay={400}>
              <p>
                I help businesses and personal brands solve real marketing problems through digital channels — improving visibility, strengthening brand identity, and driving meaningful engagement. I have worked on multiple client projects across branding, social media, and digital campaigns, delivering creative and strategic solutions tailored to different industries and audiences.
              </p>
            </FadeIn>

            <FadeIn delay={500}>
              <p className="border-l-2 border-[var(--accent-pink)] pl-4 py-1 my-6 text-white/90">
                I also bring experience working with leading brands including <span className="text-[var(--accent-pink)] font-semibold">OPPO, Xiaomi, Nokia, HMD, and Emirates Exchange</span>, which has strengthened my understanding of customer psychology, market dynamics, and brand positioning in competitive environments.
              </p>
            </FadeIn>

            <FadeIn delay={600}>
              <p>
                Currently, I am working with a UAE-based company, Synosys, contributing to its subsidiary brand <span className="text-[var(--accent-cyan)] font-medium">Locator</span>, a GPS tracking and fleet management SaaS platform, as a Creative Marketing Strategist & Designer. I handle digital marketing, branding, and creative design initiatives aligned with GCC market standards, supporting solutions in AI, IoT, and intelligent fleet management systems.
              </p>
            </FadeIn>

            {/* Education Section */}
            <FadeIn delay={700}>
              <div className="mt-12 pt-10 border-t border-white/10">
                <h3 className="text-2xl font-bold text-white mb-6 tracking-tight">Education</h3>
                <ul className="space-y-4">
                  <li className="flex gap-4 items-start">
                    <span className="text-[var(--accent-violet)] mt-1">⯌</span>
                    <p>Bachelor of Business Administration (BBA) from International College of Law, Business Administration & Technology (ICLBAT), Ajman, an institution under the Atlas Group.</p>
                  </li>
                  <li className="flex gap-4 items-start">
                    <span className="text-[var(--accent-violet)] mt-1">⯌</span>
                    <p>MBA with specialization in Airline and Airport Management from Brillianz Institute of Management and Studies (BIMS), Dubai.</p>
                  </li>
                </ul>
              </div>
            </FadeIn>

            {/* What I Do Section */}
            <FadeIn delay={800}>
              <div className="mt-12 pt-10 border-t border-white/10">
                <h3 className="text-2xl font-bold text-white mb-6 tracking-tight">What I Do</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {[
                    "Digital Marketing Strategy",
                    "Performance Marketing & Lead Gen",
                    "Social Media Marketing",
                    "Search Engine Optimization (SEO)",
                    "Branding & Personal Branding",
                    "Creative Campaign Development",
                    "Graphic Design (Posters, Logos)",
                    "UI Design & Visual Identity"
                  ].map((service, i) => (
                    <div key={i} className="bg-white/5 border border-white/10 px-4 py-3 rounded-xl flex items-center gap-3 text-sm font-medium hover:bg-white/10 transition-colors">
                      <div className="w-1.5 h-1.5 rounded-full bg-[var(--accent-cyan)] shadow-[0_0_8px_var(--accent-cyan)]" />
                      {service}
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={900}>
              <div className="mt-12 pt-10 border-t border-white/10 space-y-6">
                <p>
                  Alongside this, I offer freelance services on a global scale, covering digital marketing, creative branding, visual identity design, and strategic content development — helping brands build a strong, consistent, and impactful presence across platforms.
                </p>
                <p>
                  My approach is simple: <span className="text-white font-medium">every design and every strategy must serve a purpose</span>. I focus on combining creative thinking with clear business objectives, ensuring that the work not only looks good but performs effectively.
                </p>
                <p>
                  Currently, I’m focused on building complete brand and digital presence systems — from idea and positioning to execution — helping businesses stand out in competitive markets. I am now seeking opportunities in the GCC market, aiming to contribute as a creative and strategic professional who aligns branding, design, and marketing with real business growth.
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={1000}>
              <div className="pt-8 mt-8 border-t border-[var(--accent-pink)]/20">
                <p className="text-white font-medium text-2xl leading-tight">
                  I don’t just create visuals or run campaigns — <br className="hidden md:block" />
                  <span className="text-[var(--accent-pink)] drop-shadow-[0_0_15px_rgba(255,42,109,0.3)]">I build marketing systems that deliver real impact.</span>
                </p>
              </div>
            </FadeIn>
          </div>
        </div>

        {/* 3. Right Column: Interactive Widgets */}
        <div className="lg:col-span-3 flex flex-col gap-6 pt-6">

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
