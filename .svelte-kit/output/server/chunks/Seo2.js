import { B as attr, H as escape_html, a as derived, s as head } from "./dev.js";
import { t as absoluteUrl } from "./seo.js";
//#region src/lib/components/layout/Seo.svelte
function Seo($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		let { seo } = $$props;
		const image = derived(() => seo.image ? absoluteUrl(seo.image) : void 0);
		head("2k6wns", $$renderer, ($$renderer) => {
			$$renderer.title(($$renderer) => {
				$$renderer.push(`<title>${escape_html(seo.title)}</title>`);
			});
			$$renderer.push(`<meta name="description"${attr("content", seo.description)}/> `);
			if (seo.canonical) {
				$$renderer.push("<!--[0-->");
				$$renderer.push(`<link rel="canonical"${attr("href", seo.canonical)}/>`);
			} else $$renderer.push("<!--[-1-->");
			$$renderer.push(`<!--]--> <meta property="og:title"${attr("content", seo.title)}/> <meta property="og:description"${attr("content", seo.description)}/> <meta property="og:type" content="website"/> `);
			if (image()) {
				$$renderer.push("<!--[0-->");
				$$renderer.push(`<meta property="og:image"${attr("content", image())}/> <meta name="twitter:card" content="summary_large_image"/>`);
			} else $$renderer.push("<!--[-1-->");
			$$renderer.push(`<!--]-->`);
		});
	});
}
//#endregion
export { Seo as t };
