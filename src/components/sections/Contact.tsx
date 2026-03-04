"use client";

import { motion } from "framer-motion";
import * as Icons from "lucide-react";
import { Mail, type LucideIcon } from "lucide-react";
import SectionContainer from "@/components/ui/SectionContainer";
import Button from "@/components/ui/Button";
import { siteConfig } from "@/config/site";

export default function Contact() {
  return (
    <SectionContainer id="contact" title="Contact" subtitle="실무 적용까지 이어지는 협업을 우선으로 합니다">
      <div className="grid gap-6 md:grid-cols-[1.1fr_0.9fr]">
        <motion.div
          initial={{ opacity: 0, x: -18 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="glass-card rounded-3xl p-7"
        >
          <Mail className="w-12 h-12 text-cyan-300" />
          <p className="mt-5 text-slate-300 leading-relaxed">
            프로젝트 시작 전에 목표, 일정, 품질 기준을 먼저 맞춰 진행 속도를 높입니다. 결과는 사용자의 실제 업무 흐름에서
            검증할 수 있어야 한다고 생각합니다.
          </p>
          <Button href={`mailto:${siteConfig.email}`} variant="primary" className="mt-8">
            메일로 바로 문의하기
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 18 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="grid gap-3"
        >
          {siteConfig.socials.map((social) => {
            const Icon = Icons[social.icon as keyof typeof Icons] as LucideIcon | undefined;
            return (
              Icon ? (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass-line rounded-2xl border border-white/10 p-4 flex items-center gap-4 text-slate-200 hover:text-white hover:bg-white/5 transition-colors"
                >
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-cyan-200">
                    <Icon size={18} />
                  </span>
                  <span className="text-sm font-medium">{social.name}</span>
                </a>
              ) : null
            );
          })}
        </motion.div>
      </div>
    </SectionContainer>
  );
}
