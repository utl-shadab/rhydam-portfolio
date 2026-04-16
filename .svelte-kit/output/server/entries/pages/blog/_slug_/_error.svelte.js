import "../../../../chunks/dev.js";
import { t as Button } from "../../../../chunks/Button.js";
//#region src/routes/blog/[slug]/+error.svelte
function _error($$renderer) {
	$$renderer.push(`<section class="section-pad grid min-h-screen place-items-center"><div class="max-w-2xl text-center"><p class="eyebrow">Article unavailable</p> <h1 class="large-title mt-5">This journal entry could not be found.</h1> <p class="body-large mt-6 text-[var(--text-muted)]">Return to the editorial archive for current thinking.</p> <div class="mt-8">`);
	Button($$renderer, {
		href: "/blog",
		children: ($$renderer) => {
			$$renderer.push(`<!---->View journal`);
		},
		$$slots: { default: true }
	});
	$$renderer.push(`<!----></div></div></section>`);
}
//#endregion
export { _error as default };
