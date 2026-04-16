import { H as escape_html } from "./dev.js";
//#region src/lib/components/ui/Badge.svelte
function Badge($$renderer, $$props) {
	let { label } = $$props;
	$$renderer.push(`<span class="inline-flex rounded-[8px] border border-[var(--line)] px-3 py-1 text-xs font-semibold uppercase tracking-[0.08em] text-[var(--text-muted)]">${escape_html(label)}</span>`);
}
//#endregion
export { Badge as t };
