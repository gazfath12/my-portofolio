"use client";

import { useState } from "react";
import Image from "next/image";
import { ExternalLink, Lock, ArrowRight, Loader2, Sparkles } from "lucide-react";
import { Button } from "./ui/button";

export interface ProjectTransitionData {
  title: string;
  image: string;
  description: string;
  liveUrl: string;
  isPrivate?: boolean;
}

interface ProjectTransitionModalProps {
  project: ProjectTransitionData | null;
  onClose: () => void;
}

export function ProjectTransitionModal({ project, onClose }: ProjectTransitionModalProps) {
  const [isNavigating, setIsNavigating] = useState(false);

  if (!project) return null;

  const handleGoToWebsite = () => {
    if (project.isPrivate || project.liveUrl === "#") return;
    setIsNavigating(true);
    setTimeout(() => {
      window.open(project.liveUrl, "_blank");
      setIsNavigating(false);
      onClose();
    }, 600);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-900/60 backdrop-blur-md transition-all duration-300 animate-portal">
      {/* Overlay Backdrop click to close */}
      <div className="absolute inset-0" onClick={onClose} />

      {/* Modal Content */}
      <div className="relative bg-white dark:bg-slate-900 rounded-2xl shadow-2xl border border-slate-200 dark:border-slate-800 max-w-lg w-full overflow-hidden z-10 transition-transform duration-300 transform scale-100">
        
        {/* Header Preview Image */}
        <div className="relative h-56 w-full overflow-hidden bg-slate-950">
          <Image
            src={project.image || "/placeholder.svg"}
            alt={project.title}
            fill
            className="object-cover transition-transform duration-700 hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/30 to-transparent" />
          
          <button
            onClick={onClose}
            className="absolute top-3 right-3 bg-black/40 hover:bg-black/70 text-white rounded-full p-2 text-xs transition-colors backdrop-blur-sm"
          >
            ✕
          </button>

          <div className="absolute bottom-4 left-5 right-5 text-white">
            <div className="flex items-center gap-2 mb-1">
              <Sparkles className="w-4 h-4 text-yellow-400" />
              <span className="text-xs font-semibold uppercase tracking-wider text-blue-300">
                Pratinjau Proyek
              </span>
            </div>
            <h3 className="text-2xl font-bold leading-tight">{project.title}</h3>
          </div>
        </div>

        {/* Body Content */}
        <div className="p-6 space-y-4">
          <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
            {project.description}
          </p>

          <div className="pt-2 flex flex-col gap-3">
            {project.isPrivate || project.liveUrl === "#" ? (
              <div className="p-3.5 bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-800/60 rounded-xl flex items-center gap-3 text-amber-800 dark:text-amber-300">
                <Lock className="w-5 h-5 flex-shrink-0" />
                <span className="text-xs font-medium">
                  Proyek ini bersifat privat/internal sekolah dan tidak memiliki akses demo publik secara langsung.
                </span>
              </div>
            ) : (
              <Button
                size="lg"
                onClick={handleGoToWebsite}
                disabled={isNavigating}
                className="w-full bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold shadow-lg shadow-blue-500/25 rounded-xl py-6 transition-all duration-300 hover:scale-[1.02]"
              >
                {isNavigating ? (
                  <>
                    <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                    Membuka Website Proyek...
                  </>
                ) : (
                  <>
                    <ExternalLink className="w-5 h-5 mr-2" />
                    Kunjungi Website Proyek
                    <ArrowRight className="w-4 h-4 ml-auto" />
                  </>
                )}
              </Button>
            )}

            <Button
              variant="ghost"
              onClick={onClose}
              className="w-full text-slate-500 hover:text-slate-800 dark:text-slate-400 dark:hover:text-white"
            >
              Tutup Preview
            </Button>
          </div>
        </div>

        {/* Dynamic Navigating Fullscreen Overlay */}
        {isNavigating && (
          <div className="absolute inset-0 z-30 bg-blue-600 text-white flex flex-col items-center justify-center p-6 animate-pulse">
            <div className="w-16 h-16 rounded-full border-4 border-white/30 border-t-white animate-spin mb-4" />
            <h4 className="text-xl font-bold">Menuju ke Website...</h4>
            <p className="text-sm text-blue-100 mt-1">{project.title}</p>
          </div>
        )}
      </div>
    </div>
  );
}
