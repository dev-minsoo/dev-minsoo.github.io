"use client";

import { motion } from "framer-motion";
import Button from "@/components/ui/Button";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" as const },
  },
};

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated gradient orb background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-indigo-500/20 rounded-full blur-3xl animate-pulse" />
      </div>

      <motion.div
        className="relative z-10 max-w-4xl mx-auto px-6 text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1
          className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-blue-500 via-indigo-500 to-emerald-500 bg-clip-text text-transparent"
          variants={itemVariants}
        >
          민수
        </motion.h1>

        <motion.p
          className="text-xl md:text-2xl text-zinc-400 mt-4"
          variants={itemVariants}
        >
          풀스택 개발자
        </motion.p>

        <motion.p
          className="text-zinc-500 max-w-2xl mx-auto mt-6 text-center"
          variants={itemVariants}
        >
          사용자 중심의 웹 애플리케이션을 만듭니다. 클린 코드와 최적화된 성능을
          추구하며, 끊임없이 배우고 성장하는 개발자입니다.
        </motion.p>

        <motion.div
          className="flex items-center justify-center gap-4 mt-8"
          variants={itemVariants}
        >
          <Button href="#projects" variant="primary">
            프로젝트 보기
          </Button>
          <Button href="#contact" variant="secondary">
            연락하기
          </Button>
        </motion.div>
      </motion.div>
    </section>
  );
}
