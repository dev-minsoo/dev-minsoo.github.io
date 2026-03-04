"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import SectionContainer from "@/components/ui/SectionContainer";
import { siteConfig } from "@/config/site";

const timeline = [
  "요구사항을 재구성해 우선순위를 정한 뒤, 실행 가능한 범위로 분해합니다.",
  "실사용 기준과 모니터링 포인트를 먼저 잡고, 품질 게이트로 배포 위험을 줄입니다.",
  "결과물은 문서와 템플릿으로 정리해 다음 팀원이 바로 이어 받을 수 있게 만듭니다.",
];

export default function About() {
  return (
    <SectionContainer id="about" title="About" subtitle="문제 정의를 단단히 한 뒤, 안정적으로 구현합니다">
      <div className="grid gap-6 lg:grid-cols-[210px_1fr] items-start">
        <motion.div
          initial={{ opacity: 0, x: -22 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex justify-center lg:justify-start"
        >
          <div className="w-44 h-44 rounded-3xl ring-gradient glass-card bg-gradient-to-br from-cyan-300/30 via-blue-500/20 to-indigo-500/20 grid place-items-center">
            <span className="text-5xl tracking-[0.1em] font-semibold">WOO</span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="space-y-5"
        >
          <p className="text-xl md:text-2xl font-semibold text-cyan-100">{siteConfig.bio}</p>
          <p className="text-slate-300 leading-relaxed">{siteConfig.description}</p>

          <ul className="space-y-3">
            {timeline.map((item) => (
              <li key={item} className="flex items-start gap-3 text-sm text-slate-200">
                <ArrowRight size={16} className="text-cyan-300 mt-0.5" />
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <div className="grid sm:grid-cols-2 gap-3 pt-2">
            {siteConfig.introduction?.map((line) => (
              <p
                key={line}
                className="glass-card rounded-xl px-4 py-3 text-sm text-slate-200"
              >
                {line}
              </p>
            ))}
          </div>
        </motion.div>
      </div>
    </SectionContainer>
  );
}
