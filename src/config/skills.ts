import { SkillCategory } from "@/types";

export const skillCategories: SkillCategory[] = [
  {
    title: "Frontend",
    skills: [
      { name: "React", icon: "Code2" },
      { name: "TypeScript", icon: "FileCode" },
      { name: "Next.js", icon: "Zap" },
      { name: "Tailwind CSS", icon: "Palette" },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node.js", icon: "Server" },
      { name: "PostgreSQL", icon: "Database" },
      { name: "ClickHouse", icon: "BarChart3" },
      { name: "GraphQL", icon: "Network" },
    ],
  },
  {
    title: "Tools & DevOps",
    skills: [
      { name: "Git", icon: "GitBranch" },
      { name: "Docker", icon: "Container" },
      { name: "GitHub Actions", icon: "Play" },
      { name: "VS Code", icon: "Code" },
    ],
  },
];
