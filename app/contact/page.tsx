"use client"
import { useState, useEffect } from "react"
import { Mail, Phone, MapPin, Github, Linkedin, Instagram, Twitter, Globe, Calendar } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "../../components/ui/card"
import { Button } from "../../components/ui/button"

export default function ContactPage() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "gazfath12@gmail.com",
      href: "mailto:gazfath12@gmail.com",
      color: "bg-blue-100 text-blue-600",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+62 (896) 3750 3791",
      href: "tel:+629637503791",
      color: "bg-green-100 text-green-600",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "bekasi",
      href: "#map",
      color: "bg-purple-100 text-purple-600",
    },
    {
      icon: Globe,
      label: "Website",
      value: "bestkacafilm.com",
      href: "https://bestkacafilm.com",
      color: "bg-orange-100 text-orange-600",
    },
  ]

  const socialLinks = [
    {
      name: "GitHub",
      icon: Github,
      url: "https://github.com/gazfath12",
      color: "hover:text-gray-900 dark:hover:text-white",
      bgColor: "bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700",
      description: "@gazfath12",
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      url: "https://www.linkedin.com/in/gaza-alfath-0830982a9/",
      color: "hover:text-blue-600",
      bgColor: "bg-blue-50 hover:bg-blue-100 dark:bg-blue-900/20 dark:hover:bg-blue-900/30",
      description: "Gaza Alfath",
    },
    {
      name: "Instagram",
      icon: Instagram,
      url: "https://www.instagram.com/gaz_fath/",
      color: "hover:text-pink-600",
      bgColor: "bg-pink-50 hover:bg-pink-100 dark:bg-pink-900/20 dark:hover:bg-pink-900/30",
      description: "@gaz_fath",
    },
    {
      name: "Twitter",
      icon: Twitter,
      url: "https://twitter.com/gazfath12",
      color: "hover:text-sky-500",
      bgColor: "bg-sky-50 hover:bg-sky-100 dark:bg-sky-900/20 dark:hover:bg-sky-900/30",
      description: "@gaza-alfath",
    },
  ]

  const availability = {
    status: "Available",
    timezone: "PST (UTC-8)",
    responseTime: "Usually within 2-4 hours",
    workingHours: "Mon-Fri, 9AM-6PM PST",
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-gray-900 dark:to-gray-800 pt-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div
          className={`text-center mb-12 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">Get In Touch</h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
           Mari kita terhubung dan membahas peluang, kolaborasi, atau sekadar mengobrol santai tentang teknologi dan desain.
          </p>
        </div>

        {/* Contact Information Grid */}
        <div
          className={`grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12 transition-all duration-1000 delay-200 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          {contactInfo.map((contact, index) => {
            const IconComponent = contact.icon
            return (
              <Card
                key={contact.label}
                className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <CardContent className="p-6 text-center">
                  <div
                    className={`w-16 h-16 ${contact.color} rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <IconComponent className="w-8 h-8" />
                  </div>
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">{contact.label}</h3>
                  <a
                    href={contact.href}
                    className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300 text-sm"
                  >
                    {contact.value}
                  </a>
                </CardContent>
              </Card>
            )
          })}
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {/* Social Media */}
          <div
            className={`lg:col-span-2 transition-all duration-1000 delay-400 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            <Card className="h-full">
              <CardHeader>
                <CardTitle className="text-2xl text-gray-900 dark:text-white flex items-center">
                  <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center mr-3">
                    <span className="text-white font-bold text-sm">SM</span>
                  </div>
                  Connect With Me
                </CardTitle>
                <p className="text-gray-600 dark:text-gray-300">
                  Ikuti perjalanan saya dan tetap terupdate dengan proyek dan wawasan terbaru saya.
                </p>
              </CardHeader>
              <CardContent>
                <div className="grid sm:grid-cols-2 gap-4">
                  {socialLinks.map((social) => {
                    const IconComponent = social.icon
                    return (
                      <a
                        key={social.name}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`flex items-center p-4 ${social.bgColor} rounded-xl transition-all duration-300 hover:shadow-md group`}
                      >
                        <div className="flex items-center space-x-3 flex-1">
                          <IconComponent
                            className={`w-6 h-6 transition-all duration-300 group-hover:scale-110 ${social.color}`}
                          />
                          <div>
                            <p className="font-semibold text-gray-900 dark:text-white">{social.name}</p>
                            <p className="text-sm text-gray-600 dark:text-gray-300">{social.description}</p>
                          </div>
                        </div>
                      </a>
                    )
                  })}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Availability Status */}
          <div
            className={`transition-all duration-1000 delay-600 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            <Card className="h-full bg-gradient-to-br from-blue-600 to-purple-600 text-white">
              <CardHeader>
                <CardTitle className="text-xl flex items-center">
                  <Calendar className="w-5 h-5 mr-2" />
                  Availability
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="font-semibold">{availability.status}</span>
                </div>

                <div className="space-y-3 text-blue-100">
                  <div>
                    <p className="text-xs font-medium text-blue-200">Timezone</p>
                    <p className="text-sm">{availability.timezone}</p>
                  </div>

                  <div>
                    <p className="text-xs font-medium text-blue-200">Response Time</p>
                    <p className="text-sm">{availability.responseTime}</p>
                  </div>

                  <div>
                    <p className="text-xs font-medium text-blue-200">Working Hours</p>
                    <p className="text-sm">{availability.workingHours}</p>
                  </div>
                </div>

                <Button
                  asChild
                  variant="secondary"
                  className="w-full mt-4 bg-white/20 hover:bg-white/30 text-white border-white/30"
                >
                  <a href="mailto:alex.johnson@email.com">
                    <Mail className="w-4 h-4 mr-2" />
                    Send Email
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Map Section */}
        <div
          id="map"
          className={`transition-all duration-1000 delay-800 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <Card className="overflow-hidden">
            <CardHeader>
              <CardTitle className="text-2xl text-gray-900 dark:text-white flex items-center">
                <MapPin className="w-6 h-6 mr-3 text-purple-600" />
                Find Me Here
              </CardTitle>
              <p className="text-gray-600 dark:text-gray-300">
            Berdasarkan di jantung dunia teknologi San Francisco, terbuka untuk kolaborasi jarak jauh di seluruh dunia.
              </p>
            </CardHeader>
            <CardContent className="p-0">
              <div className="relative">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.412436048725!2d106.98811147462739!3d-6.209206993778627!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e698bf65e756583%3A0x133799f058a82b97!2sJl.%20Lombok%2C%20Harapan%20Jaya%2C%20Kec.%20Bekasi%20Utara%2C%20Kota%20Bks%2C%20Jawa%20Barat%2017124!5e0!3m2!1sid!2sid!4v1755010286459!5m2!1sid!2sid"
                  width="100%"
                  height="450"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="grayscale hover:grayscale-0 transition-all duration-500"
                ></iframe>

                {/* Map Overlay Info */}
                <div className="absolute top-4 left-4 bg-white dark:bg-gray-900 rounded-lg shadow-lg p-4 max-w-xs">
                  <div className="flex items-center space-x-2 mb-2">
                    <div className="w-3 h-3 bg-purple-600 rounded-full"></div>
                    <span className="font-semibold text-gray-900 dark:text-white">Bekasi, ID</span>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    Available for local meetups and coffee chats!
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
