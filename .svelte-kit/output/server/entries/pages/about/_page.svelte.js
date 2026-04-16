import { H as escape_html, o as ensure_array_like } from "../../../chunks/dev.js";
import { t as Picture } from "../../../chunks/Picture.js";
import { t as MetricStrip } from "../../../chunks/MetricStrip.js";
import { t as Seo } from "../../../chunks/Seo2.js";
import { t as ParallaxImage } from "../../../chunks/ParallaxImage.js";
//#region src/lib/components/sections/AboutPage.svelte
function AboutPage($$renderer, $$props) {
	let { timeline, team, stats } = $$props;
	$$renderer.push(`<section class="section-pad pt-32"><div class="mx-auto grid max-w-7xl gap-10 md:grid-cols-[0.9fr_1.1fr] md:items-end"><div><p class="eyebrow">About Rhydam</p> <h1 class="display-title mt-5">A full-stack developer with product taste and systems depth.</h1></div> <p class="body-large text-[var(--text-muted)]">I bridge product thinking, visual detail, and scalable engineering. The work spans polished SvelteKit interfaces,
      typed APIs, SaaS workflows, AI-powered dashboards, performance rebuilds, and backend systems that stay understandable.</p></div></section> <section class="section-tight"><div class="mx-auto max-w-6xl">`);
	MetricStrip($$renderer, { items: stats });
	$$renderer.push(`<!----></div></section> <section class="section-pad"><div class="mx-auto grid max-w-6xl gap-12 md:grid-cols-[0.35fr_0.65fr]"><p class="eyebrow">Timeline</p> <div class="grid gap-8"><!--[-->`);
	const each_array = ensure_array_like(timeline);
	for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
		let item = each_array[$$index];
		$$renderer.push(`<article class="grid gap-4 border-t border-[var(--line)] pt-6 md:grid-cols-[0.22fr_0.78fr]"><p class="font-serif text-4xl text-[var(--aqua)]">${escape_html(item.year)}</p> <div><h2 class="font-serif text-3xl">${escape_html(item.title)}</h2> <p class="mt-3 text-[var(--text-muted)]">${escape_html(item.body)}</p></div></article>`);
	}
	$$renderer.push(`<!--]--></div></div></section> <section class="section-pad"><div class="mx-auto max-w-7xl"><p class="eyebrow">Technical Strengths</p> <div class="mt-8 grid gap-8 md:grid-cols-3"><!--[-->`);
	const each_array_1 = ensure_array_like(team);
	for (let $$index_1 = 0, $$length = each_array_1.length; $$index_1 < $$length; $$index_1++) {
		let member = each_array_1[$$index_1];
		$$renderer.push(`<article><div class="image-frame aspect-[4/5]">`);
		Picture($$renderer, {
			image: member.image,
			sizes: "(min-width: 768px) 33vw, 100vw",
			class: "h-full w-full object-cover"
		});
		$$renderer.push(`<!----></div> <h2 class="mt-5 font-serif text-3xl">${escape_html(member.name)}</h2> <p class="mt-2 text-[var(--text-muted)]">${escape_html(member.role)}</p></article>`);
	}
	$$renderer.push(`<!--]--></div></div></section> <section class="section-pad"><div class="mx-auto grid max-w-7xl gap-8 md:grid-cols-2 md:items-center">`);
	ParallaxImage($$renderer, {
		image: {
			src: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4",
			alt: "Developer workstation with TypeScript code and product systems",
			width: 1600,
			height: 1100
		},
		class: "aspect-[4/3]"
	});
	$$renderer.push(`<!----> <div><p class="eyebrow">Philosophy Preview</p> <h2 class="large-title mt-4">The surface should feel simple because the system is well-designed.</h2> <p class="body-large mt-6 text-[var(--text-muted)]">I care about the whole chain: data shape, API boundaries, loading states, motion, accessibility, release safety,
        and the tiny product decisions that make software feel premium.</p></div></div></section>`);
}
//#endregion
//#region src/routes/about/+page.svelte
function _page($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		let { data } = $$props;
		Seo($$renderer, { seo: data.seo });
		$$renderer.push(`<!----> `);
		AboutPage($$renderer, {
			timeline: data.timeline,
			team: data.team,
			stats: data.stats
		});
		$$renderer.push(`<!---->`);
	});
}
//#endregion
export { _page as default };
