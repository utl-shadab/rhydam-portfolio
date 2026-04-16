<script lang="ts">
  import { onMount } from "svelte";
  import Button from "$lib/components/ui/Button.svelte";
  import Logo from "$lib/components/ui/Logo.svelte";
  import { loadGsap } from "$lib/utils/gsap";
  import type { ImageAsset } from "$types/content";

  interface Props {
    eyebrow: string;
    title: string;
    image?: ImageAsset;
  }

  let { eyebrow, title }: Props = $props();
  let root: HTMLElement;

  const heroLines = [
    "I build fast, scalable,",
    "product-grade web applications",
    "from interface to infrastructure.",
  ];

  const capabilities = ["SvelteKit", "TypeScript", "APIs", "AI systems"];

  onMount(() => {
    let cleanup = () => {};

    void loadGsap().then((loaded) => {
      if (!loaded) return;

      const { gsap } = loaded;
      const ctx = gsap.context(() => {
        gsap.from("[data-hero-line]", {
          yPercent: 110,
          opacity: 0,
          duration: 1,
          stagger: 0.12,
          ease: "power4.out",
        });

        gsap.from("[data-panda-mark]", {
          y: 22,
          opacity: 0,
          scale: 0.94,
          duration: 0.9,
          delay: 0.18,
          ease: "power4.out",
        });

        gsap.to("[data-hero-media]", {
          yPercent: 8,
          scale: 1.035,
          ease: "none",
          scrollTrigger: {
            trigger: root,
            start: "top top",
            end: "bottom top",
            scrub: 0.8,
          },
        });
      }, root);

      cleanup = () => ctx.revert();
    });

    return () => cleanup();
  });
</script>

<section bind:this={root} class="relative min-h-[92vh] overflow-hidden">
  <div data-hero-media class="absolute inset-0 h-[110%]">
    <video
      class="h-full w-full object-cover"
      autoplay
      muted
      loop
      playsinline
      preload="metadata"
      poster="/hero.png"
      aria-hidden="true"
    >
      <source src="/hero.mp4" type="video/mp4" />
    </video>
  </div>
  <!-- <div class="absolute inset-0 bg-gradient-to-b from-black/35 via-black/62 to-[var(--bg)]"></div>
  <div class="absolute inset-0 bg-[linear-gradient(90deg,rgba(243,239,231,0.08)_1px,transparent_1px),linear-gradient(rgba(243,239,231,0.06)_1px,transparent_1px)] bg-[length:72px_72px] opacity-35"></div> -->

  <div
    class="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col justify-end px-5 pb-24 pt-32 md:px-8 md:pb-28"
  >
    <div class="grid gap-10 lg:grid-cols-[1fr_18rem] lg:items-end">
      <div>
        <p class="eyebrow mb-6">{eyebrow}</p>
        <h1
          class="display-title max-w-6xl text-[var(--text)]"
          aria-label={title}
        >
          <span class="block overflow-hidden">
            <span data-hero-line class="block">{heroLines[0]}</span>
          </span>
          <span class="block overflow-hidden">
            <span data-hero-line class="block">
              <em class="text-[var(--accent)] not-italic">{heroLines[1]}</em>
            </span>
          </span>
          <span class="block overflow-hidden">
            <span data-hero-line class="block">{heroLines[2]}</span>
          </span>
        </h1>
        <p class="body-large mt-7 max-w-3xl text-[var(--text-muted)]">
          Full-stack developer focused on SvelteKit, TypeScript, APIs,
          performance, AI workflows, and systems that feel as good as they work.
        </p>

        <div class="mt-10 flex flex-wrap gap-3">
          <Button href="/projects" cursor="Open">View projects</Button>
          <Button href="/contact" variant="ghost" cursor="Send"
            >Contact me</Button
          >
        </div>
      </div>

      <aside
        data-panda-mark
        class="surface p-5"
        aria-label="Rhydam Panda capability summary"
      >
        <div class="flex items-center justify-between gap-4">
          <Logo class="h-14 w-14" />
          <span
            class="rounded-[8px] border border-[var(--line)] px-3 py-1 text-xs uppercase text-[var(--text-muted)]"
          >
            Panda-built
          </span>
        </div>
        <p class="mt-6 font-serif text-4xl leading-none">
          Clean systems. Fast surfaces. Sharp taste.
        </p>
        <div class="mt-6 grid grid-cols-2 gap-2">
          {#each capabilities as capability}
            <span
              class="rounded-[8px] border border-[var(--line)] px-3 py-2 text-sm text-[var(--text-muted)]"
            >
              {capability}
            </span>
          {/each}
        </div>
      </aside>
    </div>
  </div>

  <div
    class="absolute bottom-8 right-5 z-10 hidden items-center gap-3 text-sm text-[var(--text-muted)] md:flex"
  >
    <span class="h-12 w-px bg-[var(--line)]"></span>
    <span>Scroll</span>
  </div>
</section>
