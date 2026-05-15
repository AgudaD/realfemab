"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { BentoGrid } from "@/components/BentoGrid";
import { BentoCard } from "@/components/BentoCard";

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    id: 1,
    title: "Eko Atlantic Residential Towers",
    location: "Lagos, Nigeria",
    image: "https://res.cloudinary.com/dgqyobxzg/image/upload/v1778606982/femab/crestville_estate_ttta2z.jpg",
    span: "col-span-2 row-span-2", 
  },
  {
    id: 2,
    title: "Crystal Towers",
    location: "Lagos, Nigeria",
    image: "https://res.cloudinary.com/dgqyobxzg/image/upload/v1778865541/femab/Crystal-towers-1_onauqo.png",
    span: "col-span-2 row-span-1", 
  },
  {
    id: 3,
    title: "Crestville Estate",
    location: "Ikorodu, Lagos",
    image: "https://res.cloudinary.com/dgqyobxzg/image/upload/v1778865611/femab/Crestville-estate-Ikorodu-_lrntkl.jpg",
    span: "col-span-1 row-span-2", 
  },
  {
    id: 4,
    title: "Ikoyi Luxury Apartments",
    location: "Ikoyi, Lagos",
    image: "https://res.cloudinary.com/dgqyobxzg/image/upload/v1778004409/femab/femab-heroImage-two_x80tu7.jpg",
    span: "col-span-1 row-span-1",
  },
  {
    id: 5,
    title: "Peninsula Garden Estate",
    location: "Ogombo, Nigeria",
    image: "https://res.cloudinary.com/dgqyobxzg/image/upload/v1778607133/femab/Peninsula-Garden-estate_mih1fx.png",
    span: "col-span-2 row-span-2", 
  },
  {
    id: 6,
    title: "Diamond Estate",
    location: "Sangotedo, Nigeria",
    image: "https://res.cloudinary.com/dgqyobxzg/image/upload/v1778004409/femab/femab-heroImage-two_x80tu7.jpg",
    span: "col-span-1 row-span-2", 
  },
  {
    id: 7,
    title: "Dream Homes Estate",
    location: "Rivers, Nigeria",
    image: "https://res.cloudinary.com/dgqyobxzg/image/upload/v1778606982/femab/crestville_estate_ttta2z.jpg",
    span: "col-span-2 row-span-1", 
  },
];


export default function Projects() {
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cards = gridRef.current?.querySelectorAll(".bento-item");

    if (!cards) return;

    gsap.fromTo(
      cards,
      {
        opacity: 0,
        y: 40,
        scale: 0.96,
      },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.8,
        ease: "power3.out",
        stagger: 0.12,

        scrollTrigger: {
          trigger: gridRef.current,
          start: "top 80%",
        },
      },
    );
  }, []);

  return (
    <main className="px-6 py-16 max-w-7xl mx-auto">
      <section className="mb-14 text-center">
        <h1 className="text-4xl text-accent font-bold mb-4">
          Featured Projects
        </h1>

        <p className="text-zinc-400 max-w-2xl mx-auto">
          With over a decade of experience in construction and real estate, we
          deliver landmark developments across Nigeria.
        </p>
      </section>

      <div ref={gridRef}>
        <BentoGrid>
          {projects.map((project) => (
            <div key={project.id} className={`bento-item ${project.span}`}>
              <BentoCard backgroundImage={project.image}>
                <div>
                  <h3 className="text-white text-lg font-semibold">
                    {project.title}
                  </h3>
                  <p className="text-zinc-300 text-sm">{project.location}</p>
                </div>
              </BentoCard>
            </div>
          ))}
        </BentoGrid>
      </div>
    </main>
  );
}
