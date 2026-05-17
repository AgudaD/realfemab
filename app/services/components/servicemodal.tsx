"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import Image from "next/image";
import { X } from "lucide-react";

interface ServiceModalProps {
  service: {
    title: string;
    description: string;
    image: string;
  };
  onClose: () => void;
}

export default function ServiceModal({ service, onClose }: ServiceModalProps) {
  const backdropRef = useRef<HTMLDivElement>(null);
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.fromTo(
      backdropRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 0.3, ease: "power2.out" },
    );
    gsap.fromTo(
      modalRef.current,
      { opacity: 0, scale: 0.95, y: 20 },
      {
        opacity: 1,
        scale: 1,
        y: 0,
        duration: 0.3,
        ease: "power3.out",
        delay: 0.05,
      },
    );
  }, []);

  const handleClose = () => {
    gsap.to(modalRef.current, {
      opacity: 0,
      scale: 0.95,
      y: 20,
      duration: 0.2,
      ease: "power3.in",
    });
    gsap.to(backdropRef.current, {
      opacity: 0,
      duration: 0.25,
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
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <div
      ref={backdropRef}
      className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 p-4"
      onClick={(e) => {
        if (e.target === backdropRef.current) handleClose();
      }}
    >
      <div
        ref={modalRef}
        className="bg-zinc-900 border border-zinc-700/50 rounded-2xl overflow-hidden max-w-lg w-full max-h-[90vh] flex flex-col"
      >
        <div className="relative h-56 w-full shrink-0">
          <Image
            src={service.image}
            alt={service.title}
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-transparent" />

          <button
            onClick={handleClose}
            className="absolute top-4 right-4 p-2 rounded-full bg-black/50 hover:bg-black/80 border border-zinc-600 text-white transition-all duration-200 hover:scale-110"
          >
            <X size={16} />
          </button>
        </div>

        <div className="px-6 pb-6 mt-4">
          <h2 className="text-white text-xl font-semibold mb-3">
            {service.title}
          </h2>
          <p className="text-zinc-400 text-sm leading-relaxed">
            {service.description}
          </p>
        </div>
      </div>
    </div>
  );
}
