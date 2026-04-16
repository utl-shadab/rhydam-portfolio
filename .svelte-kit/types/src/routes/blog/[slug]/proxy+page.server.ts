// @ts-nocheck
import { error } from '@sveltejs/kit';
import { getBlogPostBySlug } from '$lib/api/portfolio';
import { createSeo } from '$lib/utils/seo';
import type { PageServerLoad } from './$types';

export const load = async ({ params }: Parameters<PageServerLoad>[0]) => {
  const post = await getBlogPostBySlug(params.slug);

  if (!post) {
    error(404, 'Article not found');
  }

  return {
    seo: createSeo({
      title: post.title,
      description: post.excerpt,
      canonical: `/blog/${post.slug}`,
      image: post.hero.src
    }),
    post
  };
};
