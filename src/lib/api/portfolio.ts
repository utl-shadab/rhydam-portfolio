import { blogPosts } from '$lib/data/blog';
import { projects } from '$lib/data/projects';
import { services, stats, team, testimonials, timeline } from '$lib/data/studio';
import { createSeo } from '$lib/utils/seo';
import type { BlogPost, Project, ProjectCategory } from '$types/content';

const categories: ProjectCategory[] = ['Full Stack', 'Frontend', 'Backend', 'AI', 'SaaS', 'DevTools', 'Performance'];

function sortPosts(posts: BlogPost[]): BlogPost[] {
  return [...posts].sort((a, b) => Date.parse(b.publishedAt) - Date.parse(a.publishedAt));
}

export async function getHomePage() {
  return {
    seo: createSeo({
      title: 'Rhydam Panda | Full Stack Developer',
      description:
        'A premium full-stack developer portfolio for Rhydam Panda, focused on SvelteKit, TypeScript, SaaS products, AI dashboards, APIs, and scalable web systems.',
      canonical: '/',
      image: projects[0]?.hero.src
    }),
    hero: {
      eyebrow: 'Rhydam Panda / Full Stack Developer',
      title: 'I build fast, scalable, product-grade web applications from interface to infrastructure.',
      image: projects[0]?.hero
    },
    intro:
      'I bridge product thinking, visual detail, and scalable engineering to ship SaaS platforms, AI-powered dashboards, APIs, automation tools, and frontend experiences that feel as sharp as they are reliable.'
  };
}

export async function getFeaturedProjects(): Promise<Project[]> {
  return projects.filter((project) => project.featured).slice(0, 4);
}

export async function getProjects(): Promise<Project[]> {
  return projects;
}

export async function getProjectCategories(): Promise<ProjectCategory[]> {
  return categories;
}

export async function getProjectBySlug(slug: string): Promise<Project | undefined> {
  return projects.find((project) => project.slug === slug);
}

export async function getNextProject(slug: string): Promise<Project> {
  const index = projects.findIndex((project) => project.slug === slug);
  const nextIndex = index >= 0 ? (index + 1) % projects.length : 0;
  const nextProject = projects[nextIndex];

  if (!nextProject) {
    throw new Error('No project data available');
  }

  return nextProject;
}

export async function getServices() {
  return services;
}

export async function getStats() {
  return stats;
}

export async function getTestimonials() {
  return testimonials;
}

export async function getBlogPosts(): Promise<BlogPost[]> {
  return sortPosts(blogPosts);
}

export async function getFeaturedBlogPost(): Promise<BlogPost> {
  const featured = blogPosts.find((post) => post.featured) ?? sortPosts(blogPosts)[0];

  if (!featured) {
    throw new Error('No blog content available');
  }

  return featured;
}

export async function getBlogPostBySlug(slug: string): Promise<BlogPost | undefined> {
  return blogPosts.find((post) => post.slug === slug);
}

export async function getDeveloperProfile() {
  return {
    seo: createSeo({
      title: 'About',
      description:
        'About Rhydam Panda, a full-stack developer connecting product taste, visual detail, and scalable engineering systems.',
      canonical: '/about',
      image: team[0]?.image.src
    }),
    timeline,
    team,
    stats
  };
}

export async function getWorkPage() {
  return {
    seo: createSeo({
      title: 'Work',
      description:
        'Selected engineering work by Rhydam Panda across SaaS platforms, dashboards, DevTools, backend systems, and performance rebuilds.',
      canonical: '/work',
      image: projects[1]?.hero.src
    }),
    projects: projects.filter((project) => project.featured).slice(0, 3)
  };
}

export async function getPhilosophyPage() {
  return {
    seo: createSeo({
      title: 'Philosophy',
      description:
        'Engineering principles from Rhydam Panda on performance, type safety, product systems, data modeling, and meaningful motion.',
      canonical: '/philosophy',
      image: projects[2]?.hero.src
    }),
    principles: [
      'Performance is a feature.',
      'Good UI starts with good data modeling.',
      'Type safety is a product decision.',
      'The best systems feel simple at the surface.',
      'Motion should guide, not distract.',
      'Every abstraction must earn its place.'
    ]
  };
}

export async function getContactPage() {
  return {
    seo: createSeo({
      title: 'Contact',
      description:
        'Contact Rhydam Panda about SaaS builds, frontend systems, backend APIs, AI integration, performance work, and technical consulting.',
      canonical: '/contact',
      image: projects[3]?.hero.src
    })
  };
}
