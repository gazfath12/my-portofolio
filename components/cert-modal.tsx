"use client"

import Image from "next/image"
import { X, ExternalLink, Download, Award } from "lucide-react"

export interface CertData {
  id: number
  name: string
  issuer: string
  year: string
  credential: string
  image: string
  category: string
  description: string
}

interface CertModalProps {
  cert: CertData | null
  onClose: () => void
}

export function CertModal({ cert, onClose }: CertModalProps) {
  if (!cert) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-md transition-all duration-300 animate-portal overflow-y-auto">
      <div className="fixed inset-0" onClick={onClose} />

      <div className="relative bg-page border border-line rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto z-10 my-auto text-ink2">
        
        {/* Header */}
        <div className="sticky top-0 bg-page/95 backdrop-blur-md border-b border-line p-4 flex items-center justify-between z-20">
          <div className="flex items-center gap-2">
            <Award size={18} className="text-brand" />
            <h3 className="text-sm sm:text-base font-bold text-ink line-clamp-1">{cert.name}</h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-ink3 hover:text-ink rounded-full hover:bg-ghost2 transition-colors"
          >
            <X size={18} />
          </button>
        </div>

        {/* Body */}
        <div className="p-5 sm:p-6 space-y-5 text-xs sm:text-sm">
          {/* Certificate Image Box */}
          {cert.category === "ai" ? (
            // Premium Gemini thumbnail - dark gradient with star icon
            <div className="relative w-full h-56 sm:h-72 rounded-xl overflow-hidden border border-line flex flex-col items-center justify-center gap-4"
              style={{ background: "linear-gradient(135deg, #0d1117 0%, #0a1628 40%, #0d1a2e 70%, #0f1117 100%)" }}
            >
              {/* Subtle glow behind star */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div style={{ width: 180, height: 180, borderRadius: "50%", background: "radial-gradient(circle, rgba(66,133,244,0.18) 0%, transparent 70%)" }} />
              </div>
              {/* Gemini 4-pointed star SVG */}
              <svg viewBox="0 0 100 100" className="w-20 h-20 relative z-10" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <linearGradient id="gStar" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#4285F4" />
                    <stop offset="33%" stopColor="#EA4335" />
                    <stop offset="66%" stopColor="#FBBC05" />
                    <stop offset="100%" stopColor="#34A853" />
                  </linearGradient>
                </defs>
                <path fill="url(#gStar)" d="M50 5 C50 5 55 45 95 50 C55 55 50 95 50 95 C50 95 45 55 5 50 C45 45 50 5 50 5Z" />
              </svg>
              {/* Text */}
              <div className="relative z-10 text-center space-y-1 px-4">
                <p className="text-white font-bold text-base sm:text-lg tracking-tight">Gemini Certified</p>
                <p className="text-blue-400 text-xs font-medium">Google for Education</p>
                <div className="flex items-center justify-center gap-2 pt-1">
                  <span className="text-[10px] text-slate-400 bg-white/5 border border-white/10 px-2.5 py-0.5 rounded-full">Issued 2026</span>
                  <span className="text-[10px] text-slate-400 bg-white/5 border border-white/10 px-2.5 py-0.5 rounded-full">Valid until 2029</span>
                </div>
              </div>
            </div>
          ) : (
            <div className="relative w-full h-56 sm:h-72 bg-surface2 rounded-xl overflow-hidden border border-line flex items-center justify-center p-2">
              <Image
                src={cert.image}
                alt={cert.name}
                fill
                className="object-contain"
              />
            </div>
          )}

          {/* Details Table Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            <div className="bg-surface border border-line p-3 rounded-xl">
              <span className="text-[10px] text-ink4 font-medium block">ISSUER</span>
              <span className="font-semibold text-ink text-xs">{cert.issuer}</span>
            </div>
            <div className="bg-surface border border-line p-3 rounded-xl">
              <span className="text-[10px] text-ink4 font-medium block">YEAR</span>
              <span className="font-semibold text-ink text-xs">{cert.year}</span>
            </div>
            <div className="bg-surface border border-line p-3 rounded-xl col-span-2 sm:col-span-1">
              <span className="text-[10px] text-ink4 font-medium block">CREDENTIAL ID</span>
              <span className="font-mono text-brand text-xs truncate block">{cert.credential}</span>
            </div>
          </div>

          <p className="text-ink2 leading-relaxed bg-surface p-4 rounded-xl border border-line/80">
            {cert.description}
          </p>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row gap-3 pt-2">
            <button
              onClick={() => window.open(cert.image, "_blank")}
              className="flex-1 bg-blue-600 hover:bg-blue-500 text-white font-semibold py-2.5 px-4 rounded-xl transition-all flex items-center justify-center gap-2 text-xs"
            >
              <Download size={14} /> Download Certificate Image
            </button>
            <button
              onClick={() => {
                const url = cert.credential.startsWith("http")
                  ? cert.credential
                  : `https://google.com/search?q=${encodeURIComponent(cert.issuer + " " + cert.name + " " + cert.credential)}`
                window.open(url, "_blank")
              }}
              className="bg-surface2 hover:bg-surface3 border border-line2 text-ink2 font-semibold py-2.5 px-4 rounded-xl transition-all flex items-center justify-center gap-2 text-xs"
            >
              <ExternalLink size={14} /> Verify Credential
            </button>
          </div>
        </div>

      </div>
    </div>
  )
}
