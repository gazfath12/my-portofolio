"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { ExternalLink, Github, Calendar, Tag } from "lucide-react";
import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";
import { Badge } from "../../components/ui/badge";

export default function ProjectsPage() {
  const [isVisible, setIsVisible] = useState(false);
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const projects = [
    {
      id: 1,
      title: "Manajemen Data PWA",
      category: "web",
      tags: ["React", "Node.js", "Tailwind", "pwa","next"],
      image: "/modern-ecommerce-dashboard.png",
      description:
        "Management Data Pwa Memiliki Input Nama,Email dan Usia Bisa Di Install Dan digunakan Secara Offline",
      date: "2025",
      liveUrl: "https://indexdb-management.vercel.app/",
      githubUrl: "https://github.com/gazfath12/kalkulator-pwa",
      featured: true,
    },
    {
      id: 2,
      title: "Aplikasi Keuangan Santri",
      category: "web",
      tags: ["Pwa", "React", "NextJs", "PostgreSQL","Nodejs"],
      image: "/mobile-banking-app.png",
      description:
        "Management Keuangan Santri Terdapat Transaksi Pemasukan,Pengeluaran Dan Menghitung Total Pengeluaran Pemasukan Dan Saldo Total.",
      date: "2025",
      liveUrl: "https://santrique.vercel.app/",
      githubUrl: "https://github.com/gazfath12/dompet-santri",
      featured: true,
    },
    {
      id: 3,
      title: "Point Of Sale",
      category: "web",
      tags: ["Pwa", "React", "Typesript", "Html","Nextjs"],
      image: "/data-analytics-dashboard.png",
      description:
        "Membuat Aplikasi Kasir Sederhana Mengunakan NextJs ",
      date: "2024",
      liveUrl: "https://point-of-sale-dusky.vercel.app/",
      githubUrl: "https://github.com/gazfath12/kasir-dengan-nextjs",
      featured: false,
    },
    {
      id: 4,
      title: "Aplikasi Kaca Film",
      category: "web",
      tags: ["Laravel", "Mysql", "Tailwind","Sqlite"],
      image: "/task-management-app.png",
      description:
        "Membuat Aplikasi Kaca Film Dan Memiliki Fitur Klaim Garansi Di web",
      date: "2025",
      liveUrl: "#",
      githubUrl: "#",
      featured: false,
    },
    {
      id: 5,
      title: "Kalkulator Zakat",
      category: "web",
      tags: ["html", "css"],
      image: "/ai-chatbot-interface.png",
      description:
        "Membuat Aplikasi Penghitung Zakat Sederhana Mengunakan Html",
      date: "2023",
      liveUrl: "https://zakat-mall.vercel.app/",
      githubUrl: "https://github.com/gazfath12/zakat-mall",
      featured: true,
    },
    {
      id: 6,
      title: "Website Product BBQ Karimah",
      category: "mobile",
      tags: ["HTML", "CSS", "JavaScript"],
      image: "/modern-portfolio-template.png",
      description:
        "Website Untuk Mempromosikan Product Dari BBQ Karimah",
      date: "2023",
      liveUrl: "https://bbq-karimah-woad.vercel.app/",
      githubUrl: "https://github.com/gazfath12/BBQ-Karimah",
      featured: false,
    },
  ];

  const categories = [
    { id: "all", name: "All Projects" },
    { id: "web", name: "Web Development" },
    { id: "mobile", name: "Mobile Apps" },
    { id: "ai", name: "AI/ML" },
    { id: "design", name: "Design" },
  ];

  const filteredProjects =
    filter === "all"
      ? projects
      : projects.filter((project) => project.category === filter);

  const featuredProjects = projects.filter((project) => project.featured);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Header */}
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            My Projects
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            A collection of my work spanning web development, mobile
            applications, AI solutions, and design projects.
          </p>
        </div>

        {/* Featured Projects */}
        <div
          className={`mb-16 transition-all duration-1000 delay-200 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Featured Projects
          </h2>
          <div className="grid lg:grid-cols-2 gap-8">
            {featuredProjects.slice(0, 2).map((project, index) => (
              <Card
                key={project.id}
                className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-1"
              >
                <div className="relative overflow-hidden rounded-t-lg">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    width={500}
                    height={300}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-blue-600 hover:bg-blue-700">
                      Featured
                    </Badge>
                  </div>
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-2xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                      {project.title}
                    </h3>
                    <div className="flex items-center text-gray-500 text-sm">
                      <Calendar className="w-4 h-4 mr-1" />
                      {project.date}
                    </div>
                  </div>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex gap-3">
                    <Button
                      size="sm"
                      className="flex-1"
                      onClick={() => window.open(project.liveUrl, "_blank")}
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Live Demo
                    </Button>
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => window.open(project.githubUrl, "_blank")}
                    >
                      <Github className="w-4 h-4 mr-2" />
                      Code
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Filter Tabs */}
        <div
          className={`mb-8 transition-all duration-1000 delay-400 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={filter === category.id ? "default" : "outline"}
                onClick={() => setFilter(category.id)}
                className="mb-2"
              >
                <Tag className="w-4 h-4 mr-2" />
                {category.name}
              </Button>
            ))}
          </div>
        </div>

        {/* All Projects Grid */}
        <div
          className={`transition-all duration-1000 delay-600 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            All Projects
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project, index) => (
              <Card
                key={project.id}
                className="group hover:shadow-xl transition-all duration-500 hover:-translate-y-2"
              >
                <div className="relative overflow-hidden rounded-t-lg">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    width={500}
                    height={300}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  {project.featured && (
                    <div className="absolute top-3 left-3">
                      <Badge className="bg-blue-600 hover:bg-blue-700 text-xs">
                        Featured
                      </Badge>
                    </div>
                  )}
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                      {project.title}
                    </h3>
                    <div className="flex items-center text-gray-500 text-xs">
                      <Calendar className="w-3 h-3 mr-1" />
                      {project.date}
                    </div>
                  </div>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-1 mb-4">
                    {project.tags.slice(0, 3).map((tag) => (
                      <Badge key={tag} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                    {project.tags.length > 3 && (
                      <Badge variant="secondary" className="text-xs">
                        +{project.tags.length - 3}
                      </Badge>
                    )}
                  </div>
                  <div className="flex gap-2">
                    <Button
                      size="sm"
                      className="flex-1"
                      onClick={() => window.open(project.liveUrl, "_blank")}
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Live Demo
                    </Button>
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => window.open(project.githubUrl, "_blank")}
                    >
                      <Github className="w-4 h-4 mr-2" />
                      Code
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
