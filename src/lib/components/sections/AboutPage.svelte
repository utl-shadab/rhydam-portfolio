<script lang="ts">
  import ParallaxImage from '$lib/components/animations/ParallaxImage.svelte';
  import MetricStrip from '$lib/components/ui/MetricStrip.svelte';
  import Picture from '$lib/components/ui/Picture.svelte';
  import type { Stat, TeamMember, TimelineItem } from '$types/content';

  interface Props {
    timeline: TimelineItem[];
    team: TeamMember[];
    stats: Stat[];
  }

  let { timeline, team, stats }: Props = $props();
</script>

<section class="section-pad pt-32">
  <div class="mx-auto grid max-w-7xl gap-10 md:grid-cols-[0.9fr_1.1fr] md:items-end">
    <div>
      <p class="eyebrow">About Rhydam</p>
      <h1 class="display-title mt-5">A full-stack developer with product taste and systems depth.</h1>
    </div>
    <p class="body-large text-[var(--text-muted)]">
      I bridge product thinking, visual detail, and scalable engineering. The work spans polished SvelteKit interfaces,
      typed APIs, SaaS workflows, AI-powered dashboards, performance rebuilds, and backend systems that stay understandable.
    </p>
  </div>
</section>

<section class="section-tight">
  <div class="mx-auto max-w-6xl">
    <MetricStrip items={stats} />
  </div>
</section>

<section class="section-pad">
  <div class="mx-auto grid max-w-6xl gap-12 md:grid-cols-[0.35fr_0.65fr]">
    <p class="eyebrow">Timeline</p>
    <div class="grid gap-8">
      {#each timeline as item}
        <article class="grid gap-4 border-t border-[var(--line)] pt-6 md:grid-cols-[0.22fr_0.78fr]">
          <p class="font-serif text-4xl text-[var(--aqua)]">{item.year}</p>
          <div>
            <h2 class="font-serif text-3xl">{item.title}</h2>
            <p class="mt-3 text-[var(--text-muted)]">{item.body}</p>
          </div>
        </article>
      {/each}
    </div>
  </div>
</section>

<section class="section-pad">
  <div class="mx-auto max-w-7xl">
    <p class="eyebrow">Technical Strengths</p>
    <div class="mt-8 grid gap-8 md:grid-cols-3">
      {#each team as member}
        <article>
          <div class="image-frame aspect-[4/5]">
            <Picture image={member.image} sizes="(min-width: 768px) 33vw, 100vw" class="h-full w-full object-cover" />
          </div>
          <h2 class="mt-5 font-serif text-3xl">{member.name}</h2>
          <p class="mt-2 text-[var(--text-muted)]">{member.role}</p>
        </article>
      {/each}
    </div>
  </div>
</section>

<section class="section-pad">
  <div class="mx-auto grid max-w-7xl gap-8 md:grid-cols-2 md:items-center">
    <ParallaxImage
      image={{
        src: 'https://images.unsplash.com/photo-1515879218367-8466d910aaa4',
        alt: 'Developer workstation with TypeScript code and product systems',
        width: 1600,
        height: 1100
      }}
      class="aspect-[4/3]"
    />
    <div>
      <p class="eyebrow">Philosophy Preview</p>
      <h2 class="large-title mt-4">The surface should feel simple because the system is well-designed.</h2>
      <p class="body-large mt-6 text-[var(--text-muted)]">
        I care about the whole chain: data shape, API boundaries, loading states, motion, accessibility, release safety,
        and the tiny product decisions that make software feel premium.
      </p>
    </div>
  </div>
</section>
