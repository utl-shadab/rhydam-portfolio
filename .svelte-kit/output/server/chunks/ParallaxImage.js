import "./index-server.js";
import { n as attr_class } from "./dev.js";
import "./gsap.js";
import { t as Picture } from "./Picture.js";
//#region src/lib/components/animations/ParallaxImage.svelte
function ParallaxImage($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		let { image, sizes = "(min-width: 768px) 50vw, 100vw", priority = false, class: className = "" } = $$props;
		$$renderer.push(`<div${attr_class(`image-frame ${className}`)}><div class="h-[112%] w-full">`);
		Picture($$renderer, {
			image,
			sizes,
			priority,
			class: "h-full w-full"
		});
		$$renderer.push(`<!----></div></div>`);
	});
}
//#endregion
export { ParallaxImage as t };
