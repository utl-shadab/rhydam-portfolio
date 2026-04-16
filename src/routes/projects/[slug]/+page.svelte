<script lang="ts">
  import Seo from '$lib/components/layout/Seo.svelte';
  import ProjectDetail from '$lib/components/sections/ProjectDetail.svelte';
  import type { PageData } from './$types';

  interface Props {
    data: PageData;
  }

  let { data }: Props = $props();
</script>

<Seo seo={data.seo} />
<ProjectDetail project={data.project} nextProject={data.nextProject} />
