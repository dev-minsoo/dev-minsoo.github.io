import { SkillCategory } from "@/types";

export const skillCategories: SkillCategory[] = [
  {
    title: "Frontend",
    skills: [
      { name: "React", icon: "Code2", level: 86 },
      { name: "TypeScript", icon: "FileCode", level: 82 },
      { name: "Next.js", icon: "Zap", level: 88 },
      { name: "Tailwind CSS", icon: "Palette", level: 80 },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node.js", icon: "Server", level: 86 },
      { name: "PostgreSQL", icon: "Database", level: 78 },
      { name: "ClickHouse", icon: "BarChart3", level: 74 },
      { name: "GraphQL", icon: "Network", level: 70 },
    ],
  },
  {
    title: "Tools & DevOps",
    skills: [
      { name: "Git", icon: "GitBranch", level: 90 },
      { name: "Docker", icon: "Container", level: 68 },
      { name: "GitHub Actions", icon: "Play", level: 72 },
      { name: "VS Code", icon: "Code", level: 85 },
    ],
  },
];
