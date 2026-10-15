import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { ThemeProvider } from "next-themes"
import "./globals.css"
import Navbar from "../components/navbar"
import Footer from "../components/footer"

const inter = Inter({ 
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
})

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#09090b",
}

export const metadata: Metadata = {
  metadataBase: new URL("https://gazaalfath.my.id"),
  alternates: {
    canonical: "https://gazaalfath.my.id",
  },

  // ── Primary SEO ─────────────────────────────────────────────────────────────
  title: {
    default: "Gaza Alfath Nugroho — Full-Stack Developer & Cybersecurity | Semarang",
    template: "%s | Gaza Alfath Nugroho",
  },
  description: "Full-Stack Developer & Cybersecurity Practitioner dari Semarang. Membangun sistem web production-grade dengan Laravel, Next.js, dan PostgreSQL. Tersertifikasi Google Gemini & CodeRed. Tersedia untuk freelance dan kolaborasi.",
  keywords: [
    // Name variants
    "Gaza Alfath Nugroho", "Gaza Alfath", "gazaalfath", "gaz fath", "gazfath12",
    // Portfolio
    "portofolio Gaza Alfath", "portfolio Gaza Alfath Nugroho", "Gaza Alfath portfolio",
    // Education
    "D3 Teknik Informatika POLINES", "Politeknik Negeri Semarang", "POLINES Semarang",
    "mahasiswa informatika Semarang", "Teknik Informatika Polines",
    // Job roles
    "Full-Stack Developer Indonesia", "fullstack developer Semarang", "web developer Semarang",
    "freelance web developer Indonesia", "software engineer Indonesia", "programmer Semarang",
    "jasa pembuatan website Semarang", "jasa web developer Indonesia",
    "frontend developer Indonesia", "backend developer Indonesia",
    // Security
    "Cybersecurity Practitioner Indonesia", "praktisi keamanan siber", "OSINT Indonesia",
    "pentesting Indonesia", "cybersecurity Semarang",
    // Tech stack
    "Next.js developer Indonesia", "Laravel developer Indonesia", "React developer Indonesia",
    "TypeScript developer", "Node.js developer", "PostgreSQL developer",
    "Tailwind CSS", "Docker", "Linux VPS", "MySQL developer",
    // Projects
    "SIAKAD Almahir", "PDFForge PDF compress", "Nexcore ERP", "SantriQue",
    "sistem informasi akademik", "aplikasi web Laravel",
    // General
    "portofolio programmer Indonesia", "portofolio mahasiswa informatika",
    "Google Gemini Certified", "Gemini tersertifikasi",
  ],
  authors: [{ name: "Gaza Alfath Nugroho", url: "https://gazaalfath.my.id" }],
  creator: "Gaza Alfath Nugroho",
  publisher: "Gaza Alfath Nugroho",
  category: "technology",
  classification: "Portfolio, Web Development, Cybersecurity",
  formatDetection: { email: false, address: false, telephone: false },

  // ── Open Graph (link preview di WhatsApp, Telegram, Discord, FB, dll) ───────
  openGraph: {
    title: "Gaza Alfath Nugroho — Full-Stack Developer & Cybersecurity",
    description: "Lihat proyek production-grade: SIAKAD Almahir, Nexcore ERP, PDFForge, dan lebih banyak lagi. Laravel, Next.js, React, PostgreSQL. Tersertifikasi Google Gemini.",
    url: "https://gazaalfath.my.id",
    siteName: "Gaza Alfath — Portfolio",
    images: [
      {
        url: "https://gazaalfath.my.id/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "Gaza Alfath Nugroho — Full-Stack Developer & Cybersecurity Portfolio",
        type: "image/png",
      },
    ],
    locale: "id_ID",
    alternateLocale: "en_US",
    type: "website",
  },

  // ── Twitter / X Card ────────────────────────────────────────────────────────
  twitter: {
    card: "summary_large_image",
    site: "@gazfath12",
    creator: "@gazfath12",
    title: "Gaza Alfath Nugroho — Full-Stack Developer & Cybersecurity",
    description: "Portfolio: SIAKAD, Nexcore ERP, PDFForge. Laravel, Next.js, React, PostgreSQL. Google Gemini Certified. Based in Semarang, Indonesia.",
    images: [
      {
        url: "https://gazaalfath.my.id/opengraph-image.png",
        alt: "Gaza Alfath Nugroho Portfolio",
      },
    ],
  },

  // ── Robots & Crawling ───────────────────────────────────────────────────────
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  // ── Icons ───────────────────────────────────────────────────────────────────
  icons: {
    icon: [
      { url: "/icon.png", type: "image/png" },
      { url: "/favicon.ico", sizes: "any" },
    ],
    shortcut: "/favicon.ico",
    apple: "/icon.png",
  },

  // ── Verification (isi setelah daftar di Google Search Console) ──────────────
  // verification: { google: "PASTE_YOUR_GSC_VERIFICATION_CODE_HERE" },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const jsonLdPerson = {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": "https://gazaalfath.my.id/#person",
    name: "Gaza Alfath Nugroho",
    alternateName: ["Gaza Alfath", "gazaalfath", "gazfath12"],
    url: "https://gazaalfath.my.id",
    image: "https://gazaalfath.my.id/gaza-formal.jpg",
    jobTitle: "Full-Stack Developer & Cybersecurity Practitioner",
    description: "Full-Stack Developer dan Cybersecurity Practitioner dari Semarang, Indonesia. Mahasiswa D3 Teknik Informatika di Politeknik Negeri Semarang (POLINES). Membangun sistem web production-grade dengan Laravel, Next.js, dan PostgreSQL.",
    email: "gazfath12@gmail.com",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Semarang",
      addressRegion: "Jawa Tengah",
      addressCountry: "ID",
    },
    alumniOf: [
      {
        "@type": "EducationalOrganization",
        name: "Politeknik Negeri Semarang",
        alternateName: "POLINES",
        url: "https://www.polines.ac.id",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Semarang",
          addressCountry: "ID",
        },
      },
      {
        "@type": "EducationalOrganization",
        name: "PPQIT Al-Mahir Boarding School",
        addressLocality: "Boyolali",
        addressCountry: "ID",
      },
    ],
    hasCredential: [
      {
        "@type": "EducationalOccupationalCredential",
        name: "Siswa Tersertifikasi Gemini",
        credentialCategory: "certificate",
        recognizedBy: { "@type": "Organization", name: "Google for Education" },
        url: "https://edu.google.accredible.com/dd1362d5-cb8d-42fb-8aa0-b03e31ee843a",
        validFrom: "2026-10-06",
        validUntil: "2029-10-06",
      },
      {
        "@type": "EducationalOccupationalCredential",
        name: "Basic Cybersecurity Practitioner",
        credentialCategory: "certificate",
        recognizedBy: { "@type": "Organization", name: "Codepolitan (JagoanSiber)" },
      },
    ],
    knowsAbout: [
      "Full-Stack Web Development", "Cybersecurity", "Teknik Informatika",
      "Next.js", "React", "Laravel", "Node.js", "PostgreSQL", "MySQL",
      "TypeScript", "Docker", "Linux VPS", "OSINT", "Penetration Testing",
    ],
    knowsLanguage: ["id", "en"],
    sameAs: [
      "https://www.linkedin.com/in/gaza-alfath-0830982a9/",
      "https://github.com/gazfath12",
      "https://www.instagram.com/gaz_fath/",
    ],
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": "https://gazaalfath.my.id",
    },
  }

  const jsonLdWebsite = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": "https://gazaalfath.my.id/#website",
    name: "Gaza Alfath Nugroho — Portfolio",
    url: "https://gazaalfath.my.id",
    description: "Portfolio Full-Stack Developer & Cybersecurity Practitioner dari Semarang, Indonesia.",
    author: { "@id": "https://gazaalfath.my.id/#person" },
    inLanguage: ["id", "en"],
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: "https://gazaalfath.my.id/projects?q={search_term_string}",
      },
      "query-input": "required name=search_term_string",
    },
  }


  return (
    <html lang="id" className="scroll-smooth" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('theme');if(t==='light'||t==='dark'){document.documentElement.classList.add(t)}else{document.documentElement.classList.add('dark')}}catch(e){document.documentElement.classList.add('dark')}})()`,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdPerson) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdWebsite) }}
        />
      </head>
      <body className={`${inter.className} min-h-screen overflow-x-hidden antialiased bg-page text-ink selection:bg-orange-500 selection:text-white`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
          <Navbar />
          <main className="overflow-x-hidden">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}

