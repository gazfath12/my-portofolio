import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Navbar from "../components/navbar"
import Footer from "../components/footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  metadataBase: new URL("https://gazaalfath.my.id"),
  alternates: {
    canonical: "/",
  },
  title: "Gaza Alfath Nugroho - Full-Stack Developer & Cyber Security Enthusiast",
  description: "Modern portfolio website of Gaza Alfath Nugroho, showcasing expertise in Full-Stack Web Development, Mobile Apps, and Cyber Security.",
  keywords: ["Gaza Alfath Nugroho", "Full-Stack Developer", "Cyber Security", "Web Development", "Next.js Portfolio", "React Developer", "Software Engineer"],
  authors: [{ name: "Gaza Alfath Nugroho", url: "https://gazaalfath.my.id" }],
  creator: "Gaza Alfath Nugroho",
  publisher: "Gaza Alfath Nugroho",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "Gaza Alfath Nugroho - Full-Stack & Cyber Security",
    description: "Explore the professional portfolio of Gaza Alfath Nugroho, featuring innovative web projects and cyber security insights.",
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
    locale: "en_ID",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Gaza Alfath Nugroho - Full-Stack & Cyber Security",
    description: "Innovative web development and cyber security portfolio.",
    images: ["/opengraph-image.png"],
    creator: "@gaz_fath", // Update this if you have a different twitter handle
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
    url: "https://gazaalfath.my.id",
    jobTitle: "Full-Stack Developer & Cyber Security Enthusiast",
    sameAs: [
      "https://www.linkedin.com/in/gaza-alfath-0830982a9/",
      "https://github.com/gazfath12"
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
      <body className={inter.className}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
