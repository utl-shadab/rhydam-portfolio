<script lang="ts">
  import type { BlogPost } from '$types/content';
  import { clipImageReveal } from '$lib/components/animations/clipImageReveal';
  import Picture from './Picture.svelte';
  import Badge from './Badge.svelte';

  interface Props {
    post: BlogPost;
    featured?: boolean;
  }

  let { post, featured = false }: Props = $props();
</script>

<a
  class={`group grid gap-5 ${featured ? 'md:grid-cols-[1.1fr_0.9fr]' : ''}`}
  href={`/blog/${post.slug}`}
  data-cursor="Read"
>
  <div use:clipImageReveal class={`image-frame ${featured ? 'aspect-[16/10]' : 'aspect-[4/3]'}`}>
    <Picture
      image={post.hero}
      sizes={featured ? '(min-width: 768px) 55vw, 100vw' : '(min-width: 768px) 33vw, 100vw'}
      priority={featured}
      class="h-full w-full scale-100 transition-transform duration-700 ease-[var(--ease-out)] group-hover:scale-105"
    />
  </div>
  <div class="self-center">
    <Badge label={post.category} />
    <h3 class={`${featured ? 'mt-5 font-serif text-4xl' : 'mt-4 font-serif text-2xl'} leading-tight`}>
      {post.title}
    </h3>
    <p class="mt-4 text-[var(--text-muted)]">{post.excerpt}</p>
    <p class="mt-5 text-sm text-[var(--text-muted)]">{post.publishedAt} / {post.readingTime}</p>
  </div>
</a>
