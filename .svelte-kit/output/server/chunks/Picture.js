import { B as attr, V as clsx, a as derived, n as attr_class, r as attr_style } from "./dev.js";
//#region src/lib/components/ui/Picture.svelte
function Picture($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		let { image, class: className = "", sizes = "100vw", priority = false } = $$props;
		const widths = [
			480,
			768,
			1024,
			1280,
			1600,
			1920
		];
		function imageUrl(width) {
			const separator = image.src.includes("?") ? "&" : "?";
			return `${image.src}${separator}auto=format&fit=crop&w=${width}&q=82`;
		}
		const srcset = derived(() => widths.map((width) => `${imageUrl(width)} ${width}w`).join(", "));
		const fallbackSrc = derived(() => imageUrl(Math.min(1600, image.width)));
		$$renderer.push(`<img${attr_class(clsx(className))}${attr("src", fallbackSrc())}${attr("srcset", srcset())}${attr("sizes", sizes)}${attr("width", image.width)}${attr("height", image.height)}${attr("alt", image.alt)}${attr("loading", priority ? "eager" : "lazy")}${attr("fetchpriority", priority ? "high" : "auto")} decoding="async"${attr_style("", { "object-position": image.focal ?? "center" })}/>`);
	});
}
//#endregion
export { Picture as t };
