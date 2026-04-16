import "./index-server.js";
import { n as attr_class } from "./dev.js";
import "./gsap.js";
//#region src/lib/components/animations/ScrollReveal.svelte
function ScrollReveal($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		let { children, class: className = "", delay = 0 } = $$props;
		$$renderer.push(`<div${attr_class(`reveal-ready ${className}`)}>`);
		children?.($$renderer);
		$$renderer.push(`<!----></div>`);
	});
}
//#endregion
export { ScrollReveal as t };
