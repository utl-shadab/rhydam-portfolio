<script lang="ts">
  import Seo from '$lib/components/layout/Seo.svelte';
  import BlogArticle from '$lib/components/sections/BlogArticle.svelte';
  import type { PageData } from './$types';

  interface Props {
    data: PageData;
  }

  let { data }: Props = $props();
</script>

<Seo seo={data.seo} />
<BlogArticle post={data.post} />
