"use client";

import { useRef } from "react";
import gsap from "gsap";

export default function ServiceButton({ onClick }: { onClick?: () => void }) {
  const arrowRef = useRef<HTMLSpanElement>(null);

  const handleEnter = () => {
    gsap.to(arrowRef.current, {
      x: 6,
      duration: 0.3,
      ease: "power2.out",
    });
  };

  const handleLeave = () => {
    gsap.to(arrowRef.current, {
      x: 0,
      duration: 0.3,
      ease: "power2.out",
    });
  };

  return (
    <button
      onClick={onClick}
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
      className="inline-flex items-center gap-2 text-sm text-accent hover:text-white transition-colors"
    >
      View Service
      <span ref={arrowRef}>→</span>
    </button>
  );
}