export interface Project {
  title: string;
  description: string;
  images: string[];
  currentImageIndex: number;
  techList: TechItem[];
  githubLink: string;
  categories: number[];
  websiteLink?: string;
  websiteTitle?: string;
}

export interface TechItem {
  icon: string;
  title: string;
}
