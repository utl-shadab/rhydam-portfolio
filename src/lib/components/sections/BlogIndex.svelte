<script lang="ts">
  import ArticleCard from '$lib/components/ui/ArticleCard.svelte';
  import type { BlogPost } from '$types/content';

  interface Props {
    posts: BlogPost[];
    featured: BlogPost;
  }

  let { posts, featured }: Props = $props();
  let active = $state<string>('All');
  const categories = $derived(['All', ...Array.from(new Set(posts.map((post) => post.category)))]);
  const filtered = $derived(active === 'All' ? posts : posts.filter((post) => post.category === active));
</script>

<section class="section-pad pt-32">
  <div class="mx-auto max-w-7xl">
    <p class="eyebrow">Engineering Journal</p>
    <h1 class="display-title mt-5">Field notes on systems, speed, product taste, and resilient interfaces.</h1>

    <div class="mt-12 border-y border-[var(--line)] py-10">
      <ArticleCard post={featured} featured />
    </div>

    <div class="mt-10 flex flex-wrap gap-3" aria-label="Blog categories">
      {#each categories as category}
        <button
          class={`rounded-[8px] border px-4 py-2 text-sm transition-colors ${
            active === category ? 'border-[var(--accent)] bg-[var(--accent)] text-[var(--bg)]' : 'border-[var(--line)] text-[var(--text-muted)]'
          }`}
          type="button"
          onclick={() => (active = category)}
        >
          {category}
        </button>
      {/each}
    </div>

    <div class="mt-10 grid gap-8 md:grid-cols-3">
      {#each filtered as post}
        <ArticleCard {post} />
      {/each}
    </div>
  </div>
</section>
