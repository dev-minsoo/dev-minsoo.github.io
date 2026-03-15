"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import SectionContainer from "@/components/ui/SectionContainer";
import ProjectCard from "@/components/ui/ProjectCard";
import { projects } from "@/config/projects";
import { cn } from "@/lib/utils";

const categoryOrder = ["all", "fullstack", "web", "backend", "other"];
const categoryLabel: Record<string, string> = {
  all: "전체",
  fullstack: "Full-Stack",
  web: "Web",
  backend: "Backend",
  other: "Other",
};

export default function Projects() {
  const [category, setCategory] = useState("all");

  const filteredProjects = useMemo(() => {
    if (category === "all") return projects;
    return projects.filter((project) => project.category === category);
  }, [category]);

  return (
    <SectionContainer
      id="projects"
      title="Projects"
      subtitle="실제로 만들고 운영해 보며 구조와 사용 흐름을 다듬은 프로젝트들입니다."
    >
      <div className="mb-6 flex flex-wrap gap-2">
        {categoryOrder.map((key) => (
          <button
            key={key}
            className={cn(
              "rounded-full border px-3.5 py-1.5 text-sm transition-colors",
              category === key
                ? "border-cyan-300/30 bg-cyan-300/12 text-cyan-100"
                : "border-white/10 text-slate-400 hover:border-white/25 hover:text-white"
            )}
            onClick={() => setCategory(key)}
          >
            {categoryLabel[key]}
          </button>
        ))}
      </div>

      <motion.div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3" layout>
        {filteredProjects.map((project, index) => (
          <motion.div
            key={project.id}
            className="h-full"
            layout
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, delay: index * 0.05 }}
          >
            <ProjectCard project={project} index={index} />
          </motion.div>
        ))}
      </motion.div>
    </SectionContainer>
  );
}
