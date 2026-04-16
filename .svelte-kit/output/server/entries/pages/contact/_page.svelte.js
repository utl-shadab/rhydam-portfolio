import { B as attr, H as escape_html } from "../../../chunks/dev.js";
import { t as Button } from "../../../chunks/Button.js";
import { t as Seo } from "../../../chunks/Seo2.js";
//#region src/lib/components/sections/ContactPage.svelte
function ContactPage($$renderer) {
	$$renderer.push(`<section class="section-pad pt-32"><div class="mx-auto grid max-w-7xl gap-10 md:grid-cols-[0.9fr_1.1fr]"><div><p class="eyebrow">Contact</p> <h1 class="display-title mt-5">Have a product, platform, or technical challenge in mind?</h1> <p class="body-large mt-7 max-w-xl text-[var(--text-muted)]">Send the context and I will respond with a practical next step: architecture direction, build scope,
        performance plan, or a clear technical path forward.</p> <div class="mt-10 grid gap-3 text-[var(--text-muted)]"><a${attr("href", `mailto:hello@rhydampanda.example`)} data-cursor="Send">hello@rhydampanda.example</a> <button class="w-fit text-left text-sm text-[var(--accent)]" type="button" data-cursor="Copy">${escape_html("Copy email")}</button> <a href="https://linkedin.com" rel="noreferrer" target="_blank" data-cursor="Open">LinkedIn</a> <p>Available for remote product engineering work</p></div></div> <form class="grid gap-5"><label class="grid gap-2"><span class="text-sm text-[var(--text-muted)]">Name</span> <input class="rounded-[8px] border border-[var(--line)] bg-[var(--surface-soft)] px-4 py-4 outline-none transition-colors focus:border-[var(--accent)]" name="name" required=""/></label> <label class="grid gap-2"><span class="text-sm text-[var(--text-muted)]">Email</span> <input class="rounded-[8px] border border-[var(--line)] bg-[var(--surface-soft)] px-4 py-4 outline-none transition-colors focus:border-[var(--accent)]" name="email" type="email" required=""/></label> <label class="grid gap-2"><span class="text-sm text-[var(--text-muted)]">Project type</span> <select class="rounded-[8px] border border-[var(--line)] bg-[var(--surface-soft)] px-4 py-4 outline-none transition-colors focus:border-[var(--accent)]" name="type">`);
	$$renderer.option({}, ($$renderer) => {
		$$renderer.push(`SaaS build`);
	});
	$$renderer.option({}, ($$renderer) => {
		$$renderer.push(`Frontend development`);
	});
	$$renderer.option({}, ($$renderer) => {
		$$renderer.push(`Backend/API development`);
	});
	$$renderer.option({}, ($$renderer) => {
		$$renderer.push(`AI integration`);
	});
	$$renderer.option({}, ($$renderer) => {
		$$renderer.push(`Performance optimization`);
	});
	$$renderer.option({}, ($$renderer) => {
		$$renderer.push(`Technical consulting`);
	});
	$$renderer.option({}, ($$renderer) => {
		$$renderer.push(`Design-to-code implementation`);
	});
	$$renderer.push(`</select></label> <label class="grid gap-2"><span class="text-sm text-[var(--text-muted)]">Budget range or timeline</span> <input class="rounded-[8px] border border-[var(--line)] bg-[var(--surface-soft)] px-4 py-4 outline-none transition-colors focus:border-[var(--accent)]" name="timeline" placeholder="Example: 8 weeks, MVP, or fixed launch date"/></label> <label class="grid gap-2"><span class="text-sm text-[var(--text-muted)]">Message</span> <textarea class="min-h-40 rounded-[8px] border border-[var(--line)] bg-[var(--surface-soft)] px-4 py-4 outline-none transition-colors focus:border-[var(--accent)]" name="message" required=""></textarea></label> <div class="flex flex-wrap items-center gap-4">`);
	Button($$renderer, {
		type: "submit",
		cursor: "Send",
		children: ($$renderer) => {
			$$renderer.push(`<!---->Send context`);
		},
		$$slots: { default: true }
	});
	$$renderer.push(`<!----> `);
	$$renderer.push("<!--[-1-->");
	$$renderer.push(`<!--]--></div></form></div></section>`);
}
//#endregion
//#region src/routes/contact/+page.svelte
function _page($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		let { data } = $$props;
		Seo($$renderer, { seo: data.seo });
		$$renderer.push(`<!----> `);
		ContactPage($$renderer, {});
		$$renderer.push(`<!---->`);
	});
}
//#endregion
export { _page as default };
