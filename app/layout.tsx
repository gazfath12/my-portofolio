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
    canonical: "/",
  },
  title: "Gaza Alfath Nugroho — Fullstack Developer | Semarang",
  description: "Fullstack Developer berbasis di Semarang. Membangun sistem web yang cepat, aman, dan menyelesaikan masalah bisnis nyata. Laravel, Next.js, MySQL.",
  keywords: [
    "Gaza Alfath Nugroho",
    "Gaza Alfath",
    "gaza alfath polines",
    "gazaalfath",
    "portofolio Gaza Alfath",
    "D3 Teknik Informatika Politeknik Negeri Semarang",
    "Teknik Informatika Polines",
    "Politeknik Negeri Semarang",
    "POLINES",
    "Full-Stack Developer",
    "full-stack developer Indonesia",
    "fullstack developer Semarang",
    "web developer Semarang",
    "pengembang web Semarang",
    "pengembang aplikasi web",
    "jasa pembuatan website",
    "jasa web developer Indonesia",
    "freelance web developer Indonesia",
    "software engineer Indonesia",
    "programmer Semarang",
    "Cyber Security Practitioner",
    "cybersecurity Indonesia",
    "praktisi keamanan siber",
    "Next.js Portfolio",
    "Next.js developer",
    "React Developer",
    "react developer Indonesia",
    "Laravel developer",
    "TypeScript developer",
    "Node.js developer",
    "PostgreSQL developer",
    "MySQL developer",
    "Tailwind CSS developer",
    "Docker",
    "Linux VPS",
    "OSINT",
    "pentesting",
    "SIAKAD Almahir",
    "PDFForge",
    "sistem informasi akademik",
    "portofolio programmer Indonesia",
    "portofolio mahasiswa informatika",
    "Software Engineer",
    "frontend developer Indonesia",
    "backend developer Indonesia"
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
    title: "Gaza Alfath Nugroho - D3 Teknik Informatika POLINES",
    description: "Portofolio Gaza Alfath Nugroho, Mahasiswa D3 Teknik Informatika di Politeknik Negeri Semarang (POLINES). Full-Stack Developer & Cybersecurity Practitioner.",
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
    title: "Gaza Alfath Nugroho - D3 Teknik Informatika POLINES",
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
    url: "https://gazaalfath.my.id",
    jobTitle: "Full-Stack Developer & Cybersecurity Practitioner",
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
      "Cybersecurity",
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
    <html lang="id" className="scroll-smooth" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('theme');if(t==='light'||t==='dark'){document.documentElement.classList.add(t)}else{document.documentElement.classList.add('dark')}}catch(e){document.documentElement.classList.add('dark')}})()`,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
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

