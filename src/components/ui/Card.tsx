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
        "rounded-2xl border border-white/8 bg-[#0b1423]/92 p-6 transition-all duration-300",
        hover && "hover:-translate-y-1 hover:border-cyan-300/30 hover:bg-[#0d1830]",
        className
      )}
    >
      {children}
    </div>
  );
}
