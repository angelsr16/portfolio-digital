export interface Project {
  title: string;
  description: string;
  images: string[];
  currentImageIndex: number;
  techList: TechItem[];
  githubLink: string;
}

export interface TechItem {
  icon: string;
  title: string;
}
