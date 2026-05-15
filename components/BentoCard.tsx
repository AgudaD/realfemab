import { ReactNode } from "react";

type BentoCardProps = {
  children: ReactNode;
  className?: string;
  backgroundImage?: string;
};

export function BentoCard({
  children,
  className = "",
  backgroundImage,
}: BentoCardProps) {
  return (
    <div
      className={`
        group relative overflow-hidden
        rounded-2xl p-5
        text-white
        shadow-lg
        border border-zinc-700/50
        hover:border-zinc-500
        transition-all duration-300
        ${className}
      `}
    >
      {backgroundImage && (
        <div
          className="
            absolute inset-0 bg-cover bg-center
            scale-100 group-hover:scale-110
            transition-transform duration-700
          "
          style={{ backgroundImage: `url(${backgroundImage})` }}
        />
      )}

      {/* Dark overlay */}
      {backgroundImage && (
        <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-all duration-500" />
      )}

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-end">
        <div
          className="
            translate-y-6 opacity-0
            group-hover:translate-y-0
            group-hover:opacity-100
            transition-all duration-500
          "
        >
          {children}
        </div>
      </div>
    </div>
  );
}