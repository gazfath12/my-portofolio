"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { ChevronRight, ExternalLink, Shield, Code, Zap, Users, Github, Linkedin, Mail, FileText, Coffee, Lock, Instagram, Twitter, Globe, Phone } from "lucide-react"
import { Button } from "../components/ui/button"
import { Card, CardContent } from "../components/ui/card"
import { Badge } from "../components/ui/badge"

import { ProjectTransitionModal, ProjectTransitionData } from "../components/project-transition-modal"

export default function HomePage() {
  const [isVisible, setIsVisible] = useState(false)
  const [activeProject, setActiveProject] = useState<ProjectTransitionData | null>(null)

  useEffect(() => {
    setIsVisible(true)
  }, [])


  const portfolioHighlights: Array<{ id: number; title: string; category: string; image?: string; description: string; liveUrl: string; tech: string[]; isPrivate?: boolean; featured?: boolean; }> = [
    {
      id: 20,
      title: "SIAKAD Almahir",
      category: "Sistem Informasi Akademik",
      image: "/siakad.png",
      description: "Sistem Informasi Akademik Terintegrasi dengan penjadwalan anti-bentrok real-time, menghemat 80% beban admin sekolah",
      liveUrl: "#",
      isPrivate: true,
      featured: true,
      tech: ["Laravel", "MySQL", "Real-time Engine", "ERD Optimized"]
    },
    {
      id: 15,
      title: "Best Kaca Film",
      category: "Dealer Resmi V-Kool",
      image: "/bestkaca.png",
      description: "Website resmi dan katalog produk dealer kaca film V-Kool dengan antarmuka profesional dan responsif",
      liveUrl: "https://bestkacafilm.com/",
      featured: true,
      tech: ["Next.js", "Tailwind CSS", "Responsive UI", "SEO"]
    },
    {
      id: 21,
      title: "Sistem Keuangan Publik",
      category: "Finance Management",
      image: "/finance.png",
      description: "Aplikasi manajemen dan monitoring keuangan publik dengan sistem autentikasi dan pelacakan anggaran",
      liveUrl: "https://keuangan-pub.vercel.app/#/login",
      featured: true,
      tech: ["Next.js", "React", "Tailwind CSS", "Dashboard"]
    },
    {
      id: 6,
      title: "Nexcore SaaS",
      category: "SaaS Platform",
      image: "/nexcore.png",
      description: "SaaS Platform melayani manajemen bisnis, dibangun dengan performa dan skalabilitas tinggi",
      liveUrl: "http://nexcore.web.id/",
      tech: ["Next.js", "Full-stack", "Auth"]
    },
    {
      id: 5,
      title: "Pusdiklat Isalam",
      category: "Company Profile",
      image: "/pusdiklatisalam.png",
      description: "Website Company Profile untuk Pusat Pendidikan dan Pelatihan",
      liveUrl: "https://www.pusdiklatisalam.web.id/",
      tech: ["Next.js", "Web Profile"]
    },
    {
      id: 8,
      title: "Nexcore Official",
      category: "Landing Page",
      image: "/nexcore_v2.png",
      description: "Landing page modern untuk platform Nexcore",
      liveUrl: "https://www.nexcore.my.id/",
      featured: true,
      tech: ["Next.js", "UI/UX", "SEO"]
    },
    {
      id: 7,
      title: "Finance App",
      category: "Finance",
      image: "/finance.png",
      description: "Aplikasi manajemen keuangan pribadi dengan pelacakan pengeluaran",
      liveUrl: "https://finance.gazaalfath.my.id/",
      tech: ["Next.js", "Dashboard", "Charts"]
    },
    {
      id: 1,
      title: "Kalkulator PWA",
      category: "Web Development",
      image: "/kalkulator.png",
      description: "Kalkulator progresif yang dapat digunakan secara offline dengan teknologi service worker",
      liveUrl: "https://qalqulator.vercel.app/",
      tech: ["React", "PWA", "Service Worker"]
    },
    {
      id: 2,
      title: "Aplikasi Keuangan Santri",
      category: "Web Development",
      image: "/santrique.png",
      description: "Sistem manajemen keuangan untuk pondok pesantren dengan fitur pencatatan transaksi",
      liveUrl: "https://santrique.vercel.app/",
      tech: ["Next.js", "Prisma", "PostgreSQL"]
    },
    {
      id: 3,
      title: "Point Of Sale",
      category: "Aplikasi Kasir",
      image: "/pos_dusky.png",
      description: "Aplikasi kasir berbasis web dengan manajemen inventaris dan laporan penjualan",
      liveUrl: "https://point-of-sale-dusky.vercel.app/",
      tech: ["React", "Node.js", "MongoDB"]
    },
    {
      id: 4,
      title: "Aplikasi Hafalan Qur'an",
      category: "Aplikasi Qur'an",
      image: "/alquran_hafalan.png",
      description: "Platform untuk menghafal Al-Qur'an dengan fitur tracking progress dan pengingat",
      liveUrl: "https://quran-hafalan.ppqita.my.id/",
      tech: ["Laravel", "MySQL", "Tailwind"]
    },
  ]

  const services = [
    {
      icon: Code,
      title: "Web Development",
      description: "Membangun website responsif dan dinamis dengan teknologi modern",
    },
    {
      icon: Shield,
      title: "Cybersecurity",
      description: "Analisis keamanan sistem dan implementasi praktik secure coding",
    },
    {
      icon: Zap,
      title: "Performance Optimization",
      description: "Optimasi kecepatan dan kinerja aplikasi web",
    },
    {
      icon: Users,
      title: "IT Consulting",
      description: "Konsultasi teknologi untuk kebutuhan bisnis Anda",
    },
  ]

  const stats = [
    { value: "2+", label: "Tahun Pengalaman" },
    { value: "10+", label: "Proyek Selesai" },
    { value: "5+", label: "Klien Puas" },
    { value: "24/7", label: "Dukungan" },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Hero Section - Enhanced */}
      <section className="relative pt-24 sm:pt-28 pb-12 sm:pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 bg-grid-slate-200 [mask-image:linear-gradient(0deg,transparent,black)] opacity-20"></div>
        <div className="absolute top-20 right-0 w-72 h-72 sm:w-96 sm:h-96 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob"></div>
        <div className="absolute top-40 left-0 w-72 h-72 sm:w-96 sm:h-96 bg-purple-400 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-2000"></div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">
            {/* Left Content */}
            <div
              className={`space-y-6 sm:space-y-8 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
            >
              <div className="space-y-3 sm:space-y-4">
                <div className="inline-flex items-center px-3.5 py-1.5 sm:px-4 sm:py-2 bg-gradient-to-r from-emerald-500 to-teal-500 text-white rounded-full text-xs sm:text-sm font-medium shadow-md max-w-full">
                  <div className="w-2 h-2 bg-white rounded-full mr-2 animate-pulse flex-shrink-0"></div>
                  <span className="truncate">🚀 Tersedia untuk Kolaborasi & Proyek Baru</span>
                </div>
                
                <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 leading-tight tracking-tight">
                  Hi, Saya{" "}
                  <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                    Gaza Alfath Nugroho
                  </span>
                </h1>
                
                <div className="text-sm sm:text-base text-gray-600 font-medium flex items-center flex-wrap gap-2 pt-1">
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-xs sm:text-sm font-semibold">Full-Stack Developer</span>
                  <span className="text-gray-300 hidden sm:inline">•</span>
                  <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-xs sm:text-sm font-semibold">Cybersecurity Enthusiast</span>
                </div>
                
                <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-xl">
                  Saya menciptakan solusi digital yang tidak hanya indah secara visual, 
                  tetapi juga aman dan andal. Dengan latar belakang di bidang pengembangan 
                  web dan keamanan siber, saya membantu bisnis dan organisasi membangun 
                  produk digital yang tangguh dan terpercaya.
                </p>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-4 py-2 sm:py-4">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center p-3 bg-white/70 backdrop-blur-sm rounded-xl border border-slate-200/80 shadow-xs">
                    <div className="text-xl sm:text-2xl font-bold text-slate-900">{stat.value}</div>
                    <div className="text-xs sm:text-sm text-slate-500 font-medium">{stat.label}</div>
                  </div>
                ))}
              </div>

              {/* Social Links */}
              <div className="flex flex-wrap items-center gap-2 sm:gap-3">
                <a href="https://github.com/gazfath12" target="_blank" rel="noopener noreferrer" 
                   title="GitHub"
                   className="p-2.5 sm:p-3 bg-white rounded-xl shadow-xs border border-slate-200/80 hover:shadow-md hover:-translate-y-0.5 active:scale-95 transition-all">
                  <Github className="w-4 h-4 sm:w-5 sm:h-5 text-slate-800" />
                </a>
                <a href="https://www.linkedin.com/in/gaza-alfath-0830982a9/" target="_blank" rel="noopener noreferrer"
                   title="LinkedIn"
                   className="p-2.5 sm:p-3 bg-white rounded-xl shadow-xs border border-slate-200/80 hover:shadow-md hover:-translate-y-0.5 active:scale-95 transition-all">
                  <Linkedin className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600" />
                </a>
                <a href="https://www.instagram.com/gaz_fath/" target="_blank" rel="noopener noreferrer"
                   title="Instagram"
                   className="p-2.5 sm:p-3 bg-white rounded-xl shadow-xs border border-slate-200/80 hover:shadow-md hover:-translate-y-0.5 active:scale-95 transition-all">
                  <Instagram className="w-4 h-4 sm:w-5 sm:h-5 text-pink-600" />
                </a>
                <a href="https://twitter.com/gazfath12" target="_blank" rel="noopener noreferrer"
                   title="Twitter / X"
                   className="p-2.5 sm:p-3 bg-white rounded-xl shadow-xs border border-slate-200/80 hover:shadow-md hover:-translate-y-0.5 active:scale-95 transition-all">
                  <Twitter className="w-4 h-4 sm:w-5 sm:h-5 text-sky-500" />
                </a>
                <a href="https://wa.me/6289637503791" target="_blank" rel="noopener noreferrer"
                   title="WhatsApp"
                   className="p-2.5 sm:p-3 bg-white rounded-xl shadow-xs border border-slate-200/80 hover:shadow-md hover:-translate-y-0.5 active:scale-95 transition-all">
                  <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-600" />
                </a>
                <a href="https://blog.gazaalfath.my.id/" target="_blank" rel="noopener noreferrer"
                   title="Blog"
                   className="p-2.5 sm:p-3 bg-white rounded-xl shadow-xs border border-slate-200/80 hover:shadow-md hover:-translate-y-0.5 active:scale-95 transition-all">
                  <Globe className="w-4 h-4 sm:w-5 sm:h-5 text-orange-600" />
                </a>
                <a href="mailto:gazfath12@gmail.com"
                   title="Email"
                   className="p-2.5 sm:p-3 bg-white rounded-xl shadow-xs border border-slate-200/80 hover:shadow-md hover:-translate-y-0.5 active:scale-95 transition-all">
                  <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-red-500" />
                </a>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-2">
                <Button
                  size="lg"
                  className="w-full sm:w-auto bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-lg shadow-blue-500/20 rounded-xl py-6 hover:shadow-xl active:scale-98 transition-all"
                  onClick={() => window.open('/Gaza_Alfath_CV.pdf', '_blank')}
                >
                  <FileText className="w-4 h-4 mr-2" />
                  Download CV
                </Button>
                <Button variant="outline" size="lg" asChild className="w-full sm:w-auto border-2 rounded-xl py-6 hover:bg-slate-50">
                  <Link href="/projects" className="justify-center">
                    Lihat Portofolio
                    <ChevronRight className="w-4 h-4 ml-2" />
                  </Link>
                </Button>
              </div>
            </div>

            {/* Right Content - Profile Image */}
            <div
              className={`relative transition-all duration-1000 delay-300 mt-6 lg:mt-0 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
            >
              <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 mx-auto">
                {/* Animated background */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 rounded-full blur-3xl opacity-30 animate-pulse"></div>
                
                {/* Main image container */}
                <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-white shadow-2xl transform hover:scale-105 transition-transform duration-500">
                  <Image 
                    src="/gaza-formal.jpg" 
                    alt="Gaza Alfath Nugroho" 
                    fill 
                    className="object-cover"
                    priority 
                  />
                </div>
                
                {/* Decorative elements */}
                <div className="absolute -bottom-2 -right-2 sm:-bottom-4 sm:-right-4 bg-white rounded-xl shadow-xl p-2.5 sm:p-3 animate-bounce">
                  <Shield className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600" />
                </div>
                <div className="absolute -top-2 -left-2 sm:-top-4 sm:-left-4 bg-white rounded-xl shadow-xl p-2.5 sm:p-3">
                  <Code className="w-5 h-5 sm:w-6 sm:h-6 text-purple-600" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-12 sm:py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8 sm:mb-12">
            <Badge className="mb-3 sm:mb-4 px-4 py-1.5 bg-blue-100 text-blue-800 hover:bg-blue-200 text-xs sm:text-sm font-semibold">Layanan Saya</Badge>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 mb-3 sm:mb-4 tracking-tight">Solusi Digital Terintegrasi</h2>
            <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
              Menggabungkan keahlian pengembangan web dengan prinsip keamanan siber untuk hasil yang optimal
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {services.map((service, index) => {
              const Icon = service.icon
              return (
                <Card 
                  key={index}
                  className={`group border-slate-200/80 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 rounded-2xl ${
                    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                  }`}
                  style={{ transitionDelay: `${index * 100 + 400}ms` }}
                >
                  <CardContent className="p-5 sm:p-6 text-center">
                    <div className="w-14 h-14 sm:w-16 sm:h-16 mx-auto mb-4 bg-gradient-to-br from-blue-100 to-purple-100 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Icon className="w-7 h-7 sm:w-8 sm:h-8 text-blue-600" />
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-2">{service.title}</h3>
                    <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">{service.description}</p>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Portfolio Highlights - Enhanced */}
      <section className="py-12 sm:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div
            className={`text-center mb-8 sm:mb-12 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            <Badge className="mb-3 sm:mb-4 px-4 py-1.5 bg-purple-100 text-purple-800 hover:bg-purple-200 text-xs sm:text-sm font-semibold">Portofolio</Badge>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 mb-3 sm:mb-4 tracking-tight">Proyek Unggulan</h2>
            <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
              Berikut adalah beberapa karya terbaru yang menunjukkan keterampilan dan kreativitas saya
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 sm:gap-6">
            {portfolioHighlights.map((project, index) => (
              <Card
                key={project.id}
                onClick={() => setActiveProject({
                  title: project.title,
                  image: project.image || "/placeholder.svg",
                  description: project.description,
                  liveUrl: project.liveUrl,
                  isPrivate: project.isPrivate
                })}
                className={`group cursor-pointer hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: `${index * 100 + 600}ms` }}
              >
                <CardContent className="p-0">
                  <div className="relative overflow-hidden rounded-t-lg h-48">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    {project.isPrivate && (
                      <div className="absolute top-3 left-3 z-10">
                        <span className="bg-amber-600/95 backdrop-blur-sm text-white text-xs px-2.5 py-1 rounded-full font-medium flex items-center shadow-md">
                          <Lock className="w-3 h-3 mr-1" />
                          Privat (Internal)
                        </span>
                      </div>
                    )}
                    {project.featured && (
                      <div className="absolute top-3 right-3 z-10">
                        <span className="bg-gradient-to-r from-yellow-500 to-amber-500 text-white text-xs px-2.5 py-1 rounded-full font-bold shadow-md flex items-center">
                          ⭐ Unggulan
                        </span>
                      </div>
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="absolute bottom-4 left-4 right-4">
                        {project.isPrivate ? (
                          <Button 
                            size="sm" 
                            disabled
                            className="w-full bg-amber-600/90 text-white cursor-not-allowed font-medium shadow-lg"
                          >
                            <Lock className="w-4 h-4 mr-2" />
                            Sistem Privat Sekolah
                          </Button>
                        ) : (
                          <Button 
                            size="sm" 
                            className="w-full bg-white text-gray-900 hover:bg-gray-100 font-medium shadow-lg"
                            onClick={(e) => {
                              e.stopPropagation();
                              setActiveProject({
                                title: project.title,
                                image: project.image || "/placeholder.svg",
                                description: project.description,
                                liveUrl: project.liveUrl,
                                isPrivate: project.isPrivate
                              });
                            }}
                          >
                            <ExternalLink className="w-4 h-4 mr-2" />
                            Lihat & Kunjungi Website
                          </Button>
                        )}
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex flex-wrap gap-2 mb-3">
                      {project.tech.slice(0, 2).map((tech, i) => (
                        <span key={i} className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">
                          {tech}
                        </span>
                      ))}
                      {project.tech.length > 2 && (
                        <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">
                          +{project.tech.length - 2}
                        </span>
                      )}
                    </div>
                    <h3 className="font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 text-sm line-clamp-2">{project.description}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button 
              variant="outline" 
              size="lg" 
              asChild 
              className="border-2 hover:bg-gray-50 hover:border-blue-600 transition-all"
            >
              <Link href="/projects">
                Lihat Semua Proyek
                <ChevronRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 border-t border-gray-200 mt-12 bg-white/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-gray-600 text-sm flex items-center justify-center gap-1">
            &copy; {new Date().getFullYear()} Gaza Alfath Nugroho. Dibangun dengan 
            <Coffee className="w-4 h-4 text-amber-700" /> 
            dan kode yang aman.
          </p>
        </div>
      </footer>

      {/* Interactive Project Transition Modal */}
      <ProjectTransitionModal
        project={activeProject}
        onClose={() => setActiveProject(null)}
      />
    </div>
  )
}
