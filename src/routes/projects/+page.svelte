<script lang="ts">
  import Skeleton from 'boneyard-js/svelte';
  import Seo from '$lib/components/layout/Seo.svelte';
  import ProjectGridSkeleton from '$lib/components/loader/ProjectGridSkeleton.svelte';
  import ProjectsIndex from '$lib/components/sections/ProjectsIndex.svelte';
  import type { PageData } from './$types';

  interface Props {
    data: PageData;
  }

  let { data }: Props = $props();
</script>

<Seo seo={data.seo} />

{#await Promise.all([data.projects, data.categories])}
  <section class="section-pad pt-32">
    <Skeleton name="projects-index" loading={true} animate="shimmer">
      {#snippet fallback()}
        <ProjectGridSkeleton count={6} />
      {/snippet}
      <ProjectGridSkeleton count={6} />
    </Skeleton>
  </section>
{:then [projects, categories]}
  <Skeleton name="projects-index" loading={false} animate="shimmer">
    <ProjectsIndex {projects} {categories} />
  </Skeleton>
{/await}
