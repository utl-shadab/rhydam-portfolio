import { H as escape_html, o as ensure_array_like } from "../../../chunks/dev.js";
import { t as Button } from "../../../chunks/Button.js";
import { t as MetricStrip } from "../../../chunks/MetricStrip.js";
import { t as Seo } from "../../../chunks/Seo2.js";
import { t as ParallaxImage } from "../../../chunks/ParallaxImage.js";
//#region src/lib/components/sections/WorkPage.svelte
function WorkPage($$renderer, $$props) {
	let { projects } = $$props;
	$$renderer.push(`<section class="section-pad pt-32"><div class="mx-auto max-w-7xl"><p class="eyebrow">Selected Engineering Work</p> <h1 class="display-title mt-5 max-w-6xl">Case studies where sharper systems create sharper products.</h1></div></section> <section class="section-tight"><div class="mx-auto grid max-w-7xl gap-14"><!--[-->`);
	const each_array = ensure_array_like(projects);
	for (let index = 0, $$length = each_array.length; index < $$length; index++) {
		let project = each_array[index];
		$$renderer.push(`<article class="grid gap-8 border-t border-[var(--line)] pt-10 md:grid-cols-[0.9fr_1.1fr] md:items-center">`);
		ParallaxImage($$renderer, {
			image: project.hero,
			class: "aspect-[16/10]",
			priority: index === 0
		});
		$$renderer.push(`<!----> <div><p class="eyebrow">${escape_html(project.category)}</p> <h2 class="mt-4 font-serif text-4xl leading-tight md:text-5xl">${escape_html(project.title)}</h2> <p class="body-large mt-5 text-[var(--text-muted)]">${escape_html(project.excerpt)}</p> <div class="mt-5 flex flex-wrap gap-2"><!--[-->`);
		const each_array_1 = ensure_array_like(project.stack.slice(0, 5));
		for (let $$index = 0, $$length = each_array_1.length; $$index < $$length; $$index++) {
			let item = each_array_1[$$index];
			$$renderer.push(`<span class="rounded-[8px] border border-[var(--line)] px-3 py-2 text-sm text-[var(--text-muted)]">${escape_html(item)}</span>`);
		}
		$$renderer.push(`<!--]--></div> <div class="mt-7">`);
		MetricStrip($$renderer, { items: project.metrics.slice(0, 2) });
		$$renderer.push(`<!----></div> <div class="mt-7">`);
		Button($$renderer, {
			href: `/projects/${project.slug}`,
			variant: "ghost",
			children: ($$renderer) => {
				$$renderer.push(`<!---->Read case study`);
			},
			$$slots: { default: true }
		});
		$$renderer.push(`<!----></div></div></article>`);
	}
	$$renderer.push(`<!--]--></div></section> <section class="section-pad"><div class="mx-auto grid max-w-7xl gap-6 md:grid-cols-2"><article class="surface p-6"><p class="eyebrow">Before</p> <h2 class="mt-5 font-serif text-4xl leading-tight">Slow, fragile, manually managed workflow.</h2> <p class="mt-5 text-[var(--text-muted)]">Teams depended on disconnected tools, unclear ownership, untyped payloads, and interfaces that hid operational risk until it became support work.</p></article> <article class="surface p-6"><p class="eyebrow">After</p> <h2 class="mt-5 font-serif text-4xl leading-tight">Typed, automated, scalable product system.</h2> <p class="mt-5 text-[var(--text-muted)]">Data contracts, fast server-rendered screens, audit-friendly workflows, clear loading states, and lightweight automation made the product easier to trust.</p></article></div></section>`);
}
//#endregion
//#region src/routes/work/+page.svelte
function _page($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		let { data } = $$props;
		Seo($$renderer, { seo: data.seo });
		$$renderer.push(`<!----> `);
		WorkPage($$renderer, { projects: data.projects });
		$$renderer.push(`<!---->`);
	});
}
//#endregion
export { _page as default };
