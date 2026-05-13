import Image from "next/image";

const topBrass = [
  {
    name: "Dr. John Doe",
    position: "Chairman",
    image: "/images/team/chairman.jpg",
  },
  {
    name: "Mrs. Jane Smith",
    position: "Managing Director",
    image: "/images/team/md.jpg",
  },
  {
    name: "Mr. Richard Oke",
    position: "Executive Director, Operations",
    image: "/images/team/ed-ops.jpg",
  },
  {
    name: "Mrs. Funke Bello",
    position: "Executive Director, Finance",
    image: "/images/team/ed-finance.jpg",
  },
];

const teamLeads = [
  {
    name: "Adeyemi Gafar",
    position: "General Manager",
    image:
      "https://res.cloudinary.com/dgqyobxzg/image/upload/v1778694726/femab/adeyemi-gafar_ksmaij.jpg",
  },
  {
    name: "Shina Aguda",
    position: "Group Head, Human Resources & Admin",
    image:
      "https://res.cloudinary.com/dgqyobxzg/image/upload/v1778694725/femab/shina-aguda_adt90f.jpg",
  },
  {
    name: "Damola Adenekan",
    position: "Head, Marketing and Business Development",
    image:
      "https://res.cloudinary.com/dgqyobxzg/image/upload/v1778694726/femab/damilola-adenekan_vrkknc.jpg",
  },
  {
    name: "Gloria Ajayi",
    position: "Head, Customer Service",
    image:
      "https://res.cloudinary.com/dgqyobxzg/image/upload/v1778694725/femab/gloria-ajayi_vgcmel.jpg",
  },
  //   {
  //     name: "Sunday Adebiyi",
  //     position: "Head, Projects",
  //     image: "/images/team/sunday-adebiyi.jpg",
  //   },
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
  "bg-zinc-800 text-zinc-300",
  "bg-sky-900 text-sky-300",
  "bg-indigo-900 text-indigo-300",
  "bg-slate-800 text-slate-300",
];

type Person = { name: string; position: string; image: string };

function PersonCard({
  person,
  size = "md",
  colorIndex = 0,
}: {
  person: Person;
  size?: "lg" | "md";
  colorIndex?: number;
}) {
  const isLarge = size === "lg";

  return (
    <div className="group flex flex-col items-center text-center gap-3">
      <div
        className={`relative rounded-2xl overflow-hidden shrink-0 ${
          isLarge ? "w-40 h-44" : "w-28 h-32"
        }`}
      >
        <Image
          src={person.image}
          alt={person.name}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
          onError={(e) => {
            (e.target as HTMLImageElement).style.display = "none";
            const parent = (e.target as HTMLImageElement).parentElement!;
            parent.classList.add(
              "flex",
              "items-center",
              "justify-center",
              "bg-indigo-900",
              "text-indigo-300",
              avatarColors[colorIndex % avatarColors.length],
            );
            const span = document.createElement("span");
            span.textContent = getInitials(person.name);
            span.className = isLarge
              ? "text-2xl font-bold"
              : "text-lg font-bold";
            parent.appendChild(span);
          }}
        />
        <div className="absolute inset-0 rounded-2xl ring-1 ring-white/8" />
      </div>

      <div>
        <p
          className={`font-semibold text-black ${
            isLarge ? "text-base" : "text-sm"
          }`}
        >
          {person.name}
        </p>
        <p
          className={`text-zinc-400 mt-0.5 ${
            isLarge ? "text-sm" : "text-xs"
          } leading-snug`}
        >
          {person.position}
        </p>
      </div>
    </div>
  );
}

export default function Leadership() {
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

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {topBrass.map((person, i) => (
              <PersonCard
                key={person.name}
                person={person}
                size="lg"
                colorIndex={i}
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

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8">
            {teamLeads.map((person, i) => (
              <PersonCard
                key={person.name}
                person={person}
                size="md"
                colorIndex={i}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
