import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import FadeIn from "@/components/FadeIn";

export const metadata: Metadata = {
  title: "Digital Interfaces & UI/UX Design | Saad Nizar Portfolio",
  description: "Explore highly functional, aesthetic digital interfaces. SaaS dashboards, fintech mobile apps, and e-commerce UI/UX designs by Saad Nizar.",
  keywords: ["UI/UX Design", "Digital Interfaces", "App Design", "Dashboard UI", "Web Design", "Saad Nizar", "UI Designer Dubai"],
  openGraph: {
    title: "Digital Interfaces & UI/UX Design | Saad Nizar",
    description: "Explore highly functional, aesthetic digital interfaces including SaaS dashboards and mobile apps.",
    url: "https://saadnizar.com/work/ui-ux",
    siteName: "Saad Nizar Portfolio",
    images: [
      {
        url: "/ui_real_1.png",
        width: 1200,
        height: 630,
        alt: "Clean SaaS Analytics Dashboard UI",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  "name": "Digital Interfaces & UI/UX Design Gallery",
  "description": "A showcase of high-performance digital interfaces and user experiences.",
  "author": {
    "@type": "Person",
    "name": "Saad Nizar"
  },
  "hasPart": [
    {
      "@type": "VisualArtwork",
      "name": "SaaS Analytics Web Dashboard",
      "image": "https://saadnizar.com/ui_real_1.png",
      "artMedium": "UI/UX Design",
      "artform": "Dashboard Interface"
    },
    {
      "@type": "VisualArtwork",
      "name": "Fintech Mobile Application UI",
      "image": "https://saadnizar.com/ui_real_2.png",
      "artMedium": "UI/UX Design",
      "artform": "Mobile App"
    },
    {
      "@type": "VisualArtwork",
      "name": "High-End E-commerce Web Interface",
      "image": "https://saadnizar.com/ui_real_3.png",
      "artMedium": "UI/UX Design",
      "artform": "Web Design"
    }
  ]
};

export default function UiUxGallery() {
  return (
    <main className="min-h-screen pt-40 pb-32 relative bg-[var(--background)] selection:bg-[var(--accent-cyan)]/30">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      {/* Ambient background glows */}
      <div className="absolute top-0 right-0 w-[50vw] h-[50vh] bg-gradient-radial from-[var(--accent-cyan)]/10 to-transparent blur-[150px] pointer-events-none rounded-full" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Navigation & Header */}
        <FadeIn className="mb-16">
          <Link href="/work" className="inline-flex items-center text-white/50 hover:text-white transition-colors text-sm font-medium tracking-widest uppercase mb-8 group">
            <span className="mr-2 transform group-hover:-translate-x-1 transition-transform">←</span> Back to Work
          </Link>
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tighter mb-6">
            Digital <span className="text-[var(--accent-cyan)]">Interfaces.</span>
          </h1>
          <p className="text-xl text-white/60 font-light max-w-2xl leading-relaxed">
            Where aesthetic beauty meets user psychology. Clean, high-performance dashboards, apps, and web experiences.
          </p>
        </FadeIn>

        {/* Masonry / Staggered Gallery */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          
          {/* Item 1: Large Feature */}
          <FadeIn delay={100} className="md:col-span-12 group">
            <div className="relative overflow-hidden rounded-2xl bg-white/5 border border-white/10 p-4 md:p-8 hover:border-[var(--accent-cyan)]/30 transition-colors">
              <Image 
                src="/ui_real_1.png" 
                alt="SaaS analytics dashboard UI mockup" 
                width={1600}
                height={1200}
                className="w-full h-auto max-h-[70vh] object-cover rounded-xl group-hover:scale-[1.02] transition-transform duration-700 ease-out"
              />
              <div className="mt-6 flex flex-col md:flex-row md:items-end justify-between gap-4">
                <div>
                  <h2 className="text-2xl font-bold tracking-tight">DataStack SaaS Platform</h2>
                  <p className="text-white/50 text-sm">Web Dashboard & Data Visualization</p>
                </div>
                <div className="flex gap-2">
                  <span className="px-3 py-1 rounded-full bg-white/10 text-xs font-bold text-white/70">UI Design</span>
                  <span className="px-3 py-1 rounded-full bg-white/10 text-xs font-bold text-white/70">Prototyping</span>
                </div>
              </div>
            </div>
          </FadeIn>

          {/* Item 2: Half Width */}
          <FadeIn delay={200} className="md:col-span-6 group">
            <div className="relative overflow-hidden rounded-2xl bg-white/5 border border-white/10 p-4 md:p-8 hover:border-[var(--accent-cyan)]/30 transition-colors h-full flex flex-col">
              <div className="flex-1 flex items-center justify-center overflow-hidden rounded-xl">
                <Image 
                  src="/ui_real_2.png" 
                  alt="Fintech mobile app UI mockup" 
                  width={1200}
                  height={1200}
                  className="w-full h-auto object-cover group-hover:scale-[1.03] transition-transform duration-700 ease-out"
                />
              </div>
              <div className="mt-6">
                <h2 className="text-xl font-bold tracking-tight">Nova Finance</h2>
                <p className="text-white/50 text-sm">iOS Mobile Application</p>
              </div>
            </div>
          </FadeIn>

          {/* Item 3: Half Width */}
          <FadeIn delay={300} className="md:col-span-6 group">
            <div className="relative overflow-hidden rounded-2xl bg-white/5 border border-white/10 p-4 md:p-8 hover:border-[var(--accent-cyan)]/30 transition-colors h-full flex flex-col">
              <div className="flex-1 flex items-center justify-center overflow-hidden rounded-xl">
                <Image 
                  src="/ui_real_3.png" 
                  alt="Modern e-commerce interface design" 
                  width={1200}
                  height={1200}
                  className="w-full h-auto object-cover group-hover:scale-[1.03] transition-transform duration-700 ease-out"
                />
              </div>
              <div className="mt-6">
                <h2 className="text-xl font-bold tracking-tight">Atelier Storefront</h2>
                <p className="text-white/50 text-sm">E-commerce Web Experience</p>
              </div>
            </div>
          </FadeIn>

        </div>
      </div>
    </main>
  );
}
