const departments = [
  {
    name: "Marketing",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
      </svg>
    ),
    summary:
      "The live wire of the company, comprising qualified professionals deploying aggressive strategies to boost sales and revenue.",
    body: "For the purpose of achieving great results in our sales and marketing drive, we deploy aggressive strategies aimed at boosting our overall sales/revenue base. Our target market has been segmented into: Group/Cooperatives, Diaspora Market, Private clients, and High Net Worth Individuals. Our E-marketing platforms are activated to reach Nigerians in any part of the world who desire a home in the country.",
  },
  {
    name: "Project Management",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="7" width="20" height="14" rx="2" />
        <path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" />
        <line x1="12" y1="12" x2="12" y2="16" />
        <line x1="10" y1="14" x2="14" y2="14" />
      </svg>
    ),
    summary:
      "The construction arm of the company, comprising Civil & Building Engineers supported by Architects and Surveyors.",
    body: "This department oversees and coordinates all civil works including building, road, and drainage construction. It has successfully executed the sale of over a hundred acres of land on behalf of various land owners, and is responsible for layout, planning, structural and architectural designs.",
  },
  {
    name: "Human Resources / Admin",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
    summary:
      "Responsible for recruiting, retaining, and developing top talent to drive the company's success.",
    body: "Our HR and Admin department ensures a positive work environment, efficient administrative processes, and compliance with labour regulations. By fostering employee engagement and continuous learning, this department maintains a motivated and high-performing workforce.",
  },
  {
    name: "Customer Service",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
      </svg>
    ),
    summary:
      "Ensuring prompt and efficient responses to client inquiries throughout every stage of engagement.",
    body: "At FEMAB Properties, customer satisfaction is a priority. Our Customer Service department provides professional assistance and strives to build lasting relationships by delivering top-notch support and solutions tailored to individual client needs.",
  },
  {
    name: "Survey & Geoinformatics",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <line x1="2" y1="12" x2="22" y2="12" />
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
      </svg>
    ),
    summary:
      "Specialising in land surveying, spatial analysis, and mapping to facilitate accurate planning.",
    body: "Our team ensures precision in property measurements, boundary delineations, and land documentation to guarantee legally compliant and well-structured real estate projects.",
  },
  {
    name: "ICT",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <line x1="8" y1="21" x2="16" y2="21" />
        <line x1="12" y1="17" x2="12" y2="21" />
      </svg>
    ),
    summary:
      "Implementing cutting-edge technology solutions that enhance operational efficiency across the company.",
    body: "From managing digital infrastructure to maintaining secure data systems, this team ensures seamless communication and technological innovation within the company, supporting various departments in their digital transformation.",
  },
  {
    name: "Internal Control / Audit",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
    summary:
      "Safeguarding FEMAB's financial integrity and operational compliance through risk management and audits.",
    body: "This department oversees regulatory adherence and internal audits to ensure transparency and accountability. By monitoring financial transactions and internal processes, it plays a crucial role in upholding the company's credibility and long-term stability.",
  },
];

export default function CoreDepartments() {
  return (
    <section className="py-16 px-6 md:px-16">
      <div className="max-w-6xl mx-auto">

        <div className="mb-12">
          <span className="text-accent text-xs font-semibold uppercase tracking-widest">
            How We Operate
          </span>
          <h2 className="mt-3 text-3xl md:text-4xl font-bold text-white leading-tight">
            Core Departments
          </h2>
          <p className="mt-3 text-zinc-400 max-w-xl">
            Each department plays a distinct role in delivering the quality and reliability
            FEMAB Properties is known for.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {departments.map((dept) => (
            <div
              key={dept.name}
              className="group rounded-2xl border border-zinc-800 bg-zinc-900 p-6 hover:border-zinc-600 transition-colors duration-300 relative overflow-hidden"
            >
              {/* hover glow */}
              <div className="absolute -top-8 -right-8 w-32 h-32 bg-accent/10 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-accent/10 text-accent flex items-center justify-center shrink-0 mt-0.5">
                  {dept.icon}
                </div>
                <div>
                  <h3 className="text-white font-semibold text-base mb-2">{dept.name}</h3>
                  <p className="text-zinc-400 text-sm leading-relaxed">{dept.body}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}