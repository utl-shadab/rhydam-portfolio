import type { BlogPost } from '$types/content';

export const blogPosts: BlogPost[] = [
  {
    slug: 'designing-type-safe-apis',
    title: 'Designing Type-Safe APIs That Survive Product Change',
    category: 'Architecture',
    publishedAt: '2026-03-18',
    readingTime: '7 min read',
    excerpt:
      'A practical way to treat API contracts as product infrastructure instead of a loose agreement between screens and services.',
    hero: {
      src: 'https://images.unsplash.com/photo-1515879218367-8466d910aaa4',
      alt: 'TypeScript code editor with typed API contract work',
      width: 1600,
      height: 1000
    },
    featured: true,
    author: 'Rhydam Panda',
    blocks: [
      {
        id: 'contracts-are-product-surface',
        heading: 'Contracts are product surface',
        body: [
          'A strong API contract does more than prevent runtime bugs. It defines what the product can safely promise to the interface, the team, and future integrations.',
          'When the contract is typed, validated, and versioned intentionally, product change becomes easier to absorb without turning every feature into a cross-team negotiation.'
        ]
      },
      {
        id: 'model-the-boundary',
        heading: 'Model the boundary',
        body: [
          'I like schemas at the edges, domain types in the core, and explicit mappers between the two. That keeps persistence concerns from leaking into UI decisions.',
          'The goal is not to make types impressive. The goal is to make invalid states expensive to create and easy to catch before users find them.'
        ]
      },
      {
        id: 'design-for-change',
        heading: 'Design for change',
        body: [
          'The best API systems leave room for new fields, changed business rules, and more specific permissions without silently breaking old clients.',
          'That usually means smaller response shapes, deliberate nullability, strong errors, and tests that prove the contract rather than only the happy path.'
        ]
      }
    ]
  },
  {
    slug: 'frontend-performance-budgets',
    title: 'How I Think About Frontend Performance Budgets',
    category: 'Performance',
    publishedAt: '2026-02-11',
    readingTime: '6 min read',
    excerpt:
      'Performance work becomes calmer when it has a budget, an owner, and a product reason for every byte of JavaScript.',
    hero: {
      src: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71',
      alt: 'Performance dashboard with web metrics and charts',
      width: 1600,
      height: 1000
    },
    featured: false,
    author: 'Rhydam Panda',
    blocks: [
      {
        id: 'budget-before-polish',
        heading: 'Budget before polish',
        body: [
          'A performance budget is not a late QA checklist. It is a design constraint that decides what earns a place in the first load.',
          'When a team agrees on LCP, CLS, interaction cost, image strategy, and script limits early, the interface can stay ambitious without becoming heavy.'
        ]
      },
      {
        id: 'measure-real-paths',
        heading: 'Measure real paths',
        body: [
          'Lab scores matter, but the product path matters more. The template that drives revenue, signups, or daily work gets the strictest budget.',
          'I track the parts users actually wait on: hero media, route data, hydration cost, long tasks, and transitions that hide or reveal latency.'
        ]
      },
      {
        id: 'make-speed-visible',
        heading: 'Make speed visible',
        body: [
          'Teams protect what they can see. Budgets should show up in pull requests, dashboards, component reviews, and design conversations.',
          'Performance is easier to preserve when everyone understands the tradeoff in product language rather than only Lighthouse terminology.'
        ]
      }
    ]
  },
  {
    slug: 'server-first-dashboards',
    title: 'Building Better Dashboards With Server-First Data',
    category: 'Data',
    publishedAt: '2026-01-22',
    readingTime: '8 min read',
    excerpt:
      'Dashboards feel sharper when the server owns data shape, caching, permissions, and the expensive work behind the interface.',
    hero: {
      src: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f',
      alt: 'Business intelligence dashboard with typed server data',
      width: 1600,
      height: 1000
    },
    featured: false,
    author: 'Rhydam Panda',
    blocks: [
      {
        id: 'shape-data-upstream',
        heading: 'Shape data upstream',
        body: [
          'A dashboard is not a collection of charts. It is a series of decisions about what the user needs to know next.',
          'Server-first data lets the product shape those decisions close to permissions, cache rules, and domain logic instead of pushing complexity into every chart component.'
        ]
      },
      {
        id: 'cache-the-question',
        heading: 'Cache the question',
        body: [
          'Caching works best when it reflects the question being asked: current health, trailing trend, account detail, or long-running export.',
          'Different questions deserve different freshness windows. A single cache strategy usually means the product has not described the workflow clearly enough.'
        ]
      },
      {
        id: 'stream-what-matters',
        heading: 'Stream what matters',
        body: [
          'Streaming is useful when it gets meaningful UI on screen before the slowest data finishes. It is not useful when it merely makes loading look busy.',
          'I prefer skeletons that match the final layout and progressive sections that let the user orient before deeper analysis arrives.'
        ]
      }
    ]
  },
  {
    slug: 'full-stack-product-taste',
    title: 'Why Full Stack Developers Need Product Taste',
    category: 'Product',
    publishedAt: '2025-12-05',
    readingTime: '5 min read',
    excerpt:
      'The best full-stack work happens when engineering decisions understand user pressure, business timing, and visual quality.',
    hero: {
      src: 'https://images.unsplash.com/photo-1552664730-d307ca884978',
      alt: 'Product engineering team discussing interface and architecture decisions',
      width: 1600,
      height: 1000
    },
    featured: false,
    author: 'Rhydam Panda',
    blocks: [
      {
        id: 'taste-is-judgment',
        heading: 'Taste is judgment',
        body: [
          'Product taste is the ability to know which technical detail changes the user experience and which one only satisfies the builder.',
          'A full-stack developer with taste can move between database constraints, interface rhythm, and release risk without treating them as separate worlds.'
        ]
      },
      {
        id: 'interfaces-reveal-systems',
        heading: 'Interfaces reveal systems',
        body: [
          'A messy interface often exposes a messy data model. A slow flow often exposes unclear ownership. A confusing error often exposes a weak domain rule.',
          'Product taste helps engineers read those symptoms and fix the system underneath instead of polishing the wrong layer.'
        ]
      },
      {
        id: 'ship-with-intention',
        heading: 'Ship with intention',
        body: [
          'Taste does not mean moving slowly. It means knowing what must be excellent now and what can stay deliberately simple until the product proves it needs more.',
          'That judgment is what turns technical delivery into product momentum.'
        ]
      }
    ]
  },
  {
    slug: 'system-design-small-saas',
    title: 'Practical System Design for Small SaaS Teams',
    category: 'System Design',
    publishedAt: '2025-11-14',
    readingTime: '7 min read',
    excerpt:
      'Small teams need architecture that protects the business without copying enterprise complexity before it is earned.',
    hero: {
      src: 'https://images.unsplash.com/photo-1556155092-490a1ba16284',
      alt: 'SaaS system design planning with product dashboard and notes',
      width: 1600,
      height: 1000
    },
    featured: false,
    author: 'Rhydam Panda',
    blocks: [
      {
        id: 'optimize-for-reversibility',
        heading: 'Optimize for reversibility',
        body: [
          'Early SaaS architecture should make common decisions reversible: vendor choices, queue strategy, deployment shape, and analytics assumptions.',
          'The system still needs strong boundaries, but those boundaries should protect the product from chaos rather than lock it into premature scale theater.'
        ]
      },
      {
        id: 'choose-boring-strength',
        heading: 'Choose boring strength',
        body: [
          'A typed monolith with good data modeling, clear modules, tested workflows, and a clean deployment story can beat a scattered microservice setup for a long time.',
          'The most useful architecture is often the one the team can understand during an incident.'
        ]
      },
      {
        id: 'scale-the-bottleneck',
        heading: 'Scale the bottleneck',
        body: [
          'Do not scale the diagram. Scale the pain. Find the expensive query, the unreliable queue, the overloaded endpoint, or the workflow that blocks support.',
          'Practical system design starts with the product constraint and changes only the parts that have earned the complexity.'
        ]
      }
    ]
  }
];
