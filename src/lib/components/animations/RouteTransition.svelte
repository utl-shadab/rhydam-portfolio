<script lang="ts">
  import { onMount, tick } from 'svelte';
  import { afterNavigate, beforeNavigate } from '$app/navigation';
  import { prefersReducedMotion } from '$lib/utils/performance';
  import { loadGsap } from '$lib/utils/gsap';

  let overlay: HTMLDivElement;
  let gsap: any;

  onMount(async () => {
    if (prefersReducedMotion()) return;
    const module = await loadGsap();
    if (module) gsap = module.gsap;
  });

  beforeNavigate(async (navigation) => {
    if (!overlay || !gsap || prefersReducedMotion()) return;

    // Slide overlay UP to cover screen
    await gsap.to(overlay, {
      y: '0%',
      duration: 0.6,
      ease: 'power4.inOut'
    });
  });

  afterNavigate(async () => {
    if (!overlay || !gsap || prefersReducedMotion()) return;

    await tick();

    // Slide overlay UP and OUT
    await gsap.to(overlay, {
      y: '-100%',
      duration: 0.8,
      ease: 'power4.inOut',
      delay: 0.1
    });

    // Reset for next time
    gsap.set(overlay, { y: '100%' });
  });
</script>

<div
  bind:this={overlay}
  class="pointer-events-none fixed inset-0 z-[100] bg-[var(--accent)]"
  style="transform: translate3d(0, 100%, 0);"
  aria-hidden="true"
></div>

<style>
  div {
    will-change: transform;
  }
</style>
