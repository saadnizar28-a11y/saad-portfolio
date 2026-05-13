import Link from "next/link";
import FadeIn from "./FadeIn";

export default function Footer() {
  return (
    <footer className="relative py-20 px-6 border-t border-[rgba(255,255,255,0.02)] overflow-hidden">
      
      {/* Background Glows */}
      <div className="absolute top-0 right-1/4 w-[50vw] h-[50vh] bg-gradient-radial from-[var(--accent-purple)]/10 to-transparent blur-[150px] pointer-events-none rounded-full" />
      <div className="absolute bottom-0 left-1/4 w-[40vw] h-[40vh] bg-gradient-radial from-[var(--accent-pink)]/5 to-transparent blur-[150px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto relative z-10 glass-card rounded-3xl p-10 md:p-16 border-t-0 border-[rgba(255,255,255,0.02)]">
        <FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
            
            {/* Brand */}
            <div className="col-span-1 md:col-span-2">
              <Link href="/" className="flex items-center gap-4 mb-6 group w-12 h-12">
                <img src="/logo.png" alt="Logo" className="w-full h-full object-contain drop-shadow-[0_0_10px_rgba(0,240,255,0.3)] group-hover:drop-shadow-[0_0_20px_rgba(0,240,255,0.8)] transition-all duration-300 group-hover:scale-110" />
              </Link>
              <p className="text-white/40 text-sm leading-relaxed max-w-sm">
                Designing future experiences. Bridging the gap between sophisticated aesthetics and high-performance engineering.
              </p>
            </div>

            {/* Links */}
            <div>
              <h3 className="text-[var(--accent-pink)] font-semibold tracking-widest text-xs uppercase mb-6 drop-shadow-[0_0_10px_rgba(217,76,241,0.5)]">Navigation</h3>
              <ul className="space-y-4">
                {['Home', 'About', 'Services', 'Work', 'Blog', 'Contact'].map((item) => (
                  <li key={item}>
                    <Link href={item === 'Home' ? '/' : `/${item.toLowerCase()}`} className="text-white/40 hover:text-[var(--accent-cyan)] transition-colors text-sm uppercase tracking-wider">
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Socials */}
            <div>
              <h3 className="text-[var(--accent-cyan)] font-semibold tracking-widest text-xs uppercase mb-6 drop-shadow-[0_0_10px_rgba(0,210,255,0.5)]">Connect</h3>
              <ul className="space-y-4">
                {['Twitter', 'LinkedIn', 'Instagram', 'Dribbble'].map((social) => (
                  <li key={social}>
                    <a href="#" className="text-white/40 hover:text-white transition-colors text-sm tracking-wider">
                      {social}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            
          </div>
        </FadeIn>

        <FadeIn delay={200}>
          <div className="pt-8 border-t border-[rgba(255,255,255,0.05)] flex flex-col md:flex-row items-center justify-between gap-4 text-xs font-mono text-white/30 tracking-widest">
            <p>© {new Date().getFullYear()} SAAD. ALL RIGHTS RESERVED.</p>
            <p className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[var(--accent-cyan)] shadow-[0_0_10px_var(--accent-cyan)] animate-pulse" />
              STATUS: ACCEPTING PROJECTS
            </p>
          </div>
        </FadeIn>
      </div>
    </footer>
  );
}
