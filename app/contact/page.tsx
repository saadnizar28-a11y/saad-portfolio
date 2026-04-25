import { Metadata } from "next";
import FadeIn from "@/components/FadeIn";
import SystemStatus from "@/components/SystemStatus";
import HeadingBurst from "@/components/HeadingBurst";

export const metadata: Metadata = {
  title: "Contact Saad Nizar | Digital Marketing & Design Inquiries",
  description: "Get in touch with Saad Nizar for digital marketing strategies, web design projects, or branding consultations in Dubai and the UAE.",
  keywords: ["Contact Saad Nizar", "Hire Digital Marketer Dubai", "Creative Designer Contact UAE", "Freelance Marketing Consultant"],
  openGraph: {
    title: "Contact Saad Nizar | Digital Marketing & Design",
    description: "Get in touch with Saad Nizar for digital marketing strategies and branding consultations in Dubai.",
    url: "https://saadnizar.com/contact",
  }
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  "name": "Contact Saad Nizar",
  "description": "Contact page for Saad Nizar's digital marketing and design services.",
  "mainEntity": {
    "@type": "Person",
    "name": "Saad Nizar",
    "jobTitle": "Digital Marketing Strategist",
    "email": "hello@saadnizar.com", 
    "url": "https://saadnizar.com"
  }
};

export default function Contact() {
  return (
    <main className="min-h-screen pt-40 pb-32 px-6 relative overflow-hidden flex items-center bg-[var(--background)]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[var(--accent-purple)]/10 pointer-events-none" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[60vw] h-[40vh] bg-[var(--accent-cyan)]/5 blur-[120px] pointer-events-none rounded-full" />

      <div className="max-w-[1400px] mx-auto w-full relative z-10">
        <FadeIn>
          <div className="relative inline-block w-full text-center">
            <HeadingBurst />
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tighter mb-8 leading-[1.1] relative z-10">
              Let’s Build Something <br className="hidden md:block"/>
              <span className="text-gradient hover:drop-shadow-[0_0_20px_rgba(0,240,255,0.4)] transition-all">That Stands Out.</span>
            </h1>
          </div>
          <p className="text-xl text-white/50 mb-16 text-center font-light max-w-2xl mx-auto">
            If you’re serious about growing your digital presence, let’s talk.
          </p>
        </FadeIn>
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">
          
          {/* Direct Message Form (Spans 7 columns) */}
          <div className="lg:col-span-7">
            <FadeIn delay={300} className="h-full">
              <form className="h-full space-y-8 glass-card p-10 md:p-14 rounded-[2.5rem] relative shadow-[0_20px_60px_rgba(0,0,0,0.5)] border border-[rgba(255,255,255,0.05)]">
                {/* Subtle glow border top inside card */}
                <div className="absolute top-0 left-10 right-10 h-[1px] bg-gradient-to-r from-transparent via-[var(--accent-cyan)] to-transparent opacity-50" />
                
                <h3 className="text-3xl font-bold text-white mb-2 tracking-tight">Send a Direct Message</h3>
                <p className="text-white/50 mb-10">Fill out the form below and I&apos;ll get back to you shortly.</p>

                <div className="group relative">
                  <input type="text" id="name" placeholder=" " className="peer w-full bg-transparent border-b border-white/20 pb-4 pt-6 text-xl text-white focus:outline-none focus:border-[var(--accent-cyan)] transition-colors" />
                  <label htmlFor="name" className="absolute left-0 top-6 text-white/40 text-sm tracking-widest uppercase transition-all peer-focus:-top-2 peer-focus:text-xs peer-focus:text-[var(--accent-cyan)] peer-focus:drop-shadow-[0_0_8px_rgba(0,240,255,0.5)] peer-not-placeholder-shown:-top-2 peer-not-placeholder-shown:text-xs peer-not-placeholder-shown:text-[var(--accent-cyan)]">Your Name</label>
                </div>

                <div className="group relative">
                  <input type="email" id="email" placeholder=" " className="peer w-full bg-transparent border-b border-white/20 pb-4 pt-6 text-xl text-white focus:outline-none focus:border-[var(--accent-cyan)] transition-colors" />
                  <label htmlFor="email" className="absolute left-0 top-6 text-white/40 text-sm tracking-widest uppercase transition-all peer-focus:-top-2 peer-focus:text-xs peer-focus:text-[var(--accent-cyan)] peer-focus:drop-shadow-[0_0_8px_rgba(0,240,255,0.5)] peer-not-placeholder-shown:-top-2 peer-not-placeholder-shown:text-xs peer-not-placeholder-shown:text-[var(--accent-cyan)]">Email Address</label>
                </div>

                <div className="group relative">
                  <textarea id="message" placeholder=" " rows={3} className="peer w-full bg-transparent border-b border-white/20 pb-4 pt-6 text-xl text-white focus:outline-none focus:border-[var(--accent-cyan)] transition-colors resize-none" />
                  <label htmlFor="message" className="absolute left-0 top-6 text-white/40 text-sm tracking-widest uppercase transition-all peer-focus:-top-2 peer-focus:text-xs peer-focus:text-[var(--accent-cyan)] peer-focus:drop-shadow-[0_0_8px_rgba(0,240,255,0.5)] peer-not-placeholder-shown:-top-2 peer-not-placeholder-shown:text-xs peer-not-placeholder-shown:text-[var(--accent-cyan)]">Message</label>
                </div>

                <div className="pt-8 flex flex-col items-start gap-8">
                  <button type="button" className="inline-flex items-center justify-center px-12 py-5 rounded-full font-bold text-white tracking-[0.15em] uppercase transition-all duration-500 hover:-translate-y-1 shadow-[0_0_20px_rgba(0,240,255,0.2)] hover:shadow-[0_0_40px_rgba(0,240,255,0.4),0_10px_20px_rgba(142,45,226,0.2)]" style={{ background: "linear-gradient(45deg, var(--accent-violet), var(--accent-pink), var(--accent-cyan))" }}>
                    Send Message
                  </button>
                  <div className="opacity-50 hover:opacity-100 transition-opacity">
                    <SystemStatus />
                  </div>
                </div>
              </form>
            </FadeIn>
          </div>

          {/* Bento Social Blocks (Spans 5 columns) */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8">
            
            {/* Instagram Block (Spans full width of this column) */}
            <FadeIn delay={400} className="sm:col-span-2">
              <a href="https://www.instagram.com/waura_ai?igsh=enZuMmRmNTFxcWow" target="_blank" className="group glass-card p-10 rounded-[2.5rem] border border-[rgba(255,255,255,0.05)] hover:border-[#bc1888]/40 transition-all duration-500 relative overflow-hidden flex flex-col items-center text-center">
                <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-tr from-[#f09433] via-[#e6683c] to-[#bc1888] opacity-10 blur-[80px] rounded-full transition-all duration-700 group-hover:opacity-30 group-hover:scale-110" />
                
                <div className="relative w-20 h-20 mb-6 rounded-2xl p-[1px] bg-gradient-to-tr from-[#f09433] via-[#e6683c] to-[#bc1888] shadow-[0_0_30px_rgba(225,48,108,0.3)] group-hover:shadow-[0_0_50px_rgba(225,48,108,0.6)] transition-all duration-500">
                  <div className="w-full h-full bg-black/50 backdrop-blur-md rounded-[15px] flex items-center justify-center">
                    <svg className="w-10 h-10 text-white drop-shadow-[0_0_10px_white]" viewBox="0 0 24 24">
                      <defs>
                        <linearGradient id="ig-contact" x1="0%" y1="100%" x2="100%" y2="0%">
                          <stop offset="0%" stopColor="#f09433" />
                          <stop offset="25%" stopColor="#e6683c" />
                          <stop offset="50%" stopColor="#dc2743" />
                          <stop offset="75%" stopColor="#cc2366" />
                          <stop offset="100%" stopColor="#bc1888" />
                        </linearGradient>
                      </defs>
                      <path fill="url(#ig-contact)" d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-white mb-1 relative z-10">Instagram</h3>
                <p className="text-white/50 text-sm tracking-widest uppercase relative z-10">@waura_ai</p>
              </a>
            </FadeIn>

            {/* LinkedIn Block */}
            <FadeIn delay={500}>
              <a href="https://www.linkedin.com/in/saad-nizarudeen-694624175/" target="_blank" className="group h-full glass-card p-8 rounded-[2rem] border border-[rgba(255,255,255,0.05)] hover:border-[#0077b5]/50 transition-all duration-500 relative overflow-hidden flex flex-col justify-between min-h-[220px]">
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#0077b5]/10 blur-3xl rounded-full transition-all duration-700 group-hover:bg-[#0077b5]/30 group-hover:scale-150" />
                <div className="relative z-10 w-14 h-14 rounded-[14px] border border-[#0077b5] bg-[#0077b5]/10 flex items-center justify-center shadow-[0_0_15px_rgba(0,119,181,0.3)] mb-6 transition-transform duration-500 group-hover:scale-110">
                  <svg className="w-6 h-6 text-[#0077b5] drop-shadow-[0_0_8px_rgba(0,119,181,0.8)]" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                </div>
                <div className="relative z-10">
                  <h3 className="text-xl font-bold text-white mb-1">LinkedIn</h3>
                  <p className="text-white/40 text-xs tracking-widest uppercase">Connect</p>
                </div>
              </a>
            </FadeIn>

            {/* WhatsApp Block */}
            <FadeIn delay={600}>
              <a href="https://wa.me/971523887970" target="_blank" className="group h-full glass-card p-8 rounded-[2rem] border border-[rgba(255,255,255,0.05)] hover:border-[#25D366]/50 transition-all duration-500 relative overflow-hidden flex flex-col justify-between min-h-[220px]">
                <div className="absolute bottom-0 right-0 w-32 h-32 bg-[#25D366]/10 blur-3xl rounded-full transition-all duration-700 group-hover:bg-[#25D366]/30 group-hover:scale-150" />
                <div className="relative z-10 w-14 h-14 rounded-[14px] border border-[#25D366] bg-[#25D366]/10 flex items-center justify-center shadow-[0_0_15px_rgba(37,211,102,0.3)] mb-6 transition-transform duration-500 group-hover:scale-110">
                  <svg className="w-7 h-7 text-[#25D366] drop-shadow-[0_0_8px_rgba(37,211,102,0.8)]" fill="currentColor" viewBox="0 0 24 24"><path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86s.274.072.376-.043c.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564.289.13.332.202c.045.072.045.419-.099.824zm-3.423-14.416c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm.029 18.88c-1.161 0-2.305-.292-3.318-.844l-3.677.964.984-3.595c-.607-1.052-.927-2.246-.926-3.468.001-3.825 3.113-6.937 6.937-6.937 1.856.001 3.598.723 4.907 2.034 1.31 1.311 2.031 3.054 2.03 4.908-.001 3.825-3.113 6.938-6.937 6.938z"/></svg>
                  </div>
                  <div className="relative z-10">
                    <h3 className="text-xl font-bold text-white mb-1">WhatsApp</h3>
                    <p className="text-white/40 text-xs tracking-widest uppercase">Chat</p>
                  </div>
                </a>
              </FadeIn>

              {/* Location Mention Block (Spans 2 columns) */}
              <FadeIn delay={700} className="sm:col-span-2">
                <div className="glass-card p-8 rounded-[2rem] border border-[rgba(255,255,255,0.05)] flex flex-col sm:flex-row sm:items-center justify-between gap-6 overflow-hidden relative">
                   <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-32 bg-[var(--accent-violet)]/10 blur-[60px] rounded-full pointer-events-none" />
                   <div className="relative z-10">
                      <p className="text-white/50 text-xs tracking-widest uppercase mb-1">Location / Timezone</p>
                      <p className="text-white font-semibold text-lg md:text-xl">Dubai, United Arab Emirates (GST)</p>
                   </div>
                   <div className="relative z-10 w-14 h-14 rounded-full border border-[var(--accent-cyan)]/30 flex items-center justify-center bg-[var(--accent-cyan)]/10 shadow-[0_0_20px_rgba(0,210,255,0.1)]">
                      <span className="text-[var(--accent-cyan)] font-bold tracking-widest text-xs drop-shadow-[0_0_5px_rgba(0,210,255,0.5)]">DXB</span>
                   </div>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
    </main>
  );
}
