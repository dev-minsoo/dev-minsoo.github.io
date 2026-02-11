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
        "bg-zinc-900/50 border border-zinc-800 rounded-xl p-6",
        hover && "hover:border-zinc-700 hover:bg-zinc-900 transition-all duration-300",
        className
      )}
    >
      {children}
    </div>
  );
}
