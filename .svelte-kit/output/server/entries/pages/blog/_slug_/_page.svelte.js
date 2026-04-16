import "../../../../chunks/index-server.js";
import { B as attr, H as escape_html, o as ensure_array_like, r as attr_style } from "../../../../chunks/dev.js";
import { t as Picture } from "../../../../chunks/Picture.js";
import { t as Badge } from "../../../../chunks/Badge.js";
import { t as Seo } from "../../../../chunks/Seo2.js";
//#region src/lib/components/sections/BlogProgress.svelte
function BlogProgress($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		$$renderer.push(`<div class="fixed left-0 top-0 z-[60] h-1 w-full bg-transparent" aria-hidden="true"><div class="h-full bg-[var(--accent)]"${attr_style("", { width: `0%` })}></div></div>`);
	});
}
//#endregion
//#region src/lib/components/sections/BlogArticle.svelte
function BlogArticle($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		let { post } = $$props;
		BlogProgress($$renderer, {});
		$$renderer.push(`<!----> <article class="section-pad pt-32"><header class="mx-auto max-w-5xl">`);
		Badge($$renderer, { label: post.category });
		$$renderer.push(`<!----> <h1 class="mt-6 font-serif text-5xl leading-none md:text-7xl">${escape_html(post.title)}</h1> <p class="body-large mt-6 max-w-3xl text-[var(--text-muted)]">${escape_html(post.excerpt)}</p> <p class="mt-6 text-sm text-[var(--text-muted)]">${escape_html(post.author)} / ${escape_html(post.publishedAt)} / ${escape_html(post.readingTime)}</p></header> <div class="mx-auto mt-12 max-w-6xl"><div class="image-frame aspect-[16/10]">`);
		Picture($$renderer, {
			image: post.hero,
			priority: true,
			sizes: "100vw",
			class: "h-full w-full object-cover"
		});
		$$renderer.push(`<!----></div></div> <div class="mx-auto mt-16 grid max-w-6xl gap-10 lg:grid-cols-[0.28fr_0.72fr]"><aside class="lg:sticky lg:top-24 lg:self-start"><p class="eyebrow">Contents</p> <nav class="mt-5 grid gap-3 text-sm text-[var(--text-muted)]" aria-label="Table of contents"><!--[-->`);
		const each_array = ensure_array_like(post.blocks);
		for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
			let block = each_array[$$index];
			$$renderer.push(`<a class="transition-colors hover:text-[var(--accent)]"${attr("href", `#${block.id}`)}>${escape_html(block.heading)}</a>`);
		}
		$$renderer.push(`<!--]--></nav> <div class="mt-8 flex gap-3 text-sm"><a class="rounded-[8px] border border-[var(--line)] px-3 py-2"${attr("href", `https://twitter.com/intent/tweet?text=${encodeURIComponent(post.title)}`)} target="_blank" rel="noreferrer" data-cursor="Open">Share</a> <a class="rounded-[8px] border border-[var(--line)] px-3 py-2"${attr("href", `mailto:?subject=${encodeURIComponent(post.title)}`)} data-cursor="Send">Email</a></div></aside> <div class="grid gap-12"><!--[-->`);
		const each_array_1 = ensure_array_like(post.blocks);
		for (let $$index_2 = 0, $$length = each_array_1.length; $$index_2 < $$length; $$index_2++) {
			let block = each_array_1[$$index_2];
			$$renderer.push(`<section${attr("id", block.id)} class="scroll-mt-28"><h2 class="font-serif text-4xl leading-tight">${escape_html(block.heading)}</h2> <div class="mt-6 grid gap-5 text-xl leading-relaxed text-[var(--text-muted)] md:text-2xl"><!--[-->`);
			const each_array_2 = ensure_array_like(block.body);
			for (let $$index_1 = 0, $$length = each_array_2.length; $$index_1 < $$length; $$index_1++) {
				let paragraph = each_array_2[$$index_1];
				$$renderer.push(`<p>${escape_html(paragraph)}</p>`);
			}
			$$renderer.push(`<!--]--></div></section>`);
		}
		$$renderer.push(`<!--]--></div></div></article>`);
	});
}
//#endregion
//#region src/routes/blog/[slug]/+page.svelte
function _page($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		let { data } = $$props;
		Seo($$renderer, { seo: data.seo });
		$$renderer.push(`<!----> `);
		BlogArticle($$renderer, { post: data.post });
		$$renderer.push(`<!---->`);
	});
}
//#endregion
export { _page as default };
