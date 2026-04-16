<script lang="ts">
  import { onMount } from 'svelte';
  import Picture from '$lib/components/ui/Picture.svelte';
  import { loadGsap } from '$lib/utils/gsap';
  import type { ImageAsset } from '$types/content';

  interface Props {
    image: ImageAsset;
    sizes?: string;
    priority?: boolean;
    class?: string;
  }

  let { image, sizes = '(min-width: 768px) 50vw, 100vw', priority = false, class: className = '' }: Props = $props();
  let frame: HTMLDivElement;
  let media: HTMLDivElement;

  onMount(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    let cleanup = () => {};

    void loadGsap().then((loaded) => {
      if (!loaded) return;

      const { gsap, ScrollTrigger } = loaded;
      const ctx = gsap.context(() => {
        gsap.set(frame, {
          clipPath: 'inset(0% 0% 100% 0%)',
          opacity: 0.001,
          y: 36,
          willChange: 'clip-path, transform, opacity'
        });

        gsap.set(media, {
          scale: 1.16,
          yPercent: 8,
          transformOrigin: '50% 50%',
          willChange: 'transform'
        });

        const reveal = gsap.timeline({
          defaults: {
            ease: 'power4.out'
          },
          scrollTrigger: {
            trigger: frame,
            start: 'top 86%',
            once: true
          }
        });

        reveal
          .to(frame, {
            clipPath: 'inset(0% 0% 0% 0%)',
            opacity: 1,
            y: 0,
            duration: 1.25
          })
          .to(
            media,
            {
              scale: 1.04,
              yPercent: 0,
              duration: 1.45
            },
            0
          );

        gsap.to(media, {
          yPercent: -12,
          ease: 'none',
          scrollTrigger: {
            trigger: frame,
            start: 'top bottom',
            end: 'bottom top',
            scrub: 1.15
          }
        });
      }, frame);

      cleanup = () => {
        ctx.revert();
        ScrollTrigger.getAll().forEach((trigger) => {
          if (trigger.trigger === frame) trigger.kill();
        });
      };
    });

    return () => cleanup();
  });
</script>

<div bind:this={frame} class={`image-frame ${className}`}>
  <div bind:this={media} class="h-[112%] w-full">
    <Picture {image} {sizes} {priority} class="h-full w-full" />
  </div>
</div>
