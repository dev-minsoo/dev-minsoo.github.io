import { Project } from "@/types";

export const projects: Project[] = [
  {
    id: "1",
    title: "Task Trail",
    description:
      "작업 우선순위와 상태, 마감 시한을 한 화면에서 관리하도록 정리한 운영 대시보드입니다. 팀 루틴을 점검할 수 있게 이력 추적까지 연결했습니다.",
    image: "/images/projects/project-1.jpg",
    tags: ["React", "TypeScript", "Node.js"],
    category: "fullstack",
    outcome: "상태 확인 루틴을 줄이고 운영 판단 시간을 단축한 작업형 구조 정립",
    links: { github: "https://github.com" },
  },
  {
    id: "2",
    title: "Pomodoro Timer",
    description:
      "업무 리듬을 조절하는 타이머형 생산성 도구입니다. 세션 제어, 알림 정책, 통계 집계까지 넣어 개인 생산성 패턴을 잡아줍니다.",
    image: "/images/projects/project-2.jpg",
    tags: ["Chrome Extension", "JavaScript", "CSS"],
    category: "web",
    outcome: "작업 전환 비용을 낮추고 집중 세션 유지 기준을 쉽게 반복 측정할 수 있게 개선",
    links: { github: "https://github.com" },
  },
  {
    id: "3",
    title: "Point Manager",
    description:
      "적립/차감/이력 조회가 한 화면에서 이어지도록 구성한 포인트 관리 플랫폼입니다. 운영자는 지표를 통해 보상 정책을 빠르게 조정할 수 있습니다.",
    image: "/images/projects/project-3.jpg",
    tags: ["Next.js", "TypeScript", "Tailwind CSS"],
    category: "fullstack",
    outcome: "운영 결정에 필요한 핵심 지표 접근성을 높여 조정 속도를 개선",
    links: { github: "https://github.com" },
  },
  {
    id: "4",
    title: "ClickHouse Practice",
    description:
      "대용량 이벤트 로그를 대상으로 전처리와 쿼리 최적화 실험을 진행한 분석 프로젝트입니다. 병목을 수치화하고, 개선 후보를 선별해 비교했습니다.",
    image: "/images/projects/project-4.jpg",
    tags: ["ClickHouse", "SQL", "Data Engineering"],
    category: "other",
    outcome: "병목 진단 기준을 정리해 비용 중심 쿼리 개선 의사결정 루틴을 정착",
    links: { github: "https://github.com" },
  },
  {
    id: "5",
    title: "55h",
    description:
      "주간 업무량을 정리해 과도한 집중 구간을 눈으로 확인할 수 있게 만든 근무 분석 도구입니다. 개인 생산성 점검과 일정 조정에 같이 쓰입니다.",
    image: "/images/projects/project-5.jpg",
    tags: ["TypeScript", "React", "Chart.js"],
    category: "web",
    outcome: "근무 패턴의 편차를 한 번에 보여주는 기본 지표 체계를 갖춤",
    links: { github: "https://github.com" },
  },
  {
    id: "6",
    title: "Homebrew Tap",
    description:
      "팀 공용 CLI 도구 배포를 패키지화하고 버전 정책을 정리한 저장소형 운영 정리 작업입니다. 반복 배포에서 생기는 시행착오를 줄였습니다.",
    image: "/images/projects/project-6.jpg",
    tags: ["Shell", "Ruby", "CI/CD"],
    category: "other",
    outcome: "릴리즈 절차와 가이드를 정렬해 재현 가능한 배포 과정을 만들었습니다",
    links: { github: "https://github.com" },
  },
];
