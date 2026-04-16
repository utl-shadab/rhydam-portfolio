import type { Project } from '$types/content';

export const projects: Project[] = [
  {
    slug: 'ai-analytics-dashboard',
    title: 'AI Analytics Dashboard',
    client: 'Operator intelligence platform',
    category: 'AI',
    categories: ['AI', 'SaaS', 'Full Stack', 'Backend'],
    year: '2026',
    location: 'SaaS control plane',
    excerpt:
      'A server-first analytics system with streaming AI summaries, cached operational views, and typed data contracts from ingestion to interface.',
    stack: ['SvelteKit', 'TypeScript', 'PostgreSQL', 'OpenAI API', 'Tailwind', 'Redis'],
    role: 'Full-stack architecture, dashboard UX, API contracts, AI workflow integration',
    timeline: '10 weeks',
    impact: '64% faster weekly reporting',
    hero: {
      src: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71',
      alt: 'Analytics dashboard interface with charts and operational data',
      width: 1920,
      height: 1280,
      focal: 'center'
    },
    thumbnail: {
      src: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f',
      alt: 'Laptop showing product analytics and growth charts',
      width: 1200,
      height: 1500,
      focal: 'center'
    },
    metrics: [
      { value: '64%', label: 'faster reporting', detail: 'weekly ops reviews moved from manual decks to live data' },
      { value: '1.2s', label: 'cached insight load', detail: 'Redis-backed dashboards with typed response contracts' },
      { value: '18', label: 'data streams', detail: 'events normalized into operational views and AI summaries' },
      { value: '0', label: 'untyped payloads', detail: 'schema boundaries enforced across ingestion and UI' }
    ],
    story: [
      {
        eyebrow: 'Problem',
        title: 'Teams had data, but no real-time operational judgment.',
        body:
          'Critical metrics lived across spreadsheets, internal tools, and ad hoc reports. Leaders could see activity after the fact, but not the signals that needed action during the week.'
      },
      {
        eyebrow: 'Architecture',
        title: 'An event-driven pipeline feeds a typed dashboard layer.',
        body:
          'The system normalizes source events into PostgreSQL, caches high-demand aggregates in Redis, and exposes strict TypeScript contracts for charts, tables, alerts, and AI-generated summaries.'
      },
      {
        eyebrow: 'Implementation',
        title: 'Server-first screens keep the interface fast and accountable.',
        body:
          'I built authenticated dashboard routes, streaming summary responses, optimistic filter states, chart modules, cache invalidation rules, and a compact admin layer for source health.'
      },
      {
        eyebrow: 'Impact',
        title: 'Reporting became a product workflow instead of a weekly chore.',
        body:
          'Manual analysis dropped sharply, decision loops tightened, and teams gained a shared operational cockpit that made risk, momentum, and next actions visible.'
      }
    ],
    gallery: [
      {
        src: 'https://images.unsplash.com/photo-1551434678-e076c223a692',
        alt: 'Product team reviewing dashboard data on a large screen',
        width: 1600,
        height: 1100
      },
      {
        src: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3',
        alt: 'Developer workstation with application interface open',
        width: 1400,
        height: 1800
      },
      {
        src: 'https://images.unsplash.com/photo-1556155092-490a1ba16284',
        alt: 'Data product interface on laptop with charts and graphs',
        width: 1600,
        height: 1100
      }
    ],
    services: ['AI workflows', 'Typed APIs', 'Dashboard systems', 'Caching strategy'],
    featured: true
  },
  {
    slug: 'fintech-admin-platform',
    title: 'Fintech Admin Platform',
    client: 'Secure transaction operations',
    category: 'Full Stack',
    categories: ['Full Stack', 'Backend', 'SaaS'],
    year: '2025',
    location: 'Internal platform',
    excerpt:
      'A secure admin product for transaction review, audit trails, role-based access, validation, and operational reliability.',
    stack: ['SvelteKit', 'Node.js', 'PostgreSQL', 'Prisma', 'Stripe', 'Docker'],
    role: 'Application architecture, data modeling, secure workflows, dashboard implementation',
    timeline: '12 weeks',
    impact: '41% lower manual review time',
    hero: {
      src: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f',
      alt: 'Financial operations workspace with secure transaction review tools',
      width: 1920,
      height: 1280,
      focal: 'center'
    },
    thumbnail: {
      src: 'https://images.unsplash.com/photo-1554224154-26032ffc0d07',
      alt: 'Finance dashboard workflow with documents and laptop',
      width: 1200,
      height: 1500,
      focal: 'center'
    },
    metrics: [
      { value: '41%', label: 'less review time', detail: 'triage queues replaced manual spreadsheet checks' },
      { value: '99.9%', label: 'workflow uptime', detail: 'containerized services with health checks and logging' },
      { value: '7', label: 'permission tiers', detail: 'RBAC mapped to operational responsibility' },
      { value: '100%', label: 'audited actions', detail: 'write flows tracked with immutable event logs' }
    ],
    story: [
      {
        eyebrow: 'Problem',
        title: 'Sensitive workflows were moving through fragile manual review.',
        body:
          'Operations teams needed to review transactions, resolve exceptions, and prove compliance without relying on disconnected spreadsheets or unclear ownership.'
      },
      {
        eyebrow: 'Architecture',
        title: 'RBAC, audit logs, and transactions shaped the core model.',
        body:
          'I designed the platform around role boundaries, immutable audit events, validated state transitions, and database constraints that made unsafe actions harder to express.'
      },
      {
        eyebrow: 'Implementation',
        title: 'Every interaction carries validation, traceability, and recovery.',
        body:
          'The build included dashboard queues, API routes, schema validation, Stripe-adjacent workflows, migration discipline, Dockerized services, and operator-friendly error states.'
      },
      {
        eyebrow: 'Impact',
        title: 'The review process became faster without becoming looser.',
        body:
          'Manual review time dropped, escalation paths became clearer, and the platform gave leadership a stronger reliability and compliance story.'
      }
    ],
    gallery: [
      {
        src: 'https://images.unsplash.com/photo-1559526324-593bc073d938',
        alt: 'Secure financial data displayed on a workstation',
        width: 1600,
        height: 1100
      },
      {
        src: 'https://images.unsplash.com/photo-1563986768609-322da13575f3',
        alt: 'Close up of secure financial technology workflow',
        width: 1400,
        height: 1800
      },
      {
        src: 'https://images.unsplash.com/photo-1554224154-22dec7ec8818',
        alt: 'Financial operations interface and audit review documents',
        width: 1600,
        height: 1100
      }
    ],
    services: ['RBAC systems', 'Database design', 'Audit trails', 'Payment workflows'],
    featured: true
  },
  {
    slug: 'developer-automation-tool',
    title: 'Developer Automation Tool',
    client: 'Release workflow accelerator',
    category: 'DevTools',
    categories: ['DevTools', 'Backend', 'Performance'],
    year: '2025',
    location: 'CLI and GitHub automation',
    excerpt:
      'A TypeScript CLI that turns repeated release, QA, and repository maintenance tasks into observable, configurable workflows.',
    stack: ['TypeScript', 'Node.js', 'CLI', 'GitHub API', 'Playwright'],
    role: 'CLI architecture, GitHub integration, config system, test automation',
    timeline: '8 weeks',
    impact: '3x faster release prep',
    hero: {
      src: 'https://images.unsplash.com/photo-1515879218367-8466d910aaa4',
      alt: 'Developer writing TypeScript automation code on a laptop',
      width: 1920,
      height: 1280,
      focal: 'center'
    },
    thumbnail: {
      src: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c',
      alt: 'Code editor showing automation scripts',
      width: 1200,
      height: 1500,
      focal: 'center'
    },
    metrics: [
      { value: '3x', label: 'faster release prep', detail: 'repeatable checks replaced hand-managed rituals' },
      { value: '24', label: 'workflow commands', detail: 'release, QA, repository, and reporting tasks' },
      { value: '-52%', label: 'manual errors', detail: 'guardrails added before deploy-critical operations' },
      { value: '9m', label: 'average setup', detail: 'project config bootstrapped from sensible defaults' }
    ],
    story: [
      {
        eyebrow: 'Problem',
        title: 'Engineering teams were losing time to repetitive coordination.',
        body:
          'Release prep, QA checks, issue hygiene, and browser verification were repeatable but still performed manually, which created drift and avoidable mistakes.'
      },
      {
        eyebrow: 'Architecture',
        title: 'A CLI-first workflow keeps automation close to the developer.',
        body:
          'The tool wraps GitHub API calls, Playwright checks, project configuration, logs, and dry-run safety into commands that match how engineers already work.'
      },
      {
        eyebrow: 'Implementation',
        title: 'Clear command contracts make automation understandable.',
        body:
          'I built the parser, config loader, API client, structured logs, retry handling, browser checks, and a plugin-friendly command layout without hiding critical output.'
      },
      {
        eyebrow: 'Impact',
        title: 'Releases became calmer, faster, and easier to trust.',
        body:
          'The system reduced manual errors, improved handoff quality, and gave teams a shared release workflow that scaled beyond one maintainer.'
      }
    ],
    gallery: [
      {
        src: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5',
        alt: 'Code and logs on a dark development screen',
        width: 1600,
        height: 1100
      },
      {
        src: 'https://images.unsplash.com/photo-1556075798-4825dfaaf498',
        alt: 'Git workflow and repository automation on a laptop',
        width: 1400,
        height: 1800
      },
      {
        src: 'https://images.unsplash.com/photo-1550439062-609e1531270e',
        alt: 'Developer tools and automated test output on workstation',
        width: 1600,
        height: 1100
      }
    ],
    services: ['CLI systems', 'GitHub automation', 'Playwright QA', 'Developer experience'],
    featured: true
  },
  {
    slug: 'ecommerce-performance-rebuild',
    title: 'E-commerce Performance Rebuild',
    client: 'High-conversion storefront',
    category: 'Performance',
    categories: ['Performance', 'Frontend', 'Full Stack'],
    year: '2024',
    location: 'Edge-rendered storefront',
    excerpt:
      'A storefront rebuild focused on SSR, route splitting, image discipline, cache strategy, and conversion-safe product interactions.',
    stack: ['SvelteKit', 'Tailwind', 'Vite', 'Headless CMS', 'Edge rendering'],
    role: 'Frontend architecture, performance budgets, product UI, caching strategy',
    timeline: '9 weeks',
    impact: 'Lighthouse 97 performance',
    hero: {
      src: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d',
      alt: 'Modern ecommerce experience with product and checkout interface',
      width: 1920,
      height: 1280,
      focal: 'center'
    },
    thumbnail: {
      src: 'https://images.unsplash.com/photo-1556742502-ec7c0e9f34b1',
      alt: 'Online storefront workflow on a laptop and mobile device',
      width: 1200,
      height: 1500,
      focal: 'center'
    },
    metrics: [
      { value: '97', label: 'Lighthouse score', detail: 'performance measured after launch on key templates' },
      { value: '0.01', label: 'CLS', detail: 'stable product media and reserved interaction zones' },
      { value: '-38%', label: 'LCP reduction', detail: 'critical media and SSR strategy reduced first view delay' },
      { value: '+19%', label: 'cart starts', detail: 'faster paths and clearer filtering improved intent' }
    ],
    story: [
      {
        eyebrow: 'Problem',
        title: 'A slow storefront was taxing attention before the product could sell.',
        body:
          'Large assets, client-heavy interactions, unstable media, and unfocused routing were hurting conversion-sensitive pages.'
      },
      {
        eyebrow: 'Architecture',
        title: 'Server rendering and cache boundaries carried the experience.',
        body:
          'The rebuild used SSR, route-level code splitting, CMS data normalization, responsive images, edge caching, and performance budgets baked into the component model.'
      },
      {
        eyebrow: 'Implementation',
        title: 'Product browsing stayed rich without becoming heavy.',
        body:
          'I rebuilt product pages, filtering, cart interactions, media handling, metadata, skeleton states, and analytics hooks with a strict JavaScript budget.'
      },
      {
        eyebrow: 'Impact',
        title: 'The storefront felt sharper because the system became lighter.',
        body:
          'The rebuild delivered a 95+ Lighthouse profile, lower layout shift, faster LCP, and cleaner product discovery across device sizes.'
      }
    ],
    gallery: [
      {
        src: 'https://images.unsplash.com/photo-1556741533-6e6a62bd8b49',
        alt: 'Digital storefront checkout flow on laptop',
        width: 1600,
        height: 1100
      },
      {
        src: 'https://images.unsplash.com/photo-1512428559087-560fa5ceab42',
        alt: 'Mobile commerce interface and product browsing',
        width: 1400,
        height: 1800
      },
      {
        src: 'https://images.unsplash.com/photo-1556741533-f6acd647d2fb',
        alt: 'Online product experience with optimized ecommerce workflow',
        width: 1600,
        height: 1100
      }
    ],
    services: ['Performance audits', 'SSR storefronts', 'Image strategy', 'Conversion UX'],
    featured: true
  },
  {
    slug: 'realtime-collaboration-app',
    title: 'Real-time Collaboration App',
    client: 'Shared workspace system',
    category: 'Realtime',
    categories: ['Realtime', 'Full Stack', 'Backend', 'SaaS'],
    year: '2026',
    location: 'Multi-user product',
    excerpt:
      'A collaborative workspace with WebSocket sync, presence, optimistic UI, conflict handling, permissions, and durable state.',
    stack: ['WebSockets', 'PostgreSQL', 'Redis', 'SvelteKit', 'TypeScript'],
    role: 'Realtime architecture, state sync, permissions, product interaction design',
    timeline: '11 weeks',
    impact: '72ms median sync latency',
    hero: {
      src: 'https://images.unsplash.com/photo-1552664730-d307ca884978',
      alt: 'Product team collaborating around a shared digital workspace',
      width: 1920,
      height: 1280,
      focal: 'center'
    },
    thumbnail: {
      src: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952',
      alt: 'Team using a collaborative product workspace',
      width: 1200,
      height: 1500,
      focal: 'center'
    },
    metrics: [
      { value: '72ms', label: 'median sync', detail: 'presence and workspace events across active rooms' },
      { value: '12k', label: 'events tested', detail: 'load simulation across document and presence flows' },
      { value: '4', label: 'conflict paths', detail: 'optimistic edits, stale state, reconnects, permissions' },
      { value: '98%', label: 'successful reconnects', detail: 'queued operations replayed after network drops' }
    ],
    story: [
      {
        eyebrow: 'Problem',
        title: 'Shared work felt slow when state drifted between teammates.',
        body:
          'Users needed a workspace where presence, edits, permissions, and persistence stayed aligned without turning the interface into a blocking experience.'
      },
      {
        eyebrow: 'Architecture',
        title: 'Realtime sync sits beside durable product state.',
        body:
          'WebSockets handle presence and fast interaction events, Redis manages fanout and short-lived coordination, and PostgreSQL remains the durable source for workspace data.'
      },
      {
        eyebrow: 'Implementation',
        title: 'Optimistic UI makes collaboration feel immediate.',
        body:
          'I built the socket layer, event protocol, state reconciliation, reconnect handling, permission checks, and UI patterns for presence, conflict states, and graceful failure.'
      },
      {
        eyebrow: 'Impact',
        title: 'The product felt multiplayer without feeling chaotic.',
        body:
          'Users saw lower latency, clearer activity, fewer lost edits, and a smoother path from live collaboration to persistent workspace history.'
      }
    ],
    gallery: [
      {
        src: 'https://images.unsplash.com/photo-1552581234-26160f608093',
        alt: 'Collaborative digital workspace discussion with screens',
        width: 1600,
        height: 1100
      },
      {
        src: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c',
        alt: 'Engineering team coordinating a real-time product session',
        width: 1400,
        height: 1800
      },
      {
        src: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72',
        alt: 'Team reviewing software product screens together',
        width: 1600,
        height: 1100
      }
    ],
    services: ['Realtime sync', 'Optimistic UI', 'Permissions', 'State persistence'],
    featured: false
  }
];
