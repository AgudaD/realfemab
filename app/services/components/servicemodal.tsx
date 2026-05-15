"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

interface ServiceModalProps {
  service: {
    title: string;
    description: string;
  };
  onClose: () => void;
}

export default function ServiceModal({ service, onClose }: ServiceModalProps) {
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.fromTo(
      modalRef.current,
      { opacity: 0, scale: 0.95, y: 20 },
      { opacity: 1, scale: 1, y: 0, duration: 0.3, ease: "power3.out" }
    );
  }, []);

  const handleClose = () => {
    gsap.to(modalRef.current, {
      opacity: 0,
      scale: 0.95,
      y: 20,
      duration: 0.2,
      ease: "power3.in",
      onComplete: onClose,
    });
  };

  return (
    <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
      <div
        ref={modalRef}
        className="bg-zinc-950 border border-zinc-800 rounded-2xl p-6 max-w-lg w-full"
      >
        <button onClick={handleClose} className="text-zinc-400 hover:text-white">
          ✕
        </button>

        <h2 className="text-white text-xl font-semibold mt-4">
          {service.title}
        </h2>

        <p className="text-zinc-400 mt-3">
          {service.description}
        </p>
      </div>
    </div>
  );
}