"use client";

import { BentoGrid } from "./BentoGrid";
import { BentoCard } from "./BentoCard";
import { Button } from "./button";

export default function Projects() {
  return (
    <section className="py-20 px-6 lg:px-12">
      <div className="max-w-3xl space-y-4 mb-12">
        <h2 className="text-(--color-accent) uppercase font-bold">
          our latest project
        </h2>

        <p className="text-4xl capitalize font-semibold">
          our landmark projects
        </p>

        <p>
          Explore our portfolio of exceptional developments, from modern
          residential estates and luxury apartments to thriving commercial hubs
          and mixed-use communities.
        </p>

        <Button>View All Projects</Button>
      </div>

      <BentoGrid>
        <BentoCard
          backgroundImage="https://res.cloudinary.com/dgqyobxzg/image/upload/v1778606846/femab/crystal_towers_txpgl3.jpg"
          className="row-span-2 md:col-span-2 md:row-span-4"
        >
          <h3 className="text-2xl font-semibold mb-4 capitalize">
            crystal towers
          </h3>
          <Button>View Project</Button>
        </BentoCard>

        <BentoCard backgroundImage="https://res.cloudinary.com/dgqyobxzg/image/upload/v1778606982/femab/crestville_estate_ttta2z.jpg" className="row-span-2 md:row-span-2">
          <h3 className="text-xl font-semibold mb-4 capitalize">
            crestville estate
          </h3>
          <Button>View Project</Button>
        </BentoCard>

        <BentoCard backgroundImage="https://res.cloudinary.com/dgqyobxzg/image/upload/v1778607133/femab/Peninsula-Garden-estate_mih1fx.png" className="row-span-2 md:row-span-2">
          <h3 className="text-xl font-semibold mb-4 capitalize">
            peninsula gardens estate
          </h3>
          <Button>View Project</Button>
        </BentoCard>

        <BentoCard
          backgroundImage="https://res.cloudinary.com/dgqyobxzg/image/upload/v1778606921/femab/platinum_gate_estate_e3d239.jpg"
          className="row-span-2 md:col-span-2 md:row-span-2"
        >
          <h3 className="text-2xl font-semibold mb-4 capitalize">
            platinum gate estate
          </h3>
          <Button>View Project</Button>
        </BentoCard>
      </BentoGrid>
    </section>
  );
}