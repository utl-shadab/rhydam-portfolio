<script lang="ts">
  import { onMount } from 'svelte';
  import { loadGsap } from '$lib/utils/gsap';
  import { prefersReducedMotion } from '$lib/utils/performance';

  let footer: HTMLElement;

  onMount(async () => {
    if (prefersReducedMotion()) return;
    const module = await loadGsap();
    if (!module) return;
    const { gsap, ScrollTrigger } = module;

    gsap.from(footer.querySelectorAll('.footer-column'), {
      scrollTrigger: {
        trigger: footer,
        start: 'top bottom-=50',
        toggleActions: 'play none none none'
      },
      y: 40,
      opacity: 0,
      duration: 1.5,
      stagger: 0.15,
      ease: 'expo.out'
    });
  });
</script>

<footer bind:this={footer} class="section-tight border-t border-[var(--line)]">
  <div class="mx-auto grid max-w-6xl gap-10 md:grid-cols-[1.4fr_0.8fr_0.8fr_0.8fr]">
    <div class="footer-column">
      <h2 class="font-serif text-3xl">Rhydam Panda</h2>
      <p class="mt-4 max-w-sm text-[var(--text-muted)]">
        Full-stack developer building fast interfaces, typed APIs, SaaS systems, AI workflows, and product-grade engineering foundations.
      </p>
    </div>
 
    <nav aria-label="Footer navigation" class="footer-column">
      <h3 class="text-sm font-semibold uppercase tracking-[0.08em] text-[var(--text-muted)]">Navigate</h3>
      <div class="mt-4 grid gap-3 text-sm">
        <a href="/about" data-cursor="Open">About</a>
        <a href="/projects" data-cursor="Open">Projects</a>
        <a href="/work" data-cursor="Open">Work</a>
        <a href="/blog" data-cursor="Read">Journal</a>
      </div>
    </nav>
 
    <div class="footer-column">
      <h3 class="text-sm font-semibold uppercase tracking-[0.08em] text-[var(--text-muted)]">Connect</h3>
      <div class="mt-4 grid gap-3 text-sm">
        <a href="https://github.com" rel="noreferrer" target="_blank" data-cursor="Open">GitHub</a>
        <a href="https://linkedin.com" rel="noreferrer" target="_blank" data-cursor="Open">LinkedIn</a>
        <a href="mailto:hello@rhydampanda.example" data-cursor="Send">Email</a>
      </div>
    </div>
 
    <div class="footer-column">
      <h3 class="text-sm font-semibold uppercase tracking-[0.08em] text-[var(--text-muted)]">Focus</h3>
      <div class="mt-4 grid gap-3 text-sm text-[var(--text-muted)]">
        <span>SaaS builds</span>
        <span>AI dashboards</span>
        <span>Performance systems</span>
      </div>
    </div>
  </div>

  <div class="mx-auto mt-12 flex max-w-6xl flex-col gap-3 border-t border-[var(--line)] pt-6 text-sm text-[var(--text-muted)] md:flex-row md:justify-between">
    <span>Copyright 2026 Rhydam Panda. All rights reserved.</span>
    <span>Panda-built systems with taste.</span>
  </div>
</footer>
