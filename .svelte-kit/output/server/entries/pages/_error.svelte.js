import { H as escape_html } from "../../chunks/dev.js";
import { n as page } from "../../chunks/state.js";
import { t as Button } from "../../chunks/Button.js";
//#region src/routes/+error.svelte
function _error($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		$$renderer.push(`<section class="section-pad grid min-h-screen place-items-center"><div class="mx-auto max-w-2xl text-center"><p class="eyebrow">Error ${escape_html(page.status)}</p> <h1 class="large-title mt-4">${escape_html(page.error?.message ?? "This page is unavailable.")}</h1> <p class="body-large mt-6 text-[var(--text-muted)]">The route may have moved, or the requested engineering case study is no longer available.</p> <div class="mt-8">`);
		Button($$renderer, {
			href: "/",
			children: ($$renderer) => {
				$$renderer.push(`<!---->Return home`);
			},
			$$slots: { default: true }
		});
		$$renderer.push(`<!----></div></div></section>`);
	});
}
//#endregion
export { _error as default };
