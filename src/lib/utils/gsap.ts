import { browser } from '$app/environment';
import { prefersReducedMotion } from './performance';

export async function loadGsap() {
  if (!browser || prefersReducedMotion()) return null;

  const [{ default: gsap }, scrollTriggerModule] = await Promise.all([
    import('gsap'),
    import('gsap/ScrollTrigger')
  ]);

  const ScrollTrigger = scrollTriggerModule.ScrollTrigger;
  gsap.registerPlugin(ScrollTrigger);

  return { gsap, ScrollTrigger };
}
