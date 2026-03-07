"use client";

import { motion } from "framer-motion";
import { Building2, CalendarDays } from "lucide-react";
import SectionContainer from "@/components/ui/SectionContainer";
import Card from "@/components/ui/Card";

const experiences = [
  {
    company: "디케이테크인(dktechin)",
    role: "Backend Developer",
    period: "2022.05 - 재직중",
    summary:
      "서비스 백엔드 경험을 바탕으로 AI/ML 모델을 실제 서비스에 안전하게 연결하는 플랫폼 백엔드 역할을 수행하고 있습니다. 최근에는 검색 API 전환 과정에서 SDK 기반 트래픽 분할과 결과 수집 체계를 설계해 A/B 실험과 점진 배포가 가능한 운영 구조를 만들었습니다.",
    highlights: [
      "검색 API 전환을 위한 SDK 기반 A/B 실험 및 점진 배포 체계 구축",
      "레이블링 품질 평가/피드백을 모델 재학습으로 연결하는 학습 피드백 루프 설계",
      "수억 건 규모 상품 이미지/메타데이터 ETL 및 증분 반영 파이프라인 구현",
      "검색/평가 운영 플랫폼 개발로 데이터 수집-실험-개선 사이클 고도화",
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
                  <h3 className="text-xl font-semibold text-white">{experience.company}</h3>
                  <p className="mt-1 text-sm text-cyan-300 uppercase tracking-[0.18em]">{experience.role}</p>
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
