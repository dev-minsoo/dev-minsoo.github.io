"use client";

import { motion } from "framer-motion";
import * as Icons from "lucide-react";
import SectionContainer from "@/components/ui/SectionContainer";
import { skillCategories } from "@/config/skills";
import Card from "@/components/ui/Card";

export default function Skills() {
  return (
    <SectionContainer id="skills" title="Skills" subtitle="실무에서 바로 쓰는 스택만 골라 정리했습니다">
      <div className="grid md:grid-cols-3 gap-6">
        {skillCategories.map((category, categoryIndex) => (
          <motion.div
            key={category.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: categoryIndex * 0.1 }}
          >
            <Card className="h-full">
              <h3 className="text-lg font-semibold text-white">{category.title}</h3>
              <p className="mt-2 text-xs text-slate-400 uppercase tracking-[0.2em]">Proficiency</p>
              <div className="mt-5 space-y-3">
                {category.skills.map((skill) => {
                  const Icon = Icons[skill.icon as keyof typeof Icons];
                  const level = typeof skill.level === "number" ? Math.max(0, Math.min(skill.level, 100)) : 75;
                  return (
                    <div key={skill.name} className="rounded-xl border border-white/10 bg-slate-900/45 px-4 py-3">
                      <div className="flex items-center justify-between text-sm text-slate-100">
                        <span className="inline-flex items-center gap-2">
                          {Icon ? <Icon size={16} className="text-cyan-300" /> : null}
                          {skill.name}
                        </span>
                        <span className="text-xs text-slate-400">{level}%</span>
                      </div>
                      <div className="mt-2 h-1.5 bg-white/10 rounded-full overflow-hidden">
                        <div className="h-full bg-gradient-to-r from-cyan-400 to-blue-500" style={{ width: `${level}%` }} />
                      </div>
                    </div>
                  );
                })}
              </div>
            </Card>
          </motion.div>
        ))}
      </div>
    </SectionContainer>
  );
}
