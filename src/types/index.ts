export interface ProjectTroubleshootingItem {
  title: string;
  problem: string;
  solution: string;
}

export interface ProjectDetailTemplate {
  overview: string;
  implementation: string[];
  impact: string[];
  background?: string;
  headerCallout?: {
    label: string;
    value: string;
  };
  techStack?: string[];
  coreFeatures?: string[];
  secondaryFeatures?: string[];
  troubleshooting?: ProjectTroubleshootingItem[];
}

export interface Project {
  id: string;
  slug: string;
  title: string;
  description: string;
  image: string;
  imageFit?: "cover" | "contain";
  logo?: string;
  demoFirst?: boolean;
  tags: string[];
  category: "web" | "mobile" | "fullstack" | "other";
  outcome: string;
  detail: ProjectDetailTemplate;
  links: {
    github?: string;
    demo?: string;
    external?: {
      label: string;
      href: string;
    };
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
