"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import {
  Code, Palette, Database, Smartphone, Award, GraduationCap,
  Shield, Network, Lock, Bug, Globe, Users, Target,
  ExternalLink, Download, ZoomIn, X
} from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "../../components/ui/card"
import { Progress } from "../../components/ui/progress"
import { Badge } from "../../components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../../components/ui/tabs"
import { Button } from "../../components/ui/button"


interface Certification {
  id: number
  name: string
  issuer: string
  year: string
  credential: string
  image: string
  category: string
  description: string
}

export default function AboutPage() {
  const [isVisible, setIsVisible] = useState(false)
  const [selectedCert, setSelectedCert] = useState<Certification | null>(null)
  const [showModal, setShowModal] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const skills = [
    // Web Development Skills
    { name: "React/Next.js", level: 80, icon: Code, category: "web" },
    { name: "Php/Laravel", level: 80, icon: Database, category: "web" },
    { name: "Node.js/NestJS", level: 70, icon: Code, category: "web" },
    { name: "Mobile Development", level: 20, icon: Smartphone, category: "web" },
    { name: "HTML/CSS", level: 85, icon: Palette, category: "web" },
    { name: "Database (MySQL, MongoDB, PostgreSQL)", level: 75, icon: Database, category: "web" },
    { name: "DevOps & VPS Linux", level: 75, icon: Network, category: "web" },

    // Cybersecurity Skills
    { name: "Network Security & VPS", level: 70, icon: Network, category: "security" },
    { name: "Penetration Testing & OSINT", level: 65, icon: Bug, category: "security" },
    { name: "Security Auditing", level: 60, icon: Shield, category: "security" },
    { name: "AI Automation & Workflows", level: 75, icon: Target, category: "security" },
    { name: "Secure Coding", level: 70, icon: Code, category: "security" },
    { name: "Risk Assessment", level: 65, icon: Target, category: "security" },
  ]

  // Sertifikat dengan gambar
  const certifications: Certification[] = [
    {
      id: 1,
      name: "Introduction to Dark Web, Anonymity, and Cryptocurrency",
      issuer: "CodeRed",
      year: "2026",
      credential: "464820",
      image: "/certificates/sertifikat-1.png",
      category: "security",
      description: "Mempelajari fundamental dark web, metode anonimitas, dan dasar-dasar cryptocurrency dalam konteks keamanan siber."
    },
    {
      id: 2,
      name: "Basic Cybersecurity",
      issuer: "JagoanSiber (Codepolitan)",
      year: "2025",
      credential: "CPJS-CR/2025/XII/0183",
      image: "/certificates/sertifikat-2.jpg",
      category: "security",
      description: "Fundamental keamanan siber, pemahaman ancaman, dan praktik terbaik perlindungan data digital."
    },
    {
      id: 3,
      name: "Cybersecurity for Businesses - The Fundamental Edition",
      issuer: "CodeRed",
      year: "2026",
      credential: "465065",
      image: "/certificates/sertifikat-3.png",
      category: "security",
      description: "Implementasi standar keamanan siber untuk lingkungan bisnis dan manajemen risiko digital."
    },
    {
      id: 4,
      name: "Legacy Responsive Web Design V8",
      issuer: "freeCodeCamp",
      year: "2023",
      credential: "fcc47c5583-3481-4906-8719-df263c13813f",
      image: "/certificates/sertifikat-4.jpg",
      category: "web",
      description: "Penguasaan HTML5, CSS3, dan prinsip desain responsif untuk membangun antarmuka web modern."
    },
    {
      id: 5,
      name: "Peserta Lomba Desain Web - Technotraction UNS",
      issuer: "Universitas Sebelas Maret",
      year: "2024",
      credential: "021/B/UN27.02.3.14.14/MIKROPTIK/SK/X/2024",
      image: "/certificates/sertifikat-5.png",
      category: "web",
      description: "Partisipasi dalam kompetisi desain web tingkat nasional yang diselenggarakan oleh FKIP UNS."
    },
    {
      id: 6,
      name: "Make In-house Hacking and Pentesting Lab",
      issuer: "CodeRed",
      year: "2026",
      credential: "475753",
      image: "/certificates/sertifikat-6.png",
      category: "security",
      description: "Membangun laboratorium keamanan siber mandiri untuk pengujian penetrasi dan riset keamanan."
    },
  ]

  const education = [
    {
      degree: "D3 Teknik Informatika",
      school: "Politeknik Negeri Semarang (POLINES)",
      year: "2026 - Sekarang",
      description: "Menempuh pendidikan vokasi D3 Teknik Informatika dengan fokus pada Software Engineering, Web & Mobile Development, serta Keamanan Jaringan.",
      achievements: [
        "Mendalami pemrograman tingkat lanjut, struktur data, dan arsitektur perangkat lunak",
        "Mengembangkan proyek aplikasi web & sistem informasi berbasis standar industri",
        "Fokus pada integrasi Full-Stack Software Engineering dan Cybersecurity"
      ]
    },
    {
      degree: "Information Technology Program",
      school: "PPQIT Al - Mahir (Al-Mahir IT & Islamic Boarding School)",
      year: "March 2023 - June 2026",
      description: "Program intensif IT dengan fokus pada pengembangan Full-Stack Web dan keamanan siber",
      achievements: [
        "Membangun sistem SIAKAD Almahir dengan fitur anti-conflict scheduling",
        "Mengembangkan OSINT investigation tools dan arsitektur database relasional",
        "Anggota aktif tim cybersecurity club dan kepemimpinan"
      ]
    },
    {
      degree: "Cisco Networking Academy",
      school: "Cisco Networking Certification Program",
      year: "January 2026 - February 2026",
      description: "Pelatihan fundamental jaringan komputer dan arsitektur keamanan jaringan",
      achievements: [
        "Pemahaman mendalam mengenai protokol jaringan dan infrastruktur",
        "Praktik administrasi jaringan dan keamanan sistem"
      ]
    },
    {
      degree: "Responsive Web Design Certification",
      school: "freeCodeCamp",
      year: "April 2024 - December 2024",
      description: "Sertifikasi keahlian pengembangan antarmuka web responsif dengan standar modern",
      achievements: [
        "300+ jam kurikulum praktik web design dan antarmuka responsif",
        "Membangun berbagai proyek antarmuka web komersial"
      ]
    },
    {
      degree: "Junior High School & Islamic Studies",
      school: "Ponpes Al-Muttaqin",
      year: "April 2020 - June 2023",
      description: "Fokus pada pendidikan agama Islam, kedisiplinan, dan dasar kepemimpinan santri",
      achievements: [
        "Hafalan 5 Juz Al-Qur'an",
        "Aktif dalam kepengurusan dan organisasi santri"
      ]
    },
  ]

  const experience = [
    {
      role: "Event Administrator",
      company: "IIEF (International Islamic Education Fair) - Surakarta",
      period: "October 2025",
      description: "Mengelola sistem pendaftaran pengunjung dan pendataan event pameran pendidikan Islam internasional (50+ institusi dari Indonesia dan Timur Tengah)",
      achievements: [
        "Berkoordinasi dengan tim operasional untuk memastikan alur teknis dan administrasi berjalan lancar tanpa hambatan",
        "Menangani integrasi data pengunjung secara real-time selama pameran berlangsung"
      ]
    },
    {
      role: "Full-Stack Engineer Internship",
      company: "PPQIT AL Mahir - Boyolali",
      period: "August 2025 - October 2025",
      description: "Merancang dan membangun SIAKAD Almahir, sistem informasi akademik terintegrasi yang memangkas beban kerja admin hingga 80%",
      achievements: [
        "Membangun mesin penjadwalan anti-bentrok real-time dengan Laravel yang memvalidasi guru, kapasitas ruangan, dan jadwal mata pelajaran secara bersamaan (0 konflik)",
        "Merancang skema database relasional (ERD) untuk siswa, guru, kelas, dan mapel dengan optimasi performa query untuk generate e-Rapor",
        "Menghadirkan admin dashboard responsif dengan ringkasan data live yang digunakan harian oleh staf sekolah"
      ]
    },
    {
      role: "Frontend Developer & Security Assistant",
      company: "Bestkacafilm",
      period: "2024 - 2025",
      description: "Mengembangkan aplikasi web dan katalog untuk dealer kaca film resmi",
      achievements: [
        "Membangun antarmuka yang responsif, modern, dan user-friendly",
        "Mengimplementasikan validasi input dan proteksi untuk mencegah serangan XSS",
        "Melakukan code review untuk keamanan aplikasi web"
      ]
    },
  ]

  const securityProjects = [
    {
      name: "Security Audit Sistem Akademik",
      description: "Melakukan audit keamanan pada sistem database akademik dan memberikan rekomendasi perbaikan",
      year: "2024"
    },
    {
      name: "CTF Competition Participant",
      description: "Berpartisipasi dalam Capture The Flag competition tingkat pemula",
      year: "2024"
    },
    {
      name: "Secure Coding Workshop",
      description: "Mengadakan workshop dasar secure coding untuk santri",
      year: "2024"
    }
  ]

  const openCertModal = (cert: Certification) => {
    setSelectedCert(cert)
    setShowModal(true)
  }

  const closeCertModal = () => {
    setShowModal(false)
    setSelectedCert(null)
  }

  return (
    <div className="min-h-screen bg-page pt-20 sm:pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16">
        {/* Header */}
        <div
          className={`text-center mb-10 sm:mb-16 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
        >
          <Badge className="mb-3 sm:mb-4 px-4 py-1.5 bg-brand-soft text-brand-ink hover:bg-brand/10 text-xs sm:text-sm font-semibold">
            Tentang Saya
          </Badge>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-ink mb-4 sm:mb-6 tracking-tight">
            Perjalanan Saya di Dunia Teknologi
          </h1>
          <p className="text-base sm:text-xl text-ink3 max-w-3xl mx-auto leading-relaxed">
            Saya membangun sistem web grade-produksi secara end-to-end — mulai dari API NestJS dan frontend Next.js hingga deployment di Linux VPS serta alur kerja otomatisasi berbasis AI. Menggabungkan pengembangan dan keamanan untuk menciptakan solusi digital yang tangguh dan skalabel.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-3 gap-12 mb-16">
          {/* Profile Image & Bio */}
          <div
            className={`lg:col-span-1 transition-all duration-1000 delay-200 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
          >
            <Card className="text-center hover:shadow-xl transition-shadow">
              <CardContent className="pt-6">
                <div className="relative w-48 h-48 mx-auto mb-6">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full blur-lg opacity-50 animate-pulse"></div>
                <Image
                  src="/gaza-formal.jpg"
                  alt="Gaza Alfath Nugroho"
                  fill
                  className="rounded-full object-cover border-4 border-surface shadow-lg relative z-10"
                />
                </div>
                <h3 className="text-2xl font-bold text-ink mb-2">Gaza Alfath Nugroho</h3>
                <p className="text-xs text-brand font-semibold mb-3">(@gazaa alafath)</p>
                <div className="flex flex-wrap gap-2 justify-center mb-4">
                  <Badge className="bg-brand-soft text-brand-ink">D3 Teknik Informatika POLINES</Badge>
                  <Badge className="bg-emerald-soft text-emerald">Full-Stack Developer</Badge>
                  <Badge className="bg-purple-soft text-purple">Cybersecurity Enthusiast</Badge>
                </div>

                {/* Quick Info */}
                <div className="space-y-2 text-left mt-4">
                  <div className="flex items-center text-ink3">
                    <GraduationCap className="w-4 h-4 mr-2 text-brand flex-shrink-0" />
                    <span className="text-sm font-medium text-ink2">Politeknik Negeri Semarang (POLINES)</span>
                  </div>
                  <div className="flex items-center text-ink3">
                    <Globe className="w-4 h-4 mr-2 text-brand flex-shrink-0" />
                    <span className="text-sm">Semarang & Bekasi, Indonesia</span>
                  </div>
                  <div className="flex items-center text-ink3">
                    <Users className="w-4 h-4 mr-2 text-brand flex-shrink-0" />
                    <span className="text-sm">Open to Internship / Junior Role & Kolaborasi</span>
                  </div>
                </div>

                <p className="text-ink3 leading-relaxed mt-4 text-sm">
                  Saya <strong>Gaza Alfath Nugroho</strong> (dikenal di dunia maya sebagai <strong>gazaa alafath</strong>), seorang mahasiswa <strong>D3 Teknik Informatika di Politeknik Negeri Semarang (POLINES)</strong>. Memiliki pengalaman 3+ tahun dalam pengembangan aplikasi web dan riset keamanan siber. Saya telah meluncurkan platform SaaS komersial, membangun sistem manajemen akademik (SIAKAD), serta mengembangkan arsitektur sistem yang aman dan scalable.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Skills & Background */}
          <div
            className={`lg:col-span-2 space-y-8 transition-all duration-1000 delay-400 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
          >
            {/* Skills Tabs */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Code className="w-5 h-5 mr-2 text-brand" />
                  Keahlian Teknis
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Tabs defaultValue="web" className="w-full">
                  <TabsList className="grid w-full grid-cols-2 mb-6">
                    <TabsTrigger value="web">Web Development</TabsTrigger>
                    <TabsTrigger value="security">Cybersecurity</TabsTrigger>
                  </TabsList>
                  <TabsContent value="web">
                    <div className="grid sm:grid-cols-2 gap-6">
                      {skills.filter(s => s.category === "web").map((skill) => {
                        const IconComponent = skill.icon
                        return (
                          <div key={skill.name} className="space-y-2">
                            <div className="flex items-center justify-between">
                              <div className="flex items-center">
                                <IconComponent className="w-4 h-4 mr-2 text-brand" />
                                <span className="font-medium text-ink">{skill.name}</span>
                              </div>
                              <span className="text-sm text-ink4">{skill.level}%</span>
                            </div>
                            <Progress value={skill.level} className="h-2" />
                          </div>
                        )
                      })}
                    </div>
                  </TabsContent>
                  <TabsContent value="security">
                    <div className="grid sm:grid-cols-2 gap-6">
                      {skills.filter(s => s.category === "security").map((skill) => {
                        const IconComponent = skill.icon
                        return (
                          <div key={skill.name} className="space-y-2">
                            <div className="flex items-center justify-between">
                              <div className="flex items-center">
                                <IconComponent className="w-4 h-4 mr-2 text-purple" />
                                <span className="font-medium text-ink">{skill.name}</span>
                              </div>
                              <span className="text-sm text-ink4">{skill.level}%</span>
                            </div>
                            <Progress value={skill.level} className="h-2 bg-purple-soft" />
                          </div>
                        )
                      })}
                    </div>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>

            {/* Background Story */}
            <Card>
              <CardHeader>
                <CardTitle>Perjalanan Karir & Minat</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-ink3 leading-relaxed">
                  Perjalanan saya di dunia teknologi dimulai sejak masa SMA, berawal dari rasa penasaran
                  tentang bagaimana website bekerja hingga akhirnya menemukan passion dalam pengembangan web.
                  Seiring waktu, saya menyadari pentingnya aspek keamanan dalam setiap produk digital,
                  yang membawa saya untuk mendalami cybersecurity.
                </p>

                <p className="text-ink3 leading-relaxed">
                  Saat ini, saya fokus mengintegrasikan prinsip-prinsip keamanan siber dalam setiap proyek
                  pengembangan yang saya kerjakan. Saya percaya bahwa aplikasi yang baik tidak hanya harus
                  berfungsi dengan sempurna, tetapi juga harus aman dari berbagai ancaman siber.
                </p>

                <div className="bg-gradient-to-r from-brand-soft to-purple-soft p-4 rounded-lg mt-4">
                  <h4 className="font-semibold text-ink mb-2 flex items-center">
                    <Target className="w-4 h-4 mr-2 text-brand" />
                    Kesiapan Kerja & Tujuan Karir
                  </h4>
                  <p className="text-ink3 text-sm">
                    Terbuka untuk peran Internship atau Junior Backend / Full-Stack Engineer (Remote, Hybrid, maupun On-site), kolaborasi proyek, serta bimbingan dan mentorship dari engineer senior di tim yang berfokus pada produk teknologi yang berdampak nyata.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Certifications Gallery */}
        <div
          className={`mb-16 transition-all duration-1000 delay-500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
        >
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold text-ink flex items-center">
              <Award className="w-8 h-8 mr-3 text-brand" />
              Sertifikasi & Lisensi
            </h2>
            <Badge variant="outline" className="px-3 py-1">
              {certifications.length} Sertifikat
            </Badge>
          </div>

          <Tabs defaultValue="all" className="w-full">
            <TabsList className="mb-6">
              <TabsTrigger value="all">Semua</TabsTrigger>
              <TabsTrigger value="web">Web Development</TabsTrigger>
              <TabsTrigger value="security">Cybersecurity</TabsTrigger>
            </TabsList>

            <TabsContent value="all">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {certifications.map((cert) => (
                  <CertificationCard
                    key={cert.id}
                    cert={cert}
                    onClick={() => openCertModal(cert)}
                  />
                ))}
              </div>
            </TabsContent>

            <TabsContent value="web">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {certifications.filter(c => c.category === "web").map((cert) => (
                  <CertificationCard
                    key={cert.id}
                    cert={cert}
                    onClick={() => openCertModal(cert)}
                  />
                ))}
              </div>
            </TabsContent>

            <TabsContent value="security">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {certifications.filter(c => c.category === "security").map((cert) => (
                  <CertificationCard
                    key={cert.id}
                    cert={cert}
                    onClick={() => openCertModal(cert)}
                  />
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>

        {/* Cybersecurity Projects */}
        <div
          className={`mb-16 transition-all duration-1000 delay-600 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
        >
          <h2 className="text-3xl font-bold text-ink mb-8 flex items-center">
            <Shield className="w-8 h-8 mr-3 text-purple" />
            Proyek & Aktivitas Cybersecurity
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {securityProjects.map((project, index) => (
              <Card key={index} className="hover:shadow-lg transition-all hover:border-purple/40">
                <CardContent className="pt-6">
                  <div className="w-12 h-12 bg-purple-soft rounded-lg flex items-center justify-center mb-4">
                    <Lock className="w-6 h-6 text-purple" />
                  </div>
                  <h3 className="text-lg font-bold text-ink mb-2">{project.name}</h3>
                  <p className="text-ink3 text-sm mb-3">{project.description}</p>
                  <Badge variant="outline" className="text-purple border-purple/40">
                    {project.year}
                  </Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Education */}
        <div
          className={`mb-16 transition-all duration-1000 delay-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
        >
          <h2 className="text-3xl font-bold text-ink mb-8 flex items-center">
            <GraduationCap className="w-8 h-8 mr-3 text-brand" />
            Pendidikan
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {education.map((edu, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="pt-6">
                  <h3 className="text-xl font-bold text-ink mb-2">{edu.degree}</h3>
                  <p className="text-brand font-medium mb-2">{edu.school}</p>
                  <p className="text-ink4 text-sm mb-3">{edu.year}</p>
                  <p className="text-ink3 mb-3">{edu.description}</p>
                  <ul className="space-y-1">
                    {edu.achievements.map((achievement, i) => (
                      <li key={i} className="text-sm text-ink3 flex items-start">
                        <span className="text-brand mr-2">•</span>
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Experience */}
        <div
          className={`transition-all duration-1000 delay-800 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
        >
          <h2 className="text-3xl font-bold text-ink mb-8 flex items-center">
            <Award className="w-8 h-8 mr-3 text-brand" />
            Pengalaman Kerja
          </h2>
          <div className="space-y-6">
            {experience.map((exp, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="pt-6">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3">
                    <h3 className="text-xl font-bold text-ink">{exp.role}</h3>
                    <span className="text-brand font-medium">{exp.period}</span>
                  </div>
                  <p className="text-ink2 font-medium mb-2">{exp.company}</p>
                  <p className="text-ink3 mb-3">{exp.description}</p>
                  <ul className="space-y-1">
                    {exp.achievements.map((achievement, i) => (
                      <li key={i} className="text-sm text-ink3 flex items-start">
                        <span className="text-success mr-2">✓</span>
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Certification Modal */}
      {showModal && selectedCert && (
        <div className="fixed inset-0 bg-slate-950/80 backdrop-blur-md flex items-center justify-center z-50 p-3 sm:p-4 overflow-y-auto">
          <div className="relative bg-surface rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl my-auto">
            <div className="sticky top-0 bg-surface/95 backdrop-blur-md border-b p-3.5 sm:p-4 flex items-center justify-between z-10">
              <h3 className="text-base sm:text-xl font-bold text-ink pr-4 line-clamp-1">{selectedCert.name}</h3>
              <Button variant="ghost" size="icon" onClick={closeCertModal} className="rounded-full flex-shrink-0">
                <X className="w-5 h-5" />
              </Button>
            </div>
            <div className="p-4 sm:p-6">
              <div className="relative w-full h-52 xs:h-64 sm:h-80 mb-6 bg-surface2 rounded-xl overflow-hidden">
                <Image
                  src={selectedCert.image}
                  alt={selectedCert.name}
                  fill
                  className="object-contain p-2"
                />
              </div>
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-3 sm:gap-4 text-xs sm:text-sm">
                  <div className="p-2.5 bg-surface2 rounded-lg">
                    <p className="text-xs text-ink4 font-medium">Issuer</p>
                    <p className="font-semibold text-ink">{selectedCert.issuer}</p>
                  </div>
                  <div className="p-2.5 bg-surface2 rounded-lg">
                    <p className="text-xs text-ink4 font-medium">Tahun</p>
                    <p className="font-semibold text-ink">{selectedCert.year}</p>
                  </div>
                  <div className="p-2.5 bg-surface2 rounded-lg">
                    <p className="text-xs text-ink4 font-medium">Credential ID</p>
                    <p className="font-semibold text-ink truncate">{selectedCert.credential}</p>
                  </div>
                  <div className="p-2.5 bg-surface2 rounded-lg">
                    <p className="text-xs text-ink4 font-medium">Kategori</p>
                    <Badge className={selectedCert.category === "security" ? "bg-purple-soft text-purple" : "bg-brand-soft text-brand-ink"}>
                      {selectedCert.category === "security" ? "Cybersecurity" : "Web Development"}
                    </Badge>
                  </div>
                </div>
                <div>
                  <p className="text-xs text-ink4 font-medium mb-1">Deskripsi</p>
                  <p className="text-ink2 text-xs sm:text-sm leading-relaxed">{selectedCert.description}</p>
                </div>
                <div className="flex flex-col sm:flex-row gap-2.5 sm:gap-3 pt-4">
                  <Button className="w-full sm:flex-1 py-5 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-xl text-xs sm:text-sm" onClick={() => window.open(`/certificates/${selectedCert.credential}.pdf`, '_blank')}>
                    <Download className="w-4 h-4 mr-2" />
                    Download Sertifikat
                  </Button>
                  <Button variant="outline" className="w-full sm:flex-1 py-5 rounded-xl text-xs sm:text-sm" onClick={() => window.open(`https://verify.${selectedCert.issuer.toLowerCase().replace(' ', '')}.com/${selectedCert.credential}`, '_blank')}>
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Verifikasi Sertifikat
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

// Component untuk Card Sertifikat
function CertificationCard({ cert, onClick }: { cert: Certification; onClick: () => void }) {
  return (
    <Card
      className="group cursor-pointer hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
      onClick={onClick}
    >
      <CardContent className="p-4">
        <div className="relative w-full h-40 mb-4 bg-surface2 rounded-lg overflow-hidden">
          <Image
            src={cert.image}
            alt={cert.name}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
            <ZoomIn className="w-8 h-8 text-white" />
          </div>
        </div>
        <div className="flex items-start justify-between mb-2">
          <h3 className="font-semibold text-ink line-clamp-2">{cert.name}</h3>
          <Badge className={cert.category === "security" ? "bg-purple-soft text-purple ml-2" : "bg-brand-soft text-brand-ink ml-2"}>
            {cert.category === "security" ? "Sec" : "Web"}
          </Badge>
        </div>
        <p className="text-sm text-ink3 mb-1">{cert.issuer}</p>
        <p className="text-xs text-ink4">{cert.year}</p>
      </CardContent>
    </Card>
  )
}