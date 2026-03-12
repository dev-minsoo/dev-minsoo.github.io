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

type ActionLink = {
  key: string;
  href: string;
  label: string;
  icon: typeof ExternalLink | typeof Github;
};

const gradients = [
  "from-cyan-400/40 to-blue-700/60",
  "from-violet-500/40 to-indigo-700/60",
  "from-emerald-400/40 to-teal-700/60",
];

export default function ProjectCard({ project, index }: Props) {
  const gradientClass = gradients[index % gradients.length];
  const isContainedBanner = project.imageFit === "contain";
  const imageFitClass = isContainedBanner ? "object-contain" : "object-cover";
  const imageMotionClass = isContainedBanner ? "" : "transition-transform duration-500 group-hover:scale-[1.03]";
  const actionLinks: ActionLink[] = (project.demoFirst
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
      ]
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
      ]).filter((link): link is ActionLink => link !== null);

  return (
    <motion.article className="h-full" whileHover={{ y: -5 }} transition={{ duration: 0.2 }}>
      <Card hover className="group relative flex h-full flex-col border border-white/10 p-4 sm:p-5">
        <div className="relative aspect-[10/3] overflow-hidden rounded-lg border border-white/10 bg-slate-950/80">
          <Image
            src={project.image}
            alt={`${project.title} banner`}
            fill
            className={`${imageFitClass} ${imageMotionClass}`.trim()}
            sizes="(min-width: 1280px) 360px, (min-width: 768px) 50vw, 100vw"
          />
          <div
            className={`absolute inset-0 bg-gradient-to-br ${gradientClass} ${isContainedBanner ? "opacity-35" : "mix-blend-screen opacity-65"}`}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent" />

        </div>

        <div className="relative z-10 mt-4 flex-1">
          <p className="text-xs font-mono text-cyan-200 uppercase tracking-[0.2em]">{project.category}</p>
          <h3 className="mt-1.5 min-h-[2.25rem] text-lg font-semibold text-white transition-colors group-hover:text-cyan-100 sm:text-[1.15rem]">
            {project.title}
          </h3>
          <p className="mt-1 min-h-[4rem] text-sm leading-6 text-slate-400 [display:-webkit-box] [-webkit-box-orient:vertical] [-webkit-line-clamp:3] overflow-hidden">
            {project.description}
          </p>

          {project.outcome ? (
            <div className="mt-2 min-h-[3.5rem] rounded-lg border border-cyan-300/25 bg-cyan-900/20 px-3 py-2 text-[11px] leading-5 text-cyan-100 [display:-webkit-box] [-webkit-box-orient:vertical] [-webkit-line-clamp:3] overflow-hidden">
              {project.outcome}
            </div>
          ) : null}

          <div className="mt-2.5 flex flex-wrap gap-1.5">
            {project.tags.map((tag) => (
              <span key={tag} className="rounded-full border border-white/15 px-2 py-1 text-[11px] text-slate-300">
                {tag}
              </span>
            ))}
          </div>
        </div>

        <div className="relative z-10 mt-4 flex items-center justify-between gap-3">
          <Link
            href={`/projects/${project.slug}`}
            className="text-sm text-cyan-200/90 transition-colors hover:text-cyan-100"
          >
            View details
          </Link>

          <div className="flex gap-2.5">
            {actionLinks.map((link) => {
              const Icon = link.icon;
              return (
                <a
                  key={link.key}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-sm text-slate-300 transition-colors hover:text-white"
                >
                  <Icon size={16} />
                  <span>{link.label}</span>
                </a>
              );
            })}
          </div>
        </div>
      </Card>
    </motion.article>
  );
}
