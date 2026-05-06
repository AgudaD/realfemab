"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef, useEffect } from "react";
import { gsap, ScrollTrigger } from "@/lib/gsap";

export default function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const leftRef = useRef<HTMLDivElement>(null);
  const imagesRef = useRef<HTMLDivElement>(null);
  const badgeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        leftRef.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: { trigger: sectionRef.current, start: "top 75%" },
        },
      );
      gsap.fromTo(
        imagesRef.current,
        { opacity: 0, scale: 0.95 },
        {
          opacity: 1,
          scale: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: { trigger: sectionRef.current, start: "top 75%" },
        },
      );
      gsap.fromTo(
        badgeRef.current,
        { opacity: 0, scale: 0.7, y: 20 },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          duration: 0.7,
          ease: "back.out(1.7)",
          scrollTrigger: { trigger: sectionRef.current, start: "top 60%" },
        },
      );
    });

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-24 px-6 lg:px-12 max-w-7xl mx-auto">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <div ref={leftRef} className="opacity-0">
          <p className="text-sm font-medium tracking-widest uppercase text-(--color-accent) mb-4">
            Our Company
          </p>
          <h2 className="text-4xl lg:text-5xl font-semibold text-(--color-text-base) leading-tight mb-6">
            Our work is our reputation, and we protect it with every project we
            do
          </h2>
          <div className="w-16 h-1 bg-(--color-accent) rounded-full mb-8" />
          <p className="text-(--color-text-muted) leading-relaxed mb-10">
            With close to three decades of experience providing top of the shelf
            real estate services to government, private and individuals, we
            control a major share of the Nigerian real estate market directly
            and through our subsidiaries.
          </p>
          <Link
            href="/about"
            className="inline-flex items-center px-7 py-3.5 text-sm font-medium rounded-lg bg-(--color-primary) hover:bg-(--color-primary-dark) text-white transition-colors duration-200"
          >
            Discover More
          </Link>
        </div>

        <div
          ref={imagesRef}
          className="relative grid grid-cols-2 gap-4 h-[420px] opacity-0"
        >
          <div className="relative rounded-2xl overflow-hidden">
            <Image
              src="https://res.cloudinary.com/dgqyobxzg/image/upload/v1778075870/femab/propertyImage_hlll8r.jpg"
              alt="Femab property exterior"
              fill
              className="object-cover"
            />
          </div>
          <div className="relative rounded-2xl overflow-hidden">
            <Image
              src="https://res.cloudinary.com/dgqyobxzg/image/upload/v1778077185/femab/propertyImageTwo_enlbrz.jpg"
              alt="Femab property interior"
              fill
              className="object-cover"
            />
          </div>

          <div
            ref={badgeRef}
            className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-white shadow-2xl rounded-2xl px-8 py-5 text-center whitespace-nowrap opacity-0"
          >
            <p className="text-5xl font-bold text-(--color-accent)">30+</p>
            <p className="text-sm font-medium text-(--color-text-base) mt-1">
              Years of Experience
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
