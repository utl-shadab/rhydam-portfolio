<script lang="ts">
  import BlogProgress from './BlogProgress.svelte';
  import Badge from '$lib/components/ui/Badge.svelte';
  import Picture from '$lib/components/ui/Picture.svelte';
  import type { BlogPost } from '$types/content';

  interface Props {
    post: BlogPost;
  }

  let { post }: Props = $props();
</script>

<BlogProgress />

<article class="section-pad pt-32">
  <header class="mx-auto max-w-5xl">
    <Badge label={post.category} />
    <h1 class="mt-6 font-serif text-5xl leading-none md:text-7xl">{post.title}</h1>
    <p class="body-large mt-6 max-w-3xl text-[var(--text-muted)]">{post.excerpt}</p>
    <p class="mt-6 text-sm text-[var(--text-muted)]">{post.author} / {post.publishedAt} / {post.readingTime}</p>
  </header>

  <div class="mx-auto mt-12 max-w-6xl">
    <div class="image-frame aspect-[16/10]">
      <Picture image={post.hero} priority sizes="100vw" class="h-full w-full object-cover" />
    </div>
  </div>

  <div class="mx-auto mt-16 grid max-w-6xl gap-10 lg:grid-cols-[0.28fr_0.72fr]">
    <aside class="lg:sticky lg:top-24 lg:self-start">
      <p class="eyebrow">Contents</p>
      <nav class="mt-5 grid gap-3 text-sm text-[var(--text-muted)]" aria-label="Table of contents">
        {#each post.blocks as block}
          <a class="transition-colors hover:text-[var(--accent)]" href={`#${block.id}`}>{block.heading}</a>
        {/each}
      </nav>
      <div class="mt-8 flex gap-3 text-sm">
        <a
          class="rounded-[8px] border border-[var(--line)] px-3 py-2"
          href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(post.title)}`}
          target="_blank"
          rel="noreferrer"
          data-cursor="Open"
        >
          Share
        </a>
        <a
          class="rounded-[8px] border border-[var(--line)] px-3 py-2"
          href={`mailto:?subject=${encodeURIComponent(post.title)}`}
          data-cursor="Send"
        >
          Email
        </a>
      </div>
    </aside>

    <div class="grid gap-12">
      {#each post.blocks as block}
        <section id={block.id} class="scroll-mt-28">
          <h2 class="font-serif text-4xl leading-tight">{block.heading}</h2>
          <div class="mt-6 grid gap-5 text-xl leading-relaxed text-[var(--text-muted)] md:text-2xl">
            {#each block.body as paragraph}
              <p>{paragraph}</p>
            {/each}
          </div>
        </section>
      {/each}
    </div>
  </div>
</article>
