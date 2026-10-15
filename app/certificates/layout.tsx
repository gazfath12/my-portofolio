import type { Metadata } from "next"
import type { ReactNode } from "react"

export const metadata: Metadata = {
  title: "Sertifikasi Gaza Alfath, Cybersecurity & Web Design",
  description: "Lihat sertifikasi dan lisensi Gaza Alfath: cybersecurity CodeRed, Basic Cybersecurity JagoanSiber, Responsive Web Design freeCodeCamp, Cisco Networking, dan kompetisi desain web nasional.",
  keywords: [
    "sertifikasi Gaza Alfath",
    "sertifikat cybersecurity Indonesia",
    "sertifikat web design",
    "CodeRed certification",
    "JagoanSiber cybersecurity",
    "freeCodeCamp responsive web design",
    "Cisco networking certification",
    "kompetisi desain web nasional",
    "lisensi developer Indonesia",
    "credential cybersecurity",
    "certificates web developer",
    "sertifikat programmer Indonesia"
  ],
  alternates: { canonical: "/certificates" },
  openGraph: {
    title: "Sertifikasi Gaza Alfath, Cybersecurity & Web Design",
    description: "Lihat sertifikasi dan lisensi Gaza Alfath: cybersecurity CodeRed, Basic Cybersecurity JagoanSiber, Responsive Web Design freeCodeCamp, Cisco Networking.",
    url: "https://gazaalfath.my.id/certificates",
    siteName: "Gaza Alfath Portfolio",
    images: [{ url: "/opengraph-image.png", width: 1200, height: 630, alt: "Sertifikasi Gaza Alfath" }],
    locale: "id_ID",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sertifikasi Gaza Alfath, Cybersecurity & Web Design",
    description: "Lihat sertifikasi dan lisensi Gaza Alfath: cybersecurity CodeRed, JagoanSiber, freeCodeCamp, Cisco Networking.",
    images: ["/opengraph-image.png"],
  },
}

export default function CertificatesLayout({ children }: { children: ReactNode }) {
  return children
}
