"use client";

import { useRef, useEffect } from "react";
import { Building2, Briefcase, LayoutGrid, Factory } from "lucide-react";
import { gsap, ScrollTrigger } from "@/lib/gsap";

const services = [
  {
    icon: Building2,
    title: "Residential",
    description:
      "Our residential projects focus on quality, functionality, and aesthetics to deliver homes that stand the test of time.",
  },
  {
    icon: Briefcase,
    title: "Commercial",
    description:
      "We specialize in creating dynamic commercial spaces designed to meet the evolving needs of modern businesses.",
  },
  {
    icon: LayoutGrid,
    title: "Mixed-Use",
    description:
      "Our mixed-use developments combine residential, commercial, and leisure spaces into vibrant, self-sustaining communities.",
  },
  {
    icon: Factory,
    title: "Industrial",
    description:
      "FEMAB delivers warehouses, factories, and logistic hubs that cater to the demands of Nigeria's growing industrial sector.",
  },
];

export default function ServicesStrip() {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const cards = cardsRef.current?.querySelectorAll(".service-card");
      if (!cards) return;

      gsap.fromTo(
        cards,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          ease: "power3.out",
          stagger: 0.15,
          scrollTrigger: { trigger: sectionRef.current, start: "top 80%" },
        },
      );
    });

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="bg-(--color-surface) py-20 px-6 lg:px-12"
    >
      <div
        ref={cardsRef}
        className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10"
      >
        {services.map(({ icon: Icon, title, description }) => (
          <div
            key={title}
            className="service-card flex flex-col gap-4 opacity-0 p-6 rounded-xl shadow-lg drop-shadow-lg backdrop-blur-sm"
          >
            <div className="w-14 h-14 rounded-xl bg-(--color-accent)/10 flex items-center justify-center">
              <Icon
                className="w-7 h-7 text-(--color-accent)"
                strokeWidth={1.5}
              />
            </div>
            <h3 className="text-lg font-semibold text-(--color-text-base)">
              {title}
            </h3>
            <p className="text-sm text-(--color-text-muted) leading-relaxed">
              {description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
