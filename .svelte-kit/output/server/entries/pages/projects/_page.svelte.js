import { H as escape_html, V as clsx, a as derived, i as await_block, n as attr_class, o as ensure_array_like } from "../../../chunks/dev.js";
import { t as Skeleton } from "../../../chunks/Skeleton.js";
import { n as ProjectCard, t as ProjectGridSkeleton } from "../../../chunks/ProjectGridSkeleton.js";
import { t as Seo } from "../../../chunks/Seo2.js";
//#region src/lib/components/sections/ProjectsIndex.svelte
function ProjectsIndex($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		let { projects, categories } = $$props;
		let active = "All";
		const filtered = derived(() => {
			if (active === "All") return projects;
			const selected = active;
			return projects.filter((project) => project.categories.includes(selected));
		});
		$$renderer.push(`<section class="section-pad pt-32"><div class="mx-auto max-w-7xl"><p class="eyebrow">Case Study Archive</p> <div class="mt-5 grid gap-8 md:grid-cols-[1fr_0.9fr] md:items-end"><h1 class="display-title">Engineering work with product consequence.</h1> <p class="body-large text-[var(--text-muted)]">Filter by discipline, then open the full case study for problem, architecture, implementation, impact, stack, and system notes.</p></div> <div class="mt-10 flex flex-wrap gap-3" aria-label="Project filters"><button${attr_class(`rounded-[8px] border px-4 py-2 text-sm transition-colors ${active === "All" ? "border-[var(--accent)] bg-[var(--accent)] text-[var(--bg)]" : "border-[var(--line)] text-[var(--text-muted)]"}`)} type="button">All</button> <!--[-->`);
		const each_array = ensure_array_like(categories);
		for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
			let category = each_array[$$index];
			$$renderer.push(`<button${attr_class(`rounded-[8px] border px-4 py-2 text-sm transition-colors ${active === category ? "border-[var(--accent)] bg-[var(--accent)] text-[var(--bg)]" : "border-[var(--line)] text-[var(--text-muted)]"}`)} type="button">${escape_html(category)}</button>`);
		}
		$$renderer.push(`<!--]--></div> <div class="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3"><!--[-->`);
		const each_array_1 = ensure_array_like(filtered());
		for (let index = 0, $$length = each_array_1.length; index < $$length; index++) {
			let project = each_array_1[index];
			$$renderer.push(`<div${attr_class(clsx(index % 3 === 1 ? "lg:pt-20" : index % 3 === 2 ? "lg:pt-10" : ""))}>`);
			ProjectCard($$renderer, {
				project,
				index
			});
			$$renderer.push(`<!----></div>`);
		}
		$$renderer.push(`<!--]--></div></div></section>`);
	});
}
//#endregion
//#region src/routes/projects/+page.svelte
function _page($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		let { data } = $$props;
		Seo($$renderer, { seo: data.seo });
		$$renderer.push(`<!----> `);
		await_block($$renderer, Promise.all([data.projects, data.categories]), () => {
			$$renderer.push(`<section class="section-pad pt-32">`);
			{
				function fallback($$renderer) {
					ProjectGridSkeleton($$renderer, { count: 6 });
				}
				Skeleton($$renderer, {
					name: "projects-index",
					loading: true,
					animate: "shimmer",
					fallback,
					children: ($$renderer) => {
						ProjectGridSkeleton($$renderer, { count: 6 });
					},
					$$slots: {
						fallback: true,
						default: true
					}
				});
			}
			$$renderer.push(`<!----></section>`);
		}, ([projects, categories]) => {
			Skeleton($$renderer, {
				name: "projects-index",
				loading: false,
				animate: "shimmer",
				children: ($$renderer) => {
					ProjectsIndex($$renderer, {
						projects,
						categories
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
