import { ReactNode } from "react";

type BentoGridProps = {
  children: ReactNode;
};

export function BentoGrid({ children }: BentoGridProps) {
  return (
    <div
      className="
        grid 
        grid-cols-1 
        md:grid-cols-4
        gap-4 
        auto-rows-[220px]
        grid-flow-dense
      "
    >
      {children}
    </div>
  );
}