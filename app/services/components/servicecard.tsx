"use client";

import { useRef } from "react";
import gsap from "gsap";
import Image from "next/image";

interface ServiceCardProps {
  service: {
    image: string;
    title: string;
    short: string;
  };
  onView: () => void;
}

export default function ServiceCard({ service, onView }: ServiceCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);

  const handleEnter = () => {
    gsap.to(cardRef.current, {
      y: -8,
      scale: 1.02,
      duration: 0.3,
      ease: "power2.out",
    });
  };

  const handleLeave = () => {
    gsap.to(cardRef.current, {
      y: 0,
      scale: 1,
      duration: 0.3,
      ease: "power2.out",
    });
  };

  return (
    <div
      ref={cardRef}
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
      className="
        group
        bg-zinc-900
        border border-zinc-700/50
        rounded-2xl
        overflow-hidden
        transition-colors
        will-change-transform
      "
    >
      <div className="relative h-64 overflow-hidden">
        <Image
          src={service.image}
          alt={service.title}
          fill
          className="
            object-cover
            group-hover:scale-105
            transition-transform duration-700
          "
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
      </div>

      <div className="p-6">
        <h3 className="text-white text-xl font-semibold">{service.title}</h3>

        <p className="text-zinc-400 text-sm mt-2 leading-relaxed">
          {service.short}
        </p>

        <button
          onClick={onView}
          className="
            mt-5
            inline-flex items-center gap-2
            text-sm font-medium
            text-accent
            hover:text-white
            transition-colors
          "
        >
          View Service
          <span className="transition-transform group-hover:translate-x-1">
            →
          </span>
        </button>
      </div>
    </div>
  );
}
