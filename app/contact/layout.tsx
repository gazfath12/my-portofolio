import type { Metadata } from "next"
import type { ReactNode } from "react"

export const metadata: Metadata = {
  title: "Hubungi Gaza Alfath, Freelance Web Developer Semarang",
  description: "Kontak Gaza Alfath Nugroho untuk proyek website, magang full-stack engineer, atau kolaborasi software engineering. Email, GitHub, LinkedIn, dan WhatsApp.",
  keywords: [
    "hubungi Gaza Alfath",
    "kontak web developer Semarang",
    "freelance web developer Indonesia",
    "jasa pembuatan website",
    "jasa web developer",
    "magang full-stack engineer",
    "kolaborasi software engineering",
    "Gaza Alfath Nugroho kontak",
    "email developer Semarang",
    "hire web developer Indonesia",
    "contact full-stack developer",
    "kerja sama proyek web"
  ],
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Hubungi Gaza Alfath, Freelance Web Developer Semarang",
    description: "Kontak Gaza Alfath Nugroho untuk proyek website, magang full-stack engineer, atau kolaborasi software engineering.",
    url: "https://gazaalfath.my.id/contact",
    siteName: "Gaza Alfath Portfolio",
    images: [{ url: "/opengraph-image.png", width: 1200, height: 630, alt: "Hubungi Gaza Alfath Web Developer" }],
    locale: "id_ID",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hubungi Gaza Alfath, Freelance Web Developer Semarang",
    description: "Kontak Gaza Alfath Nugroho untuk proyek website, magang full-stack engineer, atau kolaborasi software engineering.",
    images: ["/opengraph-image.png"],
  },
}

export default function ContactLayout({ children }: { children: ReactNode }) {
  return children
}
