"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";

const stats = [
  { value: 432, suffix: "+", label: "Projects Done" },
  { value: 100, suffix: "%", label: "Happy Clients" },
  { value: 143, suffix: "+", label: "Professional Workers" },
];

function useCountUp(target: number, duration = 2000, started: boolean) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!started) return;
    let startTime: number | null = null;
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
    
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [target, duration, started]);

  return count;
}

function StatItem({
  value,
  suffix,
  label,
  started,
}: {
  value: number;
  suffix: string;
  label: string;
  started: boolean;
}) {
  const count = useCountUp(value, 2000, started);
  return (
    <div className="flex flex-col">
      <span className="text-4xl font-bold text-accent tabular-nums">
        {count}
        {suffix}
      </span>
      <span className="text-sm text-zinc-400 mt-1">{label}</span>
    </div>
  );
}

export default function WhoWeAre() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStarted(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 },
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-24 px-6 md:px-16 bg-black">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left — Image */}
        <div className="relative h-[420px] md:h-[520px] rounded-2xl overflow-hidden">
            <Image
              src="https://res.cloudinary.com/dgqyobxzg/image/upload/v1778077185/femab/propertyImageTwo_enlbrz.jpg"
              alt="Femab property interior"
              fill
              className="object-cover"
            />
          {/* Accent border overlay */}
          <div className="absolute inset-0 rounded-2xl ring-1 ring-white/10" />
          {/* Small accent tag */}
          <div className="absolute bottom-6 left-6 bg-accent px-4 py-2 rounded-lg">
            <span className="text-white text-xs font-semibold tracking-wide uppercase">
              Since 1994
            </span>
          </div>
        </div>


        <div className="flex flex-col gap-8">
          <div>
            <span className="text-accent text-xs font-semibold uppercase tracking-widest">
              Who We Are
            </span>
            <h2 className="mt-3 text-3xl md:text-4xl font-bold text-white leading-tight">
              Nigeria&apos;s Trusted Real Estate Partner
            </h2>
            <p className="mt-4 text-zinc-400 leading-relaxed">
              Femab Properties Limited has spent decades building trust,
              delivering excellence, and shaping communities across Nigeria.
              From residential developments to commercial estates, we bring
              vision to life.
            </p>
          </div>


          <div className="grid grid-cols-3 gap-6 border-t border-zinc-800 pt-8">
            {stats.map((s) => (
              <StatItem key={s.label} {...s} started={started} />
            ))}
          </div>


          <div>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-accent hover:bg-accent-dark text-white text-sm font-medium transition-colors duration-150"
            >
              Contact Us
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M7 17L17 7M17 7H7M17 7v10" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
