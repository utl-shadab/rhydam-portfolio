import { loadGsap } from '$lib/utils/gsap';
import { prefersReducedMotion } from '$lib/utils/performance';

export function clipImageReveal(node: HTMLElement) {
  if (prefersReducedMotion()) {
    node.style.clipPath = 'inset(0% 0% 0% 0%)';
    return {};
  }

  let cleanup = () => {};
  let destroyed = false;

  void loadGsap().then((loaded) => {
    if (!loaded || destroyed) return;

    const { gsap, ScrollTrigger } = loaded;
    const media = node.querySelector<HTMLElement>('img, video');

    const ctx = gsap.context(() => {
      gsap.set(node, {
        clipPath: 'inset(0% 0% 100% 0%)',
        opacity: 0.001,
        y: 28,
        willChange: 'clip-path, transform, opacity'
      });

      if (media) {
        gsap.set(media, {
          scale: 1.14,
          yPercent: 7,
          transformOrigin: '50% 50%',
          willChange: 'transform'
        });
      }

      const reveal = gsap.timeline({
        defaults: {
          ease: 'power4.out'
        },
        scrollTrigger: {
          trigger: node,
          start: 'top 87%',
          once: true
        }
      });

      reveal.to(node, {
        clipPath: 'inset(0% 0% 0% 0%)',
        opacity: 1,
        y: 0,
        duration: 1.18
      });

      if (media) {
        reveal.to(
          media,
          {
            scale: 1,
            yPercent: 0,
            duration: 1.35
          },
          0
        );

        gsap.to(media, {
          yPercent: -6,
          scale: 1,
          ease: 'none',
          scrollTrigger: {
            trigger: node,
            start: 'top bottom',
            end: 'bottom top',
            scrub: 1.1
          }
        });
      }
    }, node);

    cleanup = () => {
      ctx.revert();
      ScrollTrigger.getAll().forEach((trigger) => {
        if (trigger.trigger === node) trigger.kill();
      });
    };
  });

  return {
    destroy() {
      destroyed = true;
      cleanup();
    }
  };
}
