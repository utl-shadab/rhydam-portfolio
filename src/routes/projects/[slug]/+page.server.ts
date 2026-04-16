import { error } from '@sveltejs/kit';
import { getNextProject, getProjectBySlug } from '$lib/api/portfolio';
import { createSeo } from '$lib/utils/seo';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ params }) => {
  const project = await getProjectBySlug(params.slug);

  if (!project) {
    error(404, 'Project not found');
  }

  const nextProject = await getNextProject(project.slug);

  return {
    seo: createSeo({
      title: project.title,
      description: project.excerpt,
      canonical: `/projects/${project.slug}`,
      image: project.hero.src
    }),
    project,
    nextProject
  };
};
