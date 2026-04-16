import type { Service, Stat, TeamMember, Testimonial, TimelineItem } from '$types/content';

export const services: Service[] = [
  {
    number: '01',
    name: 'Full-Stack Product Builds',
    description:
      'SaaS applications, admin platforms, dashboards, auth flows, server routes, and durable product foundations.'
  },
  {
    number: '02',
    name: 'Frontend Systems',
    description:
      'SvelteKit and TypeScript interfaces with responsive layouts, motion discipline, accessibility, and strong performance budgets.'
  },
  {
    number: '03',
    name: 'Backend and APIs',
    description:
      'Typed API contracts, PostgreSQL data models, validation, caching, permissions, logs, and workflow automation.'
  },
  {
    number: '04',
    name: 'AI Product Integration',
    description:
      'OpenAI-powered summaries, assistant workflows, retrieval patterns, streaming responses, and operational dashboards.'
  },
  {
    number: '05',
    name: 'Performance and DX',
    description:
      'Lighthouse-focused rebuilds, route splitting, image strategy, developer tooling, CI checks, and release automation.'
  }
];

export const stats: Stat[] = [
  { value: '25+', label: 'Product systems built' },
  { value: '95+', label: 'Lighthouse target' },
  { value: '12', label: 'Core technologies' },
  { value: '0', label: 'Tolerance for fragile UX' }
];

export const testimonials: Testimonial[] = [
  {
    quote:
      'Rhydam turned a messy internal workflow into a calm, typed product system. The interface felt premium, but the real value was how clean the underlying architecture became.',
    author: 'Product Lead',
    role: 'AI SaaS company'
  },
  {
    quote:
      'He thinks like an engineer and a product designer at the same time. Every technical decision had a reason, and the final build felt faster than our team expected.',
    author: 'Founder',
    role: 'Fintech platform'
  }
];

export const timeline: TimelineItem[] = [
  {
    year: '01',
    title: 'Started with interfaces',
    body:
      'Built polished frontend experiences and learned how small details in layout, motion, and loading states change trust.'
  },
  {
    year: '02',
    title: 'Moved into full-stack architecture',
    body:
      'Connected product interfaces to APIs, data models, auth, caching, and operational workflows that survive real users.'
  },
  {
    year: '03',
    title: 'Built production SaaS systems',
    body:
      'Delivered dashboards, admin tools, automation workflows, payment-adjacent systems, and performance-critical storefronts.'
  },
  {
    year: '04',
    title: 'Focused on AI, performance, and DX',
    body:
      'Now building product-grade systems where AI workflows, fast interfaces, and developer experience reinforce each other.'
  }
];

export const team: TeamMember[] = [
  {
    name: 'Frontend Craft',
    role: 'SvelteKit, TypeScript, Tailwind, motion systems, accessibility, responsive UI',
    image: {
      src: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c',
      alt: 'Frontend TypeScript interface code on a developer workstation',
      width: 900,
      height: 1100
    }
  },
  {
    name: 'Backend Systems',
    role: 'Node.js, PostgreSQL, Prisma, Redis, auth, API contracts, queues, observability',
    image: {
      src: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3',
      alt: 'Backend system dashboard and code on laptop',
      width: 900,
      height: 1100
    }
  },
  {
    name: 'Product Engineering',
    role: 'AI integrations, SaaS workflows, performance budgets, automation, design-to-code',
    image: {
      src: 'https://images.unsplash.com/photo-1552664730-d307ca884978',
      alt: 'Product engineering planning session with software interface',
      width: 900,
      height: 1100
    }
  }
];
