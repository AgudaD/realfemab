const sisters = [
  "Hongyang Dredging & Seaport Construction Company Ltd",
  "Crystal Blocks and Concretes Industries",
  "Alliance Mortgage Consortium Ltd",
  "Shelter First Associates Ltd",
];

export default function OurHistory() {
  return (
    <section className="py-24 px-6 md:px-16 bg-black">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">


        <div className="lg:sticky lg:top-32">
          <span className="text-accent text-xs font-semibold uppercase tracking-widest">
            Our Story
          </span>
          <h2 className="mt-3 text-3xl md:text-4xl font-bold text-white leading-tight">
            Three Decades of Building Nigeria
          </h2>
          <p className="mt-4 text-zinc-500 text-sm">
            RC Number 39118 · Incorporated under the Companies Act of 1990
          </p>
          

          <div className="mt-10 flex flex-col gap-4">
            {[
              { year: "1994", label: "Founded as Femab Global Ventures" },
              { year: "2000", label: "Transitioned to Femab Properties Limited" },
              { year: "Today", label: "Pre-eminent property company in Nigeria" },
            ].map((item) => (
              <div key={item.year} className="flex items-center gap-4">
                <span className="text-accent font-bold text-sm w-14 shrink-0">
                  {item.year}
                </span>
                <div className="h-px flex-1 bg-zinc-800" />
                <span className="text-zinc-400 text-sm text-right">{item.label}</span>
              </div>
            ))}
          </div>
        </div>


        <div className="flex flex-col gap-6 text-zinc-400 leading-relaxed text-[15px]">
          <p>
            Femab Property Limited is a limited liability company incorporated under the
            Companies Act of 1990 with RC Number 39118. The company provides a wide range
            of real estate consultancy services, including civil and engineering
            construction, property management, property sales, letting, and estate
            development.
          </p>
          <p>
            Initially registered as <span className="text-white font-medium">Femab Global Ventures</span> in
            1994 as a private enterprise, the company transitioned to{" "}
            <span className="text-white font-medium">Femab Properties Limited</span> in 2000 due to
            its expansion and growth in business activities. Over the decades, FEMAB has
            remained committed to contributing to Nigeria&apos;s economic development and
            improving the lives of individuals and corporate clients through investments in
            real estate, general investment finance, and management services.
          </p>
          <p>
            FEMAB is recognized as a pre-eminent property company with a diverse and
            balanced portfolio encompassing residential, commercial, and mixed-use
            developments. Among its notable projects is the landmark{" "}
            <span className="text-white font-medium">Diamond Estate in Lagos State</span>. The
            company&apos;s reputation extends to property investments across Nigeria and
            interests in development projects beyond the country&apos;s borders.
          </p>
          <p>
            In addition to property development, FEMAB has established itself as a trusted
            residential and industrial property management specialist, delivering services
            marked by integrity, professionalism, and peace of mind for its clients.
          </p>
          

          <div className="mt-4 rounded-2xl border border-zinc-800 bg-zinc-900 p-6">
            <p className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">
              Subsidiaries
            </p>
            <ul className="flex flex-col gap-3">
              {sisters.map((name) => (
                <li key={name} className="flex items-start gap-3 text-zinc-400 text-sm">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
                  {name}
                </li>
              ))}
            </ul>
          </div>
        </div>

      </div>
    </section>
  );
}