import type { Metadata } from "next"
import type { ReactNode } from "react"

export const metadata: Metadata = {
  title: "Teknologi & Stack Developer Gaza Alfath",
  description: "Teknologi dan stack yang dikuasai Gaza Alfath: Next.js, React, Laravel, TypeScript, Node.js, PostgreSQL, MySQL, Tailwind CSS, Docker, Linux VPS, Git, dan keamanan siber.",
  keywords: [
    "teknologi developer Gaza Alfath",
    "stack full-stack developer",
    "Next.js developer Indonesia",
    "Laravel developer",
    "React developer",
    "TypeScript developer",
    "Node.js developer",
    "PostgreSQL MySQL developer",
    "Tailwind CSS developer",
    "Docker Linux VPS",
    "Git GitHub developer",
    "tech stack portofolio",
    "keahlian teknologi programmer",
    "technology stack web developer",
    "daftar teknologi developer"
  ],
  alternates: { canonical: "/tech" },
  openGraph: {
    title: "Teknologi & Stack Developer Gaza Alfath",
    description: "Teknologi dan stack yang dikuasai Gaza Alfath: Next.js, React, Laravel, TypeScript, Node.js, PostgreSQL, MySQL, Tailwind CSS, Docker, Linux VPS, Git.",
    url: "https://gazaalfath.my.id/tech",
    siteName: "Gaza Alfath Portfolio",
    images: [{ url: "/opengraph-image.png", width: 1200, height: 630, alt: "Teknologi Developer Gaza Alfath" }],
    locale: "id_ID",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Teknologi & Stack Developer Gaza Alfath",
    description: "Teknologi dan stack yang dikuasai Gaza Alfath: Next.js, React, Laravel, TypeScript, Node.js, PostgreSQL, MySQL, Tailwind CSS, Docker, Linux VPS, Git.",
    images: ["/opengraph-image.png"],
  },
}

export default function TechLayout({ children }: { children: ReactNode }) {
  return children
}
