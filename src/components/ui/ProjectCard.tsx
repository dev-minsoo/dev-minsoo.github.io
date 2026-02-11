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
  "bg-gradient-to-br from-blue-500 to-indigo-600",
  "bg-gradient-to-br from-purple-500 to-pink-600",
  "bg-gradient-to-br from-emerald-500 to-teal-600",
  "bg-gradient-to-br from-orange-500 to-red-600",
  "bg-gradient-to-br from-cyan-500 to-blue-600",
  "bg-gradient-to-br from-violet-500 to-purple-600",
];

export default function ProjectCard({ project, index }: Props) {
  const gradientClass = gradients[index % gradients.length];

  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.2 }}
    >
      <Card hover className="h-full flex flex-col">
        {/* Colored placeholder instead of image */}
        <div className={`h-48 rounded-lg ${gradientClass}`} />

        <div className="flex-1 mt-4">
          <h3 className="text-xl font-semibold text-white">
            {project.title}
          </h3>
          <p className="text-zinc-400 text-sm mt-2 line-clamp-2">
            {project.description}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mt-4">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="bg-zinc-800 text-zinc-300 text-xs px-2 py-1 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Links */}
        <div className="flex gap-3 mt-6">
          {project.links.github && (
            <a
              href={project.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-zinc-400 hover:text-white transition-colors"
            >
              <Github size={18} />
              <span className="text-sm">Code</span>
            </a>
          )}
          {project.links.demo && (
            <a
              href={project.links.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-zinc-400 hover:text-white transition-colors"
            >
              <ExternalLink size={18} />
              <span className="text-sm">Demo</span>
            </a>
          )}
        </div>
      </Card>
    </motion.div>
  );
}
