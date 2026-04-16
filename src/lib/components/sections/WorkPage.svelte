<script lang="ts">
  import ParallaxImage from '$lib/components/animations/ParallaxImage.svelte';
  import Button from '$lib/components/ui/Button.svelte';
  import MetricStrip from '$lib/components/ui/MetricStrip.svelte';
  import type { Project } from '$types/content';

  interface Props {
    projects: Project[];
  }

  let { projects }: Props = $props();
</script>

<section class="section-pad pt-32">
  <div class="mx-auto max-w-7xl">
    <p class="eyebrow">Selected Engineering Work</p>
    <h1 class="display-title mt-5 max-w-6xl">Case studies where sharper systems create sharper products.</h1>
  </div>
</section>

<section class="section-tight">
  <div class="mx-auto grid max-w-7xl gap-14">
    {#each projects as project, index}
      <article class="grid gap-8 border-t border-[var(--line)] pt-10 md:grid-cols-[0.9fr_1.1fr] md:items-center">
        <ParallaxImage image={project.hero} class="aspect-[16/10]" priority={index === 0} />
        <div>
          <p class="eyebrow">{project.category}</p>
          <h2 class="mt-4 font-serif text-4xl leading-tight md:text-5xl">{project.title}</h2>
          <p class="body-large mt-5 text-[var(--text-muted)]">{project.excerpt}</p>
          <div class="mt-5 flex flex-wrap gap-2">
            {#each project.stack.slice(0, 5) as item}
              <span class="rounded-[8px] border border-[var(--line)] px-3 py-2 text-sm text-[var(--text-muted)]">
                {item}
              </span>
            {/each}
          </div>
          <div class="mt-7">
            <MetricStrip items={project.metrics.slice(0, 2)} />
          </div>
          <div class="mt-7">
            <Button href={`/projects/${project.slug}`} variant="ghost">Read case study</Button>
          </div>
        </div>
      </article>
    {/each}
  </div>
</section>

<section class="section-pad">
  <div class="mx-auto grid max-w-7xl gap-6 md:grid-cols-2">
    <article class="surface p-6">
      <p class="eyebrow">Before</p>
      <h2 class="mt-5 font-serif text-4xl leading-tight">Slow, fragile, manually managed workflow.</h2>
      <p class="mt-5 text-[var(--text-muted)]">
        Teams depended on disconnected tools, unclear ownership, untyped payloads, and interfaces that hid operational risk until it became support work.
      </p>
    </article>
    <article class="surface p-6">
      <p class="eyebrow">After</p>
      <h2 class="mt-5 font-serif text-4xl leading-tight">Typed, automated, scalable product system.</h2>
      <p class="mt-5 text-[var(--text-muted)]">
        Data contracts, fast server-rendered screens, audit-friendly workflows, clear loading states, and lightweight automation made the product easier to trust.
      </p>
    </article>
  </div>
</section>
