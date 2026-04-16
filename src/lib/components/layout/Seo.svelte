<script lang="ts">
  import { absoluteUrl } from '$lib/utils/seo';
  import type { PageSeo } from '$types/content';

  interface Props {
    seo: PageSeo;
  }

  let { seo }: Props = $props();
  const image = $derived(seo.image ? absoluteUrl(seo.image) : undefined);
</script>

<svelte:head>
  <title>{seo.title}</title>
  <meta name="description" content={seo.description} />
  {#if seo.canonical}
    <link rel="canonical" href={seo.canonical} />
  {/if}
  <meta property="og:title" content={seo.title} />
  <meta property="og:description" content={seo.description} />
  <meta property="og:type" content="website" />
  {#if image}
    <meta property="og:image" content={image} />
    <meta name="twitter:card" content="summary_large_image" />
  {/if}
</svelte:head>
