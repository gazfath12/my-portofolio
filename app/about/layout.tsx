import type { Metadata } from "next"
import type { ReactNode } from "react"

export const metadata: Metadata = {
  title: "Tentang Gaza Alfath Nugroho, Full-Stack Developer Semarang",
  description: "Kenali perjalanan Gaza Alfath Nugroho, mahasiswa D3 Teknik Informatika POLINES dan full-stack developer berpengalaman dengan Laravel, Next.js, React, PostgreSQL, dan cybersecurity.",
  keywords: [
    "tentang Gaza Alfath",
    "profil Gaza Alfath Nugroho",
    "bio full-stack developer Semarang",
    "mahasiswa D3 Teknik Informatika POLINES",
    "perjalanan karir developer Indonesia",
    "Gaza Alfath Nugroho",
    "about me developer Semarang",
    "portofolio programmer Indonesia",
    "riwayat hidup web developer",
    "biografi programmer Indonesia"
  ],
  alternates: { canonical: "/about" },
  openGraph: {
    title: "Tentang Gaza Alfath Nugroho, Full-Stack Developer Semarang",
    description: "Kenali perjalanan Gaza Alfath Nugroho, mahasiswa D3 Teknik Informatika POLINES dan full-stack developer berpengalaman dengan Laravel, Next.js, React, PostgreSQL, dan cybersecurity.",
    url: "https://gazaalfath.my.id/about",
    siteName: "Gaza Alfath Portfolio",
    images: [{ url: "/opengraph-image.png", width: 1200, height: 630, alt: "Gaza Alfath Nugroho Full-Stack Developer Semarang" }],
    locale: "id_ID",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tentang Gaza Alfath Nugroho, Full-Stack Developer Semarang",
    description: "Kenali perjalanan Gaza Alfath Nugroho, mahasiswa D3 Teknik Informatika POLINES dan full-stack developer berpengalaman.",
    images: ["/opengraph-image.png"],
  },
}

export default function AboutLayout({ children }: { children: ReactNode }) {
  return children
}
