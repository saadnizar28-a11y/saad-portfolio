import FadeIn from "@/components/FadeIn";
import SystemStatus from "@/components/SystemStatus";
import HeadingBurst from "@/components/HeadingBurst";

export default function Contact() {
  return (
    <main className="min-h-screen pt-40 pb-32 px-6 relative overflow-hidden flex items-center bg-[var(--background)]">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[var(--accent-purple)]/10 pointer-events-none" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[60vw] h-[40vh] bg-[var(--accent-cyan)]/5 blur-[120px] pointer-events-none rounded-full" />

      <div className="max-w-4xl mx-auto w-full relative z-10">
        <FadeIn>
          <div className="relative inline-block w-full text-center">
            <HeadingBurst />
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tighter mb-8 leading-[1.1] relative z-10">
              Let’s Build Something <br className="hidden md:block"/>
              <span className="text-gradient hover:drop-shadow-[0_0_20px_rgba(0,240,255,0.4)] transition-all">That Stands Out.</span>
            </h1>
          </div>
          <p className="text-xl text-white/50 mb-20 text-center font-light max-w-2xl mx-auto">
            If you’re serious about growing your digital presence, let’s talk.
          </p>
        </FadeIn>
        
        <FadeIn delay={300}>
          <form className="space-y-10 max-w-2xl mx-auto glass-card p-12 rounded-[2rem] relative shadow-[0_20px_60px_rgba(0,0,0,0.5)]">
            {/* Subtle glow border top inside card */}
            <div className="absolute top-0 left-10 right-10 h-[1px] bg-gradient-to-r from-transparent via-[var(--accent-violet)] to-transparent opacity-50"></div>
            
            <div className="group relative">
              <input 
                type="text" 
                id="name"
                placeholder=" "
                className="peer w-full bg-transparent border-b border-white/20 pb-4 pt-6 text-xl text-white focus:outline-none focus:border-[var(--accent-cyan)] transition-colors"
              />
              <label 
                htmlFor="name" 
                className="absolute left-0 top-6 text-white/40 text-sm tracking-widest uppercase transition-all peer-focus:-top-2 peer-focus:text-xs peer-focus:text-[var(--accent-cyan)] peer-focus:drop-shadow-[0_0_8px_rgba(0,240,255,0.5)] peer-not-placeholder-shown:-top-2 peer-not-placeholder-shown:text-xs peer-not-placeholder-shown:text-[var(--accent-cyan)]"
              >
                Your Name
              </label>
            </div>

            <div className="group relative">
              <input 
                type="email" 
                id="email"
                placeholder=" "
                className="peer w-full bg-transparent border-b border-white/20 pb-4 pt-6 text-xl text-white focus:outline-none focus:border-[var(--accent-cyan)] transition-colors"
              />
              <label 
                htmlFor="email" 
                className="absolute left-0 top-6 text-white/40 text-sm tracking-widest uppercase transition-all peer-focus:-top-2 peer-focus:text-xs peer-focus:text-[var(--accent-cyan)] peer-focus:drop-shadow-[0_0_8px_rgba(0,240,255,0.5)] peer-not-placeholder-shown:-top-2 peer-not-placeholder-shown:text-xs peer-not-placeholder-shown:text-[var(--accent-cyan)]"
              >
                Email Address
              </label>
            </div>

            <div className="group relative">
              <textarea 
                id="message"
                placeholder=" "
                rows={3}
                className="peer w-full bg-transparent border-b border-white/20 pb-4 pt-6 text-xl text-white focus:outline-none focus:border-[var(--accent-cyan)] transition-colors resize-none"
              />
              <label 
                htmlFor="message" 
                className="absolute left-0 top-6 text-white/40 text-sm tracking-widest uppercase transition-all peer-focus:-top-2 peer-focus:text-xs peer-focus:text-[var(--accent-cyan)] peer-focus:drop-shadow-[0_0_8px_rgba(0,240,255,0.5)] peer-not-placeholder-shown:-top-2 peer-not-placeholder-shown:text-xs peer-not-placeholder-shown:text-[var(--accent-cyan)]"
              >
                Message
              </label>
            </div>

            <div className="pt-10 flex flex-col items-center gap-8">
              <button 
                type="button" 
                className="inline-flex items-center justify-center px-16 py-5 rounded-full font-bold text-white tracking-[0.15em] uppercase transition-all duration-500 w-full hover:-translate-y-1 shadow-[0_0_20px_rgba(0,240,255,0.2)] hover:shadow-[0_0_40px_rgba(0,240,255,0.4),0_10px_20px_rgba(142,45,226,0.2)]"
                style={{
                  background: "linear-gradient(45deg, var(--accent-violet), var(--accent-pink), var(--accent-cyan))"
                }}
              >
                Send Message
              </button>
              
              <div className="opacity-50 hover:opacity-100 transition-opacity">
                <SystemStatus />
              </div>
            </div>
          </form>
        </FadeIn>
      </div>
    </main>
  );
}
