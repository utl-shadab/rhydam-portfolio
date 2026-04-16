<script lang="ts">
  import type { Project } from '$types/content';
  import { clipImageReveal } from '$lib/components/animations/clipImageReveal';
  import Picture from './Picture.svelte';
  import Badge from './Badge.svelte';

  interface Props {
    project: Project;
    index?: number;
  }

  let { project, index = 0 }: Props = $props();
</script>

<a
  class="group block"
  href={`/projects/${project.slug}`}
  data-cursor="View"
  aria-label={`View ${project.title} case study`}
>
  <div use:clipImageReveal class="image-frame aspect-[4/5]">
    <Picture
      image={project.thumbnail}
      sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
      priority={index === 0}
      class="h-full w-full scale-100 transition-transform duration-700 ease-[var(--ease-out)] group-hover:scale-105"
    />
  </div>
  <div class="mt-5 flex items-start justify-between gap-4">
    <div>
      <Badge label={project.category} />
      <h3 class="mt-3 font-serif text-2xl leading-tight">{project.title}</h3>
      <p class="mt-2 text-sm text-[var(--text-muted)]">{project.excerpt}</p>
      <div class="mt-4 flex flex-wrap gap-2">
        {#each project.stack.slice(0, 3) as item}
          <span class="rounded-[8px] border border-[var(--line)] px-2 py-1 text-xs text-[var(--text-muted)]">
            {item}
          </span>
        {/each}
      </div>
      <p class="mt-4 text-sm text-[var(--accent)]">{project.impact} / {project.year}</p>
    </div>
    <span class="mt-1 text-[var(--aqua)] transition-transform duration-300 group-hover:translate-x-1">View</span>
  </div>
</a>
