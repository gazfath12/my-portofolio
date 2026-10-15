import React from "react"

interface LogoProps {
  className?: string
  size?: number
}

/**
 * Geometric Monogram Logo for Gaza Alfath Nugroho (GAF)
 * Clean, modern SVG design following anti-slop principles:
 * - Handcrafted precision geometry (no AI artifacts, no generic gradient blobs)
 * - Sharp architectural lines inspired by technical craft & engineering
 * - Crisp, crisp contrast with subtle blue accent
 */
export function BrandLogo({ className = "", size = 28 }: LogoProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {/* Background Frame with Subtle Bevel */}
      <rect
        x="1"
        y="1"
        width="30"
        height="30"
        rx="7"
        className="fill-surface2 stroke-line2/80 group-hover:stroke-brand/60 transition-colors"
        strokeWidth="1.2"
      />

      {/* Stylized Architectural G & Terminal */}
      {/* Outer G arc / bracket */}
      <path
        d="M 21 11 H 13 C 10.2386 11 8 13.2386 8 16 C 8 18.7614 10.2386 21 13 21 H 21 V 16 H 15"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="text-ink group-hover:text-ink transition-colors"
      />

      {/* Slash / Accent Terminal Dot */}
      <circle
        cx="24"
        cy="8"
        r="2"
        className="fill-blue-500 group-hover:fill-blue-400 transition-colors"
      />
    </svg>
  )
}
