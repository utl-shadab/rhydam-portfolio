<script lang="ts">
  import ScrollReveal from '$lib/components/animations/ScrollReveal.svelte';

  interface Props {
    principles: string[];
  }

  let { principles }: Props = $props();
</script>

<section class="section-pad flex min-h-screen items-end pt-32">
  <div class="mx-auto max-w-7xl">
    <p class="eyebrow">Engineering Philosophy</p>
    <h1 class="display-title mt-5 max-w-6xl">The best software feels inevitable because the hard decisions are hidden underneath.</h1>
  </div>
</section>

<section class="section-pad">
  <div class="mx-auto grid max-w-6xl gap-14">
    {#each principles as principle, index}
      <ScrollReveal>
        <blockquote class="border-t border-[var(--line)] pt-8">
          <span class="text-sm text-[var(--aqua)]">0{index + 1}</span>
          <p class="mt-4 font-serif text-4xl leading-tight md:text-7xl">{principle}</p>
        </blockquote>
      </ScrollReveal>
    {/each}
  </div>
</section>

<section class="section-pad bg-[var(--text)] text-[var(--bg)]">
  <div class="mx-auto max-w-5xl text-center">
    <p class="eyebrow text-[var(--accent)]">Builder Belief</p>
    <h2 class="large-title mt-5">
      A beautiful interface is not enough. The system has to make the next correct action easier.
    </h2>
  </div>
</section>
