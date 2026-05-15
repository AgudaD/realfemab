import { ReactNode } from "react";

type BentoGridProps = {
  children: ReactNode;
};

export function BentoGrid({ children }: BentoGridProps) {
  return (
    <div
      className="
        grid
        grid-cols-1 md:grid-cols-2 lg:grid-cols-4
        gap-5 md:gap-6
        auto-rows-[240px] md:auto-rows-[260px]
      "
    >
      {children}
    </div>
  );
}
