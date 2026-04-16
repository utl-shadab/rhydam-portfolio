<script lang="ts">
  import Seo from '$lib/components/layout/Seo.svelte';
  import ContactPage from '$lib/components/sections/ContactPage.svelte';
  import type { PageData } from './$types';

  interface Props {
    data: PageData;
  }

  let { data }: Props = $props();
</script>

<Seo seo={data.seo} />
<ContactPage />
