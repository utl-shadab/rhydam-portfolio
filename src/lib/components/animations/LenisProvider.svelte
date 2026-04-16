<script lang="ts">
  import { onMount } from 'svelte';
  import { afterNavigate } from '$app/navigation';
  import { scrolling } from '$lib/stores/scroll';
  import { prefersReducedMotion } from '$lib/utils/performance';
  import type { Snippet } from 'svelte';

  interface Props {
    children?: Snippet;
  }

  interface LenisInstance {
    raf: (time: number) => void;
    destroy: () => void;
    on: (event: 'scroll', callback: () => void) => void;
    scrollTo: (target: number | string | HTMLElement, options?: { immediate?: boolean; lock?: boolean; force?: boolean }) => void;
  }

  type LenisConstructor = new (options: {
    duration: number;
    smoothWheel: boolean;
    wheelMultiplier: number;
    touchMultiplier: number;
    anchors: boolean;
  }) => LenisInstance;

  let { children }: Props = $props();

  onMount(() => {
    if (prefersReducedMotion()) return;

    let frame = 0;
    let lenis: LenisInstance | null = null;
    let idleTimer: ReturnType<typeof setTimeout> | null = null;
    let startupTimer: ReturnType<typeof setTimeout> | null = null;
    let destroyed = false;

    function startLenis() {
      if (destroyed) return;

      void import('lenis').then((module) => {
        if (destroyed) return;

        const Lenis = module.default as LenisConstructor;
        lenis = new Lenis({
          duration: 1.08,
          smoothWheel: true,
          wheelMultiplier: 0.9,
          touchMultiplier: 1.1,
          anchors: true
        });

        lenis.on('scroll', () => {
          scrolling.set(true);
          if (idleTimer) clearTimeout(idleTimer);
          idleTimer = setTimeout(() => scrolling.set(false), 160);
        });

        function raf(time: number) {
          lenis?.raf(time);
          frame = requestAnimationFrame(raf);
        }

        frame = requestAnimationFrame(raf);
      });
    }

    if ('requestIdleCallback' in window) {
      const idleId = window.requestIdleCallback(startLenis, { timeout: 1400 });
      startupTimer = setTimeout(() => window.cancelIdleCallback(idleId), 1600);
    } else {
      startupTimer = setTimeout(startLenis, 700);
    }

    afterNavigate(() => {
      if (lenis) {
        lenis.scrollTo(0, { immediate: true });
      } else {
        window.scrollTo(0, 0);
      }
    });

    return () => {
      destroyed = true;
      if (startupTimer) clearTimeout(startupTimer);
      if (idleTimer) clearTimeout(idleTimer);
      cancelAnimationFrame(frame);
      lenis?.destroy();
      scrolling.set(false);
    };
  });
</script>

{@render children?.()}
