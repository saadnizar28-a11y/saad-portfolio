import GalleryClient from "./GalleryClient";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Saad Nizar Gallery | Best Digital Marketer Dubai & Creative Designer",
  description: "Explore the digital assets and creative portfolio of Saad Nizar, the best graphic designer and digital marketer in Dubai. View UI/UX, Brand Identity, and Digital Marketing campaigns.",
  keywords: [
    "digital marketer", 
    "best digital marketer dubai saad", 
    "saad nizar creative designer", 
    "saad nizar best graphic designer",
    "saad nizar digital assets",
    "saad gallery",
    "saad nizar portfolio",
    "UI UX design Dubai"
  ],
  openGraph: {
    title: "Saad Nizar Gallery | Best Digital Marketer Dubai",
    description: "Saad Nizar's official visual feed and portfolio of digital assets.",
    images: [{ url: "/saad-gallery-1.jpg" }],
    type: "website",
  },
};

export default function GalleryPage() {
  return <GalleryClient />;
}
