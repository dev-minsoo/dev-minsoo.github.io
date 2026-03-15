"use client";

import { motion } from "framer-motion";
import { Building2, CalendarDays, Workflow } from "lucide-react";
import SectionContainer from "@/components/ui/SectionContainer";
import Card from "@/components/ui/Card";

const experiences = [
  {
    company: "디케이테크인(dktechin)",
    role: "Backend Developer",
    period: "2022.05 - 재직중",
    summary:
      "서비스 백엔드 경험을 바탕으로 AI/ML 모델을 실제 서비스에 안정적으로 연결하는 플랫폼 백엔드 역할을 수행하고 있습니다.\n최근에는 검색 API 전환 과정에서 SDK 기반 트래픽 분할과 결과 수집 체계를 설계해, A/B 실험과 점진 배포가 가능한 운영 구조를 구축했습니다.",
    whatIDid: [
      "검색/추천 품질 개선을 위한 백엔드 API와 운영 도구 설계 및 구현",
      "AI/ML 모델이 실제 서비스 흐름 안에서 안정적으로 동작할 수 있도록 데이터 수집, 실험, 배포 구조 설계",
      "검색 평가, 피드백, 재학습으로 이어지는 운영 사이클 연결",
    ],
    highlights: [
      "검색 API 전환을 위한 SDK 기반 A/B 실험 및 점진 배포 체계 구축",
      "레이블링 평가와 피드백을 재학습으로 연결하는 운영 루프 설계",
      "수억 건 규모 상품 이미지/메타데이터 ETL 및 증분 반영 파이프라인 구현",
      "검색·평가 운영 플랫폼 개발로 실험부터 개선까지의 사이클 고도화",
    ],
  },
];

export default function Experience() {
  return (
    <SectionContainer id="experience" title="Experience" subtitle="실무에서 문제를 정의하고 구조적으로 해결해 온 경험입니다.">
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
                  <h3 className="text-2xl font-semibold text-white">{experience.company}</h3>
                  <p className="mt-1 text-sm text-cyan-300 uppercase tracking-[0.18em]">{experience.role}</p>
                </div>
                <p className="inline-flex items-center gap-2 text-sm text-slate-300">
                  <CalendarDays size={16} className="text-cyan-300" />
                  {experience.period}
                </p>
              </div>

              <p className="mt-6 max-w-4xl whitespace-pre-line text-slate-300 leading-8">{experience.summary}</p>

              <div className="mt-8">
                <div className="rounded-2xl border border-white/8 bg-[#0f1a2b] p-5">
                  <div className="flex items-center gap-2">
                    <Workflow size={16} className="text-cyan-300" />
                    <p className="text-sm font-semibold text-white">주요 업무</p>
                  </div>
                  <div className="mt-4 space-y-3">
                    {experience.whatIDid.map((item) => (
                      <p key={item} className="flex gap-3 text-sm leading-7 text-slate-300">
                        <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-cyan-300" />
                        <span>{item}</span>
                      </p>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-6 grid gap-2 sm:grid-cols-2">
                <p className="sm:col-span-2 text-sm font-semibold text-white">대표 성과</p>
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
