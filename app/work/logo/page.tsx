import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import FadeIn from "@/components/FadeIn";

export const metadata: Metadata = {
  title: "Logofolio & Iconography | Saad Nizar Portfolio",
  description: "A curated logofolio featuring minimalist corporate vector marks, typography-based fashion logos, and sleek tech app icons.",
  keywords: ["Logo Design", "Logofolio", "Brand Marks", "Vector Graphics", "App Icons", "Saad Nizar", "Logo Designer Dubai"],
  openGraph: {
    title: "Logofolio & Iconography | Saad Nizar",
    description: "A curated logofolio featuring minimalist corporate vector marks and modern app icons.",
    url: "https://saadnizar.com/work/logo",
    siteName: "Saad Nizar Portfolio",
    images: [
      {
        url: "/logo_real_1.png",
        width: 1200,
        height: 630,
        alt: "Abstract corporate logo design",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  "name": "Logofolio & Iconography Gallery",
  "description": "A showcase of premium logo designs and brand marks.",
  "author": {
    "@type": "Person",
    "name": "Saad Nizar"
  },
  "hasPart": [
    {
      "@type": "VisualArtwork",
      "name": "Corporate Monogram Vector Logo",
      "image": "https://saadnizar.com/logo_real_1.png",
      "artMedium": "Vector Graphics",
      "artform": "Logo"
    },
    {
      "@type": "VisualArtwork",
      "name": "Fashion Typography Tag Logo",
      "image": "https://saadnizar.com/logo_real_2.png",
      "artMedium": "Print & Typography",
      "artform": "Logo"
    },
    {
      "@type": "VisualArtwork",
      "name": "Fintech Mobile App Icon",
      "image": "https://saadnizar.com/logo_real_3.png",
      "artMedium": "Digital Iconography",
      "artform": "App Icon"
    }
  ]
};

export default function LogoGallery() {
  return (
    <main className="min-h-screen pt-40 pb-32 relative bg-[var(--background)] selection:bg-[var(--accent-purple)]/30">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      {/* Ambient background glows */}
      <div className="absolute top-0 right-0 w-[50vw] h-[50vh] bg-gradient-radial from-[var(--accent-purple)]/10 to-transparent blur-[150px] pointer-events-none rounded-full" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Navigation & Header */}
        <FadeIn className="mb-16">
          <Link href="/work" className="inline-flex items-center text-white/50 hover:text-white transition-colors text-sm font-medium tracking-widest uppercase mb-8 group">
            <span className="mr-2 transform group-hover:-translate-x-1 transition-transform">←</span> Back to Work
          </Link>
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tighter mb-6">
            Logo<span className="text-[var(--accent-purple)]">folio.</span>
          </h1>
          <p className="text-xl text-white/60 font-light max-w-2xl leading-relaxed">
            Distilling complex brand philosophies into simple, memorable, and scalable vector graphics.
          </p>
        </FadeIn>

        {/* Masonry / Staggered Gallery */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          
          {/* Item 1: Large Feature */}
          <FadeIn delay={100} className="md:col-span-12 group">
            <div className="relative overflow-hidden rounded-2xl bg-white/5 border border-white/10 p-4 md:p-8 hover:border-[var(--accent-purple)]/30 transition-colors">
              <Image 
                src="/logo_real_1.png" 
                alt="Corporate abstract logo design" 
                width={1200}
                height={1200}
                className="w-full h-auto max-h-[60vh] object-contain rounded-xl group-hover:scale-[1.02] transition-transform duration-700 ease-out"
              />
              <div className="mt-6 flex flex-col md:flex-row md:items-end justify-between gap-4">
                <div>
                  <h2 className="text-2xl font-bold tracking-tight">Vectra Corporation</h2>
                  <p className="text-white/50 text-sm">Abstract Monogram Logomark</p>
                </div>
                <div className="flex gap-2">
                  <span className="px-3 py-1 rounded-full bg-white/10 text-xs font-bold text-white/70">Vector Graphic</span>
                  <span className="px-3 py-1 rounded-full bg-white/10 text-xs font-bold text-white/70">Brand Architecture</span>
                </div>
              </div>
            </div>
          </FadeIn>

          {/* Item 2: Half Width */}
          <FadeIn delay={200} className="md:col-span-6 group">
            <div className="relative overflow-hidden rounded-2xl bg-white/5 border border-white/10 p-4 md:p-8 hover:border-[var(--accent-purple)]/30 transition-colors h-full flex flex-col">
              <div className="flex-1 flex items-center justify-center overflow-hidden rounded-xl">
                <Image 
                  src="/logo_real_2.png" 
                  alt="Minimalist fashion typography logo" 
                  width={1200}
                  height={1200}
                  className="w-full h-auto object-cover group-hover:scale-[1.03] transition-transform duration-700 ease-out"
                />
              </div>
              <div className="mt-6">
                <h2 className="text-xl font-bold tracking-tight">Olio Studios</h2>
                <p className="text-white/50 text-sm">Custom Serif Typography Mark</p>
              </div>
            </div>
          </FadeIn>

          {/* Item 3: Half Width */}
          <FadeIn delay={300} className="md:col-span-6 group">
            <div className="relative overflow-hidden rounded-2xl bg-white/5 border border-white/10 p-4 md:p-8 hover:border-[var(--accent-purple)]/30 transition-colors h-full flex flex-col">
              <div className="flex-1 flex items-center justify-center overflow-hidden rounded-xl">
                <Image 
                  src="/logo_real_3.png" 
                  alt="Fintech app icon design" 
                  width={1200}
                  height={1200}
                  className="w-full h-auto object-cover group-hover:scale-[1.03] transition-transform duration-700 ease-out"
                />
              </div>
              <div className="mt-6">
                <h2 className="text-xl font-bold tracking-tight">PayFlow App</h2>
                <p className="text-white/50 text-sm">iOS Iconography</p>
              </div>
            </div>
          </FadeIn>

        </div>
      </div>
    </main>
  );
}
