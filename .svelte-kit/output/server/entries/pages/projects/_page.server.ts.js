import { n as createSeo } from "../../../chunks/seo.js";
import { d as getProjectCategories, f as getProjects } from "../../../chunks/portfolio.js";
//#region src/routes/projects/+page.server.ts
var load = () => {
	return {
		seo: createSeo({
			title: "Projects",
			description: "Explore Rhydam Panda full-stack developer case studies across SaaS, AI dashboards, backend systems, DevTools, realtime products, and performance work.",
			canonical: "/projects",
			image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71"
		}),
		projects: getProjects(),
		categories: getProjectCategories()
	};
};
//#endregion
export { load };
