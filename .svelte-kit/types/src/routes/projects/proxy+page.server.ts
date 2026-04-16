// @ts-nocheck
import { getProjectCategories, getProjects } from '$lib/api/portfolio';
import { createSeo } from '$lib/utils/seo';
import type { PageServerLoad } from './$types';

export const load = () => {
  return {
    seo: createSeo({
      title: 'Projects',
      description:
        'Explore Rhydam Panda full-stack developer case studies across SaaS, AI dashboards, backend systems, DevTools, realtime products, and performance work.',
      canonical: '/projects',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71'
    }),
    projects: getProjects(),
    categories: getProjectCategories()
  };
};
;null as any as PageServerLoad;