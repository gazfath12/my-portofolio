"use client"

import React from "react"
import {
  SiNextdotjs,
  SiReact,
  SiLaravel,
  SiTypescript,
  SiPostgresql,
  SiMysql,
  SiTailwindcss,
  SiNodedotjs,
  SiDocker,
  SiLinux,
  SiPython,
  SiGit,
} from "@icons-pack/react-simple-icons"
import { ShieldCheck, Network, Database } from "lucide-react"

export interface TechIconProps {
  name: string
  className?: string
  size?: number
}

/**
 * Standard industry tech logos using official SVG vectors (Simple Icons)
 * Replaces random emojis/symbols with real brand vectors found on modern developer websites.
 */
export function TechIcon({ name, className = "w-4 h-4", size = 16 }: TechIconProps) {
  const normalized = name.toLowerCase().trim()

  if (normalized.includes("next")) {
    return <SiNextdotjs size={size} className={className} />
  }
  if (normalized.includes("react")) {
    return <SiReact size={size} className={`${className} text-[#61DAFB]`} />
  }
  if (normalized.includes("laravel")) {
    return <SiLaravel size={size} className={`${className} text-[#FF2D20]`} />
  }
  if (normalized.includes("typescript")) {
    return <SiTypescript size={size} className={`${className} text-[#3178C6]`} />
  }
  if (normalized.includes("postgresql")) {
    return <SiPostgresql size={size} className={`${className} text-[#4169E1]`} />
  }
  if (normalized.includes("mysql")) {
    return <SiMysql size={size} className={`${className} text-[#4479A1]`} />
  }
  if (normalized.includes("tailwind")) {
    return <SiTailwindcss size={size} className={`${className} text-[#06B6D4]`} />
  }
  if (normalized.includes("node")) {
    return <SiNodedotjs size={size} className={`${className} text-[#5FA04E]`} />
  }
  if (normalized.includes("docker")) {
    return <SiDocker size={size} className={`${className} text-[#2496ED]`} />
  }
  if (normalized.includes("linux")) {
    return <SiLinux size={size} className={`${className} text-[#FCC624]`} />
  }
  if (normalized.includes("cybersecurity") || normalized.includes("security")) {
    return <ShieldCheck size={size} className={`${className} text-[#38BDF8]`} />
  }
  if (normalized.includes("git")) {
    return <SiGit size={size} className={`${className} text-[#F05032]`} />
  }
  if (normalized.includes("python")) {
    return <SiPython size={size} className={`${className} text-[#3776AB]`} />
  }
  if (normalized.includes("api")) {
    return <Network size={size} className={`${className} text-[#A855F7]`} />
  }
  if (normalized.includes("database")) {
    return <Database size={size} className={`${className} text-[#F59E0B]`} />
  }

  return <Network size={size} className={className} />
}
