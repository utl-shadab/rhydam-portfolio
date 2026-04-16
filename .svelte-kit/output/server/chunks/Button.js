import { B as attr, V as clsx, a as derived, n as attr_class } from "./dev.js";
//#region src/lib/components/ui/Button.svelte
function Button($$renderer, $$props) {
	let { href, children, variant = "primary", ariaLabel, type = "button", cursor, class: className = "" } = $$props;
	const variants = {
		primary: "bg-[var(--accent)] text-[var(--bg)] ",
		ghost: "border border-[var(--line)] bg-[var(--surface-soft)] text-[var(--text)] hover:border-[var(--accent)]",
		quiet: "text-[var(--text)] hover:text-[var(--aqua)]"
	};
	const cursorLabel = derived(() => cursor ?? (type === "submit" ? "Send" : "Open"));
	const classes = derived(() => `magnetic-target inline-flex min-h-11 items-center justify-center rounded-[8px] px-5 py-3 text-sm font-semibold transition-colors duration-300 ${variants[variant]} ${className}`);
	if (href) {
		$$renderer.push("<!--[0-->");
		$$renderer.push(`<a${attr_class(clsx(classes()))}${attr("href", href)}${attr("aria-label", ariaLabel)}${attr("data-cursor", cursorLabel())}>`);
		children?.($$renderer);
		$$renderer.push(`<!----></a>`);
	} else {
		$$renderer.push("<!--[-1-->");
		$$renderer.push(`<button${attr_class(clsx(classes()))}${attr("type", type)}${attr("aria-label", ariaLabel)}${attr("data-cursor", cursorLabel())}>`);
		children?.($$renderer);
		$$renderer.push(`<!----></button>`);
	}
	$$renderer.push(`<!--]-->`);
}
//#endregion
export { Button as t };
