<script lang="ts">
  import Skeleton from 'boneyard-js/svelte';
  import Seo from '$lib/components/layout/Seo.svelte';
  import BlogListSkeleton from '$lib/components/loader/BlogListSkeleton.svelte';
  import BlogIndex from '$lib/components/sections/BlogIndex.svelte';
  import type { PageData } from './$types';

  interface Props {
    data: PageData;
  }

  let { data }: Props = $props();
</script>

<Seo seo={data.seo} />

{#await Promise.all([data.posts, data.featured])}
  <section class="section-pad pt-32">
    <Skeleton name="blog-index" loading={true} animate="shimmer">
      {#snippet fallback()}
        <BlogListSkeleton />
      {/snippet}
      <BlogListSkeleton />
    </Skeleton>
  </section>
{:then [posts, featured]}
  <Skeleton name="blog-index" loading={false} animate="shimmer">
    <BlogIndex {posts} {featured} />
  </Skeleton>
{/await}
