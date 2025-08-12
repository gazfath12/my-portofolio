import Link from "next/link"
import { Github, Linkedin, Instagram, Twitter, Heart } from "lucide-react"

export default function Footer() {
  const socialLinks = [
    { name: "GitHub", icon: Github, href: "https://github.com/gazfath12" },
    { name: "LinkedIn", icon: Linkedin, href: "https://www.linkedin.com/in/gaza-alfath-0830982a9/" },
    { name: "Instagram", icon: Instagram, href: "https://instagram.com/gaz_fath" },
    { name: "Twitter", icon: Twitter, href: "https://twitter.com/gazfath12" },
  ]

  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Projects", href: "/projects" },
    { name: "Contact", href: "/contact" },
  ]

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">GZ</span>
              </div>
              <span className="font-bold text-xl">Gaza Alfath Nugroho</span>
            </div>
            <p className="text-gray-400 mb-6 max-w-md">
            Pengembang Full-Stack  yang bersemangat menciptakan pengalaman digital yang membuat perbedaan. Mari kita bangun sesuatu yang menakjubkan bersama..
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => {
                const IconComponent = social.icon
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-700 transition-colors duration-300 group"
                  >
                    <IconComponent className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors duration-300" />
                  </a>
                )
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-gray-400 hover:text-white transition-colors duration-300">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Get In Touch</h3>
            <div className="space-y-2 text-gray-400">
              <p>gazfath12@email.com</p>
              <p>+62 (895) 3750-3791</p>
              <p>Bekasi,ID</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">© {new Date().getFullYear()} Gaza Alfath. All rights reserved.</p>
          <p className="text-gray-400 text-sm flex items-center mt-4 sm:mt-0">
            Made with <Heart className="w-4 h-4 mx-1 text-red-500" /> using Next.js & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  )
}
