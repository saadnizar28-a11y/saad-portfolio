import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import FadeIn from "@/components/FadeIn";

export const metadata: Metadata = {
  title: "Brand Identity & Packaging Design | Saad Nizar Graphic Designer Dubai",
  description: "View ultra-realistic corporate branding mockups, packaging designs, and digital brand books. Premium brand identity design by Saad Nizar, top creative designer UAE.",
  keywords: ["Brand Identity", "Packaging Design", "Corporate Branding", "Stationery Design", "Mockups", "Saad Nizar", "Branding Agency Dubai", "Best Graphic Designer UAE Brand Identity", "Creative Designer Branding Dubai"],
  openGraph: {
    title: "Brand Identity Design | Saad Nizar Graphic Designer",
    description: "Ultra-realistic corporate branding mockups and packaging designs by Saad Nizar.",
    url: "https://saadnizar.com/work/branding",
    siteName: "Saad Nizar Portfolio",
    images: [
      {
        url: "/branding_real_1.png",
        width: 1200,
        height: 630,
        alt: "Corporate stationery branding mockup by Saad Nizar",
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

import GalleryClient from "./GalleryClient";

export default function BrandingGallery() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <GalleryClient />
    </>
  );
}
