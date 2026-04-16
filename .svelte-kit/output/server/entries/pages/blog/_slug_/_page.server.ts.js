import { n as createSeo } from "../../../../chunks/seo.js";
import { t as getBlogPostBySlug } from "../../../../chunks/portfolio.js";
import { error } from "@sveltejs/kit";
//#region src/routes/blog/[slug]/+page.server.ts
var load = async ({ params }) => {
	const post = await getBlogPostBySlug(params.slug);
	if (!post) error(404, "Article not found");
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
//#endregion
export { load };
