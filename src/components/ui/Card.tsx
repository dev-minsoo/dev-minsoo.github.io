import { cn } from "@/lib/utils";

interface Props {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

export default function Card({ children, className, hover = false }: Props) {
  return (
    <div
      className={cn(
        "rounded-2xl p-6 ring-gradient glass-card transition-all duration-300",
        hover && "hover:-translate-y-1 hover:border-white/40",
        className
      )}
    >
      {children}
    </div>
  );
}
