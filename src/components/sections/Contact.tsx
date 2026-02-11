"use client";

import { motion } from "framer-motion";
import { Mail, Github, Linkedin } from "lucide-react";
import SectionContainer from "@/components/ui/SectionContainer";
import Button from "@/components/ui/Button";
import { siteConfig } from "@/config/site";

const containerVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut" as const,
    },
  },
};

export default function Contact() {
  return (
    <SectionContainer
      id="contact"
      title="Contact"
      subtitle="연락주세요"
    >
      <motion.div
        className="max-w-lg mx-auto text-center"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <Mail className="w-16 h-16 text-blue-500 mx-auto mb-6" />

        <p className="text-zinc-400 mb-8">
          프로젝트에 대해 이야기하고 싶으시다면 언제든지 연락주세요.
        </p>

        <Button
          href={`mailto:${siteConfig.email}`}
          variant="primary"
          className="mb-8"
        >
          이메일 보내기
        </Button>

        <div className="flex items-center justify-center gap-6">
          {siteConfig.links?.github && (
            <motion.a
              href={siteConfig.links.github}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="text-zinc-400 hover:text-white transition-colors"
            >
              <Github className="w-6 h-6" />
            </motion.a>
          )}
          {siteConfig.links?.linkedin && (
            <motion.a
              href={siteConfig.links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="text-zinc-400 hover:text-white transition-colors"
            >
              <Linkedin className="w-6 h-6" />
            </motion.a>
          )}
        </div>
      </motion.div>
    </SectionContainer>
  );
}
