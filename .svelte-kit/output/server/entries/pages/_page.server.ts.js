import { h as getTestimonials, m as getStats, o as getFeaturedProjects, p as getServices, s as getHomePage } from "../../chunks/portfolio.js";
//#region src/routes/+page.server.ts
var load = async () => {
	return {
		...await getHomePage(),
		featuredProjects: getFeaturedProjects(),
		services: getServices(),
		stats: getStats(),
		testimonials: getTestimonials()
	};
};
//#endregion
export { load };
