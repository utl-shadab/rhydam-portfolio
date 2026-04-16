<script lang="ts">
  import ProjectCard from '$lib/components/ui/ProjectCard.svelte';
  import type { Project, ProjectCategory } from '$types/content';

  interface Props {
    projects: Project[];
    categories: ProjectCategory[];
  }

  let { projects, categories }: Props = $props();
  let active = $state<ProjectCategory | 'All'>('All');
  const filtered = $derived.by(() => {
    if (active === 'All') return projects;

    const selected: ProjectCategory = active;
    return projects.filter((project) => project.categories.includes(selected));
  });
</script>

<section class="section-pad pt-32">
  <div class="mx-auto max-w-7xl">
    <p class="eyebrow">Case Study Archive</p>
    <div class="mt-5 grid gap-8 md:grid-cols-[1fr_0.9fr] md:items-end">
      <h1 class="display-title">Engineering work with product consequence.</h1>
      <p class="body-large text-[var(--text-muted)]">
        Filter by discipline, then open the full case study for problem, architecture, implementation, impact, stack, and system notes.
      </p>
    </div>

    <div class="mt-10 flex flex-wrap gap-3" aria-label="Project filters">
      <button
        class={`rounded-[8px] border px-4 py-2 text-sm transition-colors ${
          active === 'All' ? 'border-[var(--accent)] bg-[var(--accent)] text-[var(--bg)]' : 'border-[var(--line)] text-[var(--text-muted)]'
        }`}
        type="button"
        onclick={() => (active = 'All')}
      >
        All
      </button>
      {#each categories as category}
        <button
          class={`rounded-[8px] border px-4 py-2 text-sm transition-colors ${
            active === category ? 'border-[var(--accent)] bg-[var(--accent)] text-[var(--bg)]' : 'border-[var(--line)] text-[var(--text-muted)]'
          }`}
          type="button"
          onclick={() => (active = category)}
        >
          {category}
        </button>
      {/each}
    </div>

    <div class="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
      {#each filtered as project, index (project.slug)}
        <div class={index % 3 === 1 ? 'lg:pt-20' : index % 3 === 2 ? 'lg:pt-10' : ''}>
          <ProjectCard {project} {index} />
        </div>
      {/each}
    </div>
  </div>
</section>
