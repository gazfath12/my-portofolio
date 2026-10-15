import type { Metadata } from "next"
import type { ReactNode } from "react"

export const metadata: Metadata = {
  title: "Pengalaman Kerja Gaza Alfath, Full-Stack Engineer",
  description: "Pengalaman profesional Gaza Alfath: full-stack engineer internship di PPQIT AL Mahir pembuat SIAKAD Almahir, event administrator IIEF, dan frontend developer Bestkacafilm.",
  keywords: [
    "pengalaman kerja Gaza Alfath",
    "full-stack engineer internship",
    "experience developer Indonesia",
    "PPQIT AL Mahir",
    "SIAKAD Almahir developer",
    "event administrator IIEF",
    "frontend developer Bestkacafilm",
    "riwayat pekerjaan programmer",
    "work experience web developer Semarang",
    "career history full-stack developer"
  ],
  alternates: { canonical: "/experience" },
  openGraph: {
    title: "Pengalaman Kerja Gaza Alfath, Full-Stack Engineer",
    description: "Pengalaman profesional Gaza Alfath: full-stack engineer internship di PPQIT AL Mahir, event administrator IIEF, dan frontend developer Bestkacafilm.",
    url: "https://gazaalfath.my.id/experience",
    siteName: "Gaza Alfath Portfolio",
    images: [{ url: "/opengraph-image.png", width: 1200, height: 630, alt: "Pengalaman Kerja Gaza Alfath" }],
    locale: "id_ID",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pengalaman Kerja Gaza Alfath, Full-Stack Engineer",
    description: "Pengalaman profesional Gaza Alfath: full-stack engineer internship di PPQIT AL Mahir, event administrator IIEF, dan frontend developer Bestkacafilm.",
    images: ["/opengraph-image.png"],
  },
}

export default function ExperienceLayout({ children }: { children: ReactNode }) {
  return children
}
