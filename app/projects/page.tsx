"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { BentoGrid } from "@/components/BentoGrid";
import { BentoCard } from "@/components/BentoCard";
import { ProjectModal } from "./projectModal";

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    id: 1,
    title: "Platinum Gate Estate",
    location: "Alaka, Surulere, Lagos",
    image:
      "https://res.cloudinary.com/dgqyobxzg/image/upload/v1779014910/femab/Platinum-gate-estate-1_mlhgoh.png",
    span: "col-span-2 row-span-2",
    description: "Introducing Platinum Gate Estate, a majestic upscale development nestled in the exclusive enclave of Lagos Mainland. This ongoing masterpiece redefines the essence of luxury living, offering an unparalleled lifestyle experience for discerning high net worth individuals. As a mixed-use development, Platinum Gate Estate showcases a harmonious blend of low- and mid-rise structures, each crafted to perfection to provide a unique and exclusive living experience. The estate’s diverse portfolio includes: Exquisite duplexes, perfect for families seeking spacious luxury Elegant terrace houses, offering a perfect blend of comfort and sophistication Luxury high-rise apartments, boasting breathtaking views of the city skyline Private villas, providing the ultimate in exclusivity and seclusion Complete with state-of-the-art infrastructure, Platinum Gate Estate sets a new standard for luxury living in Lagos. Every detail has been meticulously designed to provide residents with a seamless and indulgent lifestyle experience, from the manicured landscapes to the cutting-edge security systems.",
  },
  {
    id: 2,
    title: "Crystal Towers",
    location: "Victoria Island, Lagos.",
    image:
      "https://res.cloudinary.com/dgqyobxzg/image/upload/v1778865541/femab/Crystal-towers-1_onauqo.png",
    span: "col-span-2 row-span-2",
    header: "Crystal Towers: The Pinnacle of Luxury Living",
    description: "Nestled in the heart of Victoria Island, Lagos, Crystal Towers stands as a testament to opulence and sophistication. This majestic luxury apartment complex is designed to cater to the discerning tastes of the high and mighty, offering an unparalleled living experience that redefines the boundaries of comfort and luxury. As you step into the lavish world of Crystal Towers, you’ll be enveloped in an atmosphere of serenity and refinement. Every detail, from the sleek architecture to the meticulously curated interiors, has been carefully crafted to provide a seamless blend of style, functionality, and cutting-edge technology. Crystal Towers boasts an array of modern amenities that epitomize the essence of smart living. From intelligent home automation systems to state-of-the-art security features, every aspect of this luxury apartment complex has been designed to provide a truly elevated living experience. We understand that luxury is a personal preference, which is why we offer flexible payment plans tailored to suit your unique needs. Whether you’re a discerning individual or a savvy investor, Crystal Towers presents a rare opportunity to own a piece of paradise in one of Lagos’ most coveted neighborhoods. Join the ranks of the elite who demand the very best. Make Crystal Towers your home, and experience the pinnacle of luxury living in Lagos.",
  },
  {
    id: 3,
    title: "Crestville Estate",
    location: "Ikorodu, Lagos",
    image:
      "https://res.cloudinary.com/dgqyobxzg/image/upload/v1778004398/femab/femab-heroImage-four_d0nc4x.jpg",
    span: "col-span-2 row-span-1",
    description: "Building on the success of Dream Home Estate, Femab Properties Limited introduced Peninsula Garden Estate (PGE), a pioneering development that elevates the traditional site and service model. PGE boasts a unique dual-scheme approach, combining the flexibility of site and service plots with the convenience of build-to-sell homes. In this innovative setup, Femab not only provides serviced plots for clients who prefer to build their own homes but also offers expertly designed and constructed prototype buildings for those seeking a hassle-free homeownership experience. This thoughtful approach caters to a broader range of clients, from self-build enthusiasts to busy professionals and Nigerians in the Diaspora seeking a ready-made dream homes.",
  },
  {
    id: 4,
    title: "Abdul Aziz Yari Estate",
    location: "Gusau, Zamfara",
    image:
      "https://res.cloudinary.com/dgqyobxzg/image/upload/v1779014743/femab/Abdul-Aziz-Yari-Estate-_rbiiqo.png",
    span: "col-span-1 row-span-2",
    description: "Another notable project is the NLC Estate in Gusau, Zamfara State, a public service initiative developed in partnership with the Nigeria Labour Congress. Financed by the Federal Mortgage Bank of Nigeria, this estate features 2 and 3-bedroom bungalows, providing affordable housing options for middle- and low-income civil service workers. Beneficiaries of this scheme were able to take advantage of the National Housing Fund (NHF) program, securing mortgages with repayment terms spanning several years, making homeownership a reality.",
  },
  {
    id: 5,
    title: "Peninsula Garden Estate",
    location: "Ogombo, Lekki, Lagos",
    image:
      "https://res.cloudinary.com/dgqyobxzg/image/upload/v1778607133/femab/Peninsula-Garden-estate_mih1fx.png",
    span: "col-span-2 row-span-2",
    description: "Building on the success of Dream Home Estate, Femab Properties Limited introduced Peninsula Garden Estate (PGE), a pioneering development that elevates the traditional site and service model. PGE boasts a unique dual-scheme approach, combining the flexibility of site and service plots with the convenience of build-to-sell homes. In this innovative setup, Femab not only provides serviced plots for clients who prefer to build their own homes but also offers expertly designed and constructed prototype buildings for those seeking a hassle-free homeownership experience.",
  },
 {
  id: 6,
  title: "Diamond Estate",
  location:
    "Monastery Road, Novare-Shoprite, Sangotedo, Ajah, Lekki-Lagos.",

  image:
    "https://res.cloudinary.com/dgqyobxzg/image/upload/v1778606982/femab/crestville_estate_ttta2z.jpg",

  span: "col-span-1 row-span-2",

  description:
    "Femab Properties set a new benchmark in estate development with the creation of Diamond Estates 1, 2, and 3. These pioneering estates boasted cutting-edge infrastructure, including innovative features such as interlocked roads and modern drainage systems. Residents enjoy unparalleled amenities, including:",

  amenities: [
    "24-hour electricity supply",
    "Pure, drinkable water reticulated to every home",
    "Gated communities with secure perimeter fencing",
    "Round-the-clock security provided by armed personnel",
    "Well-maintained recreational facilities, including parks and playgrounds",
    "Access to quality educational institutions and healthcare facilities",
    "Close proximity to major shopping centers, markets, and transportation hubs",
  ],

  continueDescription: "By incorporating these modern conveniences and security features, Femab Properties raised the bar for estate development in Nigeria, offering a new standard of living for discerning homeowners. This commitment to excellence inspired our guiding philosophy: “Adding Value to Life.” "
},
  {
    id: 7,
    title: "Dream Homes Estate",
    location: "Ikorodu, Lagos",
    image:
      "https://res.cloudinary.com/dgqyobxzg/image/upload/v1778606982/femab/crestville_estate_ttta2z.jpg",
    span: "col-span-2 row-span-1",
    header: "A New Standard in Estate Development",
    description: "Femab’s maiden foray into estate development started with the launch of Dream Home Estate, a pioneering site and service scheme located in the heart of Ikorodu, Lagos. Dream Home Estate was designed to redefine the concept of estate living in Nigeria at a time when this was not the norm.  This innovative site and service scheme empowered individuals to buy serviced plots of land and develop their own unique style and size of building, tailored to their personal taste and preferences. This scheme helped to rescue hitherto hapless homeowners from the grip of greedy land owners whose propensity to sell same piece of land to multiple buyers was legendary, causing chaos and confusion in the process. Femab ensured that this never happened in all its estates, and all subscribers got their plots complete with full title documentation without stress, built with ease and are presently enjoying their homes peacefully. ",
  },
];

type Project = (typeof projects)[0];

export default function Projects() {
  const gridRef = useRef<HTMLDivElement>(null);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  useEffect(() => {
    const cards = gridRef.current?.querySelectorAll(".bento-item");
    if (!cards) return;

    gsap.fromTo(
      cards,
      { opacity: 0, y: 40, scale: 0.96 },
      {
        opacity: 1, y: 0, scale: 1,
        duration: 0.8, ease: "power3.out", stagger: 0.12,
        scrollTrigger: { trigger: gridRef.current, start: "top 80%" },
      }
    );
  }, []);

  return (
    <>
      <main className="px-6 py-16 max-w-7xl mx-auto">
        <section className="mb-14 text-center">
          <h1 className="text-4xl text-accent font-bold mb-4">Featured Projects</h1>
          <p className="text-zinc-400 max-w-2xl mx-auto">
            With over a decade of experience in construction and real estate, we
            deliver landmark developments across Nigeria.
          </p>
        </section>

        <div ref={gridRef}>
          <BentoGrid>
            {projects.map((project) => (
              <div
                key={project.id}
                className={`bento-item ${project.span} cursor-pointer`}
                onClick={() => setSelectedProject(project)}
              >
                <BentoCard backgroundImage={project.image}>
                  <div>
                    <h3 className="text-white text-lg font-semibold leading-tight">
                      {project.title}
                    </h3>
                    <p className="text-zinc-300 text-sm mt-1 translate-y-3 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-400">
                      {project.location}
                    </p>
                  </div>
                </BentoCard>
              </div>
            ))}
          </BentoGrid>
        </div>
      </main>

      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </>
  );
}
