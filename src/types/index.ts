export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  category: "web" | "mobile" | "fullstack" | "other";
  links: {
    github?: string;
    demo?: string;
  };
}

export interface Skill {
  name: string;
  icon: string;
}

export interface SkillCategory {
  title: string;
  skills: Skill[];
}

export interface Social {
  name: string;
  url: string;
  icon: string;
}

export interface SiteConfig {
  name: string;
  email: string;
  tagline: string;
  description: string;
  bio: string;
  highlights: string[];
  socials: Social[];
  links?: {
    github?: string;
    linkedin?: string;
  };
}
