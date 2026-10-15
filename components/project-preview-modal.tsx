"use client"

import { useState } from "react"
import Image from "next/image"
import { ExternalLink, Lock, ArrowRight, Loader2, X, Github, CheckCircle2 } from "lucide-react"

export interface ProjectData {
  title: string
  subtitle?: string
  image: string
  description: string
  longDescription?: string
  liveUrl?: string
  githubUrl?: string
  tech: string[]
  isPrivate?: boolean
  impact?: string
  featured?: boolean
  status?: string
}

interface ProjectModalProps {
  project: ProjectData | null
  onClose: () => void
}

export function ProjectPreviewModal({ project, onClose }: ProjectModalProps) {
  const [isNavigating, setIsNavigating] = useState(false)

  if (!project) return null

  const handleOpenLive = () => {
    if (project.isPrivate || !project.liveUrl || project.liveUrl === "#") return
    setIsNavigating(true)
    setTimeout(() => {
      window.open(project.liveUrl, "_blank")
      setIsNavigating(false)
      onClose()
    }, 600)
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-md transition-all duration-300 animate-portal overflow-y-auto">
      <div className="fixed inset-0" onClick={onClose} />

      <div className="relative bg-page border border-line rounded-2xl shadow-2xl max-w-xl w-full max-h-[90vh] overflow-y-auto z-10 transition-all duration-300 my-auto text-ink2">
        
        {/* Top Image Banner */}
        <div className="relative h-48 sm:h-60 w-full overflow-hidden bg-surface2 flex-shrink-0">
          <Image
            src={project.image || "/placeholder.svg"}
            alt={project.title}
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-page via-page/40 to-transparent" />
          
          <button
            onClick={onClose}
            className="absolute top-3 right-3 bg-black/70 hover:bg-black text-white rounded-full w-8 h-8 flex items-center justify-center text-xs transition-colors backdrop-blur-md z-10"
            aria-label="Close modal"
          >
            <X size={16} />
          </button>

          <div className="absolute bottom-3 left-4 right-4 text-ink">
            <div className="flex items-center gap-2 mb-1">
              <span className="text-[10px] font-bold uppercase tracking-wider bg-brand/20 text-brand border border-brand/30 px-2.5 py-0.5 rounded-full">
                {project.status || "PROJECT PREVIEW"}
              </span>
              {project.impact && (
                <span className="text-[10px] font-medium text-success bg-emerald/10 border border-emerald/20 px-2.5 py-0.5 rounded-full flex items-center gap-1">
                  <CheckCircle2 size={10} /> {project.impact}
                </span>
              )}
            </div>
            <h3 className="text-xl sm:text-2xl font-bold leading-tight line-clamp-1">{project.title}</h3>
            {project.subtitle && <p className="text-xs text-ink3 mt-0.5">{project.subtitle}</p>}
          </div>
        </div>

        {/* Content Body */}
        <div className="p-5 sm:p-6 space-y-5 text-xs sm:text-sm">
          <p className="text-ink2 leading-relaxed">
            {project.longDescription || project.description}
          </p>

          {/* Tech Stack Pills */}
          <div>
            <h4 className="text-xs font-semibold text-ink3 uppercase tracking-wider mb-2">Technologies Used</h4>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((t, i) => (
                <span key={i} className="bg-surface2 border border-line text-ink2 text-xs px-2.5 py-1 rounded-md font-mono">
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* Action CTAs */}
          <div className="pt-2 flex flex-col sm:flex-row gap-3">
            {project.isPrivate || !project.liveUrl || project.liveUrl === "#" ? (
              <div className="w-full p-3 bg-warn/10 border border-warn/20 rounded-xl flex items-center gap-2.5 text-warn text-xs">
                <Lock size={16} className="flex-shrink-0" />
                <span>Private institutional system / restricted demo access.</span>
              </div>
            ) : (
              <button
                onClick={handleOpenLive}
                disabled={isNavigating}
                className="flex-1 bg-blue-600 hover:bg-blue-500 text-white font-semibold py-3 px-5 rounded-xl transition-all flex items-center justify-center gap-2 shadow-lg shadow-blue-600/20 active:scale-98"
              >
                {isNavigating ? (
                  <>
                    <Loader2 size={16} className="animate-spin" />
                    Opening Website...
                  </>
                ) : (
                  <>
                    <ExternalLink size={16} />
                    Visit Live Website
                    <ArrowRight size={14} className="ml-auto" />
                  </>
                )}
              </button>
            )}

            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-surface2 hover:bg-surface3 border border-line2 text-ink2 font-semibold py-3 px-4 rounded-xl transition-all flex items-center justify-center gap-2 text-xs"
              >
                <Github size={16} /> Code Repository
              </a>
            )}
          </div>
        </div>

      </div>
    </div>
  )
}
