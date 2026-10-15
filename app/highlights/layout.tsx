import type { Metadata } from "next"
import type { ReactNode } from "react"

export const metadata: Metadata = {
  title: "Di Luar Kode, Minat & Aktivitas Gaza Alfath",
  description: "Sisi lain Gaza Alfath di luar kode: cybersecurity CTF, tinkering teknologi dan hardware, studi Islam, dan kembali ke proyek dengan energi baru.",
  keywords: [
    "di luar kode developer",
    "minat Gaza Alfath",
    "hobby programmer Indonesia",
    "cybersecurity CTF Indonesia",
    "tech tinkering",
    "studi Islam developer",
    "highlights portofolio",
    "about Gaza Alfath",
    "minat developer Indonesia",
    "aktivitas programmer"
  ],
  alternates: { canonical: "/highlights" },
  openGraph: {
    title: "Di Luar Kode, Minat & Aktivitas Gaza Alfath",
    description: "Sisi lain Gaza Alfath di luar kode: cybersecurity CTF, tinkering teknologi dan hardware, studi Islam, dan kembali ke proyek dengan energi baru.",
    url: "https://gazaalfath.my.id/highlights",
    siteName: "Gaza Alfath Portfolio",
    images: [{ url: "/opengraph-image.png", width: 1200, height: 630, alt: "Minat Gaza Alfath Di Luar Kode" }],
    locale: "id_ID",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Di Luar Kode, Minat & Aktivitas Gaza Alfath",
    description: "Sisi lain Gaza Alfath di luar kode: cybersecurity CTF, tinkering teknologi dan hardware, studi Islam.",
    images: ["/opengraph-image.png"],
  },
}

export default function HighlightsLayout({ children }: { children: ReactNode }) {
  return children
}
