import { H as escape_html, o as ensure_array_like } from "../../../../chunks/dev.js";
import { t as Button } from "../../../../chunks/Button.js";
import { t as Picture } from "../../../../chunks/Picture.js";
import { t as Badge } from "../../../../chunks/Badge.js";
import { t as MetricStrip } from "../../../../chunks/MetricStrip.js";
import { t as Seo } from "../../../../chunks/Seo2.js";
import { t as ParallaxImage } from "../../../../chunks/ParallaxImage.js";
//#region src/lib/components/sections/ProjectDetail.svelte
function ProjectDetail($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		let { project, nextProject } = $$props;
		$$renderer.push(`<article><header class="relative min-h-[86vh] overflow-hidden"><div class="absolute inset-0 h-[110%]">`);
		Picture($$renderer, {
			image: project.hero,
			priority: true,
			sizes: "100vw",
			class: "h-full w-full object-cover"
		});
		$$renderer.push(`<!----></div> <div class="absolute inset-0 bg-gradient-to-b from-black/25 via-black/62 to-[var(--bg)]"></div> <div class="relative z-10 mx-auto flex min-h-[86vh] max-w-7xl flex-col justify-end px-5 pb-20 pt-32 md:px-8">`);
		Badge($$renderer, { label: project.category });
		$$renderer.push(`<!----> <h1 class="display-title mt-6 max-w-5xl text-[var(--text)]">${escape_html(project.title)}</h1> <p class="body-large mt-6 max-w-3xl text-[var(--text-muted)]">${escape_html(project.excerpt)}</p> <div class="mt-8 grid gap-4 text-[var(--text-muted)] sm:grid-cols-4"><p><span class="text-[var(--text)]">Scope:</span> ${escape_html(project.client)}</p> <p><span class="text-[var(--text)]">Role:</span> ${escape_html(project.role)}</p> <p><span class="text-[var(--text)]">Timeline:</span> ${escape_html(project.timeline)}</p> <p><span class="text-[var(--text)]">Year:</span> ${escape_html(project.year)}</p></div></div></header> <section class="section-tight"><div class="mx-auto grid max-w-6xl gap-8">`);
		MetricStrip($$renderer, { items: project.metrics });
		$$renderer.push(`<!----> <div class="flex flex-wrap gap-2"><!--[-->`);
		const each_array = ensure_array_like(project.stack);
		for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
			let item = each_array[$$index];
			$$renderer.push(`<span class="rounded-[8px] border border-[var(--line)] bg-[var(--surface-soft)] px-3 py-2 text-sm text-[var(--text-muted)]">${escape_html(item)}</span>`);
		}
		$$renderer.push(`<!--]--></div></div></section> <section class="section-pad"><div class="mx-auto grid max-w-6xl gap-10"><!--[-->`);
		const each_array_1 = ensure_array_like(project.story);
		for (let $$index_1 = 0, $$length = each_array_1.length; $$index_1 < $$length; $$index_1++) {
			let block = each_array_1[$$index_1];
			$$renderer.push(`<div class="grid gap-5 border-t border-[var(--line)] pt-8 md:grid-cols-[0.35fr_0.65fr]"><div><p class="eyebrow">${escape_html(block.eyebrow)}</p></div> <div><h2 class="font-serif text-3xl leading-tight md:text-5xl">${escape_html(block.title)}</h2> <p class="body-large mt-5 text-[var(--text-muted)]">${escape_html(block.body)}</p></div></div>`);
		}
		$$renderer.push(`<!--]--></div></section> <section class="section-tight"><div class="mx-auto grid max-w-7xl gap-6 md:grid-cols-3"><article class="surface p-6"><p class="eyebrow">Technical Challenges</p> <h2 class="mt-5 font-serif text-3xl leading-tight">Keep the product expressive without letting complexity leak into the interface.</h2> <p class="mt-5 text-[var(--text-muted)]">The build balanced ${escape_html(project.services.join(", ").toLowerCase())} while keeping the workflow clear enough for operators and future contributors.</p></article> <article class="surface p-6"><p class="eyebrow">Performance / Security / Scale</p> <h2 class="mt-5 font-serif text-3xl leading-tight">The system is designed around predictable boundaries.</h2> <p class="mt-5 text-[var(--text-muted)]">Typed contracts, stable loading states, permission-aware routes, and measured interaction costs kept the experience fast and accountable.</p></article> <article class="surface p-6"><p class="eyebrow">Results</p> <h2 class="mt-5 font-serif text-3xl leading-tight">${escape_html(project.impact)}</h2> <p class="mt-5 text-[var(--text-muted)]">The final product turned a technical constraint into a smoother decision path for users, teams, and the business.</p></article></div></section> <section class="section-tight"><div class="mx-auto grid max-w-7xl gap-6 md:grid-cols-2"><!--[-->`);
		const each_array_2 = ensure_array_like(project.gallery);
		for (let index = 0, $$length = each_array_2.length; index < $$length; index++) {
			let image = each_array_2[index];
			ParallaxImage($$renderer, {
				image,
				sizes: index === 1 ? "(min-width: 768px) 42vw, 100vw" : "(min-width: 768px) 50vw, 100vw",
				class: index === 1 ? "aspect-[4/5] md:mt-24" : "aspect-[4/3]"
			});
		}
		$$renderer.push(`<!--]--></div></section> <section class="section-pad"><div class="mx-auto grid max-w-6xl gap-8 border-t border-[var(--line)] pt-10 md:grid-cols-[1fr_1fr] md:items-end"><div><p class="eyebrow">Next System</p> <h2 class="large-title mt-4">${escape_html(nextProject.title)}</h2> <p class="body-large mt-4 text-[var(--text-muted)]">${escape_html(nextProject.impact)}</p></div> <div class="md:justify-self-end">`);
		Button($$renderer, {
			href: `/projects/${nextProject.slug}`,
			children: ($$renderer) => {
				$$renderer.push(`<!---->Open case study`);
			},
			$$slots: { default: true }
		});
		$$renderer.push(`<!----></div></div></section></article>`);
	});
}
//#endregion
//#region src/routes/projects/[slug]/+page.svelte
function _page($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		let { data } = $$props;
		Seo($$renderer, { seo: data.seo });
		$$renderer.push(`<!----> `);
		ProjectDetail($$renderer, {
			project: data.project,
			nextProject: data.nextProject
		});
		$$renderer.push(`<!---->`);
	});
}
//#endregion
export { _page as default };
