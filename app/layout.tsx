import type { Metadata } from "next";
import { Geist, Geist_Mono, Playfair_Display } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ChatBot from "@/components/ChatBot";
import MouseAura from "@/components/MouseAura";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  style: ["normal", "italic"]
});

export const metadata: Metadata = {
  metadataBase: new URL('https://saadnizar.com'),
  title: {
    default: "Digital Marketing Strategist | Creative Designer | Personal Branding Specialist in Dubai, UAE & GCC",
    template: "%s | Saad Nizar"
  },
  description: "Portfolio of Saad Nizarudeen, a results-driven Digital Marketer and Creative Designer specializing in SEO, branding, and personal branding solutions for businesses in Dubai, the UAE, and across the GCC.",
  keywords: [
    "Digital Marketer", "Digital Marketing Strategist", "Creative Designer", "Personal Branding Specialist",
    "SEO Specialist", "Graphic Designer", "Branding Consultant", "Freelance Digital Marketer in Dubai",
    "Digital Marketing Expert in UAE", "Creative Designer in Dubai", "Personal Branding Expert in UAE",
    "SEO Expert in Dubai", "Graphic Designer in UAE", "Branding Specialist in GCC", "Digital Marketing Portfolio Dubai"
  ],
  authors: [{ name: "Saad Nizarudeen", url: "https://saadnizar.com" }],
  creator: "Saad Nizarudeen",
  openGraph: {
    type: "website",
    locale: "en_AE",
    url: "https://saadnizar.com",
    title: "Saad Nizar | Digital Marketing Strategist in Dubai & GCC",
    description: "Results-driven Digital Marketer & Creative Designer specializing in SEO and branding solutions across the UAE.",
    siteName: "Saad Nizar Portfolio",
    images: [
      {
        url: "/saad-working.jpg",
        width: 1200,
        height: 630,
        alt: "Saad Nizarudeen - Digital Marketing Strategist working in Dubai",
      }
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Saad Nizar | Digital Marketing Strategist in Dubai & GCC",
    description: "Results-driven Digital Marketer & Creative Designer specializing in SEO and branding solutions across the UAE.",
    images: ["/saad-working.jpg"],
  },
  alternates: {
    canonical: "https://saadnizar.com",
  }
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "name": "Saad Nizarudeen",
      "url": "https://saadnizar.com",
      "jobTitle": "Digital Marketing Strategist & Creative Designer",
      "worksFor": {
        "@type": "Organization",
        "name": "Waura Marketing & Design Studio"
      },
      "alumniOf": "Dubai",
      "sameAs": [
        "https://linkedin.com/in/saadnizar"
      ]
    },
    {
      "@type": "ProfessionalService",
      "name": "Saad Nizar | Digital Marketing & Branding",
      "image": "https://saadnizar.com/saad-working.jpg",
      "description": "Premium digital marketing, personal branding, and creative design services across Dubai, UAE, and GCC.",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Dubai",
        "addressRegion": "Dubai",
        "addressCountry": "AE"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": "25.2048",
        "longitude": "55.2708"
      },
      "areaServed": ["AE", "SA", "QA", "OM", "KW", "BH"],
      "url": "https://saadnizar.com"
    }
  ]
};

import LenisScroll from "@/components/LenisScroll";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} ${playfair.variable} h-full antialiased bg-[#050505]`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <link rel="preload" href="/hover.mp3" as="audio" type="audio/mpeg" />
      </head>
      <body className="min-h-full flex flex-col bg-[#050505] text-white">
        <LenisScroll />
        <MouseAura />
        <Header />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
        <ChatBot />
      </body>
    </html>
  );
}
