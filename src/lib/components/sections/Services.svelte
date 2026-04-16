<script lang="ts">
  import ScrollReveal from '$lib/components/animations/ScrollReveal.svelte';
  import type { Service } from '$types/content';

  interface Props {
    services: Service[];
  }

  let { services }: Props = $props();
</script>

<section class="section-pad bg-[var(--text)] text-[var(--bg)]">
  <div class="mx-auto max-w-6xl">
    <ScrollReveal>
      <p class="eyebrow text-[var(--accent)]">Services</p>
      <h2 class="large-title mt-4 max-w-4xl">From product ambiguity to shipped, scalable systems.</h2>
    </ScrollReveal>

    <div class="mt-12 divide-y divide-[rgba(7,7,6,0.16)]">
      {#each services as service}
        <ScrollReveal>
          <article class="grid gap-5 py-7 md:grid-cols-[0.2fr_0.8fr_1fr] md:items-start">
            <span class="text-sm text-[rgba(7,7,6,0.52)]">{service.number}</span>
            <h3 class="font-serif text-3xl">{service.name}</h3>
            <p class="text-[rgba(7,7,6,0.68)]">{service.description}</p>
          </article>
        </ScrollReveal>
      {/each}
    </div>
  </div>
</section>
