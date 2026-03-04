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
      className={cn("section-shell py-24", className)}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.5 }}
      >
        {title && (
          <div className="relative">
            <p className="title-line text-[0.68rem] font-mono text-cyan-300/90 uppercase tracking-[0.24em]">{id}</p>
            <h2 className="mt-2 text-3xl md:text-4xl font-bold text-white">{title}</h2>
            {subtitle && <p className="mt-3 text-slate-300 max-w-[62ch]">{subtitle}</p>}
            <div className="mt-5 h-px w-24 bg-gradient-to-r from-cyan-300 to-indigo-400" />
          </div>
        )}
        <div className={title || subtitle ? "mt-10" : ""}>{children}</div>
      </motion.div>
    </section>
  );
}
