"use client";

import { motion } from "framer-motion";
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

  return (
    <motion.article whileHover={{ y: -5 }} transition={{ duration: 0.2 }}>
      <Card hover className="h-full flex flex-col border border-white/10">
        <div className={`h-40 rounded-xl bg-gradient-to-br ${gradientClass} border border-white/10`} />

        <div className="flex-1 mt-5">
          <p className="text-xs font-mono text-cyan-200 uppercase tracking-[0.2em]">{project.category}</p>
          <h3 className="text-xl font-semibold text-white mt-2">{project.title}</h3>
          <p className="text-slate-400 text-sm mt-3 leading-relaxed">{project.description}</p>

          {project.outcome ? (
            <div className="mt-4 text-xs text-cyan-100 bg-cyan-900/25 border border-cyan-300/30 rounded-xl px-3 py-2">
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

        <div className="flex gap-3 mt-6">
          {project.links.github ? (
            <a
              href={project.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-slate-300 hover:text-white transition-colors"
            >
              <Github size={18} />
              <span className="text-sm">Code</span>
            </a>
          ) : null}

          {project.links.demo ? (
            <a
              href={project.links.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-slate-300 hover:text-white transition-colors"
            >
              <ExternalLink size={18} />
              <span className="text-sm">Demo</span>
            </a>
          ) : null}
        </div>
      </Card>
    </motion.article>
  );
}

