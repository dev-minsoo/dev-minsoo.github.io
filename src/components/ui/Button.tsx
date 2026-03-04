"use client";

import { cn } from "@/lib/utils";

interface Props {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  size?: "sm" | "md" | "lg";
  href?: string;
  onClick?: () => void;
  className?: string;
}

export default function Button({
  children,
  variant = "primary",
  size = "md",
  href,
  onClick,
  className,
}: Props) {
  const baseClasses =
    "inline-flex items-center justify-center rounded-2xl font-semibold tracking-wide transition-all duration-200";

  const variantClasses = {
    primary:
      "bg-gradient-to-r from-cyan-300 via-blue-500 to-indigo-500 text-slate-950 hover:brightness-110",
    secondary:
      "border border-cyan-200/45 text-cyan-100 hover:bg-cyan-200/12 hover:text-white",
    ghost: "text-slate-200 hover:text-white hover:bg-white/10",
  };

  const sizeClasses = {
    sm: "px-3 py-1.5 text-sm",
    md: "px-5 py-2.5 text-sm",
    lg: "px-7 py-3 text-base shadow-emerald",
  };

  const classes = cn(baseClasses, variantClasses[variant], sizeClasses[size], className);

  if (href) {
    return (
      <a href={href} className={classes} onClick={onClick}>
        {children}
      </a>
    );
  }

  return (
    <button className={classes} onClick={onClick}>
      {children}
    </button>
  );
}
