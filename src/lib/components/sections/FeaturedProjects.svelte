<script lang="ts">
  import ScrollReveal from '$lib/components/animations/ScrollReveal.svelte';
  import ProjectCard from '$lib/components/ui/ProjectCard.svelte';
  import SectionHeading from '$lib/components/ui/SectionHeading.svelte';
  import Button from '$lib/components/ui/Button.svelte';
  import type { Project } from '$types/content';

  interface Props {
    projects: Project[];
  }

  let { projects }: Props = $props();
</script>

<section class="section-pad">
  <SectionHeading
    eyebrow="Featured Systems"
    title="Product-grade engineering work with architecture, interface quality, and measurable impact."
  />

  <ScrollReveal class="mx-auto mt-12 grid max-w-7xl gap-8 md:grid-cols-2 lg:grid-cols-4">
    {#each projects as project, index}
      <div class={index % 2 === 1 ? 'md:pt-16' : ''}>
        <ProjectCard {project} {index} />
      </div>
    {/each}
  </ScrollReveal>

  <div class="mx-auto mt-12 max-w-7xl">
    <Button href="/projects" variant="ghost">View all projects</Button>
  </div>
</section>
