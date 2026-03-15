import { Project } from "@/types";

export const projects: Project[] = [
  {
    id: "1",
    slug: "fastvote",
    title: "FastVote",
    description:
      "회원가입 없이 투표를 만들고 링크로 바로 공유할 수 있는 실시간 익명 투표 서비스입니다.",
    image: "/images/projects/fastvote-banner.svg",
    imageFit: "contain",
    logo: "/images/projects/fastvote-favicon.svg",
    demoFirst: true,
    tags: ["Next.js", "FastAPI", "Redis"],
    category: "fullstack",
    outcome: "빠르게 의견을 모아야 하는 상황에서 참여 장벽을 낮추는 데 집중한 프로젝트",
    detail: {
      overview:
        "친구 모임이나 팀 안에서 빠르게 결정을 내려야 할 때, 누구나 바로 투표를 만들고 링크로 공유할 수 있도록 구성한 서비스입니다. 생성부터 참여, 결과 확인까지가 한 흐름으로 자연스럽게 이어지는 경험에 집중했습니다.\n\n짧게 쓰고 끝나는 투표라면 복잡한 가입 절차나 긴 설정 과정 없이 바로 참여할 수 있어야 한다고 생각했습니다. 특히 메뉴를 정하거나 팀 안에서 빠르게 의견을 모으는 상황에서는, 기능의 수보다 얼마나 빨리 만들고 공유하고 참여할 수 있는지가 더 중요하다고 봤습니다.",
      background:
        "친구 모임이나 팀 안에서 빠르게 결정을 내려야 할 때, 누구나 바로 투표를 만들고 링크로 공유할 수 있도록 구성한 서비스입니다. 생성부터 참여, 결과 확인까지가 한 흐름으로 자연스럽게 이어지는 경험에 집중했습니다.\n\n짧게 쓰고 끝나는 투표라면 복잡한 가입 절차나 긴 설정 과정 없이 바로 참여할 수 있어야 한다고 생각했습니다. 특히 메뉴를 정하거나 팀 안에서 빠르게 의견을 모으는 상황에서는, 기능의 수보다 얼마나 빨리 만들고 공유하고 참여할 수 있는지가 더 중요하다고 봤습니다.",
      techStack: ["Next.js", "FastAPI", "Redis"],
      coreFeatures: [
        "익명 투표방 생성",
        "UUID 링크 기반 공유",
        "WebSocket 기반 실시간 결과 반영",
        "공개 / 비공개 투표",
      ],
      secondaryFeatures: [
        "비밀번호 보호 투표",
        "복수 선택 투표",
        "익명 댓글",
        "내가 만든 투표 목록 확인",
        "한국어 / 영어 지원",
        "다크 모드 지원",
      ],
      troubleshooting: [
        {
          title: "익명 참여는 유지하면서 중복 투표를 막아야 했음",
          problem:
            "로그인 절차를 넣고 싶지는 않았지만, 아무 제어 없이 열어두면 같은 사용자가 반복해서 투표할 수 있는 문제가 있었습니다.",
          solution:
            "링크 중심 구조는 유지한 채 fingerprint 기반 식별 방식을 적용해, 익명성을 크게 해치지 않으면서도 중복 투표를 제어했습니다.",
        },
        {
          title: "짧게 열리는 투표에 무거운 저장 구조가 맞지 않았음",
          problem:
            "이 서비스의 데이터는 오래 보관되기보다 짧게 생성되고 빠르게 사라지는 성격이 강해서, 일반적인 장기 보관 중심 구조는 과하다고 판단했습니다.",
          solution:
            "투표방, 결과, 댓글 데이터를 Redis에 저장하고 TTL로 자동 만료되게 구성해, 정리 작업을 줄이면서도 서비스 목적에 맞는 가벼운 운영 구조를 유지했습니다.",
        },
      ],
      implementation: [
        "회원가입 없이 바로 참여할 수 있도록 UUID 링크 기반 접근 방식을 사용했고, 익명 참여를 유지하면서도 fingerprint 기반 식별로 중복 투표를 제어했습니다.",
        "투표 결과는 WebSocket으로 실시간 반영되도록 구성해, 새로고침 없이도 결과 변화를 바로 확인할 수 있게 했습니다.",
        "투표방, 결과, 댓글 데이터는 Redis에 저장하고 TTL로 자동 만료되게 설계해, 짧게 생성되고 빠르게 소멸되는 서비스 특성에 맞는 가벼운 구조를 만들었습니다.",
      ],
      impact: [
        "복잡한 가입 절차 없이 링크만으로 바로 참여할 수 있어, 빠른 의견 수렴이 필요한 상황에서 진입 장벽을 낮췄습니다.",
        "공개·비공개, 비밀번호 보호, 복수 선택 같은 옵션을 두어 가벼운 커뮤니티 사용부터 팀 내부 투표까지 대응할 수 있게 했습니다.",
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
      "흩어져 있는 `~/.ssh/config` 환경을 검색 가능하고 키보드 중심으로 다룰 수 있게 만든 터미널 기반 SSH 호스트 매니저입니다.",
    image: "/images/projects/55h-banner.svg",
    imageFit: "contain",
    tags: ["Go", "TUI", "SSH"],
    category: "other",
    outcome: "SSH 호스트 관리에서 반복되던 탐색과 실행 작업을 하나의 TUI 흐름으로 묶은 프로젝트",
    detail: {
      overview:
        "`55h`는 SSH 호스트를 탐색하고, 검색하고, 테스트하고, 추가하고, 바로 접속할 수 있도록 만든 Go 기반 터미널 UI 도구입니다.",
      background:
        "`55h`는 SSH 호스트 관리에서 반복적으로 발생하는 불편을 줄이는 데 집중한 프로젝트입니다. 설정 파일을 직접 열어 별칭을 찾고 별도로 `ssh` 명령을 실행하는 대신, 하나의 TUI 안에서 호스트 목록 확인, 상세 정보 조회, 검색, 실행까지 이어지는 흐름을 제공하도록 구성했습니다.",
      techStack: ["Go", "tview", "tcell"],
      coreFeatures: [
        "`~/.ssh/config`와 `Include` 지시자를 재귀적으로 따라가며 파싱",
        "SSH 호스트 목록과 상세 정보를 2패널 TUI로 제공",
        "alias, hostname, user, port 기준의 퍼지 검색 지원",
        "선택한 호스트에 대해 시스템 `ssh` 바이너리로 즉시 접속",
      ],
      secondaryFeatures: [
        "짧은 타임아웃 기반의 인앱 SSH 연결 테스트",
        "설정 파일 내 `Host` 블록 삭제",
        "`55h add ssh ...` 형태의 CLI로 새 호스트 추가",
        "사용자 설정 디렉터리에 테마 설정과 마지막 접속 시간 저장",
      ],
      troubleshooting: [
        {
          title: "흩어진 SSH 설정을 한 흐름에서 다루기 어려웠음",
          problem:
            "기본 설정 파일만 읽는 방식으로는 실제 사용 중인 호스트 구성을 온전히 다루기 어려웠고, `Include`로 나뉜 파일까지 함께 추적해야 했습니다.",
          solution:
            "`Host` 블록을 읽고 상대 경로와 glob 패턴 기반 `Include`를 처리하는 SSH 설정 파서를 직접 구현해, 기본 파일과 include된 파일의 항목을 함께 탐색할 수 있게 했습니다.",
        },
        {
          title: "TUI에서 바로 접속할 때 터미널 제어가 자연스러워야 했음",
          problem:
            "도구 안에서 접속 명령을 실행하더라도 별도 래퍼 프로세스가 남으면 터미널 제어가 어색해질 수 있었습니다.",
          solution:
            "접속 시 `syscall.Exec`를 사용해 현재 프로세스를 `ssh` 세션으로 치환함으로써, TUI에서 선택한 뒤 바로 자연스럽게 터미널 세션으로 이어지도록 구성했습니다.",
        },
      ],
      implementation: [
        "호스트 목록과 상세 패널을 함께 보여줘 탐색 중에도 바로 실행할 수 있게 했습니다.",
        "접속, 연결 테스트, 삭제, 추가 같은 자주 쓰는 작업을 키보드 중심으로 처리하도록 설계했습니다.",
        "`55h add ssh ...` CLI와 Homebrew 설치 경로까지 함께 정리해 실제 사용 흐름을 완성했습니다.",
      ],
      impact: [
        "SSH 작업하다가 설정 파일과 터미널 사이를 오가는 횟수를 줄였습니다.",
        "개인용 유틸리티에 그치지 않고 설치해 바로 사용할 수 있는 형태까지 정리했습니다.",
      ],
    },
    links: { github: "https://github.com/dev-minsoo/55h" },
  },
  {
    id: "3",
    slug: "task-trail",
    title: "TaskTrail",
    description:
      "날짜 기반 할 일 관리, 칸반 이동, 보관 작업 복구, 간단한 처리량 리포트를 하나의 흐름으로 묶은 개인용 태스크 관리 앱입니다.",
    image: "/images/projects/task-trail-banner.svg",
    imageFit: "contain",
    tags: ["Next.js", "Supabase", "OpenAI"],
    category: "fullstack",
    outcome: "일별 기록과 진행 중인 작업, 완료 이력을 하나의 모델로 관리할 수 있게 만든 프로젝트",
    detail: {
      overview:
        "Task Trail은 일별 할 일과 진행 중인 작업, 완료 이력까지 하나의 모델로 관리할 수 있도록 만든 Next.js · Supabase 기반 태스크 관리 프로젝트입니다.",
      background:
        "개인용 생산성 도구를 쓰다 보면 날짜별 체크리스트와 장기 작업 관리를 서로 다른 도구에서 처리하게 되는 경우가 많았습니다. Task Trail은 이 둘을 분리하지 않고 같은 데이터 모델 안에서 다루기 위해 만들었습니다. 빠르게 기록하고, 진행 상태를 옮기고, 나중에 다시 꺼내 보고, 작업 이력을 바탕으로 회고할 수 있는 흐름을 하나의 제품 경험으로 연결하는 데 집중했습니다.",
      techStack: ["Next.js", "Supabase", "OpenAI"],
      coreFeatures: [
        "날짜 기반 태스크 입력",
        "리스트 뷰와 드래그 앤 드롭 칸반 뷰 전환",
        "보관 작업 검색, 필터링, 페이지네이션, 복구",
        "7일 / 30일 기준 생성량과 완료량 리포트",
      ],
      secondaryFeatures: [
        "기본 상태 자동 생성 및 상태명 정규화",
        "자유 입력 텍스트를 태스크 후보로 나누는 선택형 AI 파싱",
        "시맨틱 토큰 기반 라이트/다크 테마 지원",
      ],
      troubleshooting: [
        {
          title: "현재 작업과 이력을 분리하지 않고 함께 다뤄야 했음",
          problem:
            "활성 태스크 화면과 회고용 리포트를 따로 만들면 구조가 복잡해지고, 개인용 제품치고는 관리 비용이 커질 수 있었습니다.",
          solution:
            "태스크에 `started_at`, `completed_at`, `archived_at` 같은 시간 메타데이터를 함께 저장해, 현재 작업과 이력 기반 리포트를 별도 엔티티로 나누지 않고도 처리할 수 있게 구성했습니다.",
        },
        {
          title: "AI 입력 보조가 핵심 흐름을 방해하면 안 됐음",
          problem:
            "AI 파싱은 편의 기능이지만, 응답 실패나 설정 문제 때문에 기본 태스크 입력 자체가 막히면 오히려 제품 경험이 나빠질 수 있었습니다.",
          solution:
            "AI 기능은 입력 보조 역할로만 두고, 서버 라우트에서 origin 검사, 입력 길이 제한, 간단한 rate limiting, fallback 동작을 넣어 실패가 전체 흐름을 막지 않도록 설계했습니다.",
        },
      ],
      implementation: [
        "Inbox, In Progress, Done 흐름을 기본으로 두고 날짜별로 작업을 쌓아 관리할 수 있게 했습니다.",
        "칸반 보드와 아카이브 검색·복원 기능을 제공해 현재 작업과 지난 작업을 함께 관리할 수 있게 했습니다.",
        "7일·30일 처리량 리포트와 AI 파싱 옵션을 더해 회고와 정리까지 자연스럽게 이어지도록 했습니다.",
      ],
      impact: [
        "체크리스트 앱과 칸반 앱을 따로 왔다 갔다 하지 않게 했습니다.",
        "작업 기록을 남기는 데서 끝나지 않고, 나중에 다시 찾아보고 복원할 수 있도록 만들었습니다.",
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
        "TabNova는 탭이 많아졌을 때 Chrome의 기본 가로 탭 바가 불편하다고 느껴 만든 확장 프로그램입니다. 사이드패널 안에서 탭을 세로로 보고, 검색하고, 정렬하고, 바로 전환할 수 있도록 구성했습니다.",
      implementation: [
        "현재 창의 열린 탭을 실시간으로 반영하는 세로 리스트를 만들었습니다.",
        "드래그 앤 드롭 정렬, hover 기반 빠른 닫기, 실시간 검색을 지원해 탭 정리 흐름이 끊기지 않도록 했습니다.",
        "북마크, 방문 기록, 설정 뷰와 `Alt+B` 단축키도 함께 제공했습니다.",
      ],
      impact: [
        "탭이 많을 때 어떤 탭이 어디 있는지 찾는 시간이 줄었습니다.",
        "탭 관리 자체를 하나의 제품처럼 설계하고 다듬어 본 프로젝트입니다.",
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
        "Pomodoro Timer Extension은 MV3 환경에서 자주 깨지는 팝업 기반 타이머 문제를 해결하기 위해 만든 익스텐션입니다. 상태는 백그라운드에 두고, 팝업은 그 상태를 보여주고 제어하는 역할만 담당하도록 분리했습니다.",
      implementation: [
        "백그라운드 서비스 워커를 단일 상태 소스로 두고 `chrome.alarms`로 세션 전환을 관리했습니다.",
        "Popup, Options, Offscreen 런타임을 분리해 UI, 설정, 오디오 재생 책임이 섞이지 않도록 했습니다.",
        "알림, 사운드 미리보기, 배지 카운트다운, 자동 전환 같은 옵션도 함께 제공했습니다.",
      ],
      impact: [
        "팝업을 닫으면 타이머가 흔들리던 MV3 환경의 한계를 안정적으로 피할 수 있습니다.",
        "브라우저 안에서 바로 사용할 수 있는 집중 도구 형태로 정리했습니다.",
      ],
    },
    links: { github: "https://github.com/dev-minsoo/pomodoro-timer-extension" },
  },
];

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}
