"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ExternalLink, Github } from "lucide-react";
import { Project } from "@/types";
import Card from "./Card";

interface Props {
  project: Project;
  index: number;
}

const gradients = [
  "from-cyan-400/40 to-blue-700/60",
  "from-violet-500/40 to-indigo-700/60",
  "from-emerald-400/40 to-teal-700/60",
];

export default function ProjectCard({ project, index }: Props) {
  const gradientClass = gradients[index % gradients.length];
  const imageFitClass = project.imageFit === "contain" ? "object-contain p-3" : "object-cover";
  const actionLinks = project.demoFirst
    ? [
        project.links.demo
          ? {
              key: "demo",
              href: project.links.demo,
              label: "Demo",
              icon: ExternalLink,
            }
          : null,
        project.links.github
          ? {
              key: "github",
              href: project.links.github,
              label: "Code",
              icon: Github,
            }
          : null,
      ].filter(Boolean)
    : [
        project.links.github
          ? {
              key: "github",
              href: project.links.github,
              label: "Code",
              icon: Github,
            }
          : null,
        project.links.demo
          ? {
              key: "demo",
              href: project.links.demo,
              label: "Demo",
              icon: ExternalLink,
            }
          : null,
      ].filter(Boolean);

  return (
    <motion.article className="h-full" whileHover={{ y: -5 }} transition={{ duration: 0.2 }}>
      <Card hover className="group relative h-full flex flex-col border border-white/10">
        <div className="relative h-40 overflow-hidden rounded-xl border border-white/10">
          <Image
            src={project.image}
            alt={`${project.title} banner`}
            fill
            className={`${imageFitClass} transition-transform duration-500 group-hover:scale-[1.03]`}
            sizes="(min-width: 1280px) 360px, (min-width: 768px) 50vw, 100vw"
          />
          <div className={`absolute inset-0 bg-gradient-to-br ${gradientClass} mix-blend-screen opacity-65`} />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent" />

          {project.logo ? (
            <div className="absolute bottom-4 right-4 z-10 rounded-[14px] border border-white/45 bg-white/94 p-1 shadow-lg shadow-slate-950/40 backdrop-blur">
              <div className="relative h-7 w-7 overflow-hidden rounded-[10px]">
                <Image
                  src={project.logo}
                  alt={`${project.title} logo`}
                  fill
                  className="object-contain"
                  sizes="40px"
                />
              </div>
            </div>
          ) : null}
        </div>

        <div className="relative z-10 flex-1 mt-5">
          <p className="text-xs font-mono text-cyan-200 uppercase tracking-[0.2em]">{project.category}</p>
          <h3 className="mt-2 min-h-[2.5rem] text-xl font-semibold text-white transition-colors group-hover:text-cyan-100">
            {project.title}
          </h3>
          <p className="mt-1.5 min-h-[5.25rem] text-sm leading-relaxed text-slate-400 [display:-webkit-box] [-webkit-box-orient:vertical] [-webkit-line-clamp:3] overflow-hidden">
            {project.description}
          </p>

          {project.outcome ? (
            <div className="mt-4 min-h-[4.5rem] rounded-xl border border-cyan-300/30 bg-cyan-900/25 px-3 py-2 text-xs text-cyan-100 [display:-webkit-box] [-webkit-box-orient:vertical] [-webkit-line-clamp:3] overflow-hidden">
              {project.outcome}
            </div>
          ) : null}

          <div className="flex flex-wrap gap-2 mt-4">
            {project.tags.map((tag) => (
              <span key={tag} className="px-2 py-1 rounded-full text-xs border border-white/15 text-slate-300">
                {tag}
              </span>
            ))}
          </div>
        </div>

        <div className="relative z-10 flex items-center justify-between gap-3 mt-6">
          <Link
            href={`/projects/${project.slug}`}
            className="text-sm text-cyan-200/90 transition-colors hover:text-cyan-100"
          >
            View details
          </Link>

          <div className="flex gap-3">
          {actionLinks.map((link) => {
            const Icon = link.icon;
            return (
            <a
              key={link.key}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-slate-300 hover:text-white transition-colors"
            >
              <Icon size={18} />
              <span className="text-sm">{link.label}</span>
            </a>
          )})}
          </div>
        </div>
      </Card>
    </motion.article>
  );
}
