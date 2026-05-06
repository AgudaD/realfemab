"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { gsap } from "@/lib/gsap";

const slides = [
  {
    id: 1,
    src: "https://res.cloudinary.com/dgqyobxzg/image/upload/v1778004399/femab/femab-heroImage-one_r6maqx.jpg",
    alt: "Luxury towers",
  },
  {
    id: 2,
    src: "https://res.cloudinary.com/dgqyobxzg/image/upload/v1778004409/femab/femab-heroImage-two_x80tu7.jpg",
    alt: "Street view",
  },
  {
    id: 3,
    src: "https://res.cloudinary.com/dgqyobxzg/image/upload/v1778004401/femab/femab-heroImage-three_nyljyt.jpg",
    alt: "Construction towers",
  },
  {
    id: 4,
    src: "https://res.cloudinary.com/dgqyobxzg/image/upload/v1778004398/femab/femab-heroImage-four_d0nc4x.jpg",
    alt: "Estate overview",
  },
];

const kenBurns = [
  {
    from: "scale-100 translate-x-0 translate-y-0",
    to: "scale-110 translate-x-3 translate-y-2",
  },
  {
    from: "scale-110 translate-x-3 translate-y-0",
    to: "scale-100 translate-x-0 translate-y-3",
  },
  {
    from: "scale-100 translate-x-2 translate-y-3",
    to: "scale-110 -translate-x-3 translate-y-0",
  },
  {
    from: "scale-110 -translate-x-3 translate-y-2",
    to: "scale-100 translate-x-0 translate-y-0",
  },
];

export default function Hero() {
  const [current, setCurrent] = useState(0);
  const [isActive, setIsActive] = useState(true);

  const eyebrowRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const subRef = useRef<HTMLParagraphElement>(null);
  const ctasRef = useRef<HTMLDivElement>(null);

  // GSAP Entrance Animation
  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ delay: 0.3 });
      tl.fromTo(
        eyebrowRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.7 },
      )
        .fromTo(
          headlineRef.current,
          { opacity: 0, y: 50 },
          { opacity: 1, y: 0, duration: 0.9 },
          "-=0.4",
        )
        .fromTo(
          subRef.current,
          { opacity: 0, y: 40 },
          { opacity: 1, y: 0, duration: 0.8 },
          "-=0.5",
        )
        .fromTo(
          ctasRef.current,
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: 0.7 },
          "-=0.4",
        );
    });
    return () => ctx.revert();
  }, []);

  const goTo = (index: number) => {
    if (index === current) return;
    setIsActive(false);
    setTimeout(() => {
      setCurrent(index);
      setIsActive(true);
    }, 800);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      goTo((current + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [current]);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-20">
      {/* Background Slides */}
      <div className="absolute inset-0 -z-10">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ${index === current ? "opacity-100" : "opacity-0"}`}
          >
            <div
              className={`absolute inset-0 transition-transform duration-7000 ease-linear ${index === current && isActive ? kenBurns[index].to : kenBurns[index].from}`}
            >
              <Image
                src={slide.src}
                alt={slide.alt}
                fill
                className="object-cover"
                priority={index === 0}
              />
            </div>
          </div>
        ))}

        {/* Dark Overlay - Optimized for Blue Accent */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/75 via-black/65 to-black/85" />
        <div className="absolute bottom-0 left-0 right-0 h-80 bg-gradient-to-t from-(--background) to-transparent" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-2xl">
          {/* Eyebrow */}
          <div
            ref={eyebrowRef}
            className="flex items-center gap-3 mb-6 opacity-0"
          >
            <span className="h-px w-10 bg-(--color-accent)" />
            <p className="text-(--color-accent) text-sm font-medium tracking-widest uppercase">
              PREMIUM REAL ESTATE
            </p>
          </div>

          {/* Headline */}
          <h1
            ref={headlineRef}
            className="text-5xl sm:text-6xl lg:text-7xl font-medium leading-[1.05] text-white opacity-0"
          >
            Find Your{" "}
            <span className="text-(--color-accent)">Dream Property</span>
          </h1>

          {/* Subtitle */}
          <p
            ref={subRef}
            className="mt-6 text-lg text-white/80 max-w-md opacity-0"
          >
            Connecting discerning buyers and investors with Nigeria’s finest
            residential and commercial properties.
          </p>

          {/* CTA Buttons */}
          <div ref={ctasRef} className="mt-10 flex flex-wrap gap-4 opacity-0">
            <Link
              href="/projects"
              className="px-8 py-4 bg-(--color-accent) hover:bg-(--color-accent-dark) text-white rounded-xl font-medium transition-all duration-200 hover:scale-105"
            >
              Explore Properties
            </Link>
            <Link
              href="/contact"
              className="px-8 py-4 border border-(--color-blue) text-(--color-blue) rounded-xl font-medium transition-all duration-200 hover:bg-(--color-blue) hover:text-white hover:border-(--color-blue) hover:scale-105"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-40 flex gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goTo(index)}
            className={`h-1.5 rounded-full transition-all duration-500 ${
              index === current
                ? "w-10 bg-(--color-accent)"
                : "w-3 bg-white/40 hover:bg-white/70"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
