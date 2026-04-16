export type ProjectCategory =
  | 'Full Stack'
  | 'Frontend'
  | 'Backend'
  | 'AI'
  | 'SaaS'
  | 'DevTools'
  | 'Performance'
  | 'Realtime';

export type BlogCategory = 'Architecture' | 'Performance' | 'Data' | 'Product' | 'System Design' | 'AI';

export interface ImageAsset {
  src: string;
  alt: string;
  width: number;
  height: number;
  focal?: string;
}

export interface Stat {
  value: string;
  label: string;
}

export interface Metric {
  value: string;
  label: string;
  detail: string;
}

export interface CaseStudyBlock {
  eyebrow: string;
  title: string;
  body: string;
}

export interface Project {
  slug: string;
  title: string;
  client: string;
  category: ProjectCategory;
  categories: ProjectCategory[];
  year: string;
  location: string;
  excerpt: string;
  stack: string[];
  role: string;
  timeline: string;
  impact: string;
  hero: ImageAsset;
  thumbnail: ImageAsset;
  videoPreview?: string;
  metrics: Metric[];
  story: CaseStudyBlock[];
  gallery: ImageAsset[];
  services: string[];
  featured: boolean;
}

export interface BlogPost {
  slug: string;
  title: string;
  category: BlogCategory;
  publishedAt: string;
  readingTime: string;
  excerpt: string;
  hero: ImageAsset;
  featured: boolean;
  author: string;
  blocks: Array<{
    id: string;
    heading: string;
    body: string[];
  }>;
}

export interface Testimonial {
  quote: string;
  author: string;
  role: string;
}

export interface Service {
  number: string;
  name: string;
  description: string;
}

export interface TimelineItem {
  year: string;
  title: string;
  body: string;
}

export interface TeamMember {
  name: string;
  role: string;
  image: ImageAsset;
}

export interface PageSeo {
  title: string;
  description: string;
  canonical?: string;
  image?: string;
}
