<script lang="ts">
  import ParallaxImage from '$lib/components/animations/ParallaxImage.svelte';
  import Badge from '$lib/components/ui/Badge.svelte';
  import Button from '$lib/components/ui/Button.svelte';
  import MetricStrip from '$lib/components/ui/MetricStrip.svelte';
  import Picture from '$lib/components/ui/Picture.svelte';
  import type { Project } from '$types/content';

  interface Props {
    project: Project;
    nextProject: Project;
  }

  let { project, nextProject }: Props = $props();
</script>

<article>
  <header class="relative min-h-[86vh] overflow-hidden">
    <div class="absolute inset-0 h-[110%]">
      <Picture image={project.hero} priority sizes="100vw" class="h-full w-full object-cover" />
    </div>
    <div class="absolute inset-0 bg-gradient-to-b from-black/25 via-black/62 to-[var(--bg)]"></div>
    <div class="relative z-10 mx-auto flex min-h-[86vh] max-w-7xl flex-col justify-end px-5 pb-20 pt-32 md:px-8">
      <Badge label={project.category} />
      <h1 class="display-title mt-6 max-w-5xl text-[var(--text)]">{project.title}</h1>
      <p class="body-large mt-6 max-w-3xl text-[var(--text-muted)]">{project.excerpt}</p>
      <div class="mt-8 grid gap-4 text-[var(--text-muted)] sm:grid-cols-4">
        <p><span class="text-[var(--text)]">Scope:</span> {project.client}</p>
        <p><span class="text-[var(--text)]">Role:</span> {project.role}</p>
        <p><span class="text-[var(--text)]">Timeline:</span> {project.timeline}</p>
        <p><span class="text-[var(--text)]">Year:</span> {project.year}</p>
      </div>
    </div>
  </header>

  <section class="section-tight">
    <div class="mx-auto grid max-w-6xl gap-8">
      <MetricStrip items={project.metrics} />
      <div class="flex flex-wrap gap-2">
        {#each project.stack as item}
          <span class="rounded-[8px] border border-[var(--line)] bg-[var(--surface-soft)] px-3 py-2 text-sm text-[var(--text-muted)]">
            {item}
          </span>
        {/each}
      </div>
    </div>
  </section>

  <section class="section-pad">
    <div class="mx-auto grid max-w-6xl gap-10">
      {#each project.story as block}
        <div class="grid gap-5 border-t border-[var(--line)] pt-8 md:grid-cols-[0.35fr_0.65fr]">
          <div>
            <p class="eyebrow">{block.eyebrow}</p>
          </div>
          <div>
            <h2 class="font-serif text-3xl leading-tight md:text-5xl">{block.title}</h2>
            <p class="body-large mt-5 text-[var(--text-muted)]">{block.body}</p>
          </div>
        </div>
      {/each}
    </div>
  </section>

  <section class="section-tight">
    <div class="mx-auto grid max-w-7xl gap-6 md:grid-cols-3">
      <article class="surface p-6">
        <p class="eyebrow">Technical Challenges</p>
        <h2 class="mt-5 font-serif text-3xl leading-tight">Keep the product expressive without letting complexity leak into the interface.</h2>
        <p class="mt-5 text-[var(--text-muted)]">
          The build balanced {project.services.join(', ').toLowerCase()} while keeping the workflow clear enough for operators and future contributors.
        </p>
      </article>
      <article class="surface p-6">
        <p class="eyebrow">Performance / Security / Scale</p>
        <h2 class="mt-5 font-serif text-3xl leading-tight">The system is designed around predictable boundaries.</h2>
        <p class="mt-5 text-[var(--text-muted)]">
          Typed contracts, stable loading states, permission-aware routes, and measured interaction costs kept the experience fast and accountable.
        </p>
      </article>
      <article class="surface p-6">
        <p class="eyebrow">Results</p>
        <h2 class="mt-5 font-serif text-3xl leading-tight">{project.impact}</h2>
        <p class="mt-5 text-[var(--text-muted)]">
          The final product turned a technical constraint into a smoother decision path for users, teams, and the business.
        </p>
      </article>
    </div>
  </section>

  <section class="section-tight">
    <div class="mx-auto grid max-w-7xl gap-6 md:grid-cols-2">
      {#each project.gallery as image, index}
        <ParallaxImage
          {image}
          sizes={index === 1 ? '(min-width: 768px) 42vw, 100vw' : '(min-width: 768px) 50vw, 100vw'}
          class={index === 1 ? 'aspect-[4/5] md:mt-24' : 'aspect-[4/3]'}
        />
      {/each}
    </div>
  </section>

  <section class="section-pad">
    <div class="mx-auto grid max-w-6xl gap-8 border-t border-[var(--line)] pt-10 md:grid-cols-[1fr_1fr] md:items-end">
      <div>
        <p class="eyebrow">Next System</p>
        <h2 class="large-title mt-4">{nextProject.title}</h2>
        <p class="body-large mt-4 text-[var(--text-muted)]">{nextProject.impact}</p>
      </div>
      <div class="md:justify-self-end">
        <Button href={`/projects/${nextProject.slug}`}>Open case study</Button>
      </div>
    </div>
  </section>
</article>
