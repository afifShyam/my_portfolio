export interface Project {
  id: number;
  name: string;
  description: string;
  category: string;
  demoUrl?: string;
  repoUrl?: string;
  image?: string;
  video?: string;
  githubLink?: string;
  playStoreLink?: string;
  appStoreLink?: string;
  techStack?: string[];
}
