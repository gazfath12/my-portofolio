"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Code, Palette, Database, Smartphone, Award, GraduationCap } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "../../components/ui/card"
import { Progress } from "../../components/ui/progress"

export default function AboutPage() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const skills = [
    { name: "React/Next.js", level: 70, icon: Code },
    { name: "Php/Laravel", level: 80, icon: Palette },
    { name: "Node.js", level: 65, icon: Database },
    { name: "Mobile Development", level: 50, icon: Smartphone },
  ]

  const education = [
    {
      degree: "Boarding School Al-Muttaqin",
      school: "Al-muttaqin",
      year: "2020-2023",
      description: "Fokus Di Bidang Agama Dan Umum Serta Qur'an",
    },
    {
      degree: "Al-Mahir Information Technology",
      school: "Pondok Pesantren Qur'an Dan IT Al-Mahir",
      year: "2023-2026",
      description: "Fokus Di IT Seperti Database DLL",
    },
  ]

  const experience = [
    {
      role: "Junior Full-Stack Developer",
      company: "Mahir Systeam",
      period: "2025 - Present",
      description: "Bagian Database Akademik",
    },
    {
      role: "Junior Backend Developer",
      company: "Mahir Systeam",
      period: "2024- 2025",
      description: "Membuat Database User Dan Admin Di Dalam Website Psb",
    },
    {
      role: "Frontend Developer",
      company: "Bestkacafilm",
      period: "2024-2025",
      description: "Membuat Aplikasi Kaca Film Dan Bisa Mengecek Garansi Di dalam Web",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Header */}
        <div
          className={`text-center mb-16 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">About Me</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
          Saya adalah pengembang  yang penuh semangat dengan lebih dari 2 tahun pengalaman dalam menciptakan solusi digital yang menjembatani kesenjangan antara teknologi dan kebutuhan manusia.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-3 gap-12 mb-16">
          {/* Profile Image & Bio */}
          <div
            className={`lg:col-span-1 transition-all duration-1000 delay-200 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="relative w-48 h-48 mx-auto mb-6">
                  <Image
                    src="/professional-portrait.png"
                    alt="Gaza Alfath"
                    fill
                    className="rounded-full object-cover border-4 border-white shadow-lg"
                  />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Gaza Alfath</h3>
                <p className="text-blue-600 font-medium mb-4">Junior Full-Stack Developer </p>
                <p className="text-gray-600 leading-relaxed">
                 Saya Baru Saja Terjun Di Dalam IT Dan Koding
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Skills & Background */}
          <div
            className={`lg:col-span-2 space-y-8 transition-all duration-1000 delay-400 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            {/* Skills */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Code className="w-5 h-5 mr-2 text-blue-600" />
                  Technical Skills
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid sm:grid-cols-2 gap-6">
                  {skills.map((skill, index) => {
                    const IconComponent = skill.icon
                    return (
                      <div key={skill.name} className="space-y-2">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center">
                            <IconComponent className="w-4 h-4 mr-2 text-blue-600" />
                            <span className="font-medium text-gray-900">{skill.name}</span>
                          </div>
                          <span className="text-sm text-gray-500">{skill.level}%</span>
                        </div>
                        <Progress value={skill.level} className="h-2" />
                      </div>
                    )
                  })}
                </div>
              </CardContent>
            </Card>

            {/* Background Story */}
            <Card>
              <CardHeader>
                <CardTitle>My Journey</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-600 leading-relaxed">
                 Saya memulai perjalanan di dunia teknologi sejak masa SMA, berawal dari rasa penasaran hingga menjadi passion untuk menciptakan solusi digital yang bermanfaat.
Selama ini, saya telah bekerja sama dengan startup dan perusahaan untuk mengubah ide menjadi produk yang fungsional dan estetis.
                </p>
                
                <p className="text-gray-600 leading-relaxed">
                Selama bertahun-tahun, saya berkesempatan bekerja sama dengan berbagai startup maupun perusahaan yang sudah mapan, membantu mewujudkan visi mereka melalui desain yang matang dan pengembangan yang kokoh. Saya percaya pada pertemuan antara estetika dan fungsionalitas, di mana desain yang indah berpadu dengan teknologi yang kuat.
                </p>
                <p className="text-gray-600 leading-relaxed">
                 Di luar coding, saya gemar mengeksplorasi tren desain, berkontribusi di proyek open-source
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Education */}
        <div
          className={`mb-16 transition-all duration-1000 delay-600 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center">
            <GraduationCap className="w-8 h-8 mr-3 text-blue-600" />
            Education
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {education.map((edu, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="pt-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{edu.degree}</h3>
                  <p className="text-blue-600 font-medium mb-2">{edu.school}</p>
                  <p className="text-gray-500 text-sm mb-3">{edu.year}</p>
                  <p className="text-gray-600">{edu.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Experience */}
        <div
          className={`transition-all duration-1000 delay-800 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center">
            <Award className="w-8 h-8 mr-3 text-blue-600" />
            Experience
          </h2>
          <div className="space-y-6">
            {experience.map((exp, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="pt-6">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3">
                    <h3 className="text-xl font-bold text-gray-900">{exp.role}</h3>
                    <span className="text-blue-600 font-medium">{exp.period}</span>
                  </div>
                  <p className="text-gray-700 font-medium mb-2">{exp.company}</p>
                  <p className="text-gray-600">{exp.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
