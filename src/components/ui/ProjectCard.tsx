"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ExternalLink, Github } from "lucide-react";
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
  "from-cyan-400/25 to-blue-700/45",
  "from-sky-400/20 to-indigo-700/45",
  "from-emerald-400/20 to-teal-700/45",
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
      <Card hover className="group relative flex h-full flex-col p-3 sm:p-3.5">
        <div className="relative aspect-[10/3] overflow-hidden rounded-[16px] border border-white/8 bg-[#0a111d]">
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
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a111d]/80 via-transparent to-transparent" />
        </div>

        <div className="relative z-10 mt-4 flex-1 px-1">
          <div className="flex items-center justify-between gap-3">
            <p className="text-[11px] font-mono uppercase tracking-[0.18em] text-cyan-200/90">{project.category}</p>
            <div className="flex items-center gap-2.5 text-slate-500">
              {actionLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <a
                    key={link.key}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition-colors hover:text-slate-200"
                    aria-label={link.label}
                  >
                    <Icon size={14} />
                  </a>
                );
              })}
            </div>
          </div>

          <h3 className="mt-2 min-h-[2.4rem] text-xl font-semibold text-white transition-colors group-hover:text-cyan-100">
            {project.title}
          </h3>
          <p className="mt-2 min-h-[4rem] text-sm leading-6 text-slate-400 [display:-webkit-box] [-webkit-box-orient:vertical] [-webkit-line-clamp:3] overflow-hidden">
            {project.description}
          </p>

          {project.outcome ? (
            <div className="mt-3 min-h-[3.5rem] rounded-xl border border-cyan-300/12 bg-cyan-400/[0.04] px-3 py-2.5 text-[11px] leading-5 text-cyan-100/90 [display:-webkit-box] [-webkit-box-orient:vertical] [-webkit-line-clamp:3] overflow-hidden">
              {project.outcome}
            </div>
          ) : null}

          <div className="mt-3 flex flex-wrap gap-1.5">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-md border border-white/8 bg-white/[0.025] px-2 py-1 text-[11px] text-slate-300"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        <div className="relative z-10 mt-4 flex items-center justify-between gap-3 border-t border-white/8 px-1 pt-4">
          <Link
            href={`/projects/${project.slug}`}
            className="inline-flex items-center gap-1.5 text-sm font-medium text-cyan-200/90 transition-colors hover:text-cyan-100"
          >
            자세히 보기
            <ArrowRight size={14} />
          </Link>

          <span className="text-xs text-slate-500">프로젝트 보기</span>
        </div>
      </Card>
    </motion.article>
  );
}
