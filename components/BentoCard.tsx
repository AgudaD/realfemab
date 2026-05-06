import { ReactNode } from "react";

type BentoCardProps = {
  children: ReactNode;
  className?: string;
};

export function BentoCard({ children, className = "" }: BentoCardProps) {
  return (
    <div
      className={`
        rounded-2xl p-5
        bg-linear-to-r from-zinc-900 to-zinc-800
        text-white
        shadow-lg
        border border-zinc-700/50
        hover:scale-[1.02]
        hover:border-zinc-500
        transition-all duration-300
        ${className}
      `}
    >
      {children}
    </div>
  );
}