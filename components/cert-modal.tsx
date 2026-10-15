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
          <div className="relative w-full h-56 sm:h-72 bg-surface2 rounded-xl overflow-hidden border border-line flex items-center justify-center p-2">
            <Image
              src={cert.image}
              alt={cert.name}
              fill
              className="object-contain"
            />
          </div>

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
