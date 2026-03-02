"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { ChevronRight, Download, ExternalLink, Shield, Code, Zap, Users, Github, Linkedin, Mail, FileText } from "lucide-react"
import { Button } from "../components/ui/button"
import { Card, CardContent } from "../components/ui/card"
import { Badge } from "../components/ui/badge"

export default function HomePage() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const portfolioHighlights = [
    {
      id: 1,
      title: "Kalkulator PWA",
      category: "Web Development",
      image: "/modern-ecommerce-website.png",
      description: "Kalkulator progresif yang dapat digunakan secara offline dengan teknologi service worker",
      liveUrl: "https://qalqulator.vercel.app/",
      tech: ["React", "PWA", "Service Worker"]
    },
    {
      id: 2,
      title: "Aplikasi Keuangan Santri",
      category: "Web Development",
      image: "/mobile-banking-app.png",
      description: "Sistem manajemen keuangan untuk pondok pesantren dengan fitur pencatatan transaksi",
      liveUrl: "https://santrique.vercel.app/",
      tech: ["Next.js", "Prisma", "PostgreSQL"]
    },
    {
      id: 3,
      title: "Point Of Sale",
      category: "Aplikasi Kasir",
      image: "/data-analytics-dashboard.png",
      description: "Aplikasi kasir berbasis web dengan manajemen inventaris dan laporan penjualan",
      liveUrl: "https://point-of-sale-dusky.vercel.app/",
      tech: ["React", "Node.js", "MongoDB"]
    },
    {
      id: 4,
      title: "Aplikasi Hafalan Qur'an",
      category: "Aplikasi Qur'an",
      image: "/brand-identity-design.png",
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
      <section className="relative pt-20 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 bg-grid-slate-200 [mask-image:linear-gradient(0deg,transparent,black)] opacity-20"></div>
        <div className="absolute top-20 right-0 w-96 h-96 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob"></div>
        <div className="absolute top-40 left-0 w-96 h-96 bg-purple-400 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-2000"></div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div
              className={`space-y-8 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
            >
              <div className="space-y-4">
                <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-emerald-500 to-teal-500 text-white rounded-full text-sm font-medium shadow-lg">
                  <div className="w-2 h-2 bg-white rounded-full mr-2 animate-pulse"></div>
                  🚀 Tersedia untuk Kolaborasi & Proyek Baru
                </div>
                
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                  Hi, Saya{" "}
                  <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                    Gaza Alfath Nugroho
                  </span>
                </h1>
                
                <p className="text-xl text-gray-600 font-medium flex items-center flex-wrap gap-2">
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">Full-Stack Developer</span>
                  <span className="text-gray-400">•</span>
                  <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm">Cybersecurity Enthusiast</span>
                </p>
                
                <p className="text-lg text-gray-500 leading-relaxed max-w-xl">
                  Saya menciptakan solusi digital yang tidak hanya indah secara visual, 
                  tetapi juga aman dan andal. Dengan latar belakang di bidang pengembangan 
                  web dan keamanan siber, saya membantu bisnis dan organisasi membangun 
                  produk digital yang tangguh dan terpercaya.
                </p>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 py-4">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
                    <div className="text-sm text-gray-500">{stat.label}</div>
                  </div>
                ))}
              </div>

              {/* Social Links */}
              <div className="flex items-center space-x-4">
                <a href="https://github.com" target="_blank" rel="noopener noreferrer" 
                   className="p-2 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
                  <Github className="w-5 h-5 text-gray-700" />
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"
                   className="p-2 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
                  <Linkedin className="w-5 h-5 text-blue-600" />
                </a>
                <a href="mailto:gaza@example.com"
                   className="p-2 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
                  <Mail className="w-5 h-5 text-red-500" />
                </a>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-4">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-lg hover:shadow-xl transition-all"
                  onClick={() => window.open('/cv-gaza-alfath.pdf', '_blank')}
                >
                  <FileText className="w-4 h-4 mr-2" />
                  Download CV
                </Button>
                <Button variant="outline" size="lg" asChild className="border-2 hover:bg-gray-50">
                  <Link href="/projects">
                    Lihat Portofolio
                    <ChevronRight className="w-4 h-4 ml-2" />
                  </Link>
                </Button>
              </div>
            </div>

            {/* Right Content - Profile Image */}
            <div
              className={`relative transition-all duration-1000 delay-300 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
            >
              <div className="relative w-80 h-80 mx-auto lg:w-96 lg:h-96">
                {/* Animated background */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 rounded-full blur-3xl opacity-30 animate-pulse"></div>
                
                {/* Main image container */}
                <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-white shadow-2xl transform hover:scale-105 transition-transform duration-500">
                  <Image 
                    src="/professional-headshot.png" 
                    alt="Gaza Alfath Nugroho" 
                    fill 
                    className="object-cover"
                    priority 
                  />
                </div>
                
                {/* Decorative elements */}
                <div className="absolute -bottom-4 -right-4 bg-white rounded-lg shadow-xl p-3 animate-bounce">
                  <Shield className="w-6 h-6 text-blue-600" />
                </div>
                <div className="absolute -top-4 -left-4 bg-white rounded-lg shadow-xl p-3">
                  <Code className="w-6 h-6 text-purple-600" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <Badge className="mb-4 px-4 py-2 bg-blue-100 text-blue-800 hover:bg-blue-200">Layanan Saya</Badge>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Solusi Digital Terintegrasi</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Menggabungkan keahlian pengembangan web dengan prinsip keamanan siber untuk hasil yang optimal
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => {
              const Icon = service.icon
              return (
                <Card 
                  key={index}
                  className={`group hover:shadow-xl transition-all duration-500 hover:-translate-y-2 ${
                    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                  }`}
                  style={{ transitionDelay: `${index * 100 + 400}ms` }}
                >
                  <CardContent className="p-6 text-center">
                    <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-blue-100 to-purple-100 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Icon className="w-8 h-8 text-blue-600" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{service.title}</h3>
                    <p className="text-gray-600 text-sm">{service.description}</p>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Portfolio Highlights - Enhanced */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div
            className={`text-center mb-12 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            <Badge className="mb-4 px-4 py-2 bg-purple-100 text-purple-800 hover:bg-purple-200">Portofolio</Badge>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Proyek Unggulan</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Berikut adalah beberapa karya terbaru yang menunjukkan keterampilan dan kreativitas saya
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {portfolioHighlights.map((project, index) => (
              <Card
                key={project.id}
                className={`group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 ${
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
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="absolute bottom-4 left-4 right-4">
                        <Button 
                          size="sm" 
                          className="w-full bg-white text-gray-900 hover:bg-gray-100"
                          onClick={() => window.open(project.liveUrl, '_blank')}
                        >
                          <ExternalLink className="w-4 h-4 mr-2" />
                          Live Demo
                        </Button>
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
    </div>
  )
}