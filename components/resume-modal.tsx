"use client"

import { useState } from "react"
import { X, Download, GraduationCap, Briefcase, Code, CheckCircle2, ShieldCheck, Mail, MapPin } from "lucide-react"

interface ResumeModalProps {
  isOpen: boolean
  onClose: () => void
}

type TabType = "summary" | "experience" | "education" | "skills"

export function ResumeModal({ isOpen, onClose }: ResumeModalProps) {
  const [activeTab, setActiveTab] = useState<TabType>("summary")

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-md animate-portal overflow-y-auto">
      <div className="fixed inset-0" onClick={onClose} />

      <div className="relative bg-page border border-line rounded-2xl shadow-2xl max-w-3xl w-full max-h-[90vh] flex flex-col z-10 my-auto text-ink2 overflow-hidden">
        
        {/* Header */}
        <div className="sticky top-0 bg-page/95 backdrop-blur-md border-b border-line p-4 sm:p-6 flex items-center justify-between z-20">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-brand/10 border border-brand/30 flex items-center justify-center text-brand font-bold">
              GA
            </div>
            <div>
              <h2 className="text-lg sm:text-xl font-bold text-white flex items-center gap-2">
                Gaza Alfath Nugroho
                <span className="text-xs font-normal text-brand bg-brand/10 border border-brand/20 px-2 py-0.5 rounded-full">
                  Resume
                </span>
              </h2>
              <p className="text-xs text-ink3">Full-Stack Engineer &amp; Security Practitioner</p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <a
              href="/Gaza_Alfath_CV.pdf"
              download="Gaza_Alfath_Nugroho_CV.pdf"
              className="inline-flex items-center gap-1.5 bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold px-3.5 py-2 rounded-xl transition-all"
            >
              <Download size={14} />
              <span className="hidden sm:inline">Download</span> PDF
            </a>
            <button
              onClick={onClose}
              className="p-2 text-ink3 hover:text-ink rounded-full hover:bg-ghost2 transition-colors"
              aria-label="Close modal"
            >
              <X size={18} />
            </button>
          </div>
        </div>

        {/* Navigation Sub-Tabs */}
        <div className="flex items-center border-b border-line/80 px-6 bg-surface overflow-x-auto no-scrollbar">
          {[
            { id: "summary" as TabType, label: "Overview", icon: ShieldCheck },
            { id: "experience" as TabType, label: "Experience", icon: Briefcase },
            { id: "education" as TabType, label: "Education", icon: GraduationCap },
            { id: "skills" as TabType, label: "Skills & Stack", icon: Code },
          ].map((tab) => {
            const Icon = tab.icon
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-4 py-3 text-xs sm:text-sm font-medium border-b-2 transition-all whitespace-nowrap ${
                  activeTab === tab.id
                    ? "border-brand text-brand bg-brand/5"
                    : "border-transparent text-ink3 hover:text-ink2"
                }`}
              >
                <Icon size={14} />
                {tab.label}
              </button>
            )
          })}
        </div>

        {/* Body Content */}
        <div className="p-5 sm:p-6 overflow-y-auto space-y-6 flex-1 text-xs sm:text-sm leading-relaxed">
          {activeTab === "summary" && (
            <div className="space-y-5">
              <div className="bg-surface border border-line rounded-xl p-4 sm:p-5 space-y-3">
                <h3 className="text-ink font-semibold text-sm sm:text-base">Professional Profile</h3>
                <p className="text-ink2">
                  Full-Stack Engineer &amp; Cybersecurity Practitioner with 3+ years of hands-on experience building production web applications, database architectures, and secure systems. Currently pursuing D3 Information Technology at Politeknik Negeri Semarang (POLINES).
                </p>
                <div className="flex flex-wrap gap-4 pt-2 text-xs text-ink3">
                  <span className="flex items-center gap-1.5"><MapPin size={13} className="text-brand" /> Semarang / Bekasi, Indonesia</span>
                  <span className="flex items-center gap-1.5"><Mail size={13} className="text-brand" /> gazaalfath@gmail.com</span>
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div className="bg-surface border border-line/80 rounded-xl p-4">
                  <h4 className="text-ink font-semibold mb-2 text-xs uppercase tracking-wider text-brand">Key Highlights</h4>
                  <ul className="space-y-2 text-ink2">
                    <li className="flex items-start gap-2"><CheckCircle2 size={14} className="text-brand flex-shrink-0 mt-0.5" /> Lead Architect of SIAKAD Almahir (80% admin workload saved)</li>
                    <li className="flex items-start gap-2"><CheckCircle2 size={14} className="text-brand flex-shrink-0 mt-0.5" /> Built anti-conflict real-time scheduling algorithm</li>
                    <li className="flex items-start gap-2"><CheckCircle2 size={14} className="text-brand flex-shrink-0 mt-0.5" /> 30% database query performance optimization</li>
                  </ul>
                </div>

                <div className="bg-surface border border-line/80 rounded-xl p-4">
                  <h4 className="text-ink font-semibold mb-2 text-xs uppercase tracking-wider text-success">Core Focus</h4>
                  <ul className="space-y-2 text-ink2">
                    <li className="flex items-start gap-2"><CheckCircle2 size={14} className="text-success flex-shrink-0 mt-0.5" /> Next.js, React &amp; TypeScript Frontend</li>
                    <li className="flex items-start gap-2"><CheckCircle2 size={14} className="text-success flex-shrink-0 mt-0.5" /> Laravel, Node.js &amp; PostgreSQL Backend</li>
                    <li className="flex items-start gap-2"><CheckCircle2 size={14} className="text-success flex-shrink-0 mt-0.5" /> Web Security Audits &amp; Pentesting Labs</li>
                  </ul>
                </div>
              </div>
            </div>
          )}

          {activeTab === "experience" && (
            <div className="space-y-6 border-l border-line pl-4 ml-2">
              {[
                {
                  role: "Full-Stack Engineer Internship",
                  company: "PPQIT AL Mahir - Boyolali",
                  period: "Aug 2025 – Oct 2025",
                  bullets: [
                    "Designed & deployed SIAKAD Almahir academic system cutting 80% admin workload.",
                    "Built zero-conflict scheduling algorithm for teachers, classrooms, and subjects.",
                    "Engineered optimized PostgreSQL/MySQL ERD schema for automated e-Rapor report generation."
                  ]
                },
                {
                  role: "Event Administrator",
                  company: "International Islamic Education Fair (IIEF) - Surakarta",
                  period: "Oct 2025",
                  bullets: [
                    "Managed registration system for 50+ international educational institutions.",
                    "Coordinated real-time visitor flow and check-in database synchronization."
                  ]
                }
              ].map((exp, idx) => (
                <div key={idx} className="relative">
                  <div className="absolute -left-[21px] top-1.5 w-2.5 h-2.5 rounded-full bg-brand ring-4 ring-page" />
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between text-xs mb-1">
                    <h3 className="font-bold text-ink text-sm">{exp.role}</h3>
                    <span className="text-brand font-mono text-[11px]">{exp.period}</span>
                  </div>
                  <div className="text-ink3 text-xs font-medium mb-2">{exp.company}</div>
                  <ul className="space-y-1.5 text-ink2 list-disc list-inside">
                    {exp.bullets.map((b, i) => (
                      <li key={i}>{b}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          )}

          {activeTab === "education" && (
            <div className="space-y-4">
              {[
                {
                  degree: "D3 Teknik Informatika",
                  institution: "Politeknik Negeri Semarang (POLINES)",
                  period: "2024 – Present",
                  desc: "Specializing in Software Engineering, Web & Mobile Development, Database Architecture, and Network Security."
                },
                {
                  degree: "IT & Software Engineering Program",
                  institution: "PPQIT Al - Mahir Boarding School",
                  period: "Mar 2023 – Jun 2026",
                  desc: "Intensive full-stack development curriculum, system architecture, OSINT tools, and web security."
                },
                {
                  degree: "Cisco Networking Certification Program",
                  institution: "Cisco Networking Academy",
                  period: "Jan 2026 – Feb 2026",
                  desc: "Network infrastructure protocols, routing & switching, and security fundamentals."
                },
                {
                  degree: "Responsive Web Design Certification",
                  institution: "freeCodeCamp",
                  period: "Apr 2024 – Dec 2024",
                  desc: "300+ hours of modern responsive web design standards, CSS architecture, and accessibility."
                },
                {
                  degree: "Junior High School & Islamic Studies",
                  institution: "Ponpes Al-Muttaqin",
                  period: "Apr 2020 – Jun 2023",
                  desc: "Islamic character formation, discipline, and memorization of 5 Juz Al-Qur'an."
                }
              ].map((edu, idx) => (
                <div key={idx} className="bg-surface border border-line rounded-xl p-4">
                  <div className="flex items-center justify-between mb-1">
                    <h3 className="font-bold text-ink text-sm">{edu.degree}</h3>
                    <span className="text-xs text-brand font-mono">{edu.period}</span>
                  </div>
                  <div className="text-xs text-ink3 font-medium mb-2">{edu.institution}</div>
                  <p className="text-ink2 text-xs">{edu.desc}</p>
                </div>
              ))}
            </div>
          )}

          {activeTab === "skills" && (
            <div className="space-y-4">
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {[
                  { name: "Next.js / React", level: "Advanced", color: "border-brand/30 text-brand" },
                  { name: "Laravel / PHP", level: "Advanced", color: "border-red/30 text-red" },
                  { name: "PostgreSQL / MySQL", level: "Advanced", color: "border-emerald/30 text-emerald" },
                  { name: "TypeScript / Node.js", level: "Intermediate", color: "border-warn/30 text-warn" },
                  { name: "Tailwind CSS", level: "Advanced", color: "border-sky/30 text-sky" },
                  { name: "Cybersecurity Auditing", level: "Practitioner", color: "border-purple/30 text-purple" },
                  { name: "Linux VPS & DevOps", level: "Intermediate", color: "border-orange/30 text-orange" },
                  { name: "REST API Design", level: "Advanced", color: "border-indigo/30 text-indigo" },
                  { name: "Git & CI/CD", level: "Proficient", color: "border-line2 text-ink2" }
                ].map((s, idx) => (
                  <div key={idx} className={`bg-surface border ${s.color} rounded-xl p-3 text-center`}>
                    <div className="font-bold text-ink text-xs">{s.name}</div>
                    <div className="text-[10px] text-ink3 mt-1">{s.level}</div>
                  </div>
                ))}
              </div>
            </div>
          )}

        </div>

        {/* Footer */}
        <div className="bg-page border-t border-line p-4 flex items-center justify-between text-xs text-ink3">
          <span>Gaza Alfath Nugroho • 2026</span>
          <button onClick={onClose} className="text-ink3 hover:text-ink text-xs">
            Close Resume
          </button>
        </div>
      </div>
    </div>
  )
}
