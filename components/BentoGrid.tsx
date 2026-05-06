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
        md:grid-cols-3
        lg:grid-cols-4
        gap-4 
        auto-rows-[140px]
      "
    >
      {children}
    </div>
  );
}