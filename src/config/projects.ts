import { Project } from "@/types";

export const projects: Project[] = [
  {
    id: "1",
    slug: "fastvote",
    title: "FastVote",
    description:
      "로그인 없이 바로 투표를 만들고 링크를 공유할 수 있는 실시간 익명 투표 서비스입니다.",
    image: "/images/projects/fastvote-banner.svg",
    imageFit: "contain",
    logo: "/images/projects/fastvote-favicon.svg",
    demoFirst: true,
    tags: ["Next.js", "FastAPI", "Redis"],
    category: "fullstack",
    outcome: "빨리 의견을 모아야 하는 상황에서 생성부터 공유, 참여, 결과 확인까지를 짧게 만든 작업",
    detail: {
      overview:
        "FastVote는 빨리 결정을 내려야 하는 상황에서 바로 쓸 수 있는 익명 투표 서비스입니다. 회원가입 없이 방을 만들고 링크만 공유하면 참여와 결과 확인까지 바로 이어지도록 만들었습니다.",
      implementation: [
        "UUID 기반 링크로 로그인 없이도 바로 투표를 만들고 공유할 수 있게 했습니다.",
        "Redis TTL과 WebSocket을 써서 짧게 열리는 투표도 실시간으로 결과가 반영되게 구성했습니다.",
        "공개/비공개, 비밀번호 보호, 복수 선택, 익명 댓글, 한영 지원 같은 옵션을 넣어 실제로 쓰기 좋게 다듬었습니다.",
      ],
      impact: [
        "회의나 행사처럼 빨리 의견을 모아야 하는 상황에서 바로 쓸 수 있게 했습니다.",
        "가입이나 설치 없이 링크 하나로 참여할 수 있어서 진입 장벽이 낮습니다.",
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
      "`~/.ssh/config`와 `Include` 파일을 읽어 검색, 접속, 테스트, 삭제, 추가를 한 화면에서 처리하는 SSH TUI 도구입니다.",
    image: "/images/projects/55h-banner.svg",
    imageFit: "contain",
    tags: ["Go", "TUI", "SSH"],
    category: "other",
    outcome: "SSH 호스트 관리할 때 반복되던 확인과 실행 작업을 터미널 안으로 모은 작업",
    detail: {
      overview:
        "55h는 SSH 호스트 관리 작업을 더 빠르게 하려고 만든 터미널 도구입니다. `~/.ssh/config`와 `Include` 대상까지 읽어서, 찾고 접속하고 정리하는 흐름을 TUI 안에서 끝내도록 만들었습니다.",
      implementation: [
        "호스트 목록과 상세 패널을 같이 보여줘서 탐색하다가 바로 실행할 수 있게 했습니다.",
        "접속, 연결 테스트, 삭제, 추가 같은 자주 쓰는 작업을 키보드 중심으로 처리하게 만들었습니다.",
        "`55h add ssh ...` CLI와 Homebrew 설치 경로도 같이 정리했습니다.",
      ],
      impact: [
        "SSH 작업하다가 설정 파일과 터미널 사이를 오가는 횟수를 줄였습니다.",
        "개인용 유틸리티에서 끝나지 않고 설치해서 쓸 수 있는 형태까지 정리했습니다.",
      ],
    },
    links: { github: "https://github.com/dev-minsoo/55h" },
  },
  {
    id: "3",
    slug: "task-trail",
    title: "TaskTrail",
    description:
      "하루 할 일 정리, 칸반 이동, 아카이브 복원, 처리량 확인을 한 흐름으로 묶은 개인 작업 관리 앱입니다.",
    image: "/images/projects/task-trail-banner.svg",
    imageFit: "contain",
    tags: ["Next.js", "Supabase", "OpenAI"],
    category: "fullstack",
    outcome: "오늘 할 일, 진행 중인 일, 지난 기록을 따로 보지 않아도 되게 만든 작업",
    detail: {
      overview:
        "TaskTrail은 날짜별 할 일 기록, 상태 이동, 아카이브, 리포트를 한곳에서 보려고 만든 작업 관리 앱입니다. 단순 메모보다는 실제로 일을 진행하는 흐름에 맞추는 데 더 신경 썼습니다.",
      implementation: [
        "Inbox, In Progress, Done 흐름을 기본으로 두고 날짜별로 작업을 쌓을 수 있게 했습니다.",
        "칸반 보드와 아카이브 검색·복원 기능을 넣어서 현재 작업과 지난 작업을 같이 관리할 수 있게 했습니다.",
        "7일·30일 처리량 리포트와 AI 파싱 옵션도 붙여서 회고와 정리까지 이어지게 했습니다.",
      ],
      impact: [
        "체크리스트 앱과 칸반 앱을 따로 왔다 갔다 하지 않게 했습니다.",
        "작업 기록만 남기는 게 아니라 나중에 다시 찾아보고 복원할 수 있게 만들었습니다.",
      ],
    },
    links: { github: "https://github.com/dev-minsoo/task-trail" },
  },
  {
    id: "4",
    slug: "tabnova",
    title: "TabNova",
    description:
      "Chrome 사이드패널에서 탭을 세로로 보고, 검색하고, 정렬하고, 바로 전환할 수 있게 만든 탭 매니저입니다.",
    image: "/images/projects/tabnova-banner.png",
    imageFit: "contain",
    logo: "/images/projects/tabnova-logo-128.png",
    tags: ["React", "TypeScript", "Chrome Extension"],
    category: "web",
    outcome: "탭이 많아졌을 때 기본 탭 바 대신 더 보기 쉬운 흐름을 만든 작업",
    detail: {
      overview:
        "TabNova는 탭이 많아졌을 때 Chrome 기본 가로 탭 바가 너무 답답해서 만든 확장입니다. 사이드패널 안에서 탭을 세로로 보고, 검색하고, 정렬하고, 바로 전환할 수 있게 했습니다.",
      implementation: [
        "현재 창의 열린 탭을 실시간으로 반영하는 세로 리스트를 만들었습니다.",
        "드래그 앤 드롭 정렬, hover 기반 빠른 닫기, 실시간 검색을 넣어 탭 정리 흐름이 끊기지 않게 했습니다.",
        "북마크, 방문 기록, 설정 뷰와 `Alt+B` 단축키도 같이 넣었습니다.",
      ],
      impact: [
        "탭이 많을 때 어떤 탭이 어디 있는지 찾는 시간이 줄었습니다.",
        "탭 관리 자체를 별도 제품처럼 다뤄본 프로젝트입니다.",
      ],
    },
    links: { github: "https://github.com/dev-minsoo/tabnova" },
  },
  {
    id: "5",
    slug: "pomodoro-timer-extension",
    title: "Pomodoro Timer Extension",
    description:
      "팝업이 닫혀도 타이머가 계속 돌아가도록 만든 Chrome MV3 포모도로 익스텐션입니다.",
    image: "/images/projects/pomodoro-banner.png",
    imageFit: "contain",
    logo: "/images/projects/pomodoro-icon-128.png",
    tags: ["React", "TypeScript", "Chrome Extension"],
    category: "web",
    outcome: "팝업을 닫아도 세션이 끊기지 않는 타이머 구조를 만든 작업",
    detail: {
      overview:
        "Pomodoro Timer Extension은 MV3에서 자주 깨지는 팝업 기반 타이머 문제를 해결하려고 만든 익스텐션입니다. 상태는 백그라운드에 두고, 팝업은 그 상태를 보여주고 제어하는 역할만 하게 나눴습니다.",
      implementation: [
        "백그라운드 서비스 워커를 단일 상태 소스로 두고 `chrome.alarms`로 세션 전환을 관리했습니다.",
        "Popup, Options, Offscreen 런타임을 분리해서 UI와 설정, 오디오 재생 책임이 섞이지 않게 했습니다.",
        "알림, 사운드 미리보기, 배지 카운트다운, 자동 전환 같은 옵션도 넣었습니다.",
      ],
      impact: [
        "팝업을 닫으면 타이머가 흔들리는 MV3 문제를 피할 수 있습니다.",
        "브라우저 안에서 바로 쓰기 좋은 집중 도구로 정리했습니다.",
      ],
    },
    links: { github: "https://github.com/dev-minsoo/pomodoro-timer-extension" },
  },
];

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}
