"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import {
  ExternalLink,
  Github,
  Calendar,
  Shield,
  Lock,
  Code,
  Globe,
  Star,
  Award,
  Filter,
  X,
  Smartphone
} from "lucide-react";
import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";
import { Badge } from "../../components/ui/badge";
import { Tabs, TabsList, TabsTrigger } from "../../components/ui/tabs";
import { ProjectTransitionModal, ProjectTransitionData } from "../../components/project-transition-modal";

export default function ProjectsPage() {
  const [isVisible, setIsVisible] = useState(false);
  const [filter, setFilter] = useState("all");
  const [selectedTech, setSelectedTech] = useState<string[]>([]);
  const [activeProject, setActiveProject] = useState<ProjectTransitionData | null>(null);


  useEffect(() => {
    setIsVisible(true);
  }, []);

  const projects: Array<{ id: number; title: string; category: string; tags: string[]; image: string; description: string; longDescription: string; security?: string[]; date: string; liveUrl: string; githubUrl: string; featured: boolean; isPrivate?: boolean; categoryType: string[]; }> = [
    {
      id: 20,
      title: "SIAKAD Almahir",
      category: "web",
      tags: ["Laravel", "MySQL", "Real-time", "SIAKAD"],
      image: "/siakad.png",
      description: "Sistem Informasi Akademik dengan penjadwalan anti-bentrok real-time.",
      longDescription: "Sistem terintegrasi untuk manajemen data akademik sekolah, memangkas 80% beban administrasi manual. Dilengkapi mesin penjadwalan anti-bentrok secara real-time yang memvalidasi ketersediaan guru, kapasitas ruangan, dan mata pelajaran secara bersamaan.",
      security: ["Anti-conflict Engine", "Role Management", "ERD Optimized"],
      date: "2025",
      liveUrl: "#",
      githubUrl: "#",
      featured: true,
      isPrivate: true,
      categoryType: ["web"],
    },
    {
      id: 15,
      title: "Best Kaca Film - Dealer Resmi V-Kool",
      category: "web",
      tags: ["Next.js", "Tailwind", "Responsive", "Business"],
      image: "/bestkaca.png",
      description: "Website profesional untuk dealer kaca film V-Kool dengan fitur katalog produk.",
      longDescription: "Platform bisnis yang menyajikan informasi lengkap tentang produk kaca film, spesifikasi teknis, dan layanan pemasangan profesional.",
      security: ["HTTPS enforcement", "Secure contact form"],
      date: "2025",
      liveUrl: "https://bestkacafilm.com/",
      githubUrl: "#",
      featured: true,
      categoryType: ["web"],
    },
    {
      id: 21,
      title: "Sistem Keuangan Publik",
      category: "web",
      tags: ["Next.js", "React", "Tailwind", "Finance"],
      image: "/finance.png",
      description: "Aplikasi manajemen dan monitoring keuangan publik.",
      longDescription: "Platform manajemen keuangan publik yang membantu pemantauan anggaran, autentikasi pengguna, dan visualisasi data pengeluaran secara interaktif dan transparan.",
      security: ["Data Encryption", "Secure Auth", "Audit Logging"],
      date: "2025",
      liveUrl: "https://keuangan-pub.vercel.app/#/login",
      githubUrl: "#",
      featured: true,
      categoryType: ["web"],
    },
    {
      id: 19,
      title: "Nexcore Official",
      category: "web",
      tags: ["Next.js", "Landing Page", "Modern UI"],
      image: "/nexcore_v2.png",
      description: "Landing page modern untuk platform Nexcore.",
      longDescription: "Halaman depan yang dirancang dengan estetika modern dan performa tinggi untuk memperkenalkan layanan Nexcore.",
      date: "2025",
      liveUrl: "https://www.nexcore.my.id/",
      githubUrl: "#",
      featured: true,
      categoryType: ["web"],
    },
    {
      id: 17,
      title: "Nexcore SaaS",
      category: "web",
      tags: ["SaaS", "Next.js", "Full-stack"],
      image: "/nexcore.png",
      description: "SaaS Platform dengan backend yang tangguh.",
      longDescription: "Aplikasi SaaS yang melayani manajemen bisnis, dibangun dengan performa dan skalabilitas tinggi.",
      security: ["Auth", "Role Management"],
      date: "2025",
      liveUrl: "http://nexcore.web.id/",
      githubUrl: "#",
      featured: true,
      categoryType: ["web"],
    },
    {
      id: 16,
      title: "Pusdiklat Isalam",
      category: "web",
      tags: ["Company Profile", "Web"],
      image: "/pusdiklatisalam.png",
      description: "Website Company Profile untuk Pusat Pendidikan dan Pelatihan.",
      longDescription: "Website responsif untuk lembaga pelatihan dengan informasi program dan pendaftaran.",
      date: "2025",
      liveUrl: "https://www.pusdiklatisalam.web.id/",
      githubUrl: "#",
      featured: true,
      categoryType: ["web"],
    },
    {
      id: 1,
      title: "IndexDB Management System",
      category: "web",
      tags: ["React", "Next.js", "PWA", "IndexedDB", "Security"],
      image: "/kalkulator.png",
      description: "Aplikasi PWA dengan sistem keamanan data menggunakan enkripsi client-side dan IndexedDB.",
      longDescription: "Aplikasi ini mengimplementasikan praktik keamanan seperti sanitasi input, enkripsi data sensitif, dan proteksi terhadap serangan XSS menggunakan IndexedDB untuk penyimpanan lokal yang aman. Berfokus pada offline-first capability dengan Service Workers.",
      security: ["Enkripsi data client-side", "Sanitasi input", "Secure local storage"],
      date: "2025",
      liveUrl: "https://indexdb-management.vercel.app/",
      githubUrl: "https://github.com/gazfath12/kalkulator-pwa",
      featured: true,
      categoryType: ["web", "security"],
    },
    {
      id: 2,
      title: "SantriQue - Keuangan Santri",
      category: "web",
      tags: ["PWA", "React", "Next.js", "PostgreSQL", "Audit Trail"],
      image: "/santrique.png",
      description: "Sistem manajemen keuangan dengan fitur keamanan berlapis dan audit trail.",
      longDescription: "Sistem manajemen keuangan pondok pesantren yang mencatat setiap aktivitas pengguna (audit trail), validasi transaksi di sisi server, dan proteksi integritas data menggunakan PostgreSQL.",
      security: ["Audit trail", "Server-side validation", "Session management"],
      date: "2025",
      liveUrl: "https://santrique.gazaalfath.my.id/",
      githubUrl: "https://github.com/gazfath12/dompet-santri",
      featured: true,
      categoryType: ["web", "security"],
    },
    {
      id: 3,
      title: "Point Of Sale (Vercel Version)",
      category: "web",
      tags: ["PWA", "React", "TypeScript", "Next.js", "JWT"],
      image: "/data-analytics-dashboard.png",
      description: "Aplikasi kasir dengan sistem autentikasi JWT yang aman dan proteksi route.",
      longDescription: "Mengimplementasikan JWT tokens dengan refresh token mechanism, proteksi terhadap CSRF, dan secure session management.",
      security: ["JWT Auth", "CSRF Protection", "RBAC"],
      date: "2024",
      liveUrl: "https://point-of-sale-react-app.vercel.app/",
      githubUrl: "https://github.com/gazfath12/kasir-dengan-nextjs",
      featured: false,
      categoryType: ["web", "security"],
    },
    {
      id: 4,
      title: "POS Gazaalfath - Enterprise Edition",
      category: "web",
      tags: ["Next.js", "MySQL", "Tailwind", "Enterprise"],
      image: "/pos_dusky.png",
      description: "Sistem Point of Sale tingkat lanjut dengan manajemen stok dan laporan real-time.",
      longDescription: "Sistem kasir yang dioptimalkan untuk performa tinggi, mendukung multiple outlets, dan integrasi inventory management yang ketat dengan arsitektur database yang scalable.",
      security: ["SQL Injection Prevention", "Secure API", "Role Management"],
      date: "2025",
      liveUrl: "https://pos.gazaalfath.my.id/",
      githubUrl: "#",
      featured: true,
      categoryType: ["web"],
    },

    {
      id: 5,
      title: "Zakat Mall App",
      category: "web",
      tags: ["HTML", "CSS", "JavaScript", "Validation"],
      image: "/ai-chatbot-interface.png",
      description: "Aplikasi penghitung zakat dengan validasi input dan sanitasi data.",
      longDescription: "Meskipun sederhana, aplikasi ini mengimplementasikan validasi input ketat dan sanitasi data untuk mencegah injeksi kode berbahaya.",
      security: ["Input sanitization", "Data validation"],
      date: "2023",
      liveUrl: "https://zakat-mall.vercel.app/",
      githubUrl: "https://github.com/gazfath12/zakat-mall",
      featured: false,
      categoryType: ["web"],
    },
    {
      id: 6,
      title: "BBQ Karimah Official Site",
      category: "web",
      tags: ["HTML", "CSS", "JavaScript", "Domain Branding"],
      image: "/modern-portfolio-template.png",
      description: "Website resmi BBQ Karimah dengan domain kustom dan optimasi SEO.",
      longDescription: "Landing page profesional untuk bisnis kuliner, fokus pada kecepatan load dan antarmuka pengguna yang menarik menggunakan domain gazaalfath.my.id.",
      security: ["HTTPS enforcement", "XSS protection headers"],
      date: "2024",
      liveUrl: "https://bbq-karimah.gazaalfath.my.id/",
      githubUrl: "#",
      featured: false,
      categoryType: ["web"],
    },
    {
      id: 9,
      title: "Secure Login Form PWA",
      category: "web",
      tags: ["React", "CSS Modules", "Formik", "Security"],
      image: "/modern-ecommerce-dashboard.png",
      description: "Template form login aman dengan validasi sisi client yang kuat.",
      longDescription: "Project yang mengeksplorasi pembuatan form login yang responsif dan aman terhadap serangan brute force sederhana di sisi client.",
      security: ["Client-side validation", "Input sanitization"],
      date: "2025",
      liveUrl: "https://form-login-swart.vercel.app/",
      githubUrl: "#",
      featured: false,
      categoryType: ["web", "security"],
    },
    {
      id: 10,
      title: "SAS Project React",
      category: "web",
      tags: ["React", "Tailwind", "State Management"],
      image: "/sas.png",
      description: "Sistem Aplikasi Sekolah (SAS) berbasis React untuk manajemen data siswa.",
      longDescription: "Aplikasi manajemen sekolah yang efisien untuk menangani data administrasi, nilai, dan absensi dengan antarmuka modern.",
      security: ["Data validation", "Secure routing"],
      date: "2024",
      liveUrl: "https://sas-project-react.vercel.app/",
      githubUrl: "#",
      featured: false,
      categoryType: ["web"],
    },
    {
      id: 11,
      title: "Ujian STS Semester 1 App",
      category: "web",
      tags: ["JavaScript", "Exam System", "Logic"],
      image: "/ai-chatbot-interface.png",
      description: "Aplikasi ujian online semester 1 dengan sistem penilaian otomatis.",
      longDescription: "Media pembelajaran digital untuk mendukung proses ujian sekolah yang lebih efisien dan transparan.",
      security: ["Anti-cheat measures", "Session protection"],
      date: "2024",
      liveUrl: "https://ujian-sts-semsester-1.vercel.app/",
      githubUrl: "#",
      featured: false,
      categoryType: ["web"],
    },
    {
      id: 12,
      title: "Al-Quran Hafalan Digital",
      category: "web",
      tags: ["React", "API", "Islamic App", "Next.js"],
      image: "/alquran.png",
      description: "Web app untuk membantu menghafal Al-Quran dengan fitur pelacakan progress.",
      longDescription: "Menggunakan Al-Quran API untuk menyajikan mushaf digital yang interaktif dan memudahkan user dalam menghafal.",
      security: ["Secure API consumption"],
      date: "2025",
      liveUrl: "https://quran-hafalan.ppqita.my.id/",
      githubUrl: "#",
      featured: true,
      categoryType: ["web"],
    },
    {
      id: 13,
      title: "Kalkulator Smart - Gazaalfath",
      category: "web",
      tags: ["JavaScript", "Tools", "Utility"],
      image: "/kalkulator-smart.png",
      description: "Kalkulator serbaguna dengan antarmuka yang bersih and fungsional.",
      longDescription: "Project utilitas sederhana namun powerfull untuk membantu perhitungan harian dengan presisi tinggi.",
      security: ["Standard input validation"],
      date: "2023",
      liveUrl: "https://kalkulator.gazaalfath.my.id/",
      githubUrl: "#",
      featured: false,
      categoryType: ["web"],
    },
    {
      id: 14,
      title: "Al-Mutt Official Web",
      category: "web",
      tags: ["Business", "Landing Page", "Next.js"],
      image: "/almutt.png",
      description: "Website representasi untuk entitas Al-Mutt dengan desain premium.",
      longDescription: "Landing page modern yang dibangun dengan Next.js untuk memberikan kesan profesional dan kredibilitas tinggi.",
      security: ["Secure headers", "HTTPS"],
      date: "2025",
      liveUrl: "https://almutt.gazaalfath.my.id/",
      githubUrl: "#",
      featured: false,
      categoryType: ["web"],
    },
    {
      id: 18,
      title: "Gaza Finance App",
      category: "web",
      tags: ["Next.js", "Finance", "Dashboard"],
      image: "/finance.png",
      description: "Aplikasi manajemen keuangan pribadi dengan pelacakan pengeluaran.",
      longDescription: "Platform monitoring keuangan yang membantu user mengelola anggaran, mencatat transaksi, dan melihat visualisasi pengeluaran.",
      security: ["Data Encryption", "Secure Auth"],
      date: "2025",
      liveUrl: "https://finance.gazaalfath.my.id/",
      githubUrl: "#",
      featured: true,
      categoryType: ["web"],
    },
  ];

  // Gabungkan semua proyek
  const allProjects = [...projects];

  const categories = [
    { id: "all", name: "Semua Proyek", icon: Filter },
    { id: "web", name: "Web Development", icon: Globe },
  ];

  const technologies = [
    "React", "Next.js", "TypeScript", "Laravel", "JavaScript",
    "PWA", "Node.js", "PostgreSQL", "Tailwind", "Responsive"
  ];

  const filteredProjects = allProjects.filter((project) => {
    if (filter !== "all" && !project.categoryType.includes(filter)) {
      return false;
    }
    if (selectedTech.length > 0 && !selectedTech.some(tech => project.tags.includes(tech))) {
      return false;
    }
    return true;
  });

  const featuredProjects = allProjects.filter((project) => project.featured);

  const toggleTech = (tech: string) => {
    setSelectedTech(prev =>
      prev.includes(tech)
        ? prev.filter(t => t !== tech)
        : [...prev, tech]
    );
  };

  const clearFilters = () => {
    setFilter("all");
    setSelectedTech([]);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Header */}
        <div
          className={`text-center mb-16 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
        >
          <Badge className="mb-4 px-4 py-2 bg-blue-100 text-blue-800 hover:bg-blue-200">
            Portofolio Proyek
          </Badge>
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Karya &{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Pengembangan Web
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Koleksi proyek pengembangan web yang fokus pada fungsionalitas,
            performa, dan pengalaman pengguna yang modern.
          </p>
        </div>

        {/* Security Stats */}
        <div
          className={`grid grid-cols-2 md:grid-cols-4 gap-4 mb-12 transition-all duration-1000 delay-200 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
        >
          {[
            { label: "Total Proyek Web", value: "14+", icon: Globe, color: "blue" },
            { label: "Teknologi Modern", value: "12+", icon: Code, color: "purple" },
            { label: "PWA Apps", value: "5+", icon: Smartphone, color: "red" },
            { label: "Happy Clients", value: "100%", icon: Award, color: "green" },
          ].map((stat, index) => {
            const Icon = stat.icon;
            return (
              <Card key={index} className="text-center p-4 hover:shadow-lg transition-shadow">
                <CardContent className="p-0">
                  <div className={`w-12 h-12 mx-auto mb-3 bg-${stat.color}-100 rounded-full flex items-center justify-center`}>
                    <Icon className={`w-6 h-6 text-${stat.color}-600`} />
                  </div>
                  <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Featured Projects */}
        <div
          className={`mb-16 transition-all duration-1000 delay-400 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center">
            <Star className="w-8 h-8 mr-3 text-yellow-500 fill-current" />
            Proyek Unggulan
          </h2>
          <div className="grid lg:grid-cols-2 gap-8">
            {featuredProjects.slice(0, 6).map((project) => (
              <Card
                key={project.id}
                onClick={() => setActiveProject({
                  title: project.title,
                  image: project.image || "/placeholder.svg",
                  description: project.longDescription || project.description,
                  liveUrl: project.liveUrl,
                  isPrivate: project.isPrivate
                })}
                className="group cursor-pointer hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 overflow-hidden"
              >
                <div className="relative overflow-hidden h-64">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="absolute bottom-4 left-4 right-4 flex gap-2">
                      {project.isPrivate ? (
                        <Button
                          size="sm"
                          disabled
                          className="flex-1 bg-amber-600/90 text-white cursor-not-allowed"
                        >
                          <Lock className="w-4 h-4 mr-2" />
                          Sistem Privat Sekolah
                        </Button>
                      ) : (
                        <Button
                          size="sm"
                          className="flex-1 bg-white text-gray-900 hover:bg-gray-100 font-medium"
                          onClick={(e) => {
                            e.stopPropagation();
                            setActiveProject({
                              title: project.title,
                              image: project.image || "/placeholder.svg",
                              description: project.longDescription || project.description,
                              liveUrl: project.liveUrl,
                              isPrivate: project.isPrivate
                            });
                          }}
                        >
                          <ExternalLink className="w-4 h-4 mr-2" />
                          Kunjungi Website
                        </Button>
                      )}
                      {project.githubUrl !== "#" && (
                        <Button
                          size="sm"
                          variant="outline"
                          className="bg-white/20 text-white border-white hover:bg-white/30"
                          onClick={(e) => {
                            e.stopPropagation();
                            window.open(project.githubUrl, "_blank");
                          }}
                        >
                          <Github className="w-4 h-4" />
                        </Button>
                      )}
                    </div>
                  </div>
                  <div className="absolute top-4 left-4 flex gap-2">
                    <Badge className="bg-blue-600 hover:bg-blue-700">
                      Featured
                    </Badge>
                    {project.isPrivate && (
                      <Badge className="bg-amber-600 hover:bg-amber-700">
                        <Lock className="w-3 h-3 mr-1" />
                        Privat Sekolah
                      </Badge>
                    )}
                    {project.categoryType.includes("security") && (
                      <Badge className="bg-purple-600 hover:bg-purple-700">
                        <Shield className="w-3 h-3 mr-1" />
                        Security
                      </Badge>
                    )}
                  </div>
                </div>
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors mb-2">
                        {project.title}
                      </h3>
                      <div className="flex items-center text-gray-500 text-sm">
                        <Calendar className="w-4 h-4 mr-1" />
                        {project.date}
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {project.longDescription || project.description}
                  </p>

                  {/* Security Features */}
                  {project.security && (
                    <div className="mb-4 p-3 bg-blue-50 rounded-lg">
                      <p className="text-sm font-semibold text-blue-800 mb-2 flex items-center">
                        <Shield className="w-4 h-4 mr-1" />
                        Fitur Keamanan:
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {project.security.map((item, i) => (
                          <Badge key={i} variant="outline" className="bg-white text-blue-700 border-blue-200">
                            {item}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  )}

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Filter Section */}
        <div
          className={`mb-8 transition-all duration-1000 delay-600 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
        >
          <Card className="p-6">
            <CardContent className="p-0">
              <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
                <h3 className="text-lg font-semibold text-gray-900">Filter Proyek</h3>
                {(filter !== "all" || selectedTech.length > 0) && (
                  <Button variant="ghost" size="sm" onClick={clearFilters} className="text-red-600">
                    <X className="w-4 h-4 mr-2" />
                    Hapus Filter
                  </Button>
                )}
              </div>

              {/* Category Tabs */}
              <Tabs defaultValue="all" className="mb-6" onValueChange={setFilter}>
                <TabsList className="grid w-full grid-cols-3">
                  {categories.map((cat) => {
                    const Icon = cat.icon;
                    return (
                      <TabsTrigger key={cat.id} value={cat.id} className="flex items-center gap-2">
                        <Icon className="w-4 h-4" />
                        {cat.name}
                      </TabsTrigger>
                    );
                  })}
                </TabsList>
              </Tabs>

              {/* Technology Filters */}
              <div>
                <p className="text-sm font-medium text-gray-700 mb-3 flex items-center">
                  <Code className="w-4 h-4 mr-2" />
                  Filter berdasarkan Teknologi:
                </p>
                <div className="flex flex-wrap gap-2">
                  {technologies.map((tech) => (
                    <Badge
                      key={tech}
                      variant={selectedTech.includes(tech) ? "default" : "outline"}
                      className={`cursor-pointer transition-all ${selectedTech.includes(tech)
                        ? "bg-blue-600 hover:bg-blue-700"
                        : "hover:bg-gray-100"
                        }`}
                      onClick={() => toggleTech(tech)}
                    >
                      {tech}
                      {selectedTech.includes(tech) && " ✓"}
                    </Badge>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* All Projects Grid */}
        <div
          className={`transition-all duration-1000 delay-800 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
        >
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold text-gray-900">
              Semua Proyek
            </h2>
            <p className="text-gray-600">
              Menampilkan {filteredProjects.length} proyek
            </p>
          </div>

          {filteredProjects.length === 0 ? (
            <Card className="p-12 text-center">
              <CardContent>
                <div className="w-20 h-20 mx-auto mb-4 bg-gray-100 rounded-full flex items-center justify-center">
                  <Filter className="w-10 h-10 text-gray-400" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Tidak Ada Proyek
                </h3>
                <p className="text-gray-600 mb-4">
                  Tidak ada proyek yang sesuai dengan filter yang dipilih.
                </p>
                <Button onClick={clearFilters}>Reset Filter</Button>
              </CardContent>
            </Card>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProjects.map((project) => (
                <Card
                  key={project.id}
                  onClick={() => setActiveProject({
                    title: project.title,
                    image: project.image || "/placeholder.svg",
                    description: project.longDescription || project.description,
                    liveUrl: project.liveUrl,
                    isPrivate: project.isPrivate
                  })}
                  className="group cursor-pointer hover:shadow-xl transition-all duration-500 hover:-translate-y-2 overflow-hidden"
                >
                  <div className="relative overflow-hidden h-48">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="absolute bottom-3 left-3 right-3 flex gap-2">
                        {project.isPrivate ? (
                          <Button
                            size="sm"
                            disabled
                            className="flex-1 text-xs bg-amber-600/90 text-white cursor-not-allowed"
                          >
                            <Lock className="w-3 h-3 mr-1" />
                            Privat
                          </Button>
                        ) : (
                          <Button
                            size="sm"
                            className="flex-1 text-xs"
                            onClick={(e) => {
                              e.stopPropagation();
                              setActiveProject({
                                title: project.title,
                                image: project.image || "/placeholder.svg",
                                description: project.longDescription || project.description,
                                liveUrl: project.liveUrl,
                                isPrivate: project.isPrivate
                              });
                            }}
                          >
                            <ExternalLink className="w-3 h-3 mr-1" />
                            Website
                          </Button>
                        )}
                        {project.githubUrl !== "#" && (
                          <Button
                            size="sm"
                            variant="outline"
                            className="bg-white/20 text-white border-white hover:bg-white/30"
                            onClick={(e) => {
                              e.stopPropagation();
                              window.open(project.githubUrl, "_blank");
                            }}
                          >
                            <Github className="w-3 h-3" />
                          </Button>
                        )}
                      </div>
                    </div>
                    <div className="absolute top-2 left-2 flex gap-1">
                      {project.featured && (
                        <Badge className="bg-yellow-600 text-xs py-0 h-5">
                          Featured
                        </Badge>
                      )}
                      {project.isPrivate && (
                        <Badge className="bg-amber-600 text-xs py-0 h-5">
                          <Lock className="w-3 h-3 mr-1" />
                          Privat
                        </Badge>
                      )}
                      {project.categoryType.includes("security") && (
                        <Badge className="bg-purple-600 text-xs py-0 h-5">
                          <Shield className="w-3 h-3 mr-1" />
                          Sec
                        </Badge>
                      )}
                    </div>
                  </div>
                  <CardContent className="p-4">
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="text-base font-bold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-2">
                        {project.title}
                      </h3>
                      <div className="flex items-center text-gray-500 text-xs flex-shrink-0 ml-2">
                        <Calendar className="w-3 h-3 mr-1" />
                        {project.date}
                      </div>
                    </div>

                    <p className="text-gray-600 text-xs mb-3 line-clamp-2">
                      {project.description}
                    </p>

                    {/* Security Badges */}
                    {project.security && (
                      <div className="mb-2 flex flex-wrap gap-1">
                        <Badge variant="outline" className="text-[10px] py-0 h-4 bg-blue-50 text-blue-700 border-blue-200">
                          <Shield className="w-2 h-2 mr-1" />
                          {project.security.length} security features
                        </Badge>
                      </div>
                    )}

                    <div className="flex flex-wrap gap-1 mb-3">
                      {project.tags.slice(0, 3).map((tag) => (
                        <Badge key={tag} variant="secondary" className="text-[10px] py-0 h-5">
                          {tag}
                        </Badge>
                      ))}
                      {project.tags.length > 3 && (
                        <Badge variant="secondary" className="text-[10px] py-0 h-5">
                          +{project.tags.length - 3}
                        </Badge>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>

        {/* Call to Action */}
        <div
          className={`mt-16 text-center transition-all duration-1000 delay-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
        >
          <Card className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-8">
            <CardContent className="p-0">
              <h3 className="text-2xl font-bold mb-4">
                Tertarik untuk Membangun Website?
              </h3>
              <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
                Saya selalu terbuka untuk berkolaborasi dalam proyek pengembangan web
                yang kreatif, modern, dan fungsional.
              </p>
              <div className="flex justify-center gap-4">
                <Button
                  variant="secondary"
                  size="lg"
                  onClick={() => window.location.href = "/contact"}
                >
                  Hubungi Saya
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="bg-transparent border-white text-white hover:bg-white hover:text-blue-600"
                  onClick={() => window.open("/Gaza_Alfath_CV.pdf")}
                >
                  Download CV
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Interactive Project Transition Modal */}
      <ProjectTransitionModal
        project={activeProject}
        onClose={() => setActiveProject(null)}
      />
    </div>
  );
}