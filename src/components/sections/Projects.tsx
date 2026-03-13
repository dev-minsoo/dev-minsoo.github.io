"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import SectionContainer from "@/components/ui/SectionContainer";
import ProjectCard from "@/components/ui/ProjectCard";
import { projects } from "@/config/projects";
import { cn } from "@/lib/utils";

const categoryOrder = ["all", "fullstack", "web", "other"];
const categoryLabel: Record<string, string> = {
  all: "전체",
  fullstack: "Full-Stack",
  web: "Web",
  other: "Other",
};

export default function Projects() {
  const [category, setCategory] = useState("all");

  const filteredProjects = useMemo(() => {
    if (category === "all") return projects;
    return projects.filter((project) => project.category === category);
  }, [category]);

  return (
    <SectionContainer id="projects" title="Projects" subtitle="아이디어를 코드로 구현하고, 실제로 사용할 수 있는 형태로 다듬은 작업들입니다.">
      <div className="mb-6 flex flex-wrap gap-2">
        {categoryOrder.map((key) => (
          <button
            key={key}
            className={cn(
              "rounded-full border px-3.5 py-1.5 text-sm transition-colors",
              category === key ? "bg-slate-100 text-slate-900 border-white/20" : "text-slate-300 border-white/10 hover:border-white/30 hover:text-white"
            )}
            onClick={() => setCategory(key)}
          >
            {categoryLabel[key]}
          </button>
        ))}
      </div>

      <motion.div
        className="grid gap-4 md:grid-cols-2 xl:grid-cols-3"
        layout
      >
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
