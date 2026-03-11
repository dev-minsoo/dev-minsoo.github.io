import { Project } from "@/types";

export const projects: Project[] = [
  {
    id: "1",
    slug: "fastvote",
    title: "FastVote",
    description:
      "로그인 없이 투표 링크를 만들고, WebSocket 기반으로 결과를 실시간 반영하는 익명 투표 플랫폼입니다.",
    image: "/images/projects/fastvote-og.png",
    logo: "/images/projects/fastvote-favicon.svg",
    demoFirst: true,
    tags: ["Next.js", "FastAPI", "Redis"],
    category: "fullstack",
    outcome: "투표 생성부터 공유와 결과 확인까지를 최소 단계로 줄여 즉시 의견 수집이 가능한 흐름을 만든 작업",
    detail: {
      overview:
        "fastvote는 지금 당장 의견을 모아야 하는 상황을 위한 실시간 익명 투표 플랫폼입니다. 로그인 없이 링크 하나로 생성과 공유, 참여, 결과 확인이 이어지도록 만드는 데 집중했습니다.",
      implementation: [
        "회원가입 없이 UUID 기반 링크만으로 바로 투표를 만들고 공유할 수 있는 생성 흐름을 설계했습니다.",
        "WebSocket과 Redis TTL을 활용해 실시간 결과 반영과 투표 종료 시점 관리를 단순하게 구성했습니다.",
        "공개 범위, 비밀번호 보호, 익명 댓글, 복수 선택, 다국어 지원을 넣어 커뮤니티 사용 범위를 넓혔습니다.",
      ],
      impact: [
        "빠른 합의가 필요한 상황에서 투표 생성부터 결과 확인까지의 단계를 크게 줄였습니다.",
        "행사, 회의, 커뮤니티처럼 즉시성이 중요한 장면에 맞는 가벼운 의사결정 도구로 정리했습니다.",
      ],
    },
    links: {
      github: "https://github.com/geekgoing/fastvote",
      demo: "https://fastvote.geekgoing.org/",
    },
  },
  {
    id: "2",
    slug: "55h",
    title: "55h",
    description:
      "`~/.ssh/config`와 `Include` 파일을 파싱해 검색, 접속, 테스트, 삭제를 한 화면에서 처리하는 SSH TUI입니다.",
    image: "/images/projects/55h-banner.svg",
    imageFit: "contain",
    tags: ["Go", "TUI", "SSH"],
    category: "other",
    outcome: "SSH 호스트 운영 작업을 터미널 안에서 끝내도록 줄여 접속과 관리 전환 비용을 낮춘 작업",
    detail: {
      overview:
        "55h는 SSH 호스트 운영을 더 빨리 처리하기 위한 터미널 중심 도구입니다. `~/.ssh/config`와 `Include` 대상을 읽고, 탐색부터 접속과 정리까지를 하나의 TUI 흐름으로 압축했습니다.",
      implementation: [
        "호스트 리스트와 상세 패널을 동시에 보여줘 탐색과 확인을 분리하지 않는 구조를 만들었습니다.",
        "검색, 접속, 연결 테스트, 삭제, 테마 변경 같은 자주 쓰는 액션을 키보드 중심 흐름으로 묶었습니다.",
        "Homebrew 설치 경로와 `55h add ssh ...` CLI를 제공해 실제 배포와 재사용까지 고려했습니다.",
      ],
      impact: [
        "SSH 접속 전후의 반복 관리 작업을 줄여 터미널 안에서 작업 맥락을 유지할 수 있게 했습니다.",
        "개인 도구 수준을 넘어 설치와 배포가 가능한 제품 형태로 정리했습니다.",
      ],
    },
    links: { github: "https://github.com/dev-minsoo/55h" },
  },
  {
    id: "3",
    slug: "task-trail",
    title: "Task Trail",
    description:
      "날짜별 체크리스트, 칸반 상태 이동, 아카이브 복원, 처리량 리포트를 한 흐름으로 묶은 작업 관리 앱입니다.",
    image: "/images/projects/task-trail.svg",
    tags: ["Next.js", "Supabase", "Tailwind CSS"],
    category: "fullstack",
    outcome: "체크리스트와 칸반, 이력 조회를 한 흐름으로 묶어 개인 실행 루틴을 끊기지 않게 만든 작업",
    detail: {
      overview:
        "Task Trail은 개인 작업을 날짜 단위로 바라보면서도 칸반 보드와 아카이브 흐름을 같이 유지할 수 있게 만든 작업 관리 앱입니다. 단순 메모가 아니라 오늘 처리할 일, 진행 중인 일, 끝난 일을 한 시스템 안에서 이어지게 두는 데 초점을 맞췄습니다.",
      implementation: [
        "Inbox / In Progress / Done 상태 흐름을 기본 구조로 두고 날짜 기반 체크리스트를 함께 구성했습니다.",
        "드래그 앤 드롭 칸반 보드와 아카이브 검색을 넣어 현재 작업과 과거 작업을 한 제품 안에서 자연스럽게 오갈 수 있게 했습니다.",
        "7일 / 30일 처리량 리포트와 AI 작업 제안 옵션을 추가해 기록 이후의 다음 액션까지 연결되도록 설계했습니다.",
      ],
      impact: [
        "하루 단위 실행과 장기 흐름 추적을 분리하지 않아 작업 문맥이 덜 끊기게 만들었습니다.",
        "체크리스트 앱과 칸반 앱 사이를 오가던 비용을 줄여 개인 생산성 도구로서 완성도를 높였습니다.",
      ],
    },
    links: { github: "https://github.com/dev-minsoo/task-trail" },
  },
  {
    id: "4",
    slug: "tabnova",
    title: "TabNova",
    description:
      "Chrome 사이드패널에서 탭을 실시간으로 동기화하고, 드래그 정렬과 검색을 지원하는 세로형 탭 매니저입니다.",
    image: "/images/projects/tabnova.svg",
    logo: "/images/projects/tabnova-logo-128.png",
    tags: ["React", "TypeScript", "Chrome Extension"],
    category: "web",
    outcome: "세로형 탭 탐색과 검색, 재정렬 흐름을 하나의 사이드바 경험으로 묶어 브라우저 전환 비용을 낮춘 작업",
    detail: {
      overview:
        "TabNova는 Chrome 안에서 탭을 더 직관적으로 다루기 위한 세로형 탭 매니저입니다. 많은 탭을 한눈에 보고 바로 전환하거나 정렬할 수 있게 하면서, 검색과 단축키 접근성까지 함께 챙기는 데 초점을 뒀습니다.",
      implementation: [
        "Chrome 사이드패널 안에서 열린 탭을 세로 레이아웃으로 보여주고 클릭 한 번으로 즉시 전환할 수 있게 구성했습니다.",
        "드래그 앤 드롭 정렬과 hover 기반 빠른 닫기 동작을 넣어 탭 정리 흐름이 끊기지 않게 설계했습니다.",
        "실시간 필터링 검색과 `Alt+B` 단축키를 지원해 많은 탭을 띄운 상태에서도 원하는 탭에 빠르게 도달할 수 있게 했습니다.",
      ],
      impact: [
        "기본 탭 바보다 더 많은 정보를 한 화면에 보여줘 탭 탐색과 전환 속도를 높였습니다.",
        "브라우저 탭 관리 문제를 단순 보조 기능이 아니라 별도 제품 경험으로 다룰 수 있음을 정리한 작업입니다.",
      ],
    },
    links: { github: "https://github.com/dev-minsoo/tabnova" },
  },
  {
    id: "5",
    slug: "pomodoro-timer-extension",
    title: "Pomodoro Timer Extension",
    description:
      "서비스 워커 상태 머신과 `chrome.alarms`로 팝업이 닫혀도 세션이 유지되는 Chrome MV3 타이머 익스텐션입니다.",
    image: "/images/projects/pomodoro-timer-extension.svg",
    logo: "/images/projects/pomodoro-icon-128.png",
    tags: ["React", "TypeScript", "Chrome Extension"],
    category: "web",
    outcome: "팝업 생명주기에 흔들리지 않는 타이머 상태 관리를 구현해 브라우저 안 집중 루틴의 신뢰성을 높인 작업",
    detail: {
      overview:
        "Pomodoro Timer Extension은 팝업이 닫혀도 안정적으로 이어지는 타이머 경험을 목표로 만든 Chrome MV3 익스텐션입니다. 포커스 세션 흐름, 설정, 알림을 브라우저 환경에 맞게 분리했습니다.",
      implementation: [
        "Background Service Worker를 단일 상태 소스로 두고 `chrome.alarms`로 세션 종료와 복구를 관리했습니다.",
        "Popup, Options, Offscreen runtime을 분리해 UI, 설정, 오디오 재생 책임이 섞이지 않게 구성했습니다.",
        "알림, 사운드, 배지, 자동 전환 같은 실제 사용 옵션을 넣어 일상 사용 가능한 확장 프로그램으로 만들었습니다.",
      ],
      impact: [
        "팝업 생명주기에 의해 타이머가 흔들리는 전형적인 MV3 문제를 피하고 더 신뢰할 수 있는 집중 도구를 구현했습니다.",
        "브라우저 내부 작업 흐름을 벗어나지 않고 집중 세션을 유지할 수 있게 만들었습니다.",
      ],
    },
    links: { github: "https://github.com/dev-minsoo/pomodoro-timer-extension" },
  },
];

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}
