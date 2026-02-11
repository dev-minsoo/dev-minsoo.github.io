"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import SectionContainer from "@/components/ui/SectionContainer";
import { siteConfig } from "@/config/site";

export default function About() {
  const highlights = [
    "클린 코드와 유지보수성을 중시합니다",
    "사용자 경험을 최우선으로 생각합니다",
    "새로운 기술을 배우는 것을 즐깁니다",
    "팀과의 협업을 중요하게 여깁니다",
  ];

  return (
    <SectionContainer id="about" title="About Me">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="rounded-2xl p-1 bg-gradient-to-br from-blue-500 to-emerald-500"
        >
          <div className="bg-zinc-900 rounded-xl h-64 flex items-center justify-center">
            <span className="text-8xl">💻</span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-zinc-300 leading-relaxed mb-6">{siteConfig.bio}</p>

          <div className="space-y-3">
            {highlights.map((highlight, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="flex items-center gap-3"
              >
                <Check className="w-5 h-5 text-emerald-500 flex-shrink-0" />
                <span className="text-zinc-400">{highlight}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </SectionContainer>
  );
}
