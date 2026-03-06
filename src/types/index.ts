export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  category: "web" | "mobile" | "fullstack" | "other";
  outcome?: string;
  links: {
    github?: string;
    demo?: string;
  };
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
  introduction?: string[];
  highlights: string[];
  socials: Social[];
  links?: {
    github?: string;
    blog?: string;
  };
}
