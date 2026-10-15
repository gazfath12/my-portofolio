"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import Image from "next/image"
import {
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  ChevronRight,
  Award,
  Send
} from "lucide-react"

import { ResumeModal } from "../components/resume-modal"
import { ProjectPreviewModal, ProjectData } from "../components/project-preview-modal"
import { CertModal, CertData } from "../components/cert-modal"
import { ChatWidget } from "../components/chat-widget"
import { StackedPhotos } from "../components/stacked-photos"
import { TechTicker } from "../components/tech-ticker"
import { GithubActivityGraph } from "../components/github-activity"
import { TechIcon } from "../components/tech-icon"

// ─── DATA SOURCES ─────────────────────────────────────────────────────────────

const TECH_PILLS = [
  { name: "Laravel", category: "backend", icon: "⚡" },
  { name: "Next.js", category: "frontend", icon: "▲" },
  { name: "React", category: "frontend", icon: "⚛" },
  { name: "TypeScript", category: "frontend", icon: "TS" },
  { name: "PostgreSQL", category: "backend", icon: "🐘" },
  { name: "MySQL", category: "backend", icon: "🗄" },
  { name: "Tailwind CSS", category: "frontend", icon: "🎨" },
  { name: "Node.js", category: "backend", icon: "🟢" },
  { name: "Docker", category: "devops", icon: "🐳" },
  { name: "Linux VPS", category: "devops", icon: "🐧" },
  { name: "Cybersecurity", category: "security", icon: "🛡" },
  { name: "Git & GitHub", category: "devops", icon: "🔀" },
]

const FEATURED_SPOTLIGHTS: ProjectData[] = [
  {
    title: "SIAKAD Almahir Platform",
    subtitle: "Academic Management & Automated e-Rapor Engine",
    image: "/siakad-1.png",
    description: "Production academic management platform built for PPQIT Al-Mahir. Integrated a real-time zero-conflict scheduling algorithm for teachers, classes, and subjects while automating e-Rapor generation.",
    tech: ["Laravel", "PostgreSQL", "Tailwind CSS", "Linux VPS"],
    impact: "80% Admin Workload Reduced",
    status: "PRODUCTION LIVE",
    liveUrl: "https://github.com/gazfath12",
    isPrivate: true,
  },
  {
    title: "Nexcore ERP & Inventory System",
    subtitle: "Real-time Stock Management & Financial POS",
    image: "/nexcore.png",
    description: "Enterprise resource planning system featuring barcode scanning, low-stock reorder triggers, role-based access control, and live sales performance dashboards.",
    tech: ["Next.js", "TypeScript", "MySQL", "Tailwind"],
    impact: "Zero Stock Conflict",
    status: "FEATURED BUILD",
    liveUrl: "https://github.com/gazfath12/nexcore",
    isPrivate: false,
  }
]

const ALL_PROJECTS: ProjectData[] = [
  {
    title: "PDFForge - PDF Compression & Tooling",
    subtitle: "100% Client-Side Local PDF Suite",
    image: "/pdfforge.png",
    description: "Browser-native PDF compression and conversion tool. Compresses PDF files, image-to-PDF, and PDF-to-image 100% locally without uploading data to servers.",
    longDescription: "A privacy-first web application designed for processing documents entirely in client memory. Eliminates server egress and security risks by running WebAssembly and canvas rendering client-side.",
    tech: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    impact: "100% Offline & Private",
    status: "LIVE TOOL",
    isPrivate: false,
    liveUrl: "https://pdf-compressed.vercel.app/",
    githubUrl: "https://github.com/gazfath12"
  },
  {
    title: "SIAKAD Almahir",
    subtitle: "Academic Information System",
    image: "/siakad-1.png",
    description: "Comprehensive school management platform featuring zero-conflict scheduler, e-Rapor generation, and student grade tracking.",
    longDescription: "Designed and engineered SIAKAD Almahir to streamline school administration. Features an intelligent anti-conflict scheduling matrix that validates teacher availability, classroom capacity, and course requirements simultaneously.",
    tech: ["Laravel", "PostgreSQL", "Bootstrap", "Linux VPS"],
    impact: "80% Admin Workload Cut",
    status: "PROD LIVE",
    isPrivate: true,
    liveUrl: "#",
    githubUrl: "https://github.com/gazfath12"
  },
  {
    title: "Nexcore POS & ERP System",
    subtitle: "Business Inventory Management",
    image: "/nexcore-official.png",
    description: "Real-time POS and inventory management system with automated stock alerts and sales analytics.",
    longDescription: "High-performance POS system built for retail management. Includes real-time inventory synchronization, barcode scanner integration, and executive reporting dashboards.",
    tech: ["Next.js", "TypeScript", "MySQL", "Tailwind"],
    impact: "30% Faster Query Response",
    status: "LIVE DEMO",
    isPrivate: false,
    liveUrl: "https://github.com/gazfath12",
    githubUrl: "https://github.com/gazfath12"
  },
  {
    title: "Bestkacafilm - Dealer Resmi V-Kool",
    subtitle: "Automotive Window Film Dealer Catalog",
    image: "/bestkaca.png",
    description: "Modern product showcase and dealer booking portal with input sanitization and XSS security protections.",
    longDescription: "Developed for an official automotive window tint dealer. Built with clean UI/UX, responsive product catalog, and secure lead inquiry form.",
    tech: ["Next.js", "Tailwind CSS", "React", "Node.js"],
    impact: "Enhanced Mobile UX",
    status: "LIVE",
    isPrivate: false,
    liveUrl: "https://bestkacafilm.com/",
    githubUrl: "https://github.com/gazfath12"
  },
  {
    title: "SantriQue - Keuangan Santri",
    subtitle: "Financial Audit Trail Platform",
    image: "/santrique.png",
    description: "Sistem manajemen keuangan santri dengan multi-level audit trail dan validasi transaksi real-time.",
    longDescription: "Dibangun dengan validasi ketat, session management aman, dan schema database terisolasi untuk transaksi keuangan santri.",
    tech: ["React", "Next.js", "PostgreSQL", "Tailwind"],
    impact: "Secure Financial Logs",
    status: "LIVE APP",
    isPrivate: false,
    liveUrl: "https://santrique.gazaalfath.my.id/",
    githubUrl: "https://github.com/gazfath12/dompet-santri"
  },
  {
    title: "Al-Quran Hafalan Digital",
    subtitle: "Islamic Hafalan Web Application",
    image: "/alquran_hafalan.png",
    description: "Web application interaktif untuk mendukung program hafalan Quran dengan audio streaming dan tracker hafalan.",
    longDescription: "Aplikasi hafalan Al-Quran digital terintegrasi API yang menyajikan mushaf digital, bookmark ayat, dan monitoring setoran hafalan.",
    tech: ["React", "Next.js", "REST APIs", "Tailwind"],
    impact: "Interaktif & Ringan",
    status: "LIVE APP",
    isPrivate: false,
    liveUrl: "https://quran-hafalan.ppqita.my.id/",
    githubUrl: "https://github.com/gazfath12"
  },
  {
    title: "OSINT Investigation Suite",
    subtitle: "Cybersecurity & Security Tools",
    image: "/data-analytics-dashboard.png",
    description: "Custom OSINT and web security audit tools developed in personal pentesting laboratory environments.",
    longDescription: "Built for security auditing and threat intelligence gathering. Automates domain reconnaissance, header inspection, and vulnerability reporting.",
    tech: ["Python", "Linux", "Bash", "Security Audit"],
    impact: "Automated Auditing",
    status: "SECURITY LAB",
    isPrivate: false,
    liveUrl: "#",
    githubUrl: "https://github.com/gazfath12"
  },
  {
    title: "Smart Finance & Budget Calculator",
    subtitle: "Personal Financial Management App",
    image: "/finance.png",
    description: "Interactive financial goal tracking application with visual charts and expense analysis.",
    longDescription: "Sleek web application for personal expense tracking, monthly budget planning, and financial milestone visualization.",
    tech: ["React", "TypeScript", "Tailwind CSS"],
    impact: "Interactive Visuals",
    status: "COMPLETED",
    isPrivate: false,
    liveUrl: "https://finance.gazaalfath.my.id/",
    githubUrl: "https://github.com/gazfath12"
  },
  {
    title: "Smart Calculator App",
    subtitle: "Utility Web Application",
    image: "/kalkulator-smart.png",
    description: "Clean, responsive scientific calculator tool built with keyboard shortcuts and dark theme.",
    longDescription: "A minimalist web calculator supporting complex mathematical operations, history log, and responsive layout.",
    tech: ["JavaScript", "HTML5", "CSS3"],
    impact: "Fast & Lightweight",
    status: "COMPLETED",
    isPrivate: false,
    liveUrl: "https://kalkulator.gazaalfath.my.id/",
    githubUrl: "https://github.com/gazfath12"
  }
]

const EXPERIENCES = [
  {
    period: "Aug 2025 – Oct 2025",
    role: "Full-Stack Engineer Internship",
    company: "PPQIT AL Mahir",
    location: "Boyolali, Central Java (On-site)",
    description: "Designed and built SIAKAD Almahir, an integrated academic system reducing admin workload by 80%. Engineered zero-conflict scheduling algorithms and automated e-Rapor generation.",
    tags: ["Laravel", "PostgreSQL", "System Architecture", "Scheduling Engine"]
  },
  {
    period: "Oct 2025",
    role: "Event Administrator",
    company: "International Islamic Education Fair (IIEF)",
    location: "Surakarta, Central Java",
    description: "Managed visitor registration systems and database synchronization for an international educational expo featuring 50+ institutions.",
    tags: ["Database Integration", "Event Tech", "Administration"]
  },
  {
    period: "2024 – 2025",
    role: "Frontend Developer & Security Assistant",
    company: "Bestkacafilm Dealer",
    location: "Indonesia (Remote)",
    description: "Built responsive e-commerce catalog web applications. Implemented security input validation, XSS prevention, and user-centric UI design.",
    tags: ["Next.js", "Tailwind CSS", "Web Security"]
  }
]

const CERTIFICATIONS: CertData[] = [
  {
    id: 1,
    name: "Dark Web, Anonymity & Cryptocurrency Fundamentals",
    issuer: "CodeRed",
    year: "2026",
    credential: "464820",
    image: "/certificates/sertifikat-1.png",
    category: "security",
    description: "Mastered dark web fundamentals, anonymity protocols, and cryptocurrency tracking in cybersecurity contexts."
  },
  {
    id: 2,
    name: "Basic Cybersecurity Practitioner",
    issuer: "Codepolitan (JagoanSiber)",
    year: "2025",
    credential: "CPJS-CR/2025/XII/0183",
    image: "/certificates/sertifikat-2.jpg",
    category: "security",
    description: "Core cyber threat analysis, data protection standards, and digital security best practices."
  },
  {
    id: 3,
    name: "Cybersecurity for Businesses — Fundamental Edition",
    issuer: "CodeRed",
    year: "2026",
    credential: "465065",
    image: "/certificates/sertifikat-3.png",
    category: "security",
    description: "Enterprise digital risk management, security posture auditing, and corporate asset protection."
  },
  {
    id: 4,
    name: "Responsive Web Design V8 Certification",
    issuer: "freeCodeCamp",
    year: "2023",
    credential: "fcc47c5583-3481-4906-8719-df263c13813f",
    image: "/certificates/sertifikat-4.jpg",
    category: "web",
    description: "300+ hours of modern HTML5, CSS3, accessibility, and responsive interface design."
  },
  {
    id: 5,
    name: "National Web Design Competition Finalist",
    issuer: "Technotraction UNS",
    year: "2024",
    credential: "021/B/UN27.02.3.14.14/MIKROPTIK/SK/X/2024",
    image: "/certificates/sertifikat-5.png",
    category: "web",
    description: "Participated in national web design competition hosted by Sebelas Maret University (UNS)."
  },
  {
    id: 6,
    name: "In-house Hacking & Pentesting Lab Setup",
    issuer: "CodeRed",
    year: "2026",
    credential: "475753",
    image: "/certificates/sertifikat-6.png",
    category: "security",
    description: "Building custom pentesting environments, vulnerable VM setups, and vulnerability verification tools."
  },
  {
    id: 7,
    name: "Siswa Tersertifikasi Gemini",
    issuer: "Google for Education",
    year: "2026",
    credential: "https://edu.google.accredible.com/dd1362d5-cb8d-42fb-8aa0-b03e31ee843a#acc.Swhliyrf",
    image: "/certificates/sertifikat-gemini.png",
    category: "ai",
    description: "Menunjukkan pengetahuan, keterampilan, dan kompetensi dasar yang diperlukan untuk menggunakan AI Google di lingkungan pendidikan. Berlaku hingga 06/10/2029."
  }
]

const EDUCATION_ITEMS = [
  {
    degree: "D3 Teknik Informatika",
    institution: "Politeknik Negeri Semarang (POLINES)",
    period: "2026 – Present",
    desc: "Vocational IT degree focused on Software Engineering, Full-Stack Development, Database Systems, and Cybersecurity."
  },
  {
    degree: "IT & Software Development Program",
    institution: "PPQIT Al - Mahir Boarding School",
    period: "2023 – 2026",
    desc: "Intensive full-stack web engineering, system architecture, OSINT tools, and academic software development."
  },
  {
    degree: "Cisco Networking Certification",
    institution: "Cisco Networking Academy",
    period: "2026",
    desc: "Network infrastructure protocols, routing & switching, and network security administration."
  },
  {
    degree: "Responsive Web Design Certification",
    institution: "freeCodeCamp",
    period: "2024",
    desc: "300+ hours of responsive web interface design and modern web standards."
  },
  {
    degree: "Junior High & Islamic Studies",
    institution: "Ponpes Al-Muttaqin",
    period: "2020 – 2023",
    desc: "Islamic character building, discipline, and memorization of 5 Juz Al-Qur'an."
  }
]

// ─── MAIN PAGE COMPONENT ──────────────────────────────────────────────────────

export default function PortfolioHome() {
  const router = useRouter()
  const [profileImage, setProfileImage] = useState<string>("/avatar.png")
  const [resumeOpen, setResumeOpen] = useState(false)
  const [selectedProject, setSelectedProject] = useState<ProjectData | null>(null)
  const [selectedCert, setSelectedCert] = useState<CertData | null>(null)
  const [techCategory, setTechCategory] = useState("all")
  const [projectCategory, setProjectCategory] = useState("all")
  const [copiedEmail, setCopiedEmail] = useState(false)

  const toggleAvatar = () => {
    setProfileImage((prev) => (prev === "/avatar.png" ? "/gaza-formal.jpg" : "/avatar.png"))
  }

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("gazfath12@gmail.com")
    setCopiedEmail(true)
    setTimeout(() => setCopiedEmail(false), 2000)
  }

  const filteredTech = techCategory === "all"
    ? TECH_PILLS
    : TECH_PILLS.filter((t) => t.category === techCategory)

  const filteredProjects = projectCategory === "all"
    ? ALL_PROJECTS
    : ALL_PROJECTS.filter((p) => {
        if (projectCategory === "featured") return p.featured
        if (projectCategory === "web") return p.tech.includes("Next.js") || p.tech.includes("Laravel") || p.tech.includes("React")
        if (projectCategory === "security") return p.tech.includes("Security Audit") || p.tech.includes("Python")
        return true
      })

  return (
    <div className="bg-page text-ink min-h-screen font-sans selection:bg-blue-600 selection:text-ink">

      {/* Subtle Mesh Background Aura */}
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-blue-600/10 blur-[140px] pointer-events-none z-0 rounded-full" />
      <div className="fixed bottom-0 right-0 w-[500px] h-[400px] bg-purple-600/5 blur-[160px] pointer-events-none z-0 rounded-full" />

      <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 pt-24 pb-20 space-y-16 sm:space-y-20">

        {/* ── HERO SECTION (Exact renlenon.vercel.app layout) ──────────────── */}
        <section id="hero" className="flex flex-col justify-center pt-6 pb-4 sm:pt-12">
          <div className="space-y-6 sm:space-y-8">
            
            {/* Avatar Profile Frame + Verified Pill */}
            <div className="flex items-center gap-4 sm:gap-6">
              <div 
                onClick={toggleAvatar}
                className="h-28 w-28 sm:h-36 sm:w-36 shrink-0 rounded-full border-2 border-line2 hover:border-brand bg-surface2 overflow-hidden relative shadow-2xl group cursor-pointer transition-colors"
                title="Click to switch photo (Anime / Formal)"
              >
                <Image
                  src={profileImage}
                  alt="Gaza Alfath Nugroho"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                  priority
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-[10px] text-white font-medium text-center px-1">
                  Switch Photo
                </div>
              </div>

              <div className="flex h-full flex-col justify-center gap-2 sm:gap-3">
                <h1 className="flex items-center gap-2 text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight text-ink">
                  <span>Gaza Alfath Nugroho</span>
                  {/* Verified Checkmark Badge */}
                  <span title="Verified">
                    <svg viewBox="0 0 22 22" className="w-6 h-6 shrink-0 inline-block align-middle" aria-label="Verified">
                      <path fill="#1D9BF0" d="M20.396 11c-.018-.646-.215-1.275-.57-1.816-.354-.54-.852-.972-1.438-1.246.223-.607.27-1.264.14-1.897-.131-.634-.437-1.218-.882-1.687-.47-.445-1.053-.75-1.687-.882-.633-.13-1.29-.083-1.897.14-.273-.587-.704-1.086-1.245-1.44S11.647 1.62 11 1.604c-.646.017-1.273.213-1.813.568s-.969.854-1.24 1.44c-.608-.223-1.267-.272-1.902-.14-.635.13-1.22.436-1.69.882-.445.47-.749 1.053-.878 1.688-.13.633-.08 1.29.144 1.896-.587.274-1.087.705-1.443 1.245-.356.54-.555 1.17-.574 1.817.02.647.218 1.276.574 1.817.356.54.856.972 1.443 1.245-.224.607-.274 1.264-.144 1.898.13.634.435 1.219.88 1.688.47.443 1.054.749 1.688.879.633.13 1.29.083 1.897-.14.274.586.705 1.084 1.246 1.439.54.354 1.17.551 1.816.569.647-.016 1.276-.213 1.817-.567s.972-.854 1.245-1.44c.607.224 1.264.272 1.897.14.634-.13 1.217-.436 1.687-.878.445-.47.75-1.055.88-1.688.13-.634.083-1.291-.14-1.897.586-.274 1.084-.705 1.438-1.246.354-.541.551-1.17.57-1.817Zm-11.343 3.9-3.5-3.5 1.238-1.238 2.262 2.262 5.315-5.315L15.5 8.35l-6.5 6.55Z"></path>
                    </svg>
                  </span>
                </h1>

                {/* Social Links */}
                <div className="flex items-center gap-4">
                  <a
                    href="https://github.com/gazfath12"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="opacity-70 hover:opacity-100 transition-all hover:-translate-y-0.5 text-ink2 hover:text-ink"
                    title="GitHub"
                  >
                    <Github size={20} />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/gaza-alfath-0830982a9/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="opacity-70 hover:opacity-100 transition-all hover:-translate-y-0.5 text-ink2 hover:text-[#0A66C2]"
                    title="LinkedIn"
                  >
                    <Linkedin size={20} />
                  </a>
                  <button
                    onClick={handleCopyEmail}
                    className="opacity-70 hover:opacity-100 transition-all hover:-translate-y-0.5 text-ink2 hover:text-ink relative"
                    title="Copy Email"
                  >
                    <Mail size={20} />
                    {copiedEmail && (
                      <span className="absolute -top-7 left-1/2 -translate-x-1/2 bg-blue-600 text-ink text-[10px] px-2 py-0.5 rounded shadow">
                        Copied!
                      </span>
                    )}
                  </button>
                </div>
              </div>
            </div>

            {/* Headline Title */}
            <div className="space-y-4">
              <h2 className="text-[1.7rem] sm:text-[2.05rem] md:text-[2.15rem] font-normal tracking-tight leading-tight text-ink">
                Full-Stack Web Developer <span className="text-[0.95em] font-light text-ink3">— Next.js, Laravel &amp; Security</span>
              </h2>

              {/* Bio Paragraph with renlenon-style dashed tech badges */}
              <p className="text-base sm:text-lg font-light leading-7 sm:leading-8 text-ink3">
                I&apos;m a full-stack web developer and cybersecurity practitioner building high-performance websites and backend systems with{" "}
                <span className="bg-surface2 inline-flex items-center gap-1.5 rounded-md border border-dashed border-line2 px-2 py-0.5 text-xs sm:text-sm text-ink2 font-mono align-baseline">
                  <TechIcon name="Laravel" size={13} className="shrink-0" /> Laravel
                </span>{" "}
                <span className="bg-surface2 inline-flex items-center gap-1.5 rounded-md border border-dashed border-line2 px-2 py-0.5 text-xs sm:text-sm text-ink2 font-mono align-baseline">
                  <TechIcon name="Next.js" size={13} className="shrink-0" /> Next.js
                </span>{" "}
                <span className="bg-surface2 inline-flex items-center gap-1.5 rounded-md border border-dashed border-line2 px-2 py-0.5 text-xs sm:text-sm text-ink2 font-mono align-baseline">
                  <TechIcon name="React" size={13} className="shrink-0" /> React
                </span>{" "}
                <span className="bg-surface2 inline-flex items-center gap-1.5 rounded-md border border-dashed border-line2 px-2 py-0.5 text-xs sm:text-sm text-ink2 font-mono align-baseline">
                  <TechIcon name="PostgreSQL" size={13} className="shrink-0" /> PostgreSQL
                </span>{" "}
                with security experience from production client work. Currently studying IT at POLINES and lead architect of SIAKAD Almahir, an academic system that reduced 80% admin workload.
              </p>

              {/* View Resume Button */}
              <div className="flex flex-wrap gap-3 sm:gap-4 pt-2">
                <button
                  onClick={() => setResumeOpen(true)}
                  className="group inline-flex items-center gap-2 bg-ink px-6 py-3 text-base font-medium text-page rounded-lg hover:scale-[1.03] transition-transform active:scale-95"
                >
                  <span>View Resume</span>
                  <ChevronRight size={18} className="transition-transform group-hover:translate-x-1" />
                </button>
              </div>
            </div>

            {/* 🚀 ANIMATED TECH TICKER (MARQUEE) 🚀 */}
            <div className="pt-4">
              <TechTicker />
            </div>

          </div>
        </section>

        {/* ── EXPERIENCE SECTION (Exact renlenon style) ────────────────────── */}
        <section id="experience" className="w-full space-y-6">
          <div className="flex items-center justify-between border-b border-line pb-3">
            <p className="text-2xl sm:text-3xl font-light tracking-tight text-ink">Experience</p>
            <button
              onClick={() => setResumeOpen(true)}
              className="group inline-flex items-center gap-1 text-sm text-ink3 hover:text-ink transition-colors"
            >
              <span>View Details</span>
              <ChevronRight size={16} className="transition-transform group-hover:translate-x-1" />
            </button>
          </div>

          <div className="space-y-7 sm:space-y-8">
            {EXPERIENCES.map((exp, idx) => (
              <div key={idx} className="sm:grid sm:grid-cols-[160px_1fr] sm:gap-6 group">
                <p className="text-xs font-medium text-ink3 whitespace-nowrap mb-1 sm:mb-0 sm:pt-1 font-mono">
                  {exp.period}
                </p>
                <div>
                  <h3 className="text-base sm:text-[17px] font-semibold text-ink leading-tight group-hover:text-brand transition-colors">
                    {exp.role}
                  </h3>
                  <p className="mt-1 text-sm font-medium text-ink2">
                    {exp.company}
                  </p>
                  <p className="mt-0.5 text-sm text-ink3">
                    {exp.location}
                  </p>
                  <p className="mt-2 text-xs text-ink3 leading-relaxed">
                    {exp.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── FEATURED WORK SPOTLIGHTS ──────────────────────────────────── */}
        <section id="featured" className="w-full space-y-5">
          <div className="flex items-center justify-between">
            <p className="text-2xl sm:text-3xl font-light tracking-tight text-ink">Featured Work</p>
            <button
              onClick={() => router.push("/projects")}
              className="text-xs text-ink3 hover:text-ink flex items-center gap-1 transition-colors"
            >
              See all projects <ChevronRight size={14} />
            </button>
          </div>

          <div className="grid md:grid-cols-2 gap-5">
            {FEATURED_SPOTLIGHTS.map((spot, idx) => (
              <div
                key={idx}
                onClick={() => setSelectedProject(spot)}
                className="group relative bg-surface border border-line hover:border-line2 rounded-2xl overflow-hidden cursor-pointer transition-all duration-300 hover:shadow-2xl flex flex-col justify-between"
              >
                {/* Banner Thumbnail */}
                <div className="relative h-44 sm:h-52 w-full overflow-hidden bg-surface2">
                  <Image
                    src={spot.image}
                    alt={spot.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 img-scrim" />
                  <div className="absolute top-3 right-3 bg-black/70 backdrop-blur-md border border-line2/60 text-[10px] text-brand font-bold px-2.5 py-1 rounded-full uppercase">
                    {spot.status}
                  </div>
                </div>

                {/* Content */}
                <div className="p-5 space-y-3 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="text-[11px] text-brand font-semibold uppercase tracking-wider mb-1">
                      {spot.subtitle}
                    </div>
                    <h4 className="text-lg font-bold text-ink group-hover:text-brand transition-colors">
                      {spot.title}
                    </h4>
                    <p className="text-xs text-ink3 leading-relaxed mt-2 line-clamp-3">
                      {spot.description}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-line flex items-center justify-between">
                    <span className="text-[11px] text-success font-medium">
                      ✓ {spot.impact}
                    </span>
                    <span className="text-xs text-ink3 group-hover:text-ink font-semibold flex items-center gap-1 transition-colors">
                      Read case study <ExternalLink size={12} />
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── PROJECTS GRID ──────────────────────────────────────────────── */}
        <section id="projects" className="w-full space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-line pb-3">
            <div className="flex items-center gap-3">
              <p className="text-2xl sm:text-3xl font-light tracking-tight text-ink">All Projects</p>
              <button
                onClick={() => router.push("/projects")}
                className="text-xs bg-surface2 hover:bg-surface3 border border-line2 text-ink2 hover:text-ink px-3 py-1 rounded-full transition-colors flex items-center gap-1"
              >
                Explore Full Archive ({ALL_PROJECTS.length}) <ChevronRight size={12} />
              </button>
            </div>
            
            {/* Category Filter Pills */}
            <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar">
              {[
                { id: "all", label: "All" },
                { id: "web", label: "Full-Stack" },
                { id: "security", label: "Security & Tools" }
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setProjectCategory(tab.id)}
                  className={`text-xs px-3 py-1 rounded-full font-medium transition-all ${
                    projectCategory === tab.id
                      ? "bg-ink text-page"
                      : "bg-surface2 border border-line text-ink3 hover:text-ink"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            {filteredProjects.map((p, idx) => (
              <div
                key={idx}
                onClick={() => setSelectedProject(p)}
                className="group bg-surface border border-line hover:border-line2 rounded-xl overflow-hidden cursor-pointer transition-all duration-300 hover:scale-[1.02] flex flex-col justify-between"
              >
                <div className="relative h-36 w-full bg-surface2 overflow-hidden">
                  <Image
                    src={p.image}
                    alt={p.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 img-scrim" />
                  {p.status && (
                    <span className="absolute top-2.5 right-2.5 bg-black/70 backdrop-blur-md text-[9px] font-bold text-ink2 px-2 py-0.5 rounded border border-line2/60">
                      {p.status}
                    </span>
                  )}
                </div>

                <div className="p-4 space-y-2 flex-1 flex flex-col justify-between">
                  <div>
                    <h4 className="font-bold text-ink text-sm group-hover:text-brand transition-colors line-clamp-1">
                      {p.title}
                    </h4>
                    <p className="text-[11px] text-ink3 line-clamp-2 mt-1">
                      {p.description}
                    </p>
                  </div>

                  <div className="pt-3 flex items-center justify-between text-[10px] text-ink3 border-t border-line">
                    <span className="font-mono">{p.tech.slice(0, 2).join(" • ")}</span>
                    <span className="text-brand font-semibold flex items-center gap-0.5">
                      Preview <ChevronRight size={10} />
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── TECHNOLOGIES STACK ─────────────────────────────────────────── */}
        <section id="tech" className="w-full space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-line pb-3">
            <p className="text-2xl sm:text-3xl font-light tracking-tight text-ink">Technologies</p>
            
            <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar">
              {[
                { id: "all", label: "All" },
                { id: "frontend", label: "Frontend" },
                { id: "backend", label: "Backend & DB" },
                { id: "devops", label: "DevOps & Linux" },
                { id: "security", label: "Security" }
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setTechCategory(tab.id)}
                  className={`text-xs px-3 py-1 rounded-full font-medium transition-all ${
                    techCategory === tab.id
                      ? "bg-ink text-page"
                      : "bg-surface2 border border-line text-ink3 hover:text-ink"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2.5">
            {filteredTech.map((tech, idx) => (
              <div
                key={idx}
                className="flex items-center gap-2.5 p-3 rounded-xl bg-surface border border-line hover:border-line2 transition-all duration-200 group cursor-default"
              >
                <div className="w-5 h-5 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-200">
                  <TechIcon name={tech.name} size={18} />
                </div>
                <span className="text-xs text-ink2 font-medium group-hover:text-ink transition-colors">{tech.name}</span>
              </div>
            ))}
          </div>
        </section>

        {/* ── CERTIFICATIONS & EDUCATION ─────────────────────────────────── */}
        <section id="certificates" className="w-full space-y-6">
          <div className="border-b border-line pb-3 flex items-center justify-between">
            <p className="text-2xl sm:text-3xl font-light tracking-tight text-ink">Certifications &amp; Education</p>
            <span className="text-xs text-ink3 font-mono">{CERTIFICATIONS.length} Credentials</span>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            {CERTIFICATIONS.map((cert) => (
              <div
                key={cert.id}
                onClick={() => setSelectedCert(cert)}
                className="bg-surface border border-line hover:border-line2 p-4 rounded-xl cursor-pointer transition-all duration-200 group flex items-start gap-3.5"
              >
                <div className="w-10 h-10 rounded-lg bg-brand/10 border border-brand/20 flex items-center justify-center text-brand flex-shrink-0 group-hover:scale-110 transition-transform">
                  <Award size={20} />
                </div>
                <div className="flex-1 space-y-1">
                  <h4 className="font-bold text-ink text-xs sm:text-sm group-hover:text-brand transition-colors line-clamp-1">
                    {cert.name}
                  </h4>
                  <div className="text-[11px] text-ink3 flex items-center gap-2">
                    <span>{cert.issuer}</span> • <span className="font-mono">{cert.year}</span>
                  </div>
                  <span className="text-[10px] text-brand font-medium flex items-center gap-1 pt-1">
                    View Credential <ChevronRight size={10} />
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Education Sub-Grid */}
          <div className="pt-4 grid sm:grid-cols-2 md:grid-cols-3 gap-3">
            {EDUCATION_ITEMS.map((edu, idx) => (
              <div key={idx} className="bg-surface border border-line p-4 rounded-xl space-y-1">
                <div className="text-[10px] text-brand font-mono uppercase font-semibold">{edu.period}</div>
                <h4 className="font-bold text-ink text-xs leading-snug">{edu.degree}</h4>
                <p className="text-[11px] text-ink3 font-medium">{edu.institution}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── OUTSIDE THE IDE (Personal Stacked Photo Deck) ──────────────── */}
        <section id="highlights" className="w-full space-y-6">
          <div className="border-b border-line pb-3">
            <p className="text-2xl sm:text-3xl font-light tracking-tight text-ink">Outside the IDE</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-center bg-ghost border border-line p-6 sm:p-8 rounded-2xl">
            <div className="space-y-4">
              <p className="text-ink2 text-xs sm:text-sm leading-relaxed">
                When I step away from the tech world, I recharge through physical activity, tech hardware tinkering, cybersecurity CTFs, and returning to my projects with fresh energy and perspective.
              </p>

              <div className="flex flex-wrap gap-2 pt-2">
                {["Web Applications", "PDFForge & Tools", "Cybersecurity CTFs", "Tech Tinkering", "Islamic Studies"].map((tag, idx) => (
                  <span key={idx} className="text-xs bg-surface2 border border-line text-ink2 px-3 py-1 rounded-full font-medium">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

          {/* Single Beach Photo */}
            <div className="relative w-full max-w-sm mx-auto aspect-[4/3] rounded-2xl overflow-hidden border border-line shadow-2xl">
              <Image
                src="/pantai.jpg"
                alt="Gaza Alfath - Beach"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 text-white">
                <p className="text-xs font-semibold text-brand uppercase tracking-wider">On the Shore</p>
                <p className="text-sm font-bold mt-0.5">Recharging, one wave at a time.</p>
              </div>
            </div>
          </div>
        </section>

        {/* ── REALISTIC GITHUB CONTRIBUTION HEATMAP ──────────────────────── */}
        <section className="space-y-4">
          <GithubActivityGraph />
        </section>

        {/* ── CONTACT SECTION ────────────────────────────────────────────── */}
        <section id="contact" className="w-full space-y-6">
          <div className="border-b border-line pb-3">
            <p className="text-2xl sm:text-3xl font-light tracking-tight text-ink">Let&apos;s work together.</p>
            <p className="text-xs text-ink3 mt-1">Open for freelance projects, internships, and full-stack software engineering roles.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-3">
              {[
                { label: "Email", val: "gazfath12@gmail.com", href: "mailto:gazfath12@gmail.com", icon: Mail },
                { label: "LinkedIn", val: "Gaza Alfath Nugroho", href: "https://www.linkedin.com/in/gaza-alfath-0830982a9/", icon: Linkedin },
                { label: "GitHub", val: "@gazfath12", href: "https://github.com/gazfath12", icon: Github },
              ].map((c, i) => {
                const Icon = c.icon
                return (
                  <a
                    key={i}
                    href={c.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-4 rounded-xl bg-surface border border-line hover:border-line2 hover:bg-ghost2 transition-all group"
                  >
                    <div className="flex items-center gap-3">
                      <Icon size={18} className="text-brand" />
                      <div>
                        <div className="text-[10px] text-ink3 font-medium">{c.label}</div>
                        <div className="text-xs sm:text-sm font-bold text-ink group-hover:text-brand transition-colors">{c.val}</div>
                      </div>
                    </div>
                    <ChevronRight size={16} className="text-ink4 group-hover:text-ink transition-colors" />
                  </a>
                )
              })}
            </div>

            {/* Quick Contact Form */}
            <form onSubmit={(e) => e.preventDefault()} className="space-y-3 bg-ghost border border-line p-5 rounded-xl">
              <div>
                <label className="block text-[11px] text-ink3 font-medium mb-1">Your Name</label>
                <input
                  type="text"
                  placeholder="John Doe"
                  className="w-full bg-surface2 border border-line rounded-lg px-3 py-2 text-xs text-ink placeholder-ink4 focus:outline-none focus:border-brand/60"
                />
              </div>
              <div>
                <label className="block text-[11px] text-ink3 font-medium mb-1">Your Email</label>
                <input
                  type="email"
                  placeholder="john@company.com"
                  className="w-full bg-surface2 border border-line rounded-lg px-3 py-2 text-xs text-ink placeholder-ink4 focus:outline-none focus:border-brand/60"
                />
              </div>
              <div>
                <label className="block text-[11px] text-ink3 font-medium mb-1">Message</label>
                <textarea
                  rows={3}
                  placeholder="Tell me about your project..."
                  className="w-full bg-surface2 border border-line rounded-lg px-3 py-2 text-xs text-ink placeholder-ink4 focus:outline-none focus:border-brand/60 resize-none"
                />
              </div>
              <button
                type="submit"
                onClick={() => alert("Message sent! Gaza will respond to your email shortly.")}
                className="w-full bg-ink hover:opacity-90 text-page font-bold py-2.5 rounded-lg text-xs transition-all flex items-center justify-center gap-2"
              >
                Send Message <Send size={13} />
              </button>
            </form>
          </div>
        </section>

        {/* ── FOOTER ────────────────────────────────────────────────────── */}
        <footer className="pt-12 border-t border-line flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-ink3">
          <div>
            © 2026 <span className="text-ink font-medium">Gaza Alfath Nugroho</span>. Crafted with Next.js &amp; Tailwind CSS.
          </div>
          <div className="flex items-center gap-4">
            <a href="https://github.com/gazfath12" target="_blank" rel="noopener noreferrer" className="hover:text-ink transition-colors">GitHub</a>
            <a href="https://www.linkedin.com/in/gaza-alfath-0830982a9/" target="_blank" rel="noopener noreferrer" className="hover:text-ink transition-colors">LinkedIn</a>
          </div>
        </footer>

      </div>

      {/* ── MODALS & CHAT WIDGET ────────────────────────────────────────── */}
      <ResumeModal isOpen={resumeOpen} onClose={() => setResumeOpen(false)} />
      <ProjectPreviewModal project={selectedProject} onClose={() => setSelectedProject(null)} />
      <CertModal cert={selectedCert} onClose={() => setSelectedCert(null)} />
      <ChatWidget />
    </div>
  )
}
