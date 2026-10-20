import type { Metadata } from "next"
import type { ReactNode } from "react"

export const metadata: Metadata = {
  title: "Proyek Web Gaza Alfath, Full-Stack Developer Semarang",
  description: "Jelajahi portofolio proyek web Gaza Alfath: SIAKAD Almahir, Nexcore, PDFForge, SantriQue, Bestkacafilm, aplikasi PWA, sistem POS, dan website katalog bisnis.",
  keywords: [
    "proyek web Gaza Alfath",
    "portofolio proyek developer Semarang",
    "SIAKAD Almahir",
    "Nexcore Digital Agency",
    "PDFForge kompres PDF",
    "SantriQue keuangan santri",
    "Bestkacafilm",
    "aplikasi PWA Indonesia",
    "sistem POS Indonesia",
    "proyek Next.js",
    "proyek Laravel",
    "contoh proyek full-stack",
    "project portfolio web developer",
    "aplikasi web Indonesia",
    "project showcase developer"
  ],
  alternates: { canonical: "/projects" },
  openGraph: {
    title: "Proyek Web Gaza Alfath, Full-Stack Developer Semarang",
    description: "Jelajahi portofolio proyek web Gaza Alfath: SIAKAD Almahir, Nexcore, PDFForge, SantriQue, Bestkacafilm, aplikasi PWA, sistem POS, dan website katalog bisnis.",
    url: "https://gazaalfath.my.id/projects",
    siteName: "Gaza Alfath Portfolio",
    images: [{ url: "/opengraph-image.png", width: 1200, height: 630, alt: "Proyek Web Gaza Alfath Full-Stack Developer" }],
    locale: "id_ID",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Proyek Web Gaza Alfath, Full-Stack Developer Semarang",
    description: "Jelajahi portofolio proyek web Gaza Alfath: SIAKAD Almahir, Nexcore, PDFForge, SantriQue, dan lainnya.",
    images: ["/opengraph-image.png"],
  },
}

export default function ProjectsLayout({ children }: { children: ReactNode }) {
  return children
}
