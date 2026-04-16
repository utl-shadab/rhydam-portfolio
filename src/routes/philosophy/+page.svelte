<script lang="ts">
  import Seo from '$lib/components/layout/Seo.svelte';
  import PhilosophyPage from '$lib/components/sections/PhilosophyPage.svelte';
  import type { PageData } from './$types';

  interface Props {
    data: PageData;
  }

  let { data }: Props = $props();
</script>

<Seo seo={data.seo} />
<PhilosophyPage principles={data.principles} />
