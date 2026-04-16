import { n as createSeo } from "./seo.js";
//#region src/lib/data/blog.ts
var blogPosts = [
	{
		slug: "designing-type-safe-apis",
		title: "Designing Type-Safe APIs That Survive Product Change",
		category: "Architecture",
		publishedAt: "2026-03-18",
		readingTime: "7 min read",
		excerpt: "A practical way to treat API contracts as product infrastructure instead of a loose agreement between screens and services.",
		hero: {
			src: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4",
			alt: "TypeScript code editor with typed API contract work",
			width: 1600,
			height: 1e3
		},
		featured: true,
		author: "Rhydam Panda",
		blocks: [
			{
				id: "contracts-are-product-surface",
				heading: "Contracts are product surface",
				body: ["A strong API contract does more than prevent runtime bugs. It defines what the product can safely promise to the interface, the team, and future integrations.", "When the contract is typed, validated, and versioned intentionally, product change becomes easier to absorb without turning every feature into a cross-team negotiation."]
			},
			{
				id: "model-the-boundary",
				heading: "Model the boundary",
				body: ["I like schemas at the edges, domain types in the core, and explicit mappers between the two. That keeps persistence concerns from leaking into UI decisions.", "The goal is not to make types impressive. The goal is to make invalid states expensive to create and easy to catch before users find them."]
			},
			{
				id: "design-for-change",
				heading: "Design for change",
				body: ["The best API systems leave room for new fields, changed business rules, and more specific permissions without silently breaking old clients.", "That usually means smaller response shapes, deliberate nullability, strong errors, and tests that prove the contract rather than only the happy path."]
			}
		]
	},
	{
		slug: "frontend-performance-budgets",
		title: "How I Think About Frontend Performance Budgets",
		category: "Performance",
		publishedAt: "2026-02-11",
		readingTime: "6 min read",
		excerpt: "Performance work becomes calmer when it has a budget, an owner, and a product reason for every byte of JavaScript.",
		hero: {
			src: "https://images.unsplash.com/photo-1551288049-bebda4e38f71",
			alt: "Performance dashboard with web metrics and charts",
			width: 1600,
			height: 1e3
		},
		featured: false,
		author: "Rhydam Panda",
		blocks: [
			{
				id: "budget-before-polish",
				heading: "Budget before polish",
				body: ["A performance budget is not a late QA checklist. It is a design constraint that decides what earns a place in the first load.", "When a team agrees on LCP, CLS, interaction cost, image strategy, and script limits early, the interface can stay ambitious without becoming heavy."]
			},
			{
				id: "measure-real-paths",
				heading: "Measure real paths",
				body: ["Lab scores matter, but the product path matters more. The template that drives revenue, signups, or daily work gets the strictest budget.", "I track the parts users actually wait on: hero media, route data, hydration cost, long tasks, and transitions that hide or reveal latency."]
			},
			{
				id: "make-speed-visible",
				heading: "Make speed visible",
				body: ["Teams protect what they can see. Budgets should show up in pull requests, dashboards, component reviews, and design conversations.", "Performance is easier to preserve when everyone understands the tradeoff in product language rather than only Lighthouse terminology."]
			}
		]
	},
	{
		slug: "server-first-dashboards",
		title: "Building Better Dashboards With Server-First Data",
		category: "Data",
		publishedAt: "2026-01-22",
		readingTime: "8 min read",
		excerpt: "Dashboards feel sharper when the server owns data shape, caching, permissions, and the expensive work behind the interface.",
		hero: {
			src: "https://images.unsplash.com/photo-1460925895917-afdab827c52f",
			alt: "Business intelligence dashboard with typed server data",
			width: 1600,
			height: 1e3
		},
		featured: false,
		author: "Rhydam Panda",
		blocks: [
			{
				id: "shape-data-upstream",
				heading: "Shape data upstream",
				body: ["A dashboard is not a collection of charts. It is a series of decisions about what the user needs to know next.", "Server-first data lets the product shape those decisions close to permissions, cache rules, and domain logic instead of pushing complexity into every chart component."]
			},
			{
				id: "cache-the-question",
				heading: "Cache the question",
				body: ["Caching works best when it reflects the question being asked: current health, trailing trend, account detail, or long-running export.", "Different questions deserve different freshness windows. A single cache strategy usually means the product has not described the workflow clearly enough."]
			},
			{
				id: "stream-what-matters",
				heading: "Stream what matters",
				body: ["Streaming is useful when it gets meaningful UI on screen before the slowest data finishes. It is not useful when it merely makes loading look busy.", "I prefer skeletons that match the final layout and progressive sections that let the user orient before deeper analysis arrives."]
			}
		]
	},
	{
		slug: "full-stack-product-taste",
		title: "Why Full Stack Developers Need Product Taste",
		category: "Product",
		publishedAt: "2025-12-05",
		readingTime: "5 min read",
		excerpt: "The best full-stack work happens when engineering decisions understand user pressure, business timing, and visual quality.",
		hero: {
			src: "https://images.unsplash.com/photo-1552664730-d307ca884978",
			alt: "Product engineering team discussing interface and architecture decisions",
			width: 1600,
			height: 1e3
		},
		featured: false,
		author: "Rhydam Panda",
		blocks: [
			{
				id: "taste-is-judgment",
				heading: "Taste is judgment",
				body: ["Product taste is the ability to know which technical detail changes the user experience and which one only satisfies the builder.", "A full-stack developer with taste can move between database constraints, interface rhythm, and release risk without treating them as separate worlds."]
			},
			{
				id: "interfaces-reveal-systems",
				heading: "Interfaces reveal systems",
				body: ["A messy interface often exposes a messy data model. A slow flow often exposes unclear ownership. A confusing error often exposes a weak domain rule.", "Product taste helps engineers read those symptoms and fix the system underneath instead of polishing the wrong layer."]
			},
			{
				id: "ship-with-intention",
				heading: "Ship with intention",
				body: ["Taste does not mean moving slowly. It means knowing what must be excellent now and what can stay deliberately simple until the product proves it needs more.", "That judgment is what turns technical delivery into product momentum."]
			}
		]
	},
	{
		slug: "system-design-small-saas",
		title: "Practical System Design for Small SaaS Teams",
		category: "System Design",
		publishedAt: "2025-11-14",
		readingTime: "7 min read",
		excerpt: "Small teams need architecture that protects the business without copying enterprise complexity before it is earned.",
		hero: {
			src: "https://images.unsplash.com/photo-1556155092-490a1ba16284",
			alt: "SaaS system design planning with product dashboard and notes",
			width: 1600,
			height: 1e3
		},
		featured: false,
		author: "Rhydam Panda",
		blocks: [
			{
				id: "optimize-for-reversibility",
				heading: "Optimize for reversibility",
				body: ["Early SaaS architecture should make common decisions reversible: vendor choices, queue strategy, deployment shape, and analytics assumptions.", "The system still needs strong boundaries, but those boundaries should protect the product from chaos rather than lock it into premature scale theater."]
			},
			{
				id: "choose-boring-strength",
				heading: "Choose boring strength",
				body: ["A typed monolith with good data modeling, clear modules, tested workflows, and a clean deployment story can beat a scattered microservice setup for a long time.", "The most useful architecture is often the one the team can understand during an incident."]
			},
			{
				id: "scale-the-bottleneck",
				heading: "Scale the bottleneck",
				body: ["Do not scale the diagram. Scale the pain. Find the expensive query, the unreliable queue, the overloaded endpoint, or the workflow that blocks support.", "Practical system design starts with the product constraint and changes only the parts that have earned the complexity."]
			}
		]
	}
];
//#endregion
//#region src/lib/data/projects.ts
var projects = [
	{
		slug: "ai-analytics-dashboard",
		title: "AI Analytics Dashboard",
		client: "Operator intelligence platform",
		category: "AI",
		categories: [
			"AI",
			"SaaS",
			"Full Stack",
			"Backend"
		],
		year: "2026",
		location: "SaaS control plane",
		excerpt: "A server-first analytics system with streaming AI summaries, cached operational views, and typed data contracts from ingestion to interface.",
		stack: [
			"SvelteKit",
			"TypeScript",
			"PostgreSQL",
			"OpenAI API",
			"Tailwind",
			"Redis"
		],
		role: "Full-stack architecture, dashboard UX, API contracts, AI workflow integration",
		timeline: "10 weeks",
		impact: "64% faster weekly reporting",
		hero: {
			src: "https://images.unsplash.com/photo-1551288049-bebda4e38f71",
			alt: "Analytics dashboard interface with charts and operational data",
			width: 1920,
			height: 1280,
			focal: "center"
		},
		thumbnail: {
			src: "https://images.unsplash.com/photo-1460925895917-afdab827c52f",
			alt: "Laptop showing product analytics and growth charts",
			width: 1200,
			height: 1500,
			focal: "center"
		},
		metrics: [
			{
				value: "64%",
				label: "faster reporting",
				detail: "weekly ops reviews moved from manual decks to live data"
			},
			{
				value: "1.2s",
				label: "cached insight load",
				detail: "Redis-backed dashboards with typed response contracts"
			},
			{
				value: "18",
				label: "data streams",
				detail: "events normalized into operational views and AI summaries"
			},
			{
				value: "0",
				label: "untyped payloads",
				detail: "schema boundaries enforced across ingestion and UI"
			}
		],
		story: [
			{
				eyebrow: "Problem",
				title: "Teams had data, but no real-time operational judgment.",
				body: "Critical metrics lived across spreadsheets, internal tools, and ad hoc reports. Leaders could see activity after the fact, but not the signals that needed action during the week."
			},
			{
				eyebrow: "Architecture",
				title: "An event-driven pipeline feeds a typed dashboard layer.",
				body: "The system normalizes source events into PostgreSQL, caches high-demand aggregates in Redis, and exposes strict TypeScript contracts for charts, tables, alerts, and AI-generated summaries."
			},
			{
				eyebrow: "Implementation",
				title: "Server-first screens keep the interface fast and accountable.",
				body: "I built authenticated dashboard routes, streaming summary responses, optimistic filter states, chart modules, cache invalidation rules, and a compact admin layer for source health."
			},
			{
				eyebrow: "Impact",
				title: "Reporting became a product workflow instead of a weekly chore.",
				body: "Manual analysis dropped sharply, decision loops tightened, and teams gained a shared operational cockpit that made risk, momentum, and next actions visible."
			}
		],
		gallery: [
			{
				src: "https://images.unsplash.com/photo-1551434678-e076c223a692",
				alt: "Product team reviewing dashboard data on a large screen",
				width: 1600,
				height: 1100
			},
			{
				src: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3",
				alt: "Developer workstation with application interface open",
				width: 1400,
				height: 1800
			},
			{
				src: "https://images.unsplash.com/photo-1556155092-490a1ba16284",
				alt: "Data product interface on laptop with charts and graphs",
				width: 1600,
				height: 1100
			}
		],
		services: [
			"AI workflows",
			"Typed APIs",
			"Dashboard systems",
			"Caching strategy"
		],
		featured: true
	},
	{
		slug: "fintech-admin-platform",
		title: "Fintech Admin Platform",
		client: "Secure transaction operations",
		category: "Full Stack",
		categories: [
			"Full Stack",
			"Backend",
			"SaaS"
		],
		year: "2025",
		location: "Internal platform",
		excerpt: "A secure admin product for transaction review, audit trails, role-based access, validation, and operational reliability.",
		stack: [
			"SvelteKit",
			"Node.js",
			"PostgreSQL",
			"Prisma",
			"Stripe",
			"Docker"
		],
		role: "Application architecture, data modeling, secure workflows, dashboard implementation",
		timeline: "12 weeks",
		impact: "41% lower manual review time",
		hero: {
			src: "https://images.unsplash.com/photo-1554224155-6726b3ff858f",
			alt: "Financial operations workspace with secure transaction review tools",
			width: 1920,
			height: 1280,
			focal: "center"
		},
		thumbnail: {
			src: "https://images.unsplash.com/photo-1554224154-26032ffc0d07",
			alt: "Finance dashboard workflow with documents and laptop",
			width: 1200,
			height: 1500,
			focal: "center"
		},
		metrics: [
			{
				value: "41%",
				label: "less review time",
				detail: "triage queues replaced manual spreadsheet checks"
			},
			{
				value: "99.9%",
				label: "workflow uptime",
				detail: "containerized services with health checks and logging"
			},
			{
				value: "7",
				label: "permission tiers",
				detail: "RBAC mapped to operational responsibility"
			},
			{
				value: "100%",
				label: "audited actions",
				detail: "write flows tracked with immutable event logs"
			}
		],
		story: [
			{
				eyebrow: "Problem",
				title: "Sensitive workflows were moving through fragile manual review.",
				body: "Operations teams needed to review transactions, resolve exceptions, and prove compliance without relying on disconnected spreadsheets or unclear ownership."
			},
			{
				eyebrow: "Architecture",
				title: "RBAC, audit logs, and transactions shaped the core model.",
				body: "I designed the platform around role boundaries, immutable audit events, validated state transitions, and database constraints that made unsafe actions harder to express."
			},
			{
				eyebrow: "Implementation",
				title: "Every interaction carries validation, traceability, and recovery.",
				body: "The build included dashboard queues, API routes, schema validation, Stripe-adjacent workflows, migration discipline, Dockerized services, and operator-friendly error states."
			},
			{
				eyebrow: "Impact",
				title: "The review process became faster without becoming looser.",
				body: "Manual review time dropped, escalation paths became clearer, and the platform gave leadership a stronger reliability and compliance story."
			}
		],
		gallery: [
			{
				src: "https://images.unsplash.com/photo-1559526324-593bc073d938",
				alt: "Secure financial data displayed on a workstation",
				width: 1600,
				height: 1100
			},
			{
				src: "https://images.unsplash.com/photo-1563986768609-322da13575f3",
				alt: "Close up of secure financial technology workflow",
				width: 1400,
				height: 1800
			},
			{
				src: "https://images.unsplash.com/photo-1554224154-22dec7ec8818",
				alt: "Financial operations interface and audit review documents",
				width: 1600,
				height: 1100
			}
		],
		services: [
			"RBAC systems",
			"Database design",
			"Audit trails",
			"Payment workflows"
		],
		featured: true
	},
	{
		slug: "developer-automation-tool",
		title: "Developer Automation Tool",
		client: "Release workflow accelerator",
		category: "DevTools",
		categories: [
			"DevTools",
			"Backend",
			"Performance"
		],
		year: "2025",
		location: "CLI and GitHub automation",
		excerpt: "A TypeScript CLI that turns repeated release, QA, and repository maintenance tasks into observable, configurable workflows.",
		stack: [
			"TypeScript",
			"Node.js",
			"CLI",
			"GitHub API",
			"Playwright"
		],
		role: "CLI architecture, GitHub integration, config system, test automation",
		timeline: "8 weeks",
		impact: "3x faster release prep",
		hero: {
			src: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4",
			alt: "Developer writing TypeScript automation code on a laptop",
			width: 1920,
			height: 1280,
			focal: "center"
		},
		thumbnail: {
			src: "https://images.unsplash.com/photo-1555066931-4365d14bab8c",
			alt: "Code editor showing automation scripts",
			width: 1200,
			height: 1500,
			focal: "center"
		},
		metrics: [
			{
				value: "3x",
				label: "faster release prep",
				detail: "repeatable checks replaced hand-managed rituals"
			},
			{
				value: "24",
				label: "workflow commands",
				detail: "release, QA, repository, and reporting tasks"
			},
			{
				value: "-52%",
				label: "manual errors",
				detail: "guardrails added before deploy-critical operations"
			},
			{
				value: "9m",
				label: "average setup",
				detail: "project config bootstrapped from sensible defaults"
			}
		],
		story: [
			{
				eyebrow: "Problem",
				title: "Engineering teams were losing time to repetitive coordination.",
				body: "Release prep, QA checks, issue hygiene, and browser verification were repeatable but still performed manually, which created drift and avoidable mistakes."
			},
			{
				eyebrow: "Architecture",
				title: "A CLI-first workflow keeps automation close to the developer.",
				body: "The tool wraps GitHub API calls, Playwright checks, project configuration, logs, and dry-run safety into commands that match how engineers already work."
			},
			{
				eyebrow: "Implementation",
				title: "Clear command contracts make automation understandable.",
				body: "I built the parser, config loader, API client, structured logs, retry handling, browser checks, and a plugin-friendly command layout without hiding critical output."
			},
			{
				eyebrow: "Impact",
				title: "Releases became calmer, faster, and easier to trust.",
				body: "The system reduced manual errors, improved handoff quality, and gave teams a shared release workflow that scaled beyond one maintainer."
			}
		],
		gallery: [
			{
				src: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5",
				alt: "Code and logs on a dark development screen",
				width: 1600,
				height: 1100
			},
			{
				src: "https://images.unsplash.com/photo-1556075798-4825dfaaf498",
				alt: "Git workflow and repository automation on a laptop",
				width: 1400,
				height: 1800
			},
			{
				src: "https://images.unsplash.com/photo-1550439062-609e1531270e",
				alt: "Developer tools and automated test output on workstation",
				width: 1600,
				height: 1100
			}
		],
		services: [
			"CLI systems",
			"GitHub automation",
			"Playwright QA",
			"Developer experience"
		],
		featured: true
	},
	{
		slug: "ecommerce-performance-rebuild",
		title: "E-commerce Performance Rebuild",
		client: "High-conversion storefront",
		category: "Performance",
		categories: [
			"Performance",
			"Frontend",
			"Full Stack"
		],
		year: "2024",
		location: "Edge-rendered storefront",
		excerpt: "A storefront rebuild focused on SSR, route splitting, image discipline, cache strategy, and conversion-safe product interactions.",
		stack: [
			"SvelteKit",
			"Tailwind",
			"Vite",
			"Headless CMS",
			"Edge rendering"
		],
		role: "Frontend architecture, performance budgets, product UI, caching strategy",
		timeline: "9 weeks",
		impact: "Lighthouse 97 performance",
		hero: {
			src: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d",
			alt: "Modern ecommerce experience with product and checkout interface",
			width: 1920,
			height: 1280,
			focal: "center"
		},
		thumbnail: {
			src: "https://images.unsplash.com/photo-1556742502-ec7c0e9f34b1",
			alt: "Online storefront workflow on a laptop and mobile device",
			width: 1200,
			height: 1500,
			focal: "center"
		},
		metrics: [
			{
				value: "97",
				label: "Lighthouse score",
				detail: "performance measured after launch on key templates"
			},
			{
				value: "0.01",
				label: "CLS",
				detail: "stable product media and reserved interaction zones"
			},
			{
				value: "-38%",
				label: "LCP reduction",
				detail: "critical media and SSR strategy reduced first view delay"
			},
			{
				value: "+19%",
				label: "cart starts",
				detail: "faster paths and clearer filtering improved intent"
			}
		],
		story: [
			{
				eyebrow: "Problem",
				title: "A slow storefront was taxing attention before the product could sell.",
				body: "Large assets, client-heavy interactions, unstable media, and unfocused routing were hurting conversion-sensitive pages."
			},
			{
				eyebrow: "Architecture",
				title: "Server rendering and cache boundaries carried the experience.",
				body: "The rebuild used SSR, route-level code splitting, CMS data normalization, responsive images, edge caching, and performance budgets baked into the component model."
			},
			{
				eyebrow: "Implementation",
				title: "Product browsing stayed rich without becoming heavy.",
				body: "I rebuilt product pages, filtering, cart interactions, media handling, metadata, skeleton states, and analytics hooks with a strict JavaScript budget."
			},
			{
				eyebrow: "Impact",
				title: "The storefront felt sharper because the system became lighter.",
				body: "The rebuild delivered a 95+ Lighthouse profile, lower layout shift, faster LCP, and cleaner product discovery across device sizes."
			}
		],
		gallery: [
			{
				src: "https://images.unsplash.com/photo-1556741533-6e6a62bd8b49",
				alt: "Digital storefront checkout flow on laptop",
				width: 1600,
				height: 1100
			},
			{
				src: "https://images.unsplash.com/photo-1512428559087-560fa5ceab42",
				alt: "Mobile commerce interface and product browsing",
				width: 1400,
				height: 1800
			},
			{
				src: "https://images.unsplash.com/photo-1556741533-f6acd647d2fb",
				alt: "Online product experience with optimized ecommerce workflow",
				width: 1600,
				height: 1100
			}
		],
		services: [
			"Performance audits",
			"SSR storefronts",
			"Image strategy",
			"Conversion UX"
		],
		featured: true
	},
	{
		slug: "realtime-collaboration-app",
		title: "Real-time Collaboration App",
		client: "Shared workspace system",
		category: "Realtime",
		categories: [
			"Realtime",
			"Full Stack",
			"Backend",
			"SaaS"
		],
		year: "2026",
		location: "Multi-user product",
		excerpt: "A collaborative workspace with WebSocket sync, presence, optimistic UI, conflict handling, permissions, and durable state.",
		stack: [
			"WebSockets",
			"PostgreSQL",
			"Redis",
			"SvelteKit",
			"TypeScript"
		],
		role: "Realtime architecture, state sync, permissions, product interaction design",
		timeline: "11 weeks",
		impact: "72ms median sync latency",
		hero: {
			src: "https://images.unsplash.com/photo-1552664730-d307ca884978",
			alt: "Product team collaborating around a shared digital workspace",
			width: 1920,
			height: 1280,
			focal: "center"
		},
		thumbnail: {
			src: "https://images.unsplash.com/photo-1517048676732-d65bc937f952",
			alt: "Team using a collaborative product workspace",
			width: 1200,
			height: 1500,
			focal: "center"
		},
		metrics: [
			{
				value: "72ms",
				label: "median sync",
				detail: "presence and workspace events across active rooms"
			},
			{
				value: "12k",
				label: "events tested",
				detail: "load simulation across document and presence flows"
			},
			{
				value: "4",
				label: "conflict paths",
				detail: "optimistic edits, stale state, reconnects, permissions"
			},
			{
				value: "98%",
				label: "successful reconnects",
				detail: "queued operations replayed after network drops"
			}
		],
		story: [
			{
				eyebrow: "Problem",
				title: "Shared work felt slow when state drifted between teammates.",
				body: "Users needed a workspace where presence, edits, permissions, and persistence stayed aligned without turning the interface into a blocking experience."
			},
			{
				eyebrow: "Architecture",
				title: "Realtime sync sits beside durable product state.",
				body: "WebSockets handle presence and fast interaction events, Redis manages fanout and short-lived coordination, and PostgreSQL remains the durable source for workspace data."
			},
			{
				eyebrow: "Implementation",
				title: "Optimistic UI makes collaboration feel immediate.",
				body: "I built the socket layer, event protocol, state reconciliation, reconnect handling, permission checks, and UI patterns for presence, conflict states, and graceful failure."
			},
			{
				eyebrow: "Impact",
				title: "The product felt multiplayer without feeling chaotic.",
				body: "Users saw lower latency, clearer activity, fewer lost edits, and a smoother path from live collaboration to persistent workspace history."
			}
		],
		gallery: [
			{
				src: "https://images.unsplash.com/photo-1552581234-26160f608093",
				alt: "Collaborative digital workspace discussion with screens",
				width: 1600,
				height: 1100
			},
			{
				src: "https://images.unsplash.com/photo-1522071820081-009f0129c71c",
				alt: "Engineering team coordinating a real-time product session",
				width: 1400,
				height: 1800
			},
			{
				src: "https://images.unsplash.com/photo-1497366754035-f200968a6e72",
				alt: "Team reviewing software product screens together",
				width: 1600,
				height: 1100
			}
		],
		services: [
			"Realtime sync",
			"Optimistic UI",
			"Permissions",
			"State persistence"
		],
		featured: false
	}
];
//#endregion
//#region src/lib/data/studio.ts
var services = [
	{
		number: "01",
		name: "Full-Stack Product Builds",
		description: "SaaS applications, admin platforms, dashboards, auth flows, server routes, and durable product foundations."
	},
	{
		number: "02",
		name: "Frontend Systems",
		description: "SvelteKit and TypeScript interfaces with responsive layouts, motion discipline, accessibility, and strong performance budgets."
	},
	{
		number: "03",
		name: "Backend and APIs",
		description: "Typed API contracts, PostgreSQL data models, validation, caching, permissions, logs, and workflow automation."
	},
	{
		number: "04",
		name: "AI Product Integration",
		description: "OpenAI-powered summaries, assistant workflows, retrieval patterns, streaming responses, and operational dashboards."
	},
	{
		number: "05",
		name: "Performance and DX",
		description: "Lighthouse-focused rebuilds, route splitting, image strategy, developer tooling, CI checks, and release automation."
	}
];
var stats = [
	{
		value: "25+",
		label: "Product systems built"
	},
	{
		value: "95+",
		label: "Lighthouse target"
	},
	{
		value: "12",
		label: "Core technologies"
	},
	{
		value: "0",
		label: "Tolerance for fragile UX"
	}
];
var testimonials = [{
	quote: "Rhydam turned a messy internal workflow into a calm, typed product system. The interface felt premium, but the real value was how clean the underlying architecture became.",
	author: "Product Lead",
	role: "AI SaaS company"
}, {
	quote: "He thinks like an engineer and a product designer at the same time. Every technical decision had a reason, and the final build felt faster than our team expected.",
	author: "Founder",
	role: "Fintech platform"
}];
var timeline = [
	{
		year: "01",
		title: "Started with interfaces",
		body: "Built polished frontend experiences and learned how small details in layout, motion, and loading states change trust."
	},
	{
		year: "02",
		title: "Moved into full-stack architecture",
		body: "Connected product interfaces to APIs, data models, auth, caching, and operational workflows that survive real users."
	},
	{
		year: "03",
		title: "Built production SaaS systems",
		body: "Delivered dashboards, admin tools, automation workflows, payment-adjacent systems, and performance-critical storefronts."
	},
	{
		year: "04",
		title: "Focused on AI, performance, and DX",
		body: "Now building product-grade systems where AI workflows, fast interfaces, and developer experience reinforce each other."
	}
];
var team = [
	{
		name: "Frontend Craft",
		role: "SvelteKit, TypeScript, Tailwind, motion systems, accessibility, responsive UI",
		image: {
			src: "https://images.unsplash.com/photo-1555066931-4365d14bab8c",
			alt: "Frontend TypeScript interface code on a developer workstation",
			width: 900,
			height: 1100
		}
	},
	{
		name: "Backend Systems",
		role: "Node.js, PostgreSQL, Prisma, Redis, auth, API contracts, queues, observability",
		image: {
			src: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3",
			alt: "Backend system dashboard and code on laptop",
			width: 900,
			height: 1100
		}
	},
	{
		name: "Product Engineering",
		role: "AI integrations, SaaS workflows, performance budgets, automation, design-to-code",
		image: {
			src: "https://images.unsplash.com/photo-1552664730-d307ca884978",
			alt: "Product engineering planning session with software interface",
			width: 900,
			height: 1100
		}
	}
];
//#endregion
//#region src/lib/api/portfolio.ts
var categories = [
	"Full Stack",
	"Frontend",
	"Backend",
	"AI",
	"SaaS",
	"DevTools",
	"Performance"
];
function sortPosts(posts) {
	return [...posts].sort((a, b) => Date.parse(b.publishedAt) - Date.parse(a.publishedAt));
}
async function getHomePage() {
	return {
		seo: createSeo({
			title: "Rhydam Panda | Full Stack Developer",
			description: "A premium full-stack developer portfolio for Rhydam Panda, focused on SvelteKit, TypeScript, SaaS products, AI dashboards, APIs, and scalable web systems.",
			canonical: "/",
			image: projects[0]?.hero.src
		}),
		hero: {
			eyebrow: "Rhydam Panda / Full Stack Developer",
			title: "I build fast, scalable, product-grade web applications from interface to infrastructure.",
			image: projects[0]?.hero
		},
		intro: "I bridge product thinking, visual detail, and scalable engineering to ship SaaS platforms, AI-powered dashboards, APIs, automation tools, and frontend experiences that feel as sharp as they are reliable."
	};
}
async function getFeaturedProjects() {
	return projects.filter((project) => project.featured).slice(0, 4);
}
async function getProjects() {
	return projects;
}
async function getProjectCategories() {
	return categories;
}
async function getProjectBySlug(slug) {
	return projects.find((project) => project.slug === slug);
}
async function getNextProject(slug) {
	const index = projects.findIndex((project) => project.slug === slug);
	const nextProject = projects[index >= 0 ? (index + 1) % projects.length : 0];
	if (!nextProject) throw new Error("No project data available");
	return nextProject;
}
async function getServices() {
	return services;
}
async function getStats() {
	return stats;
}
async function getTestimonials() {
	return testimonials;
}
async function getBlogPosts() {
	return sortPosts(blogPosts);
}
async function getFeaturedBlogPost() {
	const featured = blogPosts.find((post) => post.featured) ?? sortPosts(blogPosts)[0];
	if (!featured) throw new Error("No blog content available");
	return featured;
}
async function getBlogPostBySlug(slug) {
	return blogPosts.find((post) => post.slug === slug);
}
async function getDeveloperProfile() {
	return {
		seo: createSeo({
			title: "About",
			description: "About Rhydam Panda, a full-stack developer connecting product taste, visual detail, and scalable engineering systems.",
			canonical: "/about",
			image: team[0]?.image.src
		}),
		timeline,
		team,
		stats
	};
}
async function getWorkPage() {
	return {
		seo: createSeo({
			title: "Work",
			description: "Selected engineering work by Rhydam Panda across SaaS platforms, dashboards, DevTools, backend systems, and performance rebuilds.",
			canonical: "/work",
			image: projects[1]?.hero.src
		}),
		projects: projects.filter((project) => project.featured).slice(0, 3)
	};
}
async function getPhilosophyPage() {
	return {
		seo: createSeo({
			title: "Philosophy",
			description: "Engineering principles from Rhydam Panda on performance, type safety, product systems, data modeling, and meaningful motion.",
			canonical: "/philosophy",
			image: projects[2]?.hero.src
		}),
		principles: [
			"Performance is a feature.",
			"Good UI starts with good data modeling.",
			"Type safety is a product decision.",
			"The best systems feel simple at the surface.",
			"Motion should guide, not distract.",
			"Every abstraction must earn its place."
		]
	};
}
async function getContactPage() {
	return { seo: createSeo({
		title: "Contact",
		description: "Contact Rhydam Panda about SaaS builds, frontend systems, backend APIs, AI integration, performance work, and technical consulting.",
		canonical: "/contact",
		image: projects[3]?.hero.src
	}) };
}
//#endregion
export { getFeaturedBlogPost as a, getNextProject as c, getProjectCategories as d, getProjects as f, getWorkPage as g, getTestimonials as h, getDeveloperProfile as i, getPhilosophyPage as l, getStats as m, getBlogPosts as n, getFeaturedProjects as o, getServices as p, getContactPage as r, getHomePage as s, getBlogPostBySlug as t, getProjectBySlug as u };
