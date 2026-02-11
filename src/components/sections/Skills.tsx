"use client";

import { motion } from "framer-motion";
import * as Icons from "lucide-react";
import SectionContainer from "@/components/ui/SectionContainer";
import { skillCategories } from "@/config/skills";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
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

export default function Skills() {
  return (
    <SectionContainer
      id="skills"
      title="Skills"
      subtitle="사용하는 기술 스택입니다"
    >
      <motion.div
        className="grid md:grid-cols-3 gap-8"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {skillCategories.map((category, categoryIndex) => (
          <motion.div
            key={categoryIndex}
            variants={cardVariants}
            className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-6"
          >
            <h3 className="text-lg font-semibold text-white mb-4">
              {category.title}
            </h3>
            <div className="grid grid-cols-2 gap-3">
              {category.skills.map((skill, skillIndex) => {
                const IconComponent = Icons[skill.icon as keyof typeof Icons] as any;
                return (
                  <div
                    key={skillIndex}
                    className="flex items-center gap-3"
                  >
                    {IconComponent && (
                      <IconComponent className="w-5 h-5 text-blue-500 flex-shrink-0" />
                    )}
                    <span className="text-zinc-300 text-sm">{skill.name}</span>
                  </div>
                );
              })}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </SectionContainer>
  );
}
