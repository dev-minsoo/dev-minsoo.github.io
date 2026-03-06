"use client";

import { motion } from "framer-motion";
import { Building2, CalendarDays } from "lucide-react";
import SectionContainer from "@/components/ui/SectionContainer";
import Card from "@/components/ui/Card";

const experiences = [
  {
    company: "현재 회사 (회사명 입력)",
    role: "Backend Developer",
    period: "YYYY.MM - Present",
    summary:
      "검색 고도화 업무를 중심으로 데이터 파이프라인 구축, AI 모델 기반 데이터 품질 개선, A/B 테스트, 학습 데이터 정비를 수행하며 실무 문제 해결에 집중했습니다.",
    highlights: [
      "검색 데이터 흐름 정비 및 파이프라인 구축",
      "AI 모델 활용 품질 개선 실험과 운영 반영",
      "A/B 테스트 기반 개선안 검증",
      "학습 데이터 정비 및 품질 관리 프로세스 개선",
    ],
  },
];

export default function Experience() {
  return (
    <SectionContainer id="experience" title="Experience" subtitle="회사 경력과 실무 중심 경험입니다">
      <div className="space-y-5">
        {experiences.map((experience, index) => (
          <motion.div
            key={`${experience.company}-${experience.period}`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: index * 0.1 }}
          >
            <Card>
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div>
                  <p className="text-sm text-cyan-300 uppercase tracking-[0.18em]">{experience.role}</p>
                  <h3 className="mt-1 text-xl font-semibold text-white">{experience.company}</h3>
                </div>
                <p className="inline-flex items-center gap-2 text-sm text-slate-300">
                  <CalendarDays size={16} className="text-cyan-300" />
                  {experience.period}
                </p>
              </div>

              <p className="mt-5 text-slate-300 leading-relaxed">{experience.summary}</p>

              <div className="mt-5 grid gap-2 sm:grid-cols-2">
                {experience.highlights.map((highlight) => (
                  <p
                    key={highlight}
                    className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-slate-900/45 px-3 py-2 text-sm text-slate-200"
                  >
                    <Building2 size={14} className="text-cyan-300" />
                    {highlight}
                  </p>
                ))}
              </div>
            </Card>
          </motion.div>
        ))}
      </div>
    </SectionContainer>
  );
}
