export type ProjectStatus = "In active development" | "Completed" | "Deployed";

export type ProjectType = "Graduation Project" | "Team Project" | "Group Project" | "Academic Project" | "Solo Project";

export interface ProjectLinks {
  github?: string;
  demo?: string;
  report?: string; // <-- Proje / Bitirme Raporu (PDF) linki için eklendi

}

export interface ProjectScreenshot {
  src: string;
  alt: string;
  caption?: string;
}

export interface Project {
  slug: string;
  name: string;
  tagline: string;
  summary: string;
  description: string[];
  role: string;
  impact: string;
  type: ProjectType;
  status: ProjectStatus;
  statusNote?: string;
  technologies: string[];
  features: string[];
  architecture?: string[];
  metrics?: { label: string; value: string }[];
  challenges?: { challenge: string; solution: string }[];
  links: ProjectLinks;
  featured: boolean;
  year: string;
}