<script lang="ts">
  import Seo from '$lib/components/layout/Seo.svelte';
  import AboutPage from '$lib/components/sections/AboutPage.svelte';
  import type { PageData } from './$types';

  interface Props {
    data: PageData;
  }

  let { data }: Props = $props();
</script>

<Seo seo={data.seo} />
<AboutPage timeline={data.timeline} team={data.team} stats={data.stats} />
