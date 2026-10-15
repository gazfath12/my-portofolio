"use client"

import { useState } from "react"
import Image from "next/image"
import { RotateCw, MapPin } from "lucide-react"

const PHOTOS = [
  {
    src: "/gaza-formal.jpg",
    title: "POLINES Campus & Tech Labs",
    location: "Semarang, Central Java",
    caption: "Pursuing D3 Information Technology & exploring software architecture."
  },
  {
    src: "/mrrobot.jpg",
    title: "Debugging at Midnight",
    location: "In the Zone",
    caption: "Deep focus mode: solving the hard problems."
  },
  {
    src: "/manga.jpg",
    title: "Dual Identity",
    location: "Between Worlds",
    caption: "Developer by day, creative mind by night."
  }
]

export function StackedPhotos() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const handleNextPhoto = () => {
    setCurrentIndex((prev) => (prev + 1) % PHOTOS.length)
  }

  return (
    <div className="relative w-full max-w-sm mx-auto aspect-[4/3] sm:aspect-square flex items-center justify-center select-none group">
      {/* Background glowing aura */}
      <div className="absolute inset-0 bg-blue-500/10 rounded-3xl blur-2xl group-hover:bg-blue-500/20 transition-all duration-500" />

      {/* Stacked Cards */}
      {PHOTOS.map((photo, idx) => {
        // Calculate relative position based on current index
        const order = (idx - currentIndex + PHOTOS.length) % PHOTOS.length
        
        // Custom transforms for stacked effect
        let transformClass = "scale-100 translate-x-0 translate-y-0 z-20 opacity-100"
        if (order === 1) {
          transformClass = "scale-95 translate-x-4 translate-y-3 z-10 opacity-70 rotate-3"
        } else if (order === 2) {
          transformClass = "scale-90 translate-x-7 translate-y-6 z-0 opacity-40 -rotate-3"
        }

        return (
          <div
            key={idx}
            onClick={handleNextPhoto}
            className={`absolute inset-0 rounded-2xl overflow-hidden border border-line bg-surface2 shadow-2xl transition-all duration-500 cursor-pointer ${transformClass}`}
          >
            <div className="relative w-full h-full">
              <Image
                src={photo.src}
                alt={photo.title}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />

              {/* Photo Caption Tag */}
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <div className="flex items-center justify-between text-[11px] text-brand font-semibold uppercase tracking-wider mb-1">
                  <span className="flex items-center gap-1"><MapPin size={12} /> {photo.location}</span>
                  <span className="flex items-center gap-1 bg-black/60 px-2 py-0.5 rounded-full text-[10px] text-ink2">
                    <RotateCw size={10} /> Tap to flip
                  </span>
                </div>
                <h4 className="text-sm font-bold leading-tight mb-0.5">{photo.title}</h4>
                <p className="text-[11px] text-ink2 line-clamp-1">{photo.caption}</p>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}
