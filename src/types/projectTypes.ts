export interface ProjectImage {
  src: string;
  srcSet?: string;
  sizes?: string;
  alt?: string;
}

export type ProjectImageSource = string | ProjectImage;

export interface Project {
  id: number;
  name: string;
  description: string;
  category: string;
  role?: string;
  featured?: boolean;
  metrics?: string;
  features?: string[];
  impact?: string;
  architecture?: string;
  stateManagement?: string;
  delivery?: string;
  screenLabels?: string[];
  demoUrl?: string;
  repoUrl?: string;
  image?: ProjectImageSource;
  images?: ProjectImageSource[];
  video?: string;
  githubLink?: string;
  playStoreLink?: string;
  appStoreLink?: string;
  techStack?: string[];
}
