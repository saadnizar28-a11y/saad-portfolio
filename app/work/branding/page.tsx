import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import FadeIn from "@/components/FadeIn";

export const metadata: Metadata = {
  title: "Brand Identity & Packaging Design | Saad Nizar Portfolio",
  description: "View ultra-realistic corporate branding mockups, packaging designs, and digital brand books. Premium brand identity design by Saad Nizar.",
  keywords: ["Brand Identity", "Packaging Design", "Corporate Branding", "Stationery Design", "Mockups", "Saad Nizar", "Branding Agency Dubai"],
  openGraph: {
    title: "Brand Identity Design | Saad Nizar",
    description: "Ultra-realistic corporate branding mockups and packaging designs.",
    url: "https://saadnizar.com/work/branding",
    siteName: "Saad Nizar Portfolio",
    images: [
      {
        url: "/branding_real_1.png",
        width: 1200,
        height: 630,
        alt: "Corporate stationery branding mockup",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  "name": "Brand Identity Design Gallery",
  "description": "A collection of realistic branding, stationery, and packaging design projects.",
  "author": {
    "@type": "Person",
    "name": "Saad Nizar"
  },
  "hasPart": [
    {
      "@type": "VisualArtwork",
      "name": "Minimalist Corporate Stationery",
      "image": "https://saadnizar.com/branding_real_1.png",
      "artMedium": "Brand Identity Mockup",
      "artform": "Branding"
    },
    {
      "@type": "VisualArtwork",
      "name": "Organic Skincare Packaging",
      "image": "https://saadnizar.com/branding_real_2.png",
      "artMedium": "Product Packaging Mockup",
      "artform": "Packaging"
    },
    {
      "@type": "VisualArtwork",
      "name": "Modern Coffee Shop Identity",
      "image": "https://saadnizar.com/branding_real_3.png",
      "artMedium": "Brand Mockup",
      "artform": "Branding"
    }
  ]
};

export default function BrandingGallery() {
  return (
    <main className="min-h-screen pt-40 pb-32 relative bg-[var(--background)] selection:bg-[var(--accent-violet)]/30">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      {/* Ambient background glows */}
      <div className="absolute top-0 right-0 w-[50vw] h-[50vh] bg-gradient-radial from-[var(--accent-violet)]/10 to-transparent blur-[150px] pointer-events-none rounded-full" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Navigation & Header */}
        <FadeIn className="mb-16">
          <Link href="/work" className="inline-flex items-center text-white/50 hover:text-white transition-colors text-sm font-medium tracking-widest uppercase mb-8 group">
            <span className="mr-2 transform group-hover:-translate-x-1 transition-transform">←</span> Back to Work
          </Link>
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tighter mb-6">
            Brand <span className="text-[var(--accent-violet)]">Identity.</span>
          </h1>
          <p className="text-xl text-white/60 font-light max-w-2xl leading-relaxed">
            From minimalist corporate stationery to organic consumer packaging. Comprehensive brand systems built for the real world.
          </p>
        </FadeIn>

        {/* Masonry / Staggered Gallery */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          
          {/* Item 1: Large Feature */}
          <FadeIn delay={100} className="md:col-span-12 group">
            <div className="relative overflow-hidden rounded-[2rem] bg-white/5 border border-white/10 p-4 md:p-8 hover:border-[var(--accent-violet)]/30 transition-colors">
              <Image 
                src="/branding_real_1.png" 
                alt="Minimalist corporate stationery mockup" 
                width={1600}
                height={1200}
                className="w-full h-auto max-h-[70vh] object-cover rounded-xl group-hover:scale-[1.02] transition-transform duration-700 ease-out"
              />
              <div className="mt-6 flex flex-col md:flex-row md:items-end justify-between gap-4">
                <div>
                  <h2 className="text-2xl font-bold tracking-tight">Fintech Corporate Identity</h2>
                  <p className="text-white/50 text-sm">Stationery & Brand Collateral</p>
                </div>
                <div className="flex gap-2">
                  <span className="px-3 py-1 rounded-full bg-white/10 text-xs font-bold text-white/70">Typography</span>
                  <span className="px-3 py-1 rounded-full bg-white/10 text-xs font-bold text-white/70">Print Design</span>
                </div>
              </div>
            </div>
          </FadeIn>

          {/* Item 2: Half Width */}
          <FadeIn delay={200} className="md:col-span-6 group">
            <div className="relative overflow-hidden rounded-[2rem] bg-white/5 border border-white/10 p-4 md:p-8 hover:border-[var(--accent-violet)]/30 transition-colors h-full flex flex-col">
              <div className="flex-1 flex items-center justify-center overflow-hidden rounded-xl">
                <Image 
                  src="/branding_real_2.png" 
                  alt="Organic skincare packaging" 
                  width={1200}
                  height={1200}
                  className="w-full h-auto object-cover group-hover:scale-[1.03] transition-transform duration-700 ease-out"
                />
              </div>
              <div className="mt-6">
                <h2 className="text-xl font-bold tracking-tight">Botanica Skincare</h2>
                <p className="text-white/50 text-sm">Product Packaging Design</p>
              </div>
            </div>
          </FadeIn>

          {/* Item 3: Half Width */}
          <FadeIn delay={300} className="md:col-span-6 group">
            <div className="relative overflow-hidden rounded-[2rem] bg-white/5 border border-white/10 p-4 md:p-8 hover:border-[var(--accent-violet)]/30 transition-colors h-full flex flex-col">
              <div className="flex-1 flex items-center justify-center overflow-hidden rounded-xl">
                <Image 
                  src="/branding_real_3.png" 
                  alt="Coffee shop branding mockup" 
                  width={1200}
                  height={1200}
                  className="w-full h-auto object-cover group-hover:scale-[1.03] transition-transform duration-700 ease-out"
                />
              </div>
              <div className="mt-6">
                <h2 className="text-xl font-bold tracking-tight">Aura Roasters</h2>
                <p className="text-white/50 text-sm">Retail Packaging & Merch</p>
              </div>
            </div>
          </FadeIn>

        </div>
      </div>
    </main>
  );
}
