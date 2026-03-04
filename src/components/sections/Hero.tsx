"use client";

import { motion } from "framer-motion";
import { siteConfig } from "@/config/site";
import { Github, Rss, Mail } from "lucide-react";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.13,
      delayChildren: 0.12,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.58, ease: "easeOut" as const },
  },
};

const heroContacts = [
  { name: "GitHub", url: siteConfig.links?.github, icon: Github },
  { name: "Blog", url: siteConfig.links?.blog, icon: Rss },
  { name: "Email", url: `mailto:${siteConfig.email}`, icon: Mail },
].filter((contact): contact is { name: string; url: string; icon: typeof Github } => Boolean(contact.url));

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-[100svh] flex items-center justify-center overflow-hidden px-6 pt-24 pb-16"
    >
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <div className="absolute left-1/2 top-1/2 h-[520px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-300/15 blur-[150px]" />
      </div>
      <motion.div
        className="relative z-10 section-shell max-w-4xl"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="mx-auto max-w-[58ch] text-left">
          <motion.p variants={itemVariants} className="text-xs font-mono text-cyan-300/90 uppercase tracking-[0.35em]">
            Motto | 끝까지 가면 다 이겨
          </motion.p>
          <motion.h1
            variants={itemVariants}
            className="mt-5 text-5xl md:text-6xl lg:text-7xl font-bold leading-tight"
          >
            <span className="bg-gradient-to-r from-cyan-200 via-blue-300 to-indigo-200 bg-clip-text text-transparent">
              {siteConfig.name}
            </span>
          </motion.h1>
          <motion.p variants={itemVariants} className="mt-5 text-xl md:text-2xl text-slate-100 font-semibold">
            {siteConfig.tagline}
          </motion.p>
          <motion.p variants={itemVariants} className="mt-6 text-base text-slate-300 leading-relaxed whitespace-pre-line">
            {siteConfig.description}
          </motion.p>

          <motion.div variants={itemVariants} className="mt-10 flex items-center gap-3">
            {heroContacts.map((contact) => {
              const Icon = contact.icon;
              const isMail = contact.url.startsWith("mailto:");

              return (
                <a
                  key={contact.name}
                  href={contact.url}
                  target={isMail ? undefined : "_blank"}
                  rel={isMail ? undefined : "noopener noreferrer"}
                  aria-label={contact.name}
                  title={contact.name}
                  className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-white/15 text-slate-200 hover:text-white hover:border-cyan-200/50 hover:bg-white/5 transition-colors"
                >
                  <Icon size={18} />
                </a>
              );
            })}
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
