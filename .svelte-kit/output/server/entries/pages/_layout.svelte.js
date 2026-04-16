import "../../chunks/index-server.js";
import "../../chunks/exports.js";
import { B as attr, E as get, H as escape_html, O as writable, l as stringify, n as attr_class, o as ensure_array_like, r as attr_style } from "../../chunks/dev.js";
import { n as configureBoneyard } from "../../chunks/Skeleton.js";
import { i as beforeNavigate, n as page, r as afterNavigate, t as navigating } from "../../chunks/state.js";
import "../../chunks/gsap.js";
import { n as PandaLogo, t as Logo } from "../../chunks/Logo.js";
//#region src/lib/bones/registry.js
configureBoneyard({
	color: "rgba(7, 7, 6, 0.08)",
	darkColor: "rgba(243, 239, 231, 0.1)",
	animate: "shimmer",
	stagger: 50,
	transition: 260
});
writable(false);
//#endregion
//#region src/lib/components/animations/LenisProvider.svelte
function LenisProvider($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		let { children } = $$props;
		children?.($$renderer);
		$$renderer.push(`<!---->`);
	});
}
//#endregion
//#region src/lib/components/animations/RouteTransition.svelte
function RouteTransition($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		beforeNavigate(async (navigation) => {});
		afterNavigate(async () => {});
		$$renderer.push(`<div class="pointer-events-none fixed inset-0 z-[100] bg-[var(--accent)] svelte-8muaje" style="transform: translate3d(0, 100%, 0);" aria-hidden="true"></div>`);
	});
}
//#endregion
//#region src/lib/cookies/useCookieConsent.ts
var COOKIE_CONSENT_VERSION = "2026-04-15";
var DEFAULT_COOKIE_PREFERENCES = {
	essential: true,
	analytics: false,
	marketing: false
};
var DEFAULT_COOKIE_CONSENT_STATE = {
	initialized: false,
	bannerOpen: false,
	preferencesOpen: false,
	version: COOKIE_CONSENT_VERSION,
	status: "pending",
	preferences: DEFAULT_COOKIE_PREFERENCES,
	updatedAt: null
};
var acceptHandlers = /* @__PURE__ */ new Set();
var rejectHandlers = /* @__PURE__ */ new Set();
var store = writable(DEFAULT_COOKIE_CONSENT_STATE);
function writeCookie(consent) {}
function writeStorage(consent) {}
function notify(status, consent) {
	(status === "rejected" ? rejectHandlers : acceptHandlers).forEach((handler) => handler(consent));
}
function persistConsent(status, preferences) {
	const consent = {
		version: COOKIE_CONSENT_VERSION,
		status,
		preferences: {
			...preferences,
			essential: true
		},
		updatedAt: (/* @__PURE__ */ new Date()).toISOString()
	};
	writeStorage(consent);
	writeCookie(consent);
	store.set({
		initialized: true,
		bannerOpen: false,
		preferencesOpen: false,
		version: consent.version,
		status: consent.status,
		preferences: consent.preferences,
		updatedAt: consent.updatedAt
	});
	notify(status, consent);
}
var cookieConsent = {
	subscribe: store.subscribe,
	init() {},
	acceptAll() {
		persistConsent("accepted", {
			essential: true,
			analytics: true,
			marketing: true
		});
	},
	rejectNonEssential() {
		persistConsent("rejected", DEFAULT_COOKIE_PREFERENCES);
	},
	savePreferences(preferences) {
		persistConsent(preferences.analytics || preferences.marketing ? "customized" : "rejected", preferences);
	},
	openPreferences() {
		store.update((state) => ({
			...state,
			bannerOpen: false,
			preferencesOpen: true
		}));
	},
	closePreferences() {
		const current = get(store);
		store.update((state) => ({
			...state,
			bannerOpen: state.status === "pending",
			preferencesOpen: false
		}));
		if (current.status === "pending") store.update((state) => ({
			...state,
			bannerOpen: true
		}));
	},
	manage() {
		store.update((state) => ({
			...state,
			bannerOpen: false,
			preferencesOpen: true
		}));
	},
	hasConsent(category) {
		return get(store).preferences[category];
	},
	onAccept(handler) {
		acceptHandlers.add(handler);
		return () => acceptHandlers.delete(handler);
	},
	onReject(handler) {
		rejectHandlers.add(handler);
		return () => rejectHandlers.delete(handler);
	}
};
//#endregion
//#region src/lib/components/cookies/CookiePreferencesModal.svelte
function CookiePreferencesModal($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		let { open, preferences, onClose, onSave } = $$props;
		let draft = DEFAULT_COOKIE_PREFERENCES;
		if (open) {
			$$renderer.push("<!--[0-->");
			$$renderer.push(`<div class="cookie-modal svelte-7f9grn" role="presentation"><button class="cookie-modal__backdrop svelte-7f9grn" type="button" aria-label="Close cookie preferences"></button> <div class="cookie-modal__panel svelte-7f9grn" role="dialog" aria-modal="true" aria-labelledby="cookie-preferences-title" aria-describedby="cookie-preferences-description"><div class="cookie-modal__header svelte-7f9grn"><div><p class="cookie-modal__eyebrow svelte-7f9grn">Privacy controls</p> <h2 id="cookie-preferences-title" class="svelte-7f9grn">Cookie preferences</h2></div> <button class="cookie-modal__close svelte-7f9grn" type="button" aria-label="Close preferences">Close</button></div> <p id="cookie-preferences-description" class="cookie-modal__body svelte-7f9grn">Essential cookies keep the portfolio working. Analytics and marketing
        cookies are optional and only load after you choose them.</p> <div class="cookie-modal__options svelte-7f9grn"><article class="cookie-option svelte-7f9grn"><div><h3 class="svelte-7f9grn">Essential</h3> <p class="svelte-7f9grn">Required for core functionality, security, consent storage, and
              offline app behavior.</p></div> <span class="cookie-option__locked svelte-7f9grn" aria-label="Essential cookies are always enabled">Always on</span></article> <label class="cookie-option svelte-7f9grn"><div><h3 class="svelte-7f9grn">Analytics</h3> <p class="svelte-7f9grn">Helps measure page views and performance so the portfolio can
              improve without identifying you personally.</p></div> <input type="checkbox"${attr("checked", draft.analytics, true)} class="svelte-7f9grn"/></label> <label class="cookie-option svelte-7f9grn"><div><h3 class="svelte-7f9grn">Marketing</h3> <p class="svelte-7f9grn">Allows optional campaign or attribution scripts. These stay off
              unless you explicitly enable them.</p></div> <input type="checkbox"${attr("checked", draft.marketing, true)} class="svelte-7f9grn"/></label></div> <div class="cookie-modal__actions flex justify-end svelte-7f9grn"><button class="cookie-button cookie-button--ghost svelte-7f9grn" type="button">Cancel</button> <button class="cookie-button cookie-button--primary svelte-7f9grn" type="button">Save preferences</button></div></div></div>`);
		} else $$renderer.push("<!--[-1-->");
		$$renderer.push(`<!--]-->`);
	});
}
//#endregion
//#region src/lib/components/cookies/CookieBanner.svelte
function CookieBanner($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		let consent = DEFAULT_COOKIE_CONSENT_STATE;
		function savePreferences(preferences) {
			cookieConsent.savePreferences(preferences);
		}
		if (consent.initialized) {
			$$renderer.push("<!--[0-->");
			if (consent.bannerOpen) {
				$$renderer.push("<!--[0-->");
				$$renderer.push(`<div class="cookie-banner svelte-rdwmuk" role="dialog" aria-live="polite" aria-labelledby="cookie-banner-title" aria-describedby="cookie-banner-description"><div><p class="cookie-banner__eyebrow svelte-rdwmuk">Privacy</p> <h2 id="cookie-banner-title" class="svelte-rdwmuk">Cookies, kept intentional.</h2> <p id="cookie-banner-description" class="svelte-rdwmuk">Essential cookies keep this portfolio working. Analytics and marketing scripts stay off until you choose them.</p></div> <div class="cookie-banner__actions svelte-rdwmuk" aria-label="Cookie consent actions"><button class="cookie-button cookie-button--primary svelte-rdwmuk" type="button">Accept all</button> <button class="cookie-button cookie-button--ghost svelte-rdwmuk" type="button">Reject non-essential</button> <button class="cookie-button cookie-button--quiet svelte-rdwmuk" type="button">Customize preferences</button></div></div>`);
			} else $$renderer.push("<!--[-1-->");
			$$renderer.push(`<!--]--> `);
			if (!consent.bannerOpen && !consent.preferencesOpen) {
				$$renderer.push("<!--[0-->");
				$$renderer.push(`<button class="manage-cookies svelte-rdwmuk" type="button" aria-label="Manage cookie preferences"><span class="manage-cookies__text svelte-rdwmuk">Manage cookies</span> <span class="manage-cookies__icon svelte-rdwmuk"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-cookie"><path d="M12 2a10 10 0 1 0 10 10 4 4 0 0 1-5-5 4 4 0 0 1-5-5"></path><path d="M8.5 8.5v.01"></path><path d="M16 15.5v.01"></path><path d="M12 12v.01"></path><path d="M11 17v.01"></path><path d="M7 14v.01"></path></svg></span></button>`);
			} else $$renderer.push("<!--[-1-->");
			$$renderer.push(`<!--]--> `);
			CookiePreferencesModal($$renderer, {
				open: consent.preferencesOpen,
				preferences: consent.preferences,
				onClose: () => cookieConsent.closePreferences(),
				onSave: savePreferences
			});
			$$renderer.push(`<!---->`);
		} else $$renderer.push("<!--[-1-->");
		$$renderer.push(`<!--]-->`);
	});
}
//#endregion
//#region src/lib/components/cookies/CookieConsentScripts.svelte
function CookieConsentScripts($$renderer, $$props) {
	$$renderer.component(($$renderer) => {});
}
//#endregion
//#region src/lib/components/layout/Footer.svelte
function Footer($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		$$renderer.push(`<footer class="section-tight border-t border-[var(--line)]"><div class="mx-auto grid max-w-6xl gap-10 md:grid-cols-[1.4fr_0.8fr_0.8fr_0.8fr]"><div class="footer-column"><h2 class="font-serif text-3xl">Rhydam Panda</h2> <p class="mt-4 max-w-sm text-[var(--text-muted)]">Full-stack developer building fast interfaces, typed APIs, SaaS systems, AI workflows, and product-grade engineering foundations.</p></div> <nav aria-label="Footer navigation" class="footer-column"><h3 class="text-sm font-semibold uppercase tracking-[0.08em] text-[var(--text-muted)]">Navigate</h3> <div class="mt-4 grid gap-3 text-sm"><a href="/about" data-cursor="Open">About</a> <a href="/projects" data-cursor="Open">Projects</a> <a href="/work" data-cursor="Open">Work</a> <a href="/blog" data-cursor="Read">Journal</a></div></nav> <div class="footer-column"><h3 class="text-sm font-semibold uppercase tracking-[0.08em] text-[var(--text-muted)]">Connect</h3> <div class="mt-4 grid gap-3 text-sm"><a href="https://github.com" rel="noreferrer" target="_blank" data-cursor="Open">GitHub</a> <a href="https://linkedin.com" rel="noreferrer" target="_blank" data-cursor="Open">LinkedIn</a> <a href="mailto:hello@rhydampanda.example" data-cursor="Send">Email</a></div></div> <div class="footer-column"><h3 class="text-sm font-semibold uppercase tracking-[0.08em] text-[var(--text-muted)]">Focus</h3> <div class="mt-4 grid gap-3 text-sm text-[var(--text-muted)]"><span>SaaS builds</span> <span>AI dashboards</span> <span>Performance systems</span></div></div></div> <div class="mx-auto mt-12 flex max-w-6xl flex-col gap-3 border-t border-[var(--line)] pt-6 text-sm text-[var(--text-muted)] md:flex-row md:justify-between"><span>Copyright 2026 Rhydam Panda. All rights reserved.</span> <span>Panda-built systems with taste.</span></div></footer>`);
	});
}
//#endregion
//#region src/lib/components/loader/Loader.svelte
function Loader($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		let progress = 0;
		$$renderer.push("<!--[0-->");
		$$renderer.push(`<div class="fixed inset-0 z-[80] grid place-items-center bg-[var(--bg)] text-[var(--text)]" aria-live="polite"><div class="grid w-64 justify-items-center gap-7">`);
		Logo($$renderer, { class: "h-20 w-20 animate-pulse" });
		$$renderer.push(`<!----> <div class="h-1 w-full overflow-hidden rounded-[8px] bg-[var(--surface-soft)]"><div class="h-full rounded-[8px] bg-[var(--accent)] transition-[width] duration-150"${attr_style("", { width: `${progress}%` })}></div></div> <p class="text-sm text-[var(--text-muted)]">${escape_html(progress)}%</p></div></div>`);
		$$renderer.push(`<!--]-->`);
	});
}
//#endregion
//#region src/lib/components/loader/RouteProgress.svelte
function RouteProgress($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		if (navigating.to) {
			$$renderer.push("<!--[0-->");
			$$renderer.push(`<div class="fixed left-0 top-0 z-[90] h-1 w-full bg-transparent svelte-1ez32sy" aria-hidden="true"><div class="h-full w-2/3 animate-[route-progress_900ms_ease-in-out_infinite] rounded-r-[8px] bg-[var(--aqua)] svelte-1ez32sy"></div></div>`);
		} else $$renderer.push("<!--[-1-->");
		$$renderer.push(`<!--]-->`);
	});
}
//#endregion
//#region src/lib/components/navigation/Navbar.svelte
function Navbar($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		const links = [
			{
				href: "/",
				label: "Home"
			},
			{
				href: "/projects",
				label: "Projects"
			},
			{
				href: "/work",
				label: "Work"
			},
			{
				href: "/blog",
				label: "Blog"
			},
			{
				href: "/about",
				label: "About"
			},
			{
				href: "/philosophy",
				label: "Philosophy"
			},
			{
				href: "/contact",
				label: "Contact"
			}
		];
		let open = false;
		$$renderer.push(`<a class="fixed left-5 top-5 z-50 svelte-1cr5s35" href="/" aria-label="Rhydam Panda home" data-cursor="Open">`);
		Logo($$renderer, { class: "h-16 w-16" });
		$$renderer.push(`<!----></a> <nav class="fixed bottom-10 left-1/2 z-50 flex -translate-x-1/2 items-center gap-6 rounded-full border border-(--line) bg-[rgba(7,7,6,0.72)] px-8 py-4 text-sm text-(--text) shadow-2xl backdrop-blur-xl transition-transform hover:scale-105 svelte-1cr5s35" aria-label="Primary"><button class="flex cursor-pointer items-center gap-2 font-medium uppercase tracking-widest transition-opacity hover:opacity-70 svelte-1cr5s35" type="button"${attr("aria-expanded", open)} aria-controls="site-menu"${attr("data-cursor", "Open")}><span${attr_class(`inline-block h-2 w-2 rounded-full bg-(--accent) ${stringify("")}`, "svelte-1cr5s35")}></span> ${escape_html("Menu")}</button> <div class="h-1 w-8 rounded-full bg-(--line) svelte-1cr5s35"></div> <a class="hidden font-medium uppercase tracking-widest transition-opacity hover:opacity-70 sm:inline-flex svelte-1cr5s35" href="/contact" data-cursor="Send">Contact</a></nav> <div id="site-menu"${attr_class(`fixed inset-0 z-40 flex items-center justify-center overflow-hidden bg-paper transition-[clip-path] duration-1000 ease-[cubic-bezier(0.77,0,0.175,1)] pointer-events-none bg-(--paper) [clip-path:circle(0%_at_50%_100%)]`, "svelte-1cr5s35")}><div class="relative flex h-full w-full items-center justify-center p-6 svelte-1cr5s35"><div class="relative hidden h-[85vh] w-[85vh] items-center justify-center lg:flex svelte-1cr5s35"><svg class="absolute inset-0 h-full w-full rotate-[-15deg] opacity-80 svelte-1cr5s35" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2150 2150"><path d="M1036.3 2066.5c-133-1.2-265.8-22.8-392.3-64a893.7 893.7 0 0 1-260-133.4c-145-104.2-251.4-260.7-298.1-432.7-28.2-114.7-22.5-235.3 1.3-350.2 4.4-21.8 10.4-43.3 15.5-64.8 5-48.5 13-96.7 25.3-143.8C161.2 750.2 228.7 634.2 309.2 531c26-32.9 53.6-64.6 82.9-94.7 23.1-27.5 46.2-55.2 71.2-81.2 82.6-86.6 179.2-162 288.8-211.3 2-6.3 10-5.9 15.5-6.7 34-14.4 69.6-24.6 105.7-32.6 99.4-24.1 203-26.3 304.1-12.2 192.6 24.2 375.1 107 529 224.1 110.3 84 205.8 190.4 267.4 315a1092 1092 0 0 1 107.6 537.1c-6.2 124-29.2 248.2-78.2 362.6-63.7 150-172.7 280.2-312 365.3-121.6 75.7-259 125-399.2 151.7-84.3 15.3-170.2 18.3-255.7 18.4Zm25.8-17.8c73.2 1 146.4-7 218.5-18.7 69.5-12.2 139-28 204.6-54.4 92-38.2 173.4-98.6 243.5-168.7 106.8-110 186.2-244.8 244.2-386.2 59.1-147.7 82.8-293 31.3-447-94.2-292.5-309.4-538.6-578-685-149.6-88.4-317.9-154.6-493.7-154-27 .4-52.2 13-77.7 20.9a1131 1131 0 0 0-138 62C633 261.8 552 312.3 479.9 374.3c-43.7 34.5-77.2 79-109 124.3a1653.6 1653.6 0 0 0-115.3 187.9C196.2 802.2 147.3 924.4 117.4 1051c-10.8 134.4 1.9 271 41.9 400 51.3 170.6 139.1 340.2 291.3 440.9C632.9 2004 851 2041 1062 2048.7ZM985.2 122.5c184.9 13 353.3 91.7 508.5 188.5 263.6 159.6 482.4 434.7 548 738.6 32.1 161.5-22.3 325-92.2 469.4-73.4 147-171.5 285.3-304.6 384 219.8-120.8 357.1-338 398.5-582.6 43.3-241.5 11.4-498-105.8-715-128.3-226.7-363.8-389.2-610-465-64.6-18-131-31.7-198-36a732.8 732.8 0 0 0-155.4 17.3l11 .8ZM233.3 1693.8a643.8 643.8 0 0 0 48.8 59.7c-52.7-72-91-153.6-121-237.4a1062.7 1062.7 0 0 1-64.7-360.4c-29.3 205 15.7 371 137 538.1Zm-87.2-816.7c-1.8 6.2-3.2 12.5-4.7 18.8l-1.6 6.6c41.5-117.2 95-230.4 161.6-335.5-68.5 93.6-125.6 197.4-155.3 310.1Zm410.4-584.4L542.3 305l-11.5 10.3c101-71.9 211-132.7 327.7-174.8-25.2 3.3-51.3 3.5-76 9.5a632 632 0 0 0-58.7 27.3c-60.3 31.2-116 71-167.3 115.4Zm359.7-179.8a992 992 0 0 0-63.7 14.3c23-2.3 46-5.2 69.3-6 32.3-9 65.3-15.2 98.4-20.4a720 720 0 0 0-104 12.1Z" fill="#000" class="svelte-1cr5s35"></path></svg> <div class="relative z-10 h-72 w-72 svelte-1cr5s35">`);
		PandaLogo($$renderer, { class: "h-full w-full" });
		$$renderer.push(`<!----></div> <div class="pointer-events-none absolute inset-0 flex items-center justify-center svelte-1cr5s35"><!--[-->`);
		const each_array = ensure_array_like(links);
		for (let i = 0, $$length = each_array.length; i < $$length; i++) {
			let link = each_array[i];
			const angle = i / links.length * Math.PI * 2;
			const x = Math.cos(angle) * 290;
			const y = Math.sin(angle) * 290;
			$$renderer.push(`<div class="pointer-events-auto absolute svelte-1cr5s35"${attr_style(`transform: translate(${stringify(x)}px, ${stringify(y)}px)`)}><div class="transition-transform hover:scale-110 bg-(--aqua) px-6 py-2 rounded-full svelte-1cr5s35"><a${attr("href", link.href)} class="font-serif text-2xl text-(--text)! transition-colors hover:text-(--accent) svelte-1cr5s35" data-cursor="View">${escape_html(link.label)}</a></div></div>`);
		}
		$$renderer.push(`<!--]--></div></div> <div class="flex flex-col items-center justify-center gap-12 lg:hidden svelte-1cr5s35"><div class="h-40 w-40 svelte-1cr5s35">`);
		PandaLogo($$renderer, { class: "h-full w-full" });
		$$renderer.push(`<!----></div> <div class="grid grid-cols-2 items-center gap-6 svelte-1cr5s35"><!--[-->`);
		const each_array_1 = ensure_array_like(links);
		for (let $$index_1 = 0, $$length = each_array_1.length; $$index_1 < $$length; $$index_1++) {
			let link = each_array_1[$$index_1];
			$$renderer.push(`<a${attr("href", link.href)}${attr_class(`font-serif text-2xl leading-none text-[#070706]! transition-opacity hover:opacity-60 ${page.url.pathname === link.href ? "text-(--accent)" : ""}`, "svelte-1cr5s35")}>${escape_html(link.label)}</a>`);
		}
		$$renderer.push(`<!--]--></div></div></div></div>`);
	});
}
//#endregion
//#region src/lib/components/pwa/PwaInstallPrompt.svelte
function PwaInstallPrompt($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		$$renderer.push("<!--[-1-->");
		$$renderer.push(`<!--]-->`);
	});
}
//#endregion
//#region src/routes/+layout.svelte
function _layout($$renderer, $$props) {
	let { children } = $$props;
	LenisProvider($$renderer, {
		children: ($$renderer) => {
			$$renderer.push(`<div class="page-shell">`);
			Loader($$renderer, {});
			$$renderer.push(`<!----> `);
			RouteProgress($$renderer, {});
			$$renderer.push(`<!----> `);
			RouteTransition($$renderer, {});
			$$renderer.push(`<!----> `);
			CookieConsentScripts($$renderer, {});
			$$renderer.push(`<!----> `);
			PwaInstallPrompt($$renderer, {});
			$$renderer.push(`<!----> `);
			Navbar($$renderer, {});
			$$renderer.push(`<!----> <main id="main-content">`);
			children?.($$renderer);
			$$renderer.push(`<!----></main> `);
			Footer($$renderer, {});
			$$renderer.push(`<!----> `);
			CookieBanner($$renderer, {});
			$$renderer.push(`<!----></div>`);
		},
		$$slots: { default: true }
	});
}
//#endregion
export { _layout as default };
