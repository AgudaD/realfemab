"use client";

import { useState } from "react";
import ServiceCard from "./components/servicecard";
import ServiceModal from "./components/servicemodal";

const services = [
  {
    id: 1,
    title: "Real Estate Consulting",
    image:
      "https://res.cloudinary.com/dgqyobxzg/image/upload/v1778863373/femab/consulting_uhrnvr.jpg",
    short: "Strategic real estate advisory services.",
    description:
      "We provide expert guidance on property investment, market analysis, feasibility studies, and real estate strategy to help clients make informed decisions.",
  },
  {
    id: 2,
    title: "Project Management",
    image:
      "https://res.cloudinary.com/dgqyobxzg/image/upload/v1778863372/femab/project-management-femab_hfkqdd.jpg",
    short: "Efficient planning and execution of projects.",
    description:
      "Our project management services ensure projects are delivered on time, within budget, and according to quality standards from inception to completion.",
  },
  {
    id: 3,
    title: "Residential Development",
    image:
      "https://res.cloudinary.com/dgqyobxzg/image/upload/v1778863372/femab/mixed-apt_tbrk8t.jpg",
    short: "Modern and sustainable housing solutions.",
    description:
      "We develop residential properties tailored to meet modern living standards while prioritizing sustainability, comfort, and functionality.",
  },
  {
    id: 4,
    title: "Building Design & Construction Management",
    image:
      "https://res.cloudinary.com/dgqyobxzg/image/upload/v1778863373/femab/building-design_ns2wt6.jpg",
    short: "Innovative design and construction oversight.",
    description:
      "From architectural concepts to construction supervision, we manage every stage of the building process to ensure excellence and efficiency.",
  },
  {
    id: 5,
    title: "Property and Facility Management",
    image:
      "https://res.cloudinary.com/dgqyobxzg/image/upload/v1778863372/femab/estate_eyr6kk.jpg",
    short: "Comprehensive property maintenance solutions.",
    description:
      "We provide professional property and facility management services focused on operational efficiency, maintenance, and tenant satisfaction.",
  },
  {
    id: 6,
    title: "Commercial Development",
    image:
      "https://res.cloudinary.com/dgqyobxzg/image/upload/v1778863373/femab/commercial2_ovqhrl.jpg",
    short: "Development of commercial real estate spaces.",
    description:
      "We deliver commercial projects including office buildings, retail spaces, and business environments designed for growth and profitability.",
  },
  {
    id: 7,
    title: "Infrastructure Development",
    image:
      "https://res.cloudinary.com/dgqyobxzg/image/upload/v1778863373/femab/infrastructure-development_otpoka.jpg",
    short: "Large-scale infrastructure planning and delivery.",
    description:
      "Our infrastructure development services cover roads, utilities, public facilities, and essential systems that support sustainable communities.",
  },
  {
    id: 8,
    title: "Mixed-Use Development",
    image:
      "https://res.cloudinary.com/dgqyobxzg/image/upload/v1778863372/femab/picture-1_dkiqgq.jpg",
    short: "Integrated residential and commercial projects.",
    description:
      "We create mixed-use developments that combine residential, commercial, and recreational spaces into vibrant and functional communities.",
  },
  {
    id: 9,
    title: "Affordable Housing",
    image:
      "https://res.cloudinary.com/dgqyobxzg/image/upload/v1778607133/femab/Peninsula-Garden-estate_mih1fx.png",
    short: "Accessible and cost-effective housing solutions.",
    description:
      "We develop affordable housing projects aimed at providing quality living spaces that are economically accessible without compromising standards.",
  },
];

export default function Services() {
  const [selectedService, setSelectedService] = useState<
    (typeof services)[number] | null
  >(null);

  return (
    <main className="px-6 py-16 max-w-7xl mx-auto">
      <section className="mb-14 text-center">
        <h1 className="text-4xl text-accent font-bold mb-4">Scope of Services</h1>

        <p className="text-gray-600 max-w-2xl mx-auto">
          We provide high-quality digital solutions tailored to businesses,
          startups, and organizations.
        </p>
      </section>

      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service) => (
          <ServiceCard
            key={service.id}
            service={service}
            onView={() => setSelectedService(service)}
          />
        ))}
      </section>

      {selectedService && (
        <ServiceModal
          service={selectedService}
          onClose={() => setSelectedService(null)}
        />
      )}
    </main>
  );
}
