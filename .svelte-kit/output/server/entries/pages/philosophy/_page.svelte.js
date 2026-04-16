import { H as escape_html, o as ensure_array_like } from "../../../chunks/dev.js";
import { t as ScrollReveal } from "../../../chunks/ScrollReveal.js";
import { t as Seo } from "../../../chunks/Seo2.js";
//#region src/lib/components/sections/PhilosophyPage.svelte
function PhilosophyPage($$renderer, $$props) {
	let { principles } = $$props;
	$$renderer.push(`<section class="section-pad flex min-h-screen items-end pt-32"><div class="mx-auto max-w-7xl"><p class="eyebrow">Engineering Philosophy</p> <h1 class="display-title mt-5 max-w-6xl">The best software feels inevitable because the hard decisions are hidden underneath.</h1></div></section> <section class="section-pad"><div class="mx-auto grid max-w-6xl gap-14"><!--[-->`);
	const each_array = ensure_array_like(principles);
	for (let index = 0, $$length = each_array.length; index < $$length; index++) {
		let principle = each_array[index];
		ScrollReveal($$renderer, {
			children: ($$renderer) => {
				$$renderer.push(`<blockquote class="border-t border-[var(--line)] pt-8"><span class="text-sm text-[var(--aqua)]">0${escape_html(index + 1)}</span> <p class="mt-4 font-serif text-4xl leading-tight md:text-7xl">${escape_html(principle)}</p></blockquote>`);
			},
			$$slots: { default: true }
		});
	}
	$$renderer.push(`<!--]--></div></section> <section class="section-pad bg-[var(--text)] text-[var(--bg)]"><div class="mx-auto max-w-5xl text-center"><p class="eyebrow text-[var(--accent)]">Builder Belief</p> <h2 class="large-title mt-5">A beautiful interface is not enough. The system has to make the next correct action easier.</h2></div></section>`);
}
//#endregion
//#region src/routes/philosophy/+page.svelte
function _page($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		let { data } = $$props;
		Seo($$renderer, { seo: data.seo });
		$$renderer.push(`<!----> `);
		PhilosophyPage($$renderer, { principles: data.principles });
		$$renderer.push(`<!---->`);
	});
}
//#endregion
export { _page as default };
