"use client";

import { motion } from "framer-motion";
import SectionContainer from "@/components/ui/SectionContainer";
import ProjectCard from "@/components/ui/ProjectCard";
import { projects } from "@/config/projects";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" as const },
  },
};

export default function Projects() {
  return (
    <SectionContainer
      id="projects"
      title="Projects"
      subtitle="작업한 프로젝트들입니다"
    >
      <motion.div
        className="grid md:grid-cols-2 gap-6"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {projects.map((project, index) => (
          <motion.div key={index} variants={cardVariants}>
            <ProjectCard project={project} index={index} />
          </motion.div>
        ))}
      </motion.div>
    </SectionContainer>
  );
}
