import { n as createSeo } from "../../../../chunks/seo.js";
import { c as getNextProject, u as getProjectBySlug } from "../../../../chunks/portfolio.js";
import { error } from "@sveltejs/kit";
//#region src/routes/projects/[slug]/+page.server.ts
var load = async ({ params }) => {
	const project = await getProjectBySlug(params.slug);
	if (!project) error(404, "Project not found");
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
//#endregion
export { load };
