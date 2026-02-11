"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { cn } from "@/lib/utils";

interface Props {
  id: string;
  title?: string;
  subtitle?: string;
  children: React.ReactNode;
  className?: string;
}

export default function SectionContainer({
  id,
  title,
  subtitle,
  children,
  className,
}: Props) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id={id}
      ref={ref}
      className={cn(
        "w-full max-w-[1200px] mx-auto px-6 py-24",
        className
      )}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.5 }}
      >
        {title && (
          <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-500 via-indigo-500 to-emerald-500 bg-clip-text text-transparent">
            {title}
          </h2>
        )}
        {subtitle && (
          <p className="text-zinc-400 mt-4">{subtitle}</p>
        )}
        <div className={title || subtitle ? "mt-12" : ""}>
          {children}
        </div>
      </motion.div>
    </section>
  );
}
