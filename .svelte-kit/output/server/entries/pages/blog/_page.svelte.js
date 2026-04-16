import { B as attr, H as escape_html, a as derived, i as await_block, n as attr_class, o as ensure_array_like } from "../../../chunks/dev.js";
import { t as Skeleton } from "../../../chunks/Skeleton.js";
import { t as Picture } from "../../../chunks/Picture.js";
import { t as Badge } from "../../../chunks/Badge.js";
import { t as Seo } from "../../../chunks/Seo2.js";
//#region src/lib/components/loader/BlogListSkeleton.svelte
function BlogListSkeleton($$renderer, $$props) {
	let { count = 3 } = $$props;
	$$renderer.push(`<div class="grid gap-8 md:grid-cols-3"><!--[-->`);
	const each_array = ensure_array_like(Array.from({ length: count }));
	for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
		each_array[$$index];
		$$renderer.push(`<div aria-hidden="true"><div class="skeleton-shimmer aspect-[4/3] rounded-[8px]"></div> <div class="skeleton-shimmer mt-5 h-4 w-24 rounded-[8px]"></div> <div class="skeleton-shimmer mt-4 h-8 w-5/6 rounded-[8px]"></div> <div class="skeleton-shimmer mt-3 h-16 rounded-[8px]"></div></div>`);
	}
	$$renderer.push(`<!--]--></div>`);
}
//#endregion
//#region src/lib/components/ui/ArticleCard.svelte
function ArticleCard($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		let { post, featured = false } = $$props;
		$$renderer.push(`<a${attr_class(`group grid gap-5 ${featured ? "md:grid-cols-[1.1fr_0.9fr]" : ""}`)}${attr("href", `/blog/${post.slug}`)} data-cursor="Read"><div${attr_class(`image-frame ${featured ? "aspect-[16/10]" : "aspect-[4/3]"}`)}>`);
		Picture($$renderer, {
			image: post.hero,
			sizes: featured ? "(min-width: 768px) 55vw, 100vw" : "(min-width: 768px) 33vw, 100vw",
			priority: featured,
			class: "h-full w-full scale-100 transition-transform duration-700 ease-[var(--ease-out)] group-hover:scale-105"
		});
		$$renderer.push(`<!----></div> <div class="self-center">`);
		Badge($$renderer, { label: post.category });
		$$renderer.push(`<!----> <h3${attr_class(`${featured ? "mt-5 font-serif text-4xl" : "mt-4 font-serif text-2xl"} leading-tight`)}>${escape_html(post.title)}</h3> <p class="mt-4 text-[var(--text-muted)]">${escape_html(post.excerpt)}</p> <p class="mt-5 text-sm text-[var(--text-muted)]">${escape_html(post.publishedAt)} / ${escape_html(post.readingTime)}</p></div></a>`);
	});
}
//#endregion
//#region src/lib/components/sections/BlogIndex.svelte
function BlogIndex($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		let { posts, featured } = $$props;
		let active = "All";
		const categories = derived(() => ["All", ...Array.from(new Set(posts.map((post) => post.category)))]);
		const filtered = derived(() => active === "All" ? posts : posts.filter((post) => post.category === active));
		$$renderer.push(`<section class="section-pad pt-32"><div class="mx-auto max-w-7xl"><p class="eyebrow">Engineering Journal</p> <h1 class="display-title mt-5">Field notes on systems, speed, product taste, and resilient interfaces.</h1> <div class="mt-12 border-y border-[var(--line)] py-10">`);
		ArticleCard($$renderer, {
			post: featured,
			featured: true
		});
		$$renderer.push(`<!----></div> <div class="mt-10 flex flex-wrap gap-3" aria-label="Blog categories"><!--[-->`);
		const each_array = ensure_array_like(categories());
		for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
			let category = each_array[$$index];
			$$renderer.push(`<button${attr_class(`rounded-[8px] border px-4 py-2 text-sm transition-colors ${active === category ? "border-[var(--accent)] bg-[var(--accent)] text-[var(--bg)]" : "border-[var(--line)] text-[var(--text-muted)]"}`)} type="button">${escape_html(category)}</button>`);
		}
		$$renderer.push(`<!--]--></div> <div class="mt-10 grid gap-8 md:grid-cols-3"><!--[-->`);
		const each_array_1 = ensure_array_like(filtered());
		for (let $$index_1 = 0, $$length = each_array_1.length; $$index_1 < $$length; $$index_1++) {
			let post = each_array_1[$$index_1];
			ArticleCard($$renderer, { post });
		}
		$$renderer.push(`<!--]--></div></div></section>`);
	});
}
//#endregion
//#region src/routes/blog/+page.svelte
function _page($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		let { data } = $$props;
		Seo($$renderer, { seo: data.seo });
		$$renderer.push(`<!----> `);
		await_block($$renderer, Promise.all([data.posts, data.featured]), () => {
			$$renderer.push(`<section class="section-pad pt-32">`);
			{
				function fallback($$renderer) {
					BlogListSkeleton($$renderer, {});
				}
				Skeleton($$renderer, {
					name: "blog-index",
					loading: true,
					animate: "shimmer",
					fallback,
					children: ($$renderer) => {
						BlogListSkeleton($$renderer, {});
					},
					$$slots: {
						fallback: true,
						default: true
					}
				});
			}
			$$renderer.push(`<!----></section>`);
		}, ([posts, featured]) => {
			Skeleton($$renderer, {
				name: "blog-index",
				loading: false,
				animate: "shimmer",
				children: ($$renderer) => {
					BlogIndex($$renderer, {
						posts,
						featured
					});
				},
				$$slots: { default: true }
			});
		});
		$$renderer.push(`<!--]-->`);
	});
}
//#endregion
export { _page as default };
