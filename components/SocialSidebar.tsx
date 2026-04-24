"use client";

import Link from "next/link";

export default function SocialSidebar() {
  return (
    <div className="fixed left-4 md:left-8 top-1/2 -translate-y-1/2 z-50 pointer-events-auto mix-blend-screen">
      
      {/* Interactive Hit Area */}
      <div className="relative w-16 h-16 flex items-center justify-center group">
        
        {/* Collapsed State: 3D Transparent Sphere with Rotating Icons Inside */}
        <div className="absolute inset-0 m-auto w-16 h-16 rounded-full border border-white/20 bg-gradient-to-br from-black/80 to-white/10 backdrop-blur-md shadow-[0_0_40px_rgba(255,255,255,0.15),inset_0_0_20px_rgba(255,255,255,0.2)] flex flex-col items-center justify-center transition-all duration-500 group-hover:scale-50 group-hover:opacity-0 overflow-hidden cursor-pointer">
          
          {/* Glass Highlights (3D Sphere effect) */}
          <div className="absolute top-1 left-2 w-8 h-2.5 bg-white/40 rounded-full blur-[2px] rotate-[-30deg] z-20" />
          <div className="absolute bottom-1 right-2 w-5 h-1.5 bg-white/20 rounded-full blur-[2px] rotate-[-30deg] z-20" />

          {/* Tiny Rotating Glowing Icons Inside */}
          <div className="z-10 flex flex-col items-center gap-1 opacity-90 animate-[spin_6s_linear_infinite]">
            {/* LinkedIn Tiny */}
            <div className="w-4 h-4 rounded-[4px] border border-[#0077b5] bg-[#0077b5]/20 flex items-center justify-center shadow-[0_0_8px_rgba(0,119,181,0.8)]">
              <svg className="w-2.5 h-2.5 text-[#0077b5] drop-shadow-[0_0_3px_#0077b5]" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
            </div>
            {/* WhatsApp Tiny */}
            <div className="w-4 h-4 rounded-[4px] border border-[#25D366] bg-[#25D366]/20 flex items-center justify-center shadow-[0_0_8px_rgba(37,211,102,0.8)]">
              <svg className="w-2.5 h-2.5 text-[#25D366] drop-shadow-[0_0_3px_#25D366]" fill="currentColor" viewBox="0 0 24 24"><path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86s.274.072.376-.043c.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564.289.13.332.202c.045.072.045.419-.099.824zm-3.423-14.416c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm.029 18.88c-1.161 0-2.305-.292-3.318-.844l-3.677.964.984-3.595c-.607-1.052-.927-2.246-.926-3.468.001-3.825 3.113-6.937 6.937-6.937 1.856.001 3.598.723 4.907 2.034 1.31 1.311 2.031 3.054 2.03 4.908-.001 3.825-3.113 6.938-6.937 6.938z"/></svg>
            </div>
            {/* Insta Tiny */}
            <div className="w-4 h-4 rounded-[4px] p-[0.5px] bg-gradient-to-tr from-[#f09433] to-[#bc1888] shadow-[0_0_8px_rgba(225,48,108,0.8)]">
              <div className="w-full h-full bg-[#bc1888]/20 rounded-[3px] flex items-center justify-center">
                <svg className="w-2.5 h-2.5 text-white drop-shadow-[0_0_3px_white]" viewBox="0 0 24 24"><path fill="currentColor" d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
              </div>
            </div>
          </div>
        </div>

        {/* Expanded State: Social Icons bursting out */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col gap-4 opacity-0 scale-50 pointer-events-none group-hover:pointer-events-auto group-hover:opacity-100 group-hover:scale-100 transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)]">
          
          {/* LinkedIn - Cyan */}
          <Link href="https://www.linkedin.com/in/saad-nizarudeen-694624175/" target="_blank" className="group/link block">
            <div className="w-11 h-11 rounded-[14px] border border-[#0077b5] bg-transparent shadow-[0_0_15px_rgba(0,119,181,0.4),inset_0_0_10px_rgba(0,119,181,0.2)] flex items-center justify-center transition-all duration-300 group-hover/link:scale-110 group-hover/link:shadow-[0_0_25px_rgba(0,119,181,0.8),inset_0_0_15px_rgba(0,119,181,0.4)] group-hover/link:bg-[#0077b5]/10">
              <svg className="w-5 h-5 text-[#0077b5] drop-shadow-[0_0_8px_rgba(0,119,181,1)]" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
            </div>
          </Link>

          {/* WhatsApp - Green */}
          <Link href="https://wa.me/971523887970" target="_blank" className="group/link block">
            <div className="w-11 h-11 rounded-[14px] border border-[#25D366] bg-transparent shadow-[0_0_15px_rgba(37,211,102,0.4),inset_0_0_10px_rgba(37,211,102,0.2)] flex items-center justify-center transition-all duration-300 group-hover/link:scale-110 group-hover/link:shadow-[0_0_25px_rgba(37,211,102,0.8),inset_0_0_15px_rgba(37,211,102,0.4)] group-hover/link:bg-[#25D366]/10">
              <svg className="w-6 h-6 text-[#25D366] drop-shadow-[0_0_8px_rgba(37,211,102,1)]" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86s.274.072.376-.043c.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564.289.13.332.202c.045.072.045.419-.099.824zm-3.423-14.416c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm.029 18.88c-1.161 0-2.305-.292-3.318-.844l-3.677.964.984-3.595c-.607-1.052-.927-2.246-.926-3.468.001-3.825 3.113-6.937 6.937-6.937 1.856.001 3.598.723 4.907 2.034 1.31 1.311 2.031 3.054 2.03 4.908-.001 3.825-3.113 6.938-6.937 6.938z"/>
              </svg>
            </div>
          </Link>

          {/* Instagram - Pink/Orange */}
          <Link href="https://www.instagram.com/waura_ai?igsh=enZuMmRmNTFxcWow" target="_blank" className="group/link block">
            <div className="w-11 h-11 rounded-[14px] p-[1px] bg-gradient-to-tr from-[#f09433] via-[#e6683c] to-[#bc1888] shadow-[0_0_15px_rgba(225,48,108,0.4)] transition-all duration-300 group-hover/link:scale-110 group-hover/link:shadow-[0_0_25px_rgba(225,48,108,0.8)]">
              <div className="w-full h-full rounded-[13px] bg-black flex items-center justify-center shadow-[inset_0_0_10px_rgba(225,48,108,0.3)] group-hover/link:bg-[#bc1888]/10 transition-colors duration-300">
                <svg className="w-5 h-5 drop-shadow-[0_0_8px_rgba(225,48,108,1)]" viewBox="0 0 24 24">
                  <defs>
                    <linearGradient id="ig-grad" x1="0%" y1="100%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#f09433" />
                      <stop offset="25%" stopColor="#e6683c" />
                      <stop offset="50%" stopColor="#dc2743" />
                      <stop offset="75%" stopColor="#cc2366" />
                      <stop offset="100%" stopColor="#bc1888" />
                    </linearGradient>
                  </defs>
                  <path fill="url(#ig-grad)" d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </div>
            </div>
          </Link>
        </div>

      </div>
    </div>
  );
}
