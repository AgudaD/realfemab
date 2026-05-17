import { ReactNode } from "react";

type BentoCardProps = {
  children: ReactNode;
  className?: string;
  backgroundImage?: string;
};

export function BentoCard({ children, className = "", backgroundImage }: BentoCardProps) {
  return (
    <div
      className={`
        group relative overflow-hidden
        rounded-2xl p-5
        text-white shadow-lg
        border border-zinc-700/50
        hover:border-zinc-500
        transition-all duration-300
        h-full
        ${className}
      `}
    >
      {backgroundImage && (
        <div
          className="absolute inset-0 bg-cover bg-center scale-100 group-hover:scale-110 transition-transform duration-700"
          style={{ backgroundImage: `url(${backgroundImage})` }}
        />
      )}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent group-hover:from-black/80 transition-all duration-500" />
      <div className="relative z-10 h-full flex flex-col justify-end">
        {children}
      </div>
    </div>
  );
}