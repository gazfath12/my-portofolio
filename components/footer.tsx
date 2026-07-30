import Link from "next/link"
import { Github, Linkedin, Instagram, Twitter, Heart, Globe, Phone, Mail } from "lucide-react"

export default function Footer() {
  const socialLinks = [
    { name: "GitHub", icon: Github, href: "https://github.com/gazfath12" },
    { name: "LinkedIn", icon: Linkedin, href: "https://www.linkedin.com/in/gaza-alfath-0830982a9/" },
    { name: "Instagram", icon: Instagram, href: "https://www.instagram.com/gaz_fath/" },
    { name: "Twitter / X", icon: Twitter, href: "https://twitter.com/gazfath12" },
    { name: "WhatsApp", icon: Phone, href: "https://wa.me/6289637503791" },
    { name: "Blog", icon: Globe, href: "https://blog.gazaalfath.my.id/" },
    { name: "Email", icon: Mail, href: "mailto:gazfath12@gmail.com" },
  ]

  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Projects", href: "/projects" },
    { name: "Contact", href: "/contact" },
  ]

  return (
    <footer className="bg-slate-900 text-white border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="sm:col-span-2 space-y-4">
            <div className="flex items-center space-x-2.5">
              <div className="w-9 h-9 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center shadow-md">
                <span className="text-white font-black text-sm">GZ</span>
              </div>
              <span className="font-bold text-xl tracking-tight">Gaza Alfath Nugroho</span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed max-w-md">
              Pengembang Full-Stack yang bersemangat menciptakan pengalaman digital yang membuat perbedaan. Mari kita bangun sesuatu yang menakjubkan bersama.
            </p>
            <div className="flex flex-wrap gap-2.5 pt-2">
              {socialLinks.map((social) => {
                const IconComponent = social.icon
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    title={social.name}
                    className="w-9 h-9 sm:w-10 sm:h-10 bg-slate-800 rounded-xl flex items-center justify-center hover:bg-slate-700 active:scale-95 transition-all duration-200 group"
                  >
                    <IconComponent className="w-4 h-4 sm:w-5 sm:h-5 text-slate-400 group-hover:text-white transition-colors duration-200" />
                  </a>
                )
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-base sm:text-lg mb-3 sm:mb-4 text-slate-200">Quick Links</h3>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-slate-400 hover:text-white transition-colors duration-200 text-sm font-medium">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-bold text-base sm:text-lg mb-3 sm:mb-4 text-slate-200">Get In Touch</h3>
            <div className="space-y-2.5 text-slate-400 text-sm">
              <p className="hover:text-white transition-colors"><a href="mailto:gazfath12@gmail.com">gazfath12@gmail.com</a></p>
              <p className="hover:text-white transition-colors"><a href="tel:+6289637503791">+62 (896) 3750-3791</a></p>
              <p>Bekasi, West Java, ID</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-800 mt-10 pt-6 flex flex-col sm:flex-row justify-between items-center gap-3 text-center sm:text-left">
          <p className="text-slate-400 text-xs sm:text-sm">© {new Date().getFullYear()} Gaza Alfath Nugroho. All rights reserved.</p>
          <p className="text-slate-400 text-xs sm:text-sm flex items-center justify-center">
            Made with <Heart className="w-3.5 h-3.5 mx-1 text-red-500 fill-current animate-pulse" /> using Next.js & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  )
}
