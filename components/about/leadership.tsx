"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";


type Person = {
  name: string;
  position: string;
  image: string;
  bio?: string;
  email?: string;
};

const topBrass: Person[] = [
  {
    name: "Dr. John Doe",
    position: "Chairman",
    image: "/images/team/chairman.jpg",
    bio: "Dr. John Doe brings over three decades of experience in real estate development and investment across West Africa. Under his leadership, Femab Properties has grown from a regional firm into a nationally recognised brand synonymous with quality and integrity.",
    email: "chairman@femabproperties.com",
  },
  {
    name: "Mrs. Jane Smith",
    position: "Managing Director",
    image: "/images/team/md.jpg",
    bio: "Mrs. Jane Smith oversees the day-to-day operations of Femab Properties with a focus on strategic growth, stakeholder relationships, and operational excellence. She holds an MBA from the University of Lagos and is a Fellow of the Nigerian Institution of Estate Surveyors and Valuers.",
    email: "md@femabproperties.com",
  },
  {
    name: "Mr. Richard Oke",
    position: "Executive Director, Operations",
    image: "/images/team/ed-ops.jpg",
    bio: "Mr. Richard Oke drives operational strategy across all Femab subsidiaries, ensuring projects are delivered on time, within budget, and to the highest standard. He has over 20 years in construction management and facilities development.",
    email: "operations@femabproperties.com",
  },
  {
    name: "Mrs. Funke Bello",
    position: "Executive Director, Finance",
    image: "/images/team/ed-finance.jpg",
    bio: "Mrs. Funke Bello is a seasoned finance executive who has steered Femab's financial strategy through periods of significant growth. She is a chartered accountant with expertise in corporate finance, risk management, and investment structuring.",
    email: "finance@femabproperties.com",
  },
];

const teamLeads: Person[] = [
  {
    name: "Adeyemi Gafar",
    position: "General Manager",
    image:
      "https://res.cloudinary.com/dgqyobxzg/image/upload/v1778694726/femab/adeyemi-gafar_ksmaij.jpg",
    bio: "Adeyemi Gafar coordinates operations across departments, translating executive strategy into measurable outcomes. His cross-functional expertise and leadership style make him a central pillar of Femab's management team.",
    email: "gm@femabproperties.com",
  },
  {
    name: "Shina Aguda",
    position: "Group Head, Human Resources & Admin",
    image:
      "https://res.cloudinary.com/dgqyobxzg/image/upload/v1778694725/femab/shina-aguda_adt90f.jpg",
    bio: "Shina Aguda leads the people strategy at Femab, overseeing talent acquisition, employee development, and organisational culture. He is committed to building a workplace where performance and wellbeing go hand in hand.",
    email: "hr@femabproperties.com",
  },
  {
    name: "Damola Adenekan",
    position: "Head, Marketing and Business Development",
    image:
      "https://res.cloudinary.com/dgqyobxzg/image/upload/v1778694726/femab/damilola-adenekan_vrkknc.jpg",
    bio: "Damola Adenekan drives Femab's brand presence and market expansion. With a background in marketing communications and real estate, she has led several high-impact campaigns that have positioned Femab as a top-of-mind property brand in Nigeria.",
    email: "marketing@femabproperties.com",
  },
  {
    name: "Gloria Ajayi",
    position: "Head, Customer Service",
    image:
      "https://res.cloudinary.com/dgqyobxzg/image/upload/v1778694725/femab/gloria-ajayi_vgcmel.jpg",
    bio: "Gloria Ajayi champions the client experience at Femab, ensuring every interaction reflects the company's commitment to excellence. She leads a dedicated team focused on responsiveness, satisfaction, and long-term client relationships.",
    email: "customerservice@femabproperties.com",
  },
];


function getInitials(name: string) {
  return name
    .split(" ")
    .map((n) => n[0])
    .slice(0, 2)
    .join("");
}

const avatarColors = [
  "bg-blue-900 text-blue-300",
  "bg-zinc-700 text-zinc-300",
  "bg-sky-900 text-sky-300",
  "bg-indigo-900 text-indigo-300",
  "bg-slate-700 text-slate-300",
];

function applyFallbackAvatar(
  img: HTMLImageElement,
  name: string,
  colorIndex: number,
  fontSize: string
) {
  img.style.display = "none";
  const parent = img.parentElement!;
  parent.classList.add(
    "flex",
    "items-center",
    "justify-center",
    ...avatarColors[colorIndex % avatarColors.length].split(" ")
  );
  const span = document.createElement("span");
  span.textContent = getInitials(name);
  span.className = `${fontSize} font-bold`;
  parent.appendChild(span);
}


function PersonModal({
  person,
  colorIndex,
  onClose,
}: {
  person: Person;
  colorIndex: number;
  onClose: () => void;
}) {
  const overlayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handler);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handler);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === overlayRef.current) onClose();
  };

  return (
    <>
      <style>{`
        @keyframes modalIn {
          from { opacity: 0; transform: translateY(20px) scale(0.96); }
          to   { opacity: 1; transform: translateY(0) scale(1); }
        }
        .modal-panel { animation: modalIn 0.28s cubic-bezier(0.22,1,0.36,1) both; }
      `}</style>

      <div
        ref={overlayRef}
        onClick={handleOverlayClick}
        className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8"
        style={{
          backgroundColor: "rgba(0,0,0,0.78)",
          backdropFilter: "blur(8px)",
          WebkitBackdropFilter: "blur(8px)",
        }}
        role="dialog"
        aria-modal="true"
        aria-label={`${person.name} profile`}
      >
        <div className="modal-panel relative w-full max-w-2xl rounded-2xl overflow-hidden bg-zinc-900 border border-white/[0.08] shadow-2xl">
       
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-10 flex items-center justify-center w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors duration-200"
            aria-label="Close modal"
          >
            <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
              <path
                d="M1 1l11 11M12 1L1 12"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
              />
            </svg>
          </button>

          <div className="flex flex-col sm:flex-row">
            <div
              className="relative sm:w-56 shrink-0 bg-zinc-800"
              style={{ minHeight: "280px" }}
            >
              <Image
                src={person.image}
                alt={person.name}
                fill
                sizes="(max-width: 640px) 100vw, 224px"
                className="object-cover object-top"
                onError={(e) =>
                  applyFallbackAvatar(
                    e.target as HTMLImageElement,
                    person.name,
                    colorIndex,
                    "text-4xl"
                  )
                }
              />
              
              <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-zinc-900 to-transparent sm:hidden pointer-events-none" />
              <div className="absolute inset-y-0 right-0 w-10 bg-gradient-to-l from-zinc-900 to-transparent hidden sm:block pointer-events-none" />
            </div>


            <div className="flex flex-col justify-center gap-5 p-6 sm:p-8 sm:pl-6">
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-accent mb-2">
                  {person.position}
                </p>
                <h3 className="text-2xl font-bold text-white leading-tight">
                  {person.name}
                </h3>
              </div>

              <div className="h-px bg-white/[0.08]" />

              {person.bio && (
                <p className="text-zinc-400 text-sm leading-relaxed">
                  {person.bio}
                </p>
              )}

              {person.email && (
                <a
                  href={`mailto:${person.email}`}
                  className="inline-flex items-center gap-2 text-sm text-accent hover:text-blue-400 transition-colors duration-200 w-fit"
                >
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.75"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect x="2" y="4" width="20" height="16" rx="2" />
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                  </svg>
                  {person.email}
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}



function PersonCard({
  person,
  colorIndex = 0,
  size = "md",
  onClick,
}: {
  person: Person;
  colorIndex?: number;
  size?: "lg" | "md";
  onClick: () => void;
}) {
  const isLarge = size === "lg";

  return (
    <button
      onClick={onClick}
      className={`group flex flex-col gap-0 overflow-hidden bg-zinc-900 border border-white/[0.06] hover:border-accent/40 transition-all duration-300 text-left cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent ${
        isLarge ? "rounded-2xl" : "rounded-xl"
      }`}
    >
      <div
        className={`relative w-full overflow-hidden bg-zinc-800 ${
          isLarge ? "aspect-[3/4]" : "aspect-[4/5]"
        }`}
      >
        <Image
          src={person.image}
          alt={person.name}
          fill
          sizes={
            isLarge
              ? "(max-width: 768px) 50vw, 25vw"
              : "(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw"
          }
          className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
          onError={(e) =>
            applyFallbackAvatar(
              e.target as HTMLImageElement,
              person.name,
              colorIndex,
              isLarge ? "text-3xl" : "text-2xl"
            )
          }
        />
        <div
          className={`absolute inset-x-0 bottom-0 bg-gradient-to-t from-zinc-900/80 to-transparent pointer-events-none ${
            isLarge ? "h-20" : "h-14"
          }`}
        />


        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300 pointer-events-none">
          <span
            className={`font-semibold uppercase tracking-wider bg-accent text-white rounded-full whitespace-nowrap ${
              isLarge ? "text-[11px] px-3 py-1" : "text-[10px] px-2.5 py-0.5"
            }`}
          >
            View profile
          </span>
        </div>
      </div>


      <div className={isLarge ? "px-5 py-4" : "px-4 py-3"}>
        <p
          className={`font-semibold text-white leading-tight ${
            isLarge ? "text-base" : "text-sm"
          }`}
        >
          {person.name}
        </p>
        <p
          className={`mt-1 leading-snug ${
            isLarge ? "text-zinc-400 text-sm" : "text-zinc-500 text-xs"
          }`}
        >
          {person.position}
        </p>
      </div>
    </button>
  );
}


export default function Leadership() {
  const [selected, setSelected] = useState<{
    person: Person;
    colorIndex: number;
  } | null>(null);

  return (
    <section className="py-16 px-6 md:px-16">
      <div className="max-w-6xl mx-auto flex flex-col gap-20">
        <div>
          <span className="text-accent text-xs font-semibold uppercase tracking-widest">
            Executive Leadership
          </span>
          <h2 className="mt-3 text-3xl md:text-4xl font-bold text-white mb-10">
            The Top Brass
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
            {topBrass.map((person, i) => (
              <PersonCard
                key={person.name}
                person={person}
                size="lg"
                colorIndex={i}
                onClick={() => setSelected({ person, colorIndex: i })}
              />
            ))}
          </div>
        </div>

        <div className="h-px bg-zinc-800" />


        <div>
          <span className="text-accent text-xs font-semibold uppercase tracking-widest">
            Department Heads
          </span>
          <h2 className="mt-3 text-2xl md:text-3xl font-bold text-white mb-10">
            The Team Leads
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
            {teamLeads.map((person, i) => (
              <PersonCard
                key={person.name}
                person={person}
                size="md"
                colorIndex={i}
                onClick={() => setSelected({ person, colorIndex: i })}
              />
            ))}
          </div>
        </div>
      </div>

      {selected && (
        <PersonModal
          person={selected.person}
          colorIndex={selected.colorIndex}
          onClose={() => setSelected(null)}
        />
      )}
    </section>
  );
}