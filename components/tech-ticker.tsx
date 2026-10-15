"use client"

import { useState } from "react"
import { TechIcon } from "./tech-icon"

const TECH_ITEMS = [
  { name: "Next.js 15", color: "border-line2 text-ink bg-surface2" },
  { name: "React 19", color: "border-sky/30 text-sky bg-sky-soft" },
  { name: "Laravel 11", color: "border-red/30 text-red bg-red-soft" },
  { name: "TypeScript", color: "border-brand/30 text-brand bg-brand-soft" },
  { name: "PostgreSQL", color: "border-indigo/30 text-indigo bg-indigo-soft" },
  { name: "MySQL", color: "border-orange/30 text-orange bg-orange-soft" },
  { name: "Tailwind CSS v4", color: "border-teal/30 text-teal bg-teal-soft" },
  { name: "Node.js", color: "border-emerald/30 text-emerald bg-emerald-soft" },
  { name: "Docker", color: "border-sky/30 text-sky bg-sky-soft" },
  { name: "Linux VPS", color: "border-orange/30 text-orange bg-orange-soft" },
  { name: "Cybersecurity", color: "border-purple/30 text-purple bg-purple-soft" },
  { name: "REST APIs", color: "border-purple/30 text-purple bg-purple-soft" },
  { name: "Git & GitHub", color: "border-line2 text-ink2 bg-surface2" },
  { name: "Python", color: "border-yellow/30 text-yellow bg-yellow-soft" },
]

export function TechTicker() {
  const [isPaused, setIsPaused] = useState(false)

  // Duplicate for continuous seamless marquee
  const doubleList = [...TECH_ITEMS, ...TECH_ITEMS, ...TECH_ITEMS]
  const reverseDoubleList = [...TECH_ITEMS].reverse().concat([...TECH_ITEMS].reverse(), [...TECH_ITEMS].reverse())

  return (
    <div className="space-y-4 py-2 overflow-hidden select-none">
      
      {/* Row 1: Leftward Scrolling Ticker */}
      <div 
        className="relative flex overflow-hidden group mask-gradient"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <div
          className={`flex gap-3 whitespace-nowrap ${
            isPaused ? "[animation-play-state:paused]" : ""
          }`}
          style={{
            animation: "scrollLeft 35s linear infinite",
          }}
        >
          {doubleList.map((tech, idx) => (
            <div
              key={idx}
              className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl border ${tech.color} text-xs font-medium shadow-lg transition-transform hover:scale-105 cursor-pointer flex-shrink-0`}
            >
              <TechIcon name={tech.name} size={16} />
              <span>{tech.name}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Row 2: Rightward Scrolling Ticker */}
      <div 
        className="relative flex overflow-hidden group mask-gradient"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <div
          className={`flex gap-3 whitespace-nowrap ${
            isPaused ? "[animation-play-state:paused]" : ""
          }`}
          style={{
            animation: "scrollRight 40s linear infinite",
          }}
        >
          {reverseDoubleList.map((tech, idx) => (
            <div
              key={idx}
              className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl border ${tech.color} text-xs font-medium shadow-lg transition-transform hover:scale-105 cursor-pointer flex-shrink-0`}
            >
              <TechIcon name={tech.name} size={16} />
              <span>{tech.name}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Inline Animation Styles */}
      <style jsx>{`
        @keyframes scrollLeft {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.333%); }
        }
        @keyframes scrollRight {
          0% { transform: translateX(-33.333%); }
          100% { transform: translateX(0); }
        }
      `}</style>
    </div>
  )
}
