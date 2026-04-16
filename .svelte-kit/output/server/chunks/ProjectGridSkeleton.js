import { B as attr, H as escape_html, V as clsx, n as attr_class, o as ensure_array_like } from "./dev.js";
import { t as Picture } from "./Picture.js";
import { t as Badge } from "./Badge.js";
//#region src/lib/components/ui/ProjectCard.svelte
function ProjectCard($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		let { project, index = 0 } = $$props;
		$$renderer.push(`<a class="group block"${attr("href", `/projects/${project.slug}`)} data-cursor="View"${attr("aria-label", `View ${project.title} case study`)}><div class="image-frame aspect-[4/5]">`);
		Picture($$renderer, {
			image: project.thumbnail,
			sizes: "(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw",
			priority: index === 0,
			class: "h-full w-full scale-100 transition-transform duration-700 ease-[var(--ease-out)] group-hover:scale-105"
		});
		$$renderer.push(`<!----></div> <div class="mt-5 flex items-start justify-between gap-4"><div>`);
		Badge($$renderer, { label: project.category });
		$$renderer.push(`<!----> <h3 class="mt-3 font-serif text-2xl leading-tight">${escape_html(project.title)}</h3> <p class="mt-2 text-sm text-[var(--text-muted)]">${escape_html(project.excerpt)}</p> <div class="mt-4 flex flex-wrap gap-2"><!--[-->`);
		const each_array = ensure_array_like(project.stack.slice(0, 3));
		for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
			let item = each_array[$$index];
			$$renderer.push(`<span class="rounded-[8px] border border-[var(--line)] px-2 py-1 text-xs text-[var(--text-muted)]">${escape_html(item)}</span>`);
		}
		$$renderer.push(`<!--]--></div> <p class="mt-4 text-sm text-[var(--accent)]">${escape_html(project.impact)} / ${escape_html(project.year)}</p></div> <span class="mt-1 text-[var(--aqua)] transition-transform duration-300 group-hover:translate-x-1">View</span></div></a>`);
	});
}
//#endregion
//#region src/lib/components/loader/ProjectGridSkeleton.svelte
function ProjectGridSkeleton($$renderer, $$props) {
	let { count = 4 } = $$props;
	$$renderer.push(`<div class="grid gap-8 md:grid-cols-2 lg:grid-cols-4"><!--[-->`);
	const each_array = ensure_array_like(Array.from({ length: count }));
	for (let index = 0, $$length = each_array.length; index < $$length; index++) {
		each_array[index];
		$$renderer.push(`<div${attr_class(clsx(index % 2 === 1 ? "md:pt-16" : ""))} aria-hidden="true"><div class="skeleton-shimmer h-80 rounded-[8px]"></div> <div class="skeleton-shimmer mt-5 h-4 w-24 rounded-[8px]"></div> <div class="skeleton-shimmer mt-4 h-8 w-4/5 rounded-[8px]"></div> <div class="skeleton-shimmer mt-3 h-4 w-2/5 rounded-[8px]"></div></div>`);
	}
	$$renderer.push(`<!--]--></div>`);
}
//#endregion
export { ProjectCard as n, ProjectGridSkeleton as t };
