import { H as escape_html, o as ensure_array_like } from "./dev.js";
//#region src/lib/components/ui/MetricStrip.svelte
function MetricStrip($$renderer, $$props) {
	let { items } = $$props;
	$$renderer.push(`<div class="grid gap-3 sm:grid-cols-2 lg:grid-cols-4"><!--[-->`);
	const each_array = ensure_array_like(items);
	for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
		let item = each_array[$$index];
		$$renderer.push(`<div class="surface p-5"><p class="font-serif text-4xl leading-none text-[var(--text)]">${escape_html(item.value)}</p> <p class="mt-3 text-sm font-semibold uppercase tracking-[0.08em] text-[var(--text-muted)]">${escape_html(item.label)}</p> `);
		if ("detail" in item) {
			$$renderer.push("<!--[0-->");
			$$renderer.push(`<p class="mt-3 text-sm text-[var(--text-muted)]">${escape_html(item.detail)}</p>`);
		} else $$renderer.push("<!--[-1-->");
		$$renderer.push(`<!--]--></div>`);
	}
	$$renderer.push(`<!--]--></div>`);
}
//#endregion
export { MetricStrip as t };
