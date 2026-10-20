"use client"

import { useState } from "react"
import { X, Mail, Phone } from "lucide-react"

function TalkIcon({ size = 16 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 480 480"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M68 73 H412 A28 28 0 0 1 440 101 V305 A28 28 0 0 1 412 333 H212 L141 412 H130 A20 20 0 0 1 110 392 V333 H68 A28 28 0 0 1 40 305 V101 A28 28 0 0 1 68 73 Z M159 151 H321 A19 19 0 0 1 321 189 H159 A19 19 0 0 1 159 151 Z M159 219 H321 A19 19 0 0 1 321 257 H159 A19 19 0 0 1 159 219 Z"
        fill="currentColor"
      />
    </svg>
  )
}

export function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false)

  const waMessage = encodeURIComponent("Hi Gaza, I came across your portfolio and would like to connect!")
  const waUrl = `https://wa.me/6285156191424?text=${waMessage}`

  return (
    <>
      {/* Floating Action Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Contact Gaza"
        className="fixed bottom-6 right-6 z-40 bg-ink text-page font-medium text-xs sm:text-sm px-4 py-2.5 rounded-full flex items-center gap-2.5 transition-all duration-200 hover:opacity-90 active:scale-95"
      >
        {isOpen ? (
          <X size={16} />
        ) : (
          <TalkIcon size={16} />
        )}
        <span>{isOpen ? "Close" : "Let's Talk"}</span>
      </button>

      {/* Contact Options Panel */}
      {isOpen && (
        <div className="fixed bottom-20 right-4 sm:right-6 z-50 w-64 bg-page border border-line rounded-xl shadow-xl overflow-hidden animate-portal">

          {/* Header */}
          <div className="p-4 border-b border-line">
            <p className="text-sm font-semibold text-ink">Get in touch</p>
            <p className="text-xs text-ink3 mt-0.5">Pick a channel, I&apos;ll respond promptly.</p>
          </div>

          {/* Contact Options */}
          <div className="p-3 space-y-2">
            <a
              href={waUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 p-3 rounded-lg bg-surface hover:bg-surface2 border border-line transition-colors group"
            >
              <div className="w-8 h-8 rounded-lg bg-[#25D366]/10 border border-[#25D366]/20 flex items-center justify-center flex-shrink-0">
                <Phone size={14} className="text-[#25D366]" />
              </div>
              <div>
                <p className="text-xs font-semibold text-ink group-hover:text-brand transition-colors">WhatsApp</p>
                <p className="text-[11px] text-ink3">Usually replies within hours</p>
              </div>
            </a>

            <a
              href="mailto:gazfath12@gmail.com"
              className="flex items-center gap-3 p-3 rounded-lg bg-surface hover:bg-surface2 border border-line transition-colors group"
            >
              <div className="w-8 h-8 rounded-lg bg-brand/10 border border-brand/20 flex items-center justify-center flex-shrink-0">
                <Mail size={14} className="text-brand" />
              </div>
              <div>
                <p className="text-xs font-semibold text-ink group-hover:text-brand transition-colors">Email</p>
                <p className="text-[11px] text-ink3">gazfath12@gmail.com</p>
              </div>
            </a>
          </div>

        </div>
      )}
    </>
  )
}
