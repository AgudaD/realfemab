"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { X, MapPin } from "lucide-react";
import Image from "next/image";

type Project = {
  id: number;
  title: string;
  location: string;
  image: string;
  description: string;
  span: string;
  header?: string;
  amenities?: string[];
  continueDescription?: string;
};

type ProjectModalProps = {
  project: Project | null;
  onClose: () => void;
};

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  const backdropRef = useRef<HTMLDivElement>(null);
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!project) return;

    gsap.fromTo(
      backdropRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 0.3, ease: "power2.out" },
    );

    gsap.fromTo(
      modalRef.current,
      { opacity: 0, y: 40, scale: 0.97 },
      { opacity: 1, y: 0, scale: 1, duration: 0.4, ease: "power3.out", delay: 0.05 },
    );
  }, [project]);

  const handleClose = () => {
    gsap.to(modalRef.current, {
      opacity: 0,
      y: 20,
      scale: 0.97,
      duration: 0.25,
      ease: "power2.in",
    });
    gsap.to(backdropRef.current, {
      opacity: 0,
      duration: 0.3,
      ease: "power2.in",
      onComplete: onClose,
    });
  };

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") handleClose();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, []);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = ""; };
  }, []);

  if (!project) return null;

  return (
    <div
      ref={backdropRef}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
      onClick={(e) => { if (e.target === backdropRef.current) handleClose(); }}
    >
      <div
        ref={modalRef}
        className="relative w-full max-w-2xl bg-zinc-900 border border-zinc-700/50 rounded-2xl overflow-hidden shadow-2xl max-h-[90vh] flex flex-col"
      >
        
        <div className="relative h-64 sm:h-80 w-full shrink-0">
          <Image
            src={project.image}
            alt={project.title}
            fill    
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-zinc-900/20 to-transparent" />

          <button
            onClick={handleClose}
            className="absolute top-4 right-4 p-2 rounded-full bg-black/50 hover:bg-black/80 border border-zinc-600 text-white transition-all duration-200 hover:scale-110"
          >
            <X size={18} />
          </button>
        </div>


        <div className="overflow-y-auto">
          <div className="px-6 pb-6 mt-4 relative">
            <h2 className="text-2xl font-bold text-white mb-1">{project.title}</h2>

            <div className="flex items-center gap-1 text-zinc-400 text-sm mb-4">
              <MapPin size={14} color="#e51f1f" />
              <span>{project.location}</span>
            </div>

            {project.header && (
              <h3 className="text-accent font-semibold text-base mb-2">
                {project.header}
              </h3>
            )}

            <p className="text-zinc-400 text-sm leading-relaxed">
              {project.description}
            </p>

            {project.amenities && (
              <ul className="mt-3 space-y-1.5">
                {project.amenities.map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-zinc-400 text-sm">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            )}

            {project.continueDescription && (
              <p className="text-zinc-400 text-sm leading-relaxed mt-3">
                {project.continueDescription}
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}