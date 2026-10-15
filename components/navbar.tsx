"use client"

import { useState, useEffect } from "react"
import { usePathname, useRouter } from "next/navigation"
import { useTheme } from "next-themes"
import { Moon, Sun, Menu, X, Send } from "lucide-react"
import { BrandLogo } from "./brand-logo"

const navLinks = [
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Technologies", href: "#tech" },
  { label: "Certificates", href: "#certificates" },
  { label: "Outside the IDE", href: "#highlights" },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const { resolvedTheme, setTheme } = useTheme()
  const isDark = resolvedTheme !== "light"
  const pathname = usePathname()
  const router = useRouter()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleNavClick = (href: string) => {
    setMobileOpen(false)
    
    if (pathname !== "/") {
      router.push("/" + href)
      return
    }

    if (href.startsWith("#")) {
      const element = document.querySelector(href)
      if (element) {
        const offset = 80
        const bodyRect = document.body.getBoundingClientRect().top
        const elementRect = element.getBoundingClientRect().top
        const elementPosition = elementRect - bodyRect
        const offsetPosition = elementPosition - offset

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth"
        })
      }
    }
  }

  const handleLogoClick = () => {
    if (pathname !== "/") {
      router.push("/")
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" })
    }
  }

  const toggleTheme = () => {
    setTheme(isDark ? "light" : "dark")
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-page/85 backdrop-blur-xl border-b border-line/80 shadow-2xl py-3.5"
          : "bg-page/60 backdrop-blur-md py-5"
      }`}
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 flex items-center justify-between">
        {/* Monogram Logo */}
        <button
          onClick={handleLogoClick}
          className="group flex items-center gap-2.5 text-left"
          aria-label="Kembali ke beranda"
        >
          <BrandLogo size={28} className="shrink-0 transition-transform duration-200 group-hover:scale-105" />
          <span className="font-bold text-base sm:text-lg tracking-wider text-ink group-hover:text-brand transition-colors font-mono">
            GAF
          </span>
          <span className="inline-block w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
        </button>

        {/* Desktop Links */}
        <nav className="hidden md:flex items-center gap-7">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => handleNavClick(link.href)}
              className="text-xs sm:text-sm text-ink3 hover:text-ink transition-colors duration-200 font-medium tracking-wide relative group py-1"
            >
              {link.label}
              <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-blue-500 group-hover:w-full transition-all duration-300" />
            </button>
          ))}
        </nav>

        {/* Right Section: Theme Toggle & Quick Action */}
        <div className="flex items-center gap-3">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full text-ink3 hover:text-ink hover:bg-ghost2 transition-colors"
            title="Toggle theme mode"
            aria-label="Toggle theme"
          >
            {isDark ? <Sun size={17} className="text-warn" /> : <Moon size={17} className="text-ink2" />}
          </button>

          <button
            onClick={() => handleNavClick("#contact")}
            className="hidden sm:inline-flex items-center gap-1.5 bg-surface2 hover:bg-surface3 text-ink2 hover:text-ink border border-line2/60 text-xs font-semibold px-4 py-2 rounded-full transition-all duration-200 active:scale-95"
          >
            <Send size={13} className="text-brand" />
            Let&apos;s Connect
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 rounded-lg text-ink3 hover:text-ink hover:bg-ghost2 transition-colors"
            aria-label="Toggle Menu"
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="md:hidden bg-page/95 backdrop-blur-xl border-b border-line px-6 py-5 animate-mobile-menu">
          <div className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className="text-left text-sm font-medium text-ink2 hover:text-brand transition-colors py-2 border-b border-line/40 last:border-0"
              >
                {link.label}
              </button>
            ))}
            <button
              onClick={() => handleNavClick("#contact")}
              className="mt-2 w-full flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold py-2.5 rounded-xl transition-all"
            >
              <Send size={14} />
              Let&apos;s Connect
            </button>
          </div>
        </div>
      )}
    </header>
  )
}
