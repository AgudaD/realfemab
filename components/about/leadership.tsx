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
    name: "DR. Abiodun Aguda",
    position: "Group Managing Director/Chief Executive Officer",
    image: "/images/team/chairman.jpg",
    bio: "Dr. Aguda graduated from Ogun State University in 1991 with a B.Sc. in Economics. He began his professional career in 1992 at Akinwale Stanley & Co., a firm of estate surveyors and valuers in Lagos. During his time there, he brokered several high-value deals. His outstanding performance led to his rapid promotion to Senior Consultant - Properties in 1994. Dr. Aguda later pursued his Master’s degree in Marketing at the University of Lagos, which he obtained in 1995. Upon graduation, he joined All State Finance and Investment Company Limited as a Marketing Manager and later held the same position at Amicable Insurance Plc. Driven by his entrepreneurial vision, he resigned to establish a property consultancy firm, Femab Global Ventures. In September 2019, Dr. Aguda was awarded an Honorary Doctorate Degree in Marketing and Negotiation from Estam University, Republic of Benin. Over the years, he has spearheaded numerous private sector initiatives in estate development. Some of these projects include: Diamond Estate, Sangotedo, Lagos State Peninsula Garden Estate, beside Lagos Business School, Ajah, Lagos Platinum Gate Estate, behind National Stadium, Alaka, Surulere, Lagos Institute of Public and Management Campus, University of Sierra Leone, Bureh Town. Dr. Aguda is a resourceful and experienced property expert whose strategic vision and leadership transformed Femab Global Ventures into Femab Properties Limited. His outstanding contributions to real estate development in Nigeria have earned both him and his company numerous accolades, including: Lagos Housing Fair Award for Excellence Pillar of National Development (Gold Award) by Today's People International Magazine Patriotic Achievers Award by Franc Nolly Incorporation Property and Environmental Writers Association of Nigeria Special Recognition Award",
  },
  {
    name: "MRS. Ololade Aguda",
    position: "Director",
    image: "/images/team/md.jpg",
    bio: "Mrs. Aguda is a graduate of Fishery and Aquatic Biology from Lagos State University. She also obtained a Master’s degree in Fisheries Management from the University of Ibadan in 1995 and 1997, respectively. Mrs. Aguda began her professional career at International Fisheries, Apapa, Lagos, where she worked for two years before leaving to join Al-Furqan International School, Surulere, Lagos, as an Administrative Manager. She held this position until her resignation to become the founding General Manager of Crystal Block Industry.",
  },
  {
    name: "Chief Feng Lin",
    position: "Director",
    image: "/images/team/ed-ops.jpg",
    bio: "Chief Feng Lin is a graduate of Shandong University, China. He obtained a Bachelor of Science degree in Industrial & Trade Management from the same university. In addition, he holds Bachelor’s degrees in Geology and Finance. Chief Feng Lin is an indigene of Beijing, China, and was born in Shandong, China. He is currently 54 years old. Chief Feng Lin's professional experience is primarily in the mining industry, where he has held various managerial positions over the years. Due to his extensive experience in the real estate industry, he was appointed as the Group Chairman of Femab Group.",
  },
  {
    name: "ENGR. Tolani Balogun",
    position: "Director",
    image: "/images/team/ed-finance.jpg",
    bio: "Engr. Balogun studied Civil Engineering at Obafemi Awolowo University, where he obtained a Bachelor of Science degree in Civil Engineering. He later pursued a Master’s degree in Business Administration from the same university. He began his career at IQSA Group in Lagos as a Site Engineer before moving to ENCON International Limited as a Senior Engineer. At ENCON, he was responsible for Human and Materials Development as well as the Consulting Unit. These roles provided him with extensive experience in the rehabilitation and redesign of notable landmarks, such as the Graphics House Commercial Development at Plot 502, Zone A2, Abuja, among others. Engr. Balogun also worked with Costain West Africa Construction Company as a Planning Engineer before joining Shell Petroleum Development Company Limited, where he currently works. His vast experience in the construction industry is a valuable asset to our organization. Engr. Balogun is a member of the Nigerian Society of Engineers and a Registered Engineer with the Council for the Regulation of Engineering in Nigeria (COREN). He is also a member of the International Association for Bridge and Structural Engineering",
  },
];

const teamLeads: Person[] = [
  {
    name: "Adeyemi Gafar",
    position: "General Manager",
    image:
      "https://res.cloudinary.com/dgqyobxzg/image/upload/v1778694726/femab/adeyemi-gafar_ksmaij.jpg",
    bio: "Gafar holds a B.Sc. in Accounting from Obafemi Awolowo University, Ile-Ife, and an M.Sc. in Finance from the University of Lagos. He is an astute professional who has worked in the following companies in various capacities: Tower Aluminium Nigeria, Chi (Chivita) Nigeria Limited, and Toptech Engineering as a senior auditor. He was promoted to the position of Group Financial Controller in Toptech Engineering as a result of his vast experience in auditing, control, and financial management. He joined Femab Properties Limited in October 2013 as an audit manager and was deployed to the account and finance unit of the company in January 2014 as the financial controller of the company. Mr Adeyemi is an associate member of the Institute of Chartered Accountants of Nigeria (ICAN).",
  },
  {
    name: "Shina Aguda",
    position: "Group Head, Human Resources & Admin",
    image:
      "https://res.cloudinary.com/dgqyobxzg/image/upload/v1778694725/femab/shina-aguda_adt90f.jpg",
    bio: "He graduated from Ogun State Polytechnic with an HND in Mass Communication in 1986 and, subsequently, a Master’s in Theology from International Christian University. Worked for several years with Daily Times of Nigeria and Magnum Gold Advertising before joining Femab in 2003 as COO before proceeding to Ireland for a Diploma in Project Management. He has been with Femab Group in different capacities till date.",
  },
  {
    name: "Damola Adenekan",
    position: "Head, Marketing and Business Development",
    image:
      "https://res.cloudinary.com/dgqyobxzg/image/upload/v1778694726/femab/damilola-adenekan_vrkknc.jpg",
    bio: "Adenekan Adedamola Uthman was formerly the Executive Assistant to the Group Managing Director at Shelter First. Adenekan Adedamola has had a progressive career in diverse business sectors including Real Estate, Manufacturing, Trading, Hospitality, Facility Management, Construction, Media, and Asset Management. He began his career as a Human Resources Executive and later transitioned to the role of Executive Assistant to the Editor-in-Chief at Eye Ireland International Magazine in Ireland. He also worked as a corporate Service Executive and was seconded as the Protocol Official to the Executive Vice Chairman at Westfoster Group in Victoria Island, Lagos State, Nigeria. He currently heads the Business development department of Femab Group.",
  },
  {
    name: "Gloria Ajayi",
    position: "Head, Customer Service",
    image:
      "https://res.cloudinary.com/dgqyobxzg/image/upload/v1778694725/femab/gloria-ajayi_vgcmel.jpg",
    bio: "Gloria is a result-driven customer service expert with 15 years experience driving customer satisfaction and loyalty. She has a proven track record of effectively managing customer relationships. She holds a Master's degree in International Business Management from Lagos State University (LASU), 2024, after earning a Bachelor of Science in Marketing, Lagos State University (LASU), 2005. She began her career at Grooming Center Micro Finance Bank as an Account Officer. She joined Femab Properties Limited as a Front Desk Officer, progressing to Assistant Customer Service Executive and eventually she is presently the head of customer service at Femab Properties Limited. Gloria possesses significant hands-on experience in the real estate and related sectors. She attended training that has improved her ability to perform in her present position. She is a resourceful staff member who has the customer service data and management at her fingertips. In her years in the organization, she has garnered experience in the area of customer service management.",
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
  fontSize: string,
) {
  img.style.display = "none";
  const parent = img.parentElement!;
  parent.classList.add(
    "flex",
    "items-center",
    "justify-center",
    ...avatarColors[colorIndex % avatarColors.length].split(" "),
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
                    "text-4xl",
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
              isLarge ? "text-3xl" : "text-2xl",
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
