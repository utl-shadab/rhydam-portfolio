import { n as createSeo } from "../../../chunks/seo.js";
import { a as getFeaturedBlogPost, n as getBlogPosts } from "../../../chunks/portfolio.js";
//#region src/routes/blog/+page.server.ts
var load = () => {
	return {
		seo: createSeo({
			title: "Journal",
			description: "Rhydam Panda engineering journal entries on type-safe APIs, frontend performance, server-first data, product taste, and practical system design.",
			canonical: "/blog",
			image: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4"
		}),
		posts: getBlogPosts(),
		featured: getFeaturedBlogPost()
	};
};
//#endregion
export { load };
