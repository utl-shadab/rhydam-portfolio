<script lang="ts">
  import Seo from '$lib/components/layout/Seo.svelte';
  import WorkPage from '$lib/components/sections/WorkPage.svelte';
  import type { PageData } from './$types';

  interface Props {
    data: PageData;
  }

  let { data }: Props = $props();
</script>

<Seo seo={data.seo} />
<WorkPage projects={data.projects} />
