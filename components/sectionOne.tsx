"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { gsap, ScrollTrigger } from "@/lib/gsap";

const images = [
  "https://res.cloudinary.com/dgqyobxzg/image/upload/v1778075870/femab/propertyImage_hlll8r.jpg",
  "https://res.cloudinary.com/dgqyobxzg/image/upload/v1778077185/femab/propertyImageTwo_enlbrz.jpg",
];

export default function MainSection() {
  const [current, setCurrent] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  // Auto image slider
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((c) => (c + 1) % images.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  // GSAP Scroll Animation
  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        imageRef.current,
        { opacity: 0, x: -60 },
        {
          opacity: 1,
          x: 0,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
            toggleActions: "play none none reverse",
          },
        }
      );

      gsap.fromTo(
        contentRef.current,
        { opacity: 0, x: 60 },
        {
          opacity: 1,
          x: 0,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
            toggleActions: "play none none reverse",
          },
        }
      );
    });

    return () => ctx.revert();
  }, []);

  const next = (current + 1) % images.length;

  return (
    <section ref={sectionRef} className="py-24 bg-(--background)">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          
          {/* Image Section */}
          <div
            ref={imageRef}
            className="relative w-full lg:w-1/2 h-130 lg:h-155 shrink-0"
          >
            {/* Background Image */}
            <div className="absolute top-0 left-0 w-[88%] h-[88%] rounded-3xl overflow-hidden shadow-2xl">
              <div className="relative w-full h-full">
                {images.map((src, index) => (
                  <div
                    key={src}
                    className="absolute inset-0 transition-opacity duration-1000 ease-in-out"
                    style={{ opacity: index === next ? 1 : 0 }}
                  >
                    <Image src={src} alt="Property" fill className="object-cover" />
                  </div>
                ))}
              </div>
              <div className="absolute inset-0 bg-black/40 rounded-3xl" />
            </div>

            {/* Foreground Image */}
            <div className="absolute bottom-0 right-0 w-[88%] h-[88%] rounded-3xl overflow-hidden shadow-2xl border border-white/10">
              <div className="relative w-full h-full">
                {images.map((src, index) => (
                  <div
                    key={src}
                    className="absolute inset-0 transition-opacity duration-1000 ease-in-out"
                    style={{ opacity: index === current ? 1 : 0 }}
                  >
                    <Image src={src} alt="Property" fill className="object-cover" />
                  </div>
                ))}
              </div>
            </div>

            {/* Accent Dot */}
            <div className="absolute -top-4 -left-4 w-6 h-6 rounded-full bg-(--color-accent)" />
          </div>

          {/* Content Section */}
          <div ref={contentRef} className="w-full lg:w-1/2 flex flex-col justify-center">
            <div className="flex items-center gap-3 mb-6">
              <span className="h-px w-10 bg-(--color-accent)" />
              <p className="text-(--color-accent) text-sm font-medium tracking-widest uppercase">
                WHO WE ARE
              </p>
            </div>

            <h2 className="text-4xl sm:text-5xl font-medium leading-tight mb-8 text-white">
              Building Trust Through <br />
              <span className="text-(--color-accent)">Quality Real Estate</span>
            </h2>

            <p className="text-lg text-white/70 leading-relaxed mb-6">
              Through strategic real estate investment, financial solutions, and
              professional management services, FEMAB Properties Limited continues
              to play a meaningful role in the growth and development of Nigeria&apos;s
              economy.
            </p>

            <p className="text-lg text-white/70 leading-relaxed mb-10">
              Beyond our flagship developments, the company maintains a strong and
              expanding property portfolio across Nigeria, with growing interests in
              cross-border real estate opportunities.
            </p>

            <Link
              href="/about"
              className="inline-flex items-center gap-3 text-(--color-accent) hover:text-white font-medium group w-fit transition-colors"
            >
              Learn More About Us
              <span className="transition-transform duration-200 group-hover:translate-x-1">→</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}