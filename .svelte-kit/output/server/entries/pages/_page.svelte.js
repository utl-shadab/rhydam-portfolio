import "../../chunks/index-server.js";
import { B as attr, H as escape_html, V as clsx, i as await_block, n as attr_class, o as ensure_array_like } from "../../chunks/dev.js";
import { t as Skeleton } from "../../chunks/Skeleton.js";
import "../../chunks/gsap.js";
import { t as Logo } from "../../chunks/Logo.js";
import { t as Button } from "../../chunks/Button.js";
import { t as ScrollReveal } from "../../chunks/ScrollReveal.js";
import { n as ProjectCard, t as ProjectGridSkeleton } from "../../chunks/ProjectGridSkeleton.js";
import { t as MetricStrip } from "../../chunks/MetricStrip.js";
import { t as Seo } from "../../chunks/Seo2.js";
//#region src/lib/components/sections/CTA.svelte
function CTA($$renderer) {
	$$renderer.push(`<section class="section-pad relative overflow-hidden"><div class="pointer-events-none absolute inset-x-0 top-8 text-center font-serif text-8xl text-[var(--surface-soft)] md:text-[10rem]">Build Next</div> <div class="relative mx-auto max-w-4xl text-center"><p class="eyebrow justify-center">Contact</p> <h2 class="large-title mt-5">Ready to turn a product idea into a serious system?</h2> <p class="body-large mx-auto mt-6 max-w-2xl text-[var(--text-muted)]">Bring the context, constraints, and ambition. I will help shape the interface, architecture, and delivery path around it.</p> <div class="mt-9">`);
	Button($$renderer, {
		href: "/contact",
		cursor: "Send",
		children: ($$renderer) => {
			$$renderer.push(`<!---->Start a conversation`);
		},
		$$slots: { default: true }
	});
	$$renderer.push(`<!----></div></div></section>`);
}
//#endregion
//#region src/lib/components/ui/SectionHeading.svelte
function SectionHeading($$renderer, $$props) {
	let { eyebrow, title, body } = $$props;
	$$renderer.push(`<div class="content-grid"><p class="eyebrow">${escape_html(eyebrow)}</p> <div class="max-w-4xl"><h2 class="large-title">${escape_html(title)}</h2> `);
	if (body) {
		$$renderer.push("<!--[0-->");
		$$renderer.push(`<p class="body-large mt-6 text-[var(--text-muted)]">${escape_html(body)}</p>`);
	} else $$renderer.push("<!--[-1-->");
	$$renderer.push(`<!--]--></div></div>`);
}
//#endregion
//#region src/lib/components/sections/FeaturedProjects.svelte
function FeaturedProjects($$renderer, $$props) {
	let { projects } = $$props;
	$$renderer.push(`<section class="section-pad">`);
	SectionHeading($$renderer, {
		eyebrow: "Featured Systems",
		title: "Product-grade engineering work with architecture, interface quality, and measurable impact."
	});
	$$renderer.push(`<!----> `);
	ScrollReveal($$renderer, {
		class: "mx-auto mt-12 grid max-w-7xl gap-8 md:grid-cols-2 lg:grid-cols-4",
		children: ($$renderer) => {
			$$renderer.push(`<!--[-->`);
			const each_array = ensure_array_like(projects);
			for (let index = 0, $$length = each_array.length; index < $$length; index++) {
				let project = each_array[index];
				$$renderer.push(`<div${attr_class(clsx(index % 2 === 1 ? "md:pt-16" : ""))}>`);
				ProjectCard($$renderer, {
					project,
					index
				});
				$$renderer.push(`<!----></div>`);
			}
			$$renderer.push(`<!--]-->`);
		},
		$$slots: { default: true }
	});
	$$renderer.push(`<!----> <div class="mx-auto mt-12 max-w-7xl">`);
	Button($$renderer, {
		href: "/projects",
		variant: "ghost",
		children: ($$renderer) => {
			$$renderer.push(`<!---->View all projects`);
		},
		$$slots: { default: true }
	});
	$$renderer.push(`<!----></div></section>`);
}
//#endregion
//#region src/lib/components/sections/Hero.svelte
function Hero($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		let { eyebrow, title } = $$props;
		const heroLines = [
			"I build fast, scalable,",
			"product-grade web applications",
			"from interface to infrastructure."
		];
		const capabilities = [
			"SvelteKit",
			"TypeScript",
			"APIs",
			"AI systems"
		];
		$$renderer.push(`<section class="relative min-h-[92vh] overflow-hidden"><div data-hero-media="" class="absolute inset-0 h-[110%]"><video class="h-full w-full object-cover" autoplay="" muted="" loop="" playsinline="" preload="metadata" poster="/hero.png" aria-hidden="true"><source src="/hero.mp4" type="video/mp4"/></video></div> <div class="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col justify-end px-5 pb-24 pt-32 md:px-8 md:pb-28"><div class="grid gap-10 lg:grid-cols-[1fr_18rem] lg:items-end"><div><p class="eyebrow mb-6">${escape_html(eyebrow)}</p> <h1 class="display-title max-w-6xl text-[var(--text)]"${attr("aria-label", title)}><span class="block overflow-hidden"><span data-hero-line="" class="block">${escape_html(heroLines[0])}</span></span> <span class="block overflow-hidden"><span data-hero-line="" class="block"><em class="text-[var(--accent)] not-italic">${escape_html(heroLines[1])}</em></span></span> <span class="block overflow-hidden"><span data-hero-line="" class="block">${escape_html(heroLines[2])}</span></span></h1> <p class="body-large mt-7 max-w-3xl text-[var(--text-muted)]">Full-stack developer focused on SvelteKit, TypeScript, APIs,
          performance, AI workflows, and systems that feel as good as they work.</p> <div class="mt-10 flex flex-wrap gap-3">`);
		Button($$renderer, {
			href: "/projects",
			cursor: "Open",
			children: ($$renderer) => {
				$$renderer.push(`<!---->View projects`);
			},
			$$slots: { default: true }
		});
		$$renderer.push(`<!----> `);
		Button($$renderer, {
			href: "/contact",
			variant: "ghost",
			cursor: "Send",
			children: ($$renderer) => {
				$$renderer.push(`<!---->Contact me`);
			},
			$$slots: { default: true }
		});
		$$renderer.push(`<!----></div></div> <aside data-panda-mark="" class="surface p-5" aria-label="Rhydam Panda capability summary"><div class="flex items-center justify-between gap-4">`);
		Logo($$renderer, { class: "h-14 w-14" });
		$$renderer.push(`<!----> <span class="rounded-[8px] border border-[var(--line)] px-3 py-1 text-xs uppercase text-[var(--text-muted)]">Panda-built</span></div> <p class="mt-6 font-serif text-4xl leading-none">Clean systems. Fast surfaces. Sharp taste.</p> <div class="mt-6 grid grid-cols-2 gap-2"><!--[-->`);
		const each_array = ensure_array_like(capabilities);
		for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
			let capability = each_array[$$index];
			$$renderer.push(`<span class="rounded-[8px] border border-[var(--line)] px-3 py-2 text-sm text-[var(--text-muted)]">${escape_html(capability)}</span>`);
		}
		$$renderer.push(`<!--]--></div></aside></div></div> <div class="absolute bottom-8 right-5 z-10 hidden items-center gap-3 text-sm text-[var(--text-muted)] md:flex"><span class="h-12 w-px bg-[var(--line)]"></span> <span>Scroll</span></div></section>`);
	});
}
//#endregion
//#region src/lib/components/sections/Intro.svelte
function Intro($$renderer, $$props) {
	let { text } = $$props;
	$$renderer.push(`<section class="section-pad">`);
	ScrollReveal($$renderer, {
		class: "content-grid",
		children: ($$renderer) => {
			$$renderer.push(`<p class="eyebrow">Positioning</p> <p class="max-w-5xl font-serif text-3xl leading-tight md:text-5xl">${escape_html(text)}</p>`);
		},
		$$slots: { default: true }
	});
	$$renderer.push(`<!----></section>`);
}
//#endregion
//#region src/lib/components/sections/Marquee.svelte
function Marquee($$renderer) {
	$$renderer.push(`<div class="marquee" aria-hidden="true"><div class="marquee-track"><span>SvelteKit / TypeScript / APIs / AI Dashboards / SaaS / Performance / DevTools / </span> <span>SvelteKit / TypeScript / APIs / AI Dashboards / SaaS / Performance / DevTools / </span> <span>SvelteKit / TypeScript / APIs / AI Dashboards / SaaS / Performance / DevTools / </span> <span>SvelteKit / TypeScript / APIs / AI Dashboards / SaaS / Performance / DevTools / </span></div></div>`);
}
//#endregion
//#region src/lib/components/sections/Services.svelte
function Services($$renderer, $$props) {
	let { services } = $$props;
	$$renderer.push(`<section class="section-pad bg-[var(--text)] text-[var(--bg)]"><div class="mx-auto max-w-6xl">`);
	ScrollReveal($$renderer, {
		children: ($$renderer) => {
			$$renderer.push(`<p class="eyebrow text-[var(--accent)]">Services</p> <h2 class="large-title mt-4 max-w-4xl">From product ambiguity to shipped, scalable systems.</h2>`);
		},
		$$slots: { default: true }
	});
	$$renderer.push(`<!----> <div class="mt-12 divide-y divide-[rgba(7,7,6,0.16)]"><!--[-->`);
	const each_array = ensure_array_like(services);
	for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
		let service = each_array[$$index];
		ScrollReveal($$renderer, {
			children: ($$renderer) => {
				$$renderer.push(`<article class="grid gap-5 py-7 md:grid-cols-[0.2fr_0.8fr_1fr] md:items-start"><span class="text-sm text-[rgba(7,7,6,0.52)]">${escape_html(service.number)}</span> <h3 class="font-serif text-3xl">${escape_html(service.name)}</h3> <p class="text-[rgba(7,7,6,0.68)]">${escape_html(service.description)}</p></article>`);
			},
			$$slots: { default: true }
		});
	}
	$$renderer.push(`<!--]--></div></div></section>`);
}
//#endregion
//#region src/lib/components/sections/Stats.svelte
function Stats($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		let { stats } = $$props;
		let animatedStats = [];
		$$renderer.push(`<section class="section-pad"><div class="mx-auto max-w-6xl">`);
		MetricStrip($$renderer, { items: animatedStats });
		$$renderer.push(`<!----></div></section>`);
	});
}
//#endregion
//#region src/lib/components/sections/Testimonials.svelte
function Testimonials($$renderer, $$props) {
	let { testimonials } = $$props;
	$$renderer.push(`<section class="section-pad border-y border-[var(--line)]"><div class="mx-auto grid max-w-6xl gap-8 md:grid-cols-2"><!--[-->`);
	const each_array = ensure_array_like(testimonials);
	for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
		let testimonial = each_array[$$index];
		ScrollReveal($$renderer, {
			children: ($$renderer) => {
				$$renderer.push(`<figure><blockquote class="font-serif text-3xl leading-tight md:text-4xl">"${escape_html(testimonial.quote)}"</blockquote> <figcaption class="mt-6 text-sm text-[var(--text-muted)]">${escape_html(testimonial.author)} / ${escape_html(testimonial.role)}</figcaption></figure>`);
			},
			$$slots: { default: true }
		});
	}
	$$renderer.push(`<!--]--></div></section>`);
}
//#endregion
//#region src/lib/components/loader/SectionSkeleton.svelte
function SectionSkeleton($$renderer, $$props) {
	let { rows = 3 } = $$props;
	$$renderer.push(`<div class="content-grid" aria-hidden="true"><div class="skeleton-shimmer h-4 w-28 rounded-[8px]"></div> <div><div class="skeleton-shimmer h-12 w-4/5 rounded-[8px]"></div> <div class="mt-8 space-y-4"><!--[-->`);
	const each_array = ensure_array_like(Array.from({ length: rows }));
	for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
		each_array[$$index];
		$$renderer.push(`<div class="skeleton-shimmer h-5 rounded-[8px]"></div>`);
	}
	$$renderer.push(`<!--]--></div></div></div>`);
}
//#endregion
//#region src/routes/+page.svelte
function _page($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		let { data } = $$props;
		Seo($$renderer, { seo: data.seo });
		$$renderer.push(`<!----> `);
		Hero($$renderer, {
			eyebrow: data.hero.eyebrow,
			title: data.hero.title,
			image: data.hero.image
		});
		$$renderer.push(`<!----> `);
		Intro($$renderer, { text: data.intro });
		$$renderer.push(`<!----> `);
		await_block($$renderer, data.featuredProjects, () => {
			$$renderer.push(`<section class="section-pad">`);
			{
				function fallback($$renderer) {
					ProjectGridSkeleton($$renderer, {});
				}
				Skeleton($$renderer, {
					name: "home-featured-projects",
					loading: true,
					animate: "shimmer",
					fallback,
					children: ($$renderer) => {
						ProjectGridSkeleton($$renderer, {});
					},
					$$slots: {
						fallback: true,
						default: true
					}
				});
			}
			$$renderer.push(`<!----></section>`);
		}, (featuredProjects) => {
			Skeleton($$renderer, {
				name: "home-featured-projects",
				loading: false,
				animate: "shimmer",
				children: ($$renderer) => {
					FeaturedProjects($$renderer, { projects: featuredProjects });
				},
				$$slots: { default: true }
			});
		});
		$$renderer.push(`<!--]--> `);
		Marquee($$renderer, {});
		$$renderer.push(`<!----> `);
		await_block($$renderer, data.services, () => {
			$$renderer.push(`<section class="section-pad">`);
			{
				function fallback($$renderer) {
					SectionSkeleton($$renderer, { rows: 5 });
				}
				Skeleton($$renderer, {
					name: "home-services",
					loading: true,
					animate: "shimmer",
					fallback,
					children: ($$renderer) => {
						SectionSkeleton($$renderer, { rows: 5 });
					},
					$$slots: {
						fallback: true,
						default: true
					}
				});
			}
			$$renderer.push(`<!----></section>`);
		}, (services) => {
			Skeleton($$renderer, {
				name: "home-services",
				loading: false,
				animate: "shimmer",
				children: ($$renderer) => {
					Services($$renderer, { services });
				},
				$$slots: { default: true }
			});
		});
		$$renderer.push(`<!--]--> `);
		await_block($$renderer, data.stats, () => {
			$$renderer.push(`<section class="section-pad">`);
			{
				function fallback($$renderer) {
					SectionSkeleton($$renderer, { rows: 2 });
				}
				Skeleton($$renderer, {
					name: "home-stats",
					loading: true,
					animate: "shimmer",
					fallback,
					children: ($$renderer) => {
						SectionSkeleton($$renderer, { rows: 2 });
					},
					$$slots: {
						fallback: true,
						default: true
					}
				});
			}
			$$renderer.push(`<!----></section>`);
		}, (stats) => {
			Skeleton($$renderer, {
				name: "home-stats",
				loading: false,
				animate: "shimmer",
				children: ($$renderer) => {
					Stats($$renderer, { stats });
				},
				$$slots: { default: true }
			});
		});
		$$renderer.push(`<!--]--> `);
		await_block($$renderer, data.testimonials, () => {
			$$renderer.push(`<section class="section-pad">`);
			{
				function fallback($$renderer) {
					SectionSkeleton($$renderer, { rows: 4 });
				}
				Skeleton($$renderer, {
					name: "home-testimonials",
					loading: true,
					animate: "shimmer",
					fallback,
					children: ($$renderer) => {
						SectionSkeleton($$renderer, { rows: 4 });
					},
					$$slots: {
						fallback: true,
						default: true
					}
				});
			}
			$$renderer.push(`<!----></section>`);
		}, (testimonials) => {
			Skeleton($$renderer, {
				name: "home-testimonials",
				loading: false,
				animate: "shimmer",
				children: ($$renderer) => {
					Testimonials($$renderer, { testimonials });
				},
				$$slots: { default: true }
			});
		});
		$$renderer.push(`<!--]--> `);
		CTA($$renderer, {});
		$$renderer.push(`<!---->`);
	});
}
//#endregion
export { _page as default };
