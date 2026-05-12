interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost"
}

export function Button({ variant = "primary", className = "", ...props }: ButtonProps) {
  const variants = {
    primary: "bg-blue-500 hover:bg-blue-600 text-white",
    secondary: "bg-white/10 hover:bg-white/15 text-white border border-white/10",
    outline: "bg-transparent border border-blue-500 text-blue-500 hover:bg-blue-500/10",
    ghost: "bg-transparent hover:bg-white/10 text-white",
  }

  return (
    <button
      className={`inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg text-sm transition-all duration-150 active:scale-95 disabled:opacity-40 disabled:pointer-events-none ${variants[variant]} ${className}`}
      {...props}
    />
  )
}