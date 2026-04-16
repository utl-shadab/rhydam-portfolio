<script lang="ts">
  import { onMount } from 'svelte';
  import { prefersReducedMotion } from '$lib/utils/performance';
  import { loadGsap } from '$lib/utils/gsap';
  import type { Snippet } from 'svelte';

  interface Props {
    children?: Snippet;
    class?: string;
    delay?: number;
  }

  let { children, class: className = '', delay = 0 }: Props = $props();
  let element: HTMLDivElement;

  onMount(() => {
    if (prefersReducedMotion()) {
      element.style.opacity = '1';
      element.style.transform = 'translate3d(0, 0, 0)';
      element.style.clipPath = 'inset(0% 0% 0% 0%)';
      return;
    }

    let cleanup = () => {};

    void loadGsap().then((loaded) => {
      if (!loaded) return;

      const { gsap, ScrollTrigger } = loaded;
      const ctx = gsap.context(() => {
        gsap.set(element, {
          opacity: 0,
          y: 28,
          clipPath: 'inset(0% 0% 100% 0%)'
        });

        gsap.to(element, {
          opacity: 1,
          y: 0,
          clipPath: 'inset(0% 0% 0% 0%)',
          duration: 1,
          delay,
          ease: 'power4.out',
          scrollTrigger: {
            trigger: element,
            start: 'top 86%',
            once: true
          }
        });
      }, element);

      cleanup = () => {
        ctx.revert();
        ScrollTrigger.getAll().forEach((trigger) => {
          if (trigger.trigger === element) trigger.kill();
        });
      };
    });

    return () => cleanup();
  });
</script>

<div bind:this={element} class={`reveal-ready ${className}`}>
  {@render children?.()}
</div>
