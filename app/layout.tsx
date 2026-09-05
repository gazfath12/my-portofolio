import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Navbar from "../components/navbar"
import Footer from "../components/footer"

const inter = Inter({ subsets: ["latin"] })

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#0f172a",
}

export const metadata: Metadata = {
  metadataBase: new URL("https://gazaalfath.my.id"),
  alternates: {
    canonical: "/",
  },
  title: "Gaza Alfath Nugroho (gazaa alafath) - D3 Teknik Informatika Politeknik Negeri Semarang",
  description: "Portofolio resmi Gaza Alfath Nugroho (gazaa alafath), Mahasiswa D3 Teknik Informatika di Politeknik Negeri Semarang (POLINES). Full-Stack Developer & Cyber Security Enthusiast.",
  keywords: [
    "gazaa alafath",
    "Gaza Alfath Nugroho",
    "Gaza Alfath",
    "gaza alfath polines",
    "gazaa alafath politeknik negeri semarang",
    "D3 Teknik Informatika Politeknik Negeri Semarang",
    "Teknik Informatika Polines",
    "Politeknik Negeri Semarang",
    "POLINES",
    "Gaza Alfath Kuliah Dimana",
    "Full-Stack Developer",
    "Cyber Security",
    "Next.js Portfolio",
    "React Developer",
    "Software Engineer"
  ],
  authors: [{ name: "Gaza Alfath Nugroho", url: "https://gazaalfath.my.id" }],
  creator: "Gaza Alfath Nugroho",
  publisher: "Gaza Alfath Nugroho",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "Gaza Alfath Nugroho (gazaa alafath) - D3 Teknik Informatika POLINES",
    description: "Portofolio Gaza Alfath Nugroho (gazaa alafath), Mahasiswa D3 Teknik Informatika di Politeknik Negeri Semarang (POLINES). Menampilkan proyek Web Development & Cyber Security.",
    url: "https://gazaalfath.my.id",
    siteName: "Gaza Alfath Portfolio",
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "Gaza Alfath Nugroho Portfolio",
      },
    ],
    locale: "id_ID",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Gaza Alfath Nugroho (gazaa alafath) - D3 Teknik Informatika POLINES",
    description: "Portofolio Gaza Alfath Nugroho, Mahasiswa D3 Teknik Informatika Politeknik Negeri Semarang.",
    images: ["/opengraph-image.png"],
    creator: "@gazfath12",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/icon.png",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Gaza Alfath Nugroho",
    alternateName: ["gazaa alafath", "Gaza Alfath", "gazfath", "gazfath12"],
    url: "https://gazaalfath.my.id",
    jobTitle: "Full-Stack Developer & Cyber Security Enthusiast",
    description: "Mahasiswa D3 Teknik Informatika di Politeknik Negeri Semarang (POLINES) yang berfokus pada Full-Stack Web Development dan Cybersecurity.",
    alumniOf: [
      {
        "@type": "EducationalOrganization",
        name: "Politeknik Negeri Semarang",
        alternateName: "POLINES",
        url: "https://www.polines.ac.id"
      }
    ],
    knowsAbout: [
      "Teknik Informatika",
      "Full-Stack Web Development",
      "Cyber Security",
      "Next.js",
      "React",
      "Laravel",
      "Node.js"
    ],
    sameAs: [
      "https://www.linkedin.com/in/gaza-alfath-0830982a9/",
      "https://github.com/gazfath12",
      "https://www.instagram.com/gaz_fath/",
      "https://twitter.com/gazfath12"
    ]
  }

  return (
    <html lang="id">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${inter.className} min-h-screen overflow-x-hidden antialiased text-slate-900 bg-slate-50 selection:bg-blue-500 selection:text-white`}>
        <Navbar />
        <main className="overflow-x-hidden">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
