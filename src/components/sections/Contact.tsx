"use client";

import { motion } from "framer-motion";
import * as Icons from "lucide-react";
import { Mail, type LucideIcon } from "lucide-react";
import SectionContainer from "@/components/ui/SectionContainer";
import Button from "@/components/ui/Button";
import { siteConfig } from "@/config/site";

export default function Contact() {
  return (
    <SectionContainer id="contact" title="Contact" subtitle="단단한 백엔드 설계와 데이터 실무 경험을 연결하여, 사용자에게 가치 있는 제품을 만듭니다.">
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
            서비스 백엔드 개발부터 데이터/AI 파이프라인 구축까지, 안정적인 운영과 성장을 고민하는 개발자입니다. 새로운
            도전에 대해 함께 이야기 나누고 싶다면 언제든 메일로 연락 부탁드립니다.
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
