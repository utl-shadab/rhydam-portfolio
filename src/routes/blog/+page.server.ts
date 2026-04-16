import { getBlogPosts, getFeaturedBlogPost } from '$lib/api/portfolio';
import { createSeo } from '$lib/utils/seo';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = () => {
  return {
    seo: createSeo({
      title: 'Journal',
      description:
        'Rhydam Panda engineering journal entries on type-safe APIs, frontend performance, server-first data, product taste, and practical system design.',
      canonical: '/blog',
      image: 'https://images.unsplash.com/photo-1515879218367-8466d910aaa4'
    }),
    posts: getBlogPosts(),
    featured: getFeaturedBlogPost()
  };
};
