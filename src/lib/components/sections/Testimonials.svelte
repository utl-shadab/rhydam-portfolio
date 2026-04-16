<script lang="ts">
  import ScrollReveal from '$lib/components/animations/ScrollReveal.svelte';
  import type { Testimonial } from '$types/content';

  interface Props {
    testimonials: Testimonial[];
  }

  let { testimonials }: Props = $props();
</script>

<section class="section-pad border-y border-[var(--line)]">
  <div class="mx-auto grid max-w-6xl gap-8 md:grid-cols-2">
    {#each testimonials as testimonial}
      <ScrollReveal>
        <figure>
          <blockquote class="font-serif text-3xl leading-tight md:text-4xl">
            "{testimonial.quote}"
          </blockquote>
          <figcaption class="mt-6 text-sm text-[var(--text-muted)]">
            {testimonial.author} / {testimonial.role}
          </figcaption>
        </figure>
      </ScrollReveal>
    {/each}
  </div>
</section>
