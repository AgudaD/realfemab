const cards = [
  {
    title: "Our Mission",
    body: "To combine a team of highly motivated individuals with passion for excellent customer service; to deliver shelter and return superior earnings to our stakeholders.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 2L2 7l10 5 10-5-10-5z" />
        <path d="M2 17l10 5 10-5" />
        <path d="M2 12l10 5 10-5" />
      </svg>
    ),
  },
  {
    title: "Our Vision",
    body: "To become a household name and a dominant force in the real estate industry with a view to attaining global excellence.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="12" cy="12" r="10" />
        <circle cx="12" cy="12" r="3" />
        <line x1="12" y1="2" x2="12" y2="5" />
        <line x1="12" y1="19" x2="12" y2="22" />
        <line x1="2" y1="12" x2="5" y2="12" />
        <line x1="19" y1="12" x2="22" y2="12" />
      </svg>
    ),
  },
];

export default function VisionMission() {
  return (
    <section className="py-24 px-6 md:px-16 bg-zinc-950">
      <div className="max-w-6xl mx-auto">
        <div className="mb-14 text-center">
          <span className="text-accent text-xs font-semibold uppercase tracking-widest">
            What Drives Us
          </span>
          <h2 className="mt-3 text-3xl md:text-4xl font-bold text-white">
            Our Vision & Mission
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {cards.map((card) => (
            <div
              key={card.title}
              className="relative rounded-2xl border border-zinc-800 bg-zinc-900 p-8 flex flex-col gap-5 hover:border-zinc-600 transition-colors duration-300 group overflow-hidden"
            >
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-accent/10 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="w-11 h-11 rounded-xl bg-accent/10 text-accent flex items-center justify-center shrink-0">
                {card.icon}
              </div>

              <div>
                <h3 className="text-lg font-semibold text-white mb-3">
                  {card.title}
                </h3>
                <p className="text-zinc-400 leading-relaxed text-[15px]">
                  {card.body}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
