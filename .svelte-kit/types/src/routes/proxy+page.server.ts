// @ts-nocheck
import {
  getFeaturedProjects,
  getHomePage,
  getServices,
  getStats,
  getTestimonials
} from '$lib/api/portfolio';
import type { PageServerLoad } from './$types';

export const load = async () => {
  const page = await getHomePage();

  return {
    ...page,
    featuredProjects: getFeaturedProjects(),
    services: getServices(),
    stats: getStats(),
    testimonials: getTestimonials()
  };
};
;null as any as PageServerLoad;