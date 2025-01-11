export interface Project {
  id: number;
  name: string;
  description: string;
  category: string;
  demoUrl?: string;
  repoUrl?: string;
  techStack?: string[];
}
