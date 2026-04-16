<script lang="ts">
  import { page } from "$app/state";
  import { onMount } from "svelte";
  import Logo from "$lib/components/ui/Logo.svelte";
  import PandaLogo from "../ui/PandaLogo.svelte";
  import { loadGsap } from "$lib/utils/gsap";

  const links = [
    { href: "/", label: "Home" },
    { href: "/projects", label: "Projects" },
    { href: "/work", label: "Work" },
    { href: "/blog", label: "Blog" },
    { href: "/about", label: "About" },
    { href: "/philosophy", label: "Philosophy" },
    { href: "/contact", label: "Contact" },
  ];

  let open = $state(false);
  let menuContainer: HTMLElement;
  let circlePath: SVGPathElement;
  let linkOrbit: HTMLElement;
  let linkNodes: HTMLElement[] = [];

  function closeMenu() {
    open = false;
  }

  onMount(() => {
    let cleanup = () => {};

    void loadGsap().then((loaded) => {
      if (!loaded) return;
      const { gsap } = loaded;

      const ctx = gsap.context(() => {
        // Initial setup for the circle draw
        gsap.set(circlePath, { strokeDasharray: 1300, strokeDashoffset: 1300 });

        $effect(() => {
          if (open) {
            // Draw circle animation
            gsap.to(circlePath, {
              strokeDashoffset: 0,
              duration: 1.8,
              ease: "power3.inOut",
            });

            // Infinite Orbit Rotation (Desktop only)
            if (window.innerWidth >= 1024) {
              // Main container rotates clockwise
              gsap.to(linkOrbit, {
                rotation: 360,
                duration: 60,
                repeat: -1,
                ease: "none",
              });

              // Internal links rotate counter-clockwise to stay upright
              gsap.to(linkNodes, {
                rotation: -360,
                duration: 60,
                repeat: -1,
                ease: "none",
              });
            }
          } else {
            // Kill animations when closed to save resources
            gsap.killTweensOf([circlePath, linkOrbit, ...linkNodes]);
            gsap.set(circlePath, { strokeDashoffset: 1300 });
          }
        });
      });

      cleanup = () => ctx.revert();
    });

    return () => cleanup();
  });
</script>

<a
  class="fixed left-5 top-5 z-50"
  href="/"
  aria-label="Rhydam Panda home"
  data-cursor="Open"
>
  <Logo class="h-16 w-16" />
</a>

<nav
  class="fixed bottom-10 left-1/2 z-50 flex -translate-x-1/2 items-center gap-6 rounded-full border border-(--line) bg-[rgba(7,7,6,0.72)] px-8 py-4 text-sm text-(--text) shadow-2xl backdrop-blur-xl transition-transform hover:scale-105"
  aria-label="Primary"
>
  <button
    class="flex cursor-pointer items-center gap-2 font-medium uppercase tracking-widest transition-opacity hover:opacity-70"
    type="button"
    aria-expanded={open}
    aria-controls="site-menu"
    onclick={() => (open = !open)}
    data-cursor={open ? "Close" : "Open"}
  >
    <span
      class="inline-block h-2 w-2 rounded-full bg-(--accent) {open
        ? 'animate-pulse'
        : ''}"
    ></span>
    {open ? "Close" : "Menu"}
  </button>
  <div class="h-1 w-8 rounded-full bg-(--line)"></div>
  <a
    class="hidden font-medium uppercase tracking-widest transition-opacity hover:opacity-70 sm:inline-flex"
    href="/contact"
    data-cursor="Send">Contact</a
  >
</nav>

<div
  id="site-menu"
  bind:this={menuContainer}
  class={`fixed inset-0 z-40 flex items-center justify-center overflow-hidden bg-paper transition-[clip-path] duration-1000 ease-[cubic-bezier(0.77,0,0.175,1)] ${
    open
      ? "pointer-events-auto bg-(--paper) [clip-path:circle(150%_at_50%_100%)]"
      : "pointer-events-none bg-(--paper) [clip-path:circle(0%_at_50%_100%)]"
  }`}
>
  <div class="relative flex h-full w-full items-center justify-center p-6">
    <!-- Desktop Circular Stage (≥ 1024px) -->
    <div
      class="relative hidden h-[85vh] w-[85vh] items-center justify-center lg:flex"
    >
      <!-- Organic Handmade Circle -->
      <!-- <svg
        class="absolute inset-0 h-full w-full rotate-[-15deg] opacity-80"
        viewBox="0 0 400 400"
        fill="black"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          bind:this={circlePath}
          d="M200,40 C280,45 350,110 345,190 C340,270 275,340 195,335 C115,330 55,260 60,180 C65,100 120,35 200,40 Z"
          stroke="#070706"
          stroke-width="1.5"
          stroke-linecap="round"
        />
      </svg> -->
      <svg
        class="absolute inset-0 h-full w-full rotate-[-15deg] opacity-80"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 2150 2150"
      >
        <path
          bind:this={circlePath}
          d="M1036.3 2066.5c-133-1.2-265.8-22.8-392.3-64a893.7 893.7 0 0 1-260-133.4c-145-104.2-251.4-260.7-298.1-432.7-28.2-114.7-22.5-235.3 1.3-350.2 4.4-21.8 10.4-43.3 15.5-64.8 5-48.5 13-96.7 25.3-143.8C161.2 750.2 228.7 634.2 309.2 531c26-32.9 53.6-64.6 82.9-94.7 23.1-27.5 46.2-55.2 71.2-81.2 82.6-86.6 179.2-162 288.8-211.3 2-6.3 10-5.9 15.5-6.7 34-14.4 69.6-24.6 105.7-32.6 99.4-24.1 203-26.3 304.1-12.2 192.6 24.2 375.1 107 529 224.1 110.3 84 205.8 190.4 267.4 315a1092 1092 0 0 1 107.6 537.1c-6.2 124-29.2 248.2-78.2 362.6-63.7 150-172.7 280.2-312 365.3-121.6 75.7-259 125-399.2 151.7-84.3 15.3-170.2 18.3-255.7 18.4Zm25.8-17.8c73.2 1 146.4-7 218.5-18.7 69.5-12.2 139-28 204.6-54.4 92-38.2 173.4-98.6 243.5-168.7 106.8-110 186.2-244.8 244.2-386.2 59.1-147.7 82.8-293 31.3-447-94.2-292.5-309.4-538.6-578-685-149.6-88.4-317.9-154.6-493.7-154-27 .4-52.2 13-77.7 20.9a1131 1131 0 0 0-138 62C633 261.8 552 312.3 479.9 374.3c-43.7 34.5-77.2 79-109 124.3a1653.6 1653.6 0 0 0-115.3 187.9C196.2 802.2 147.3 924.4 117.4 1051c-10.8 134.4 1.9 271 41.9 400 51.3 170.6 139.1 340.2 291.3 440.9C632.9 2004 851 2041 1062 2048.7ZM985.2 122.5c184.9 13 353.3 91.7 508.5 188.5 263.6 159.6 482.4 434.7 548 738.6 32.1 161.5-22.3 325-92.2 469.4-73.4 147-171.5 285.3-304.6 384 219.8-120.8 357.1-338 398.5-582.6 43.3-241.5 11.4-498-105.8-715-128.3-226.7-363.8-389.2-610-465-64.6-18-131-31.7-198-36a732.8 732.8 0 0 0-155.4 17.3l11 .8ZM233.3 1693.8a643.8 643.8 0 0 0 48.8 59.7c-52.7-72-91-153.6-121-237.4a1062.7 1062.7 0 0 1-64.7-360.4c-29.3 205 15.7 371 137 538.1Zm-87.2-816.7c-1.8 6.2-3.2 12.5-4.7 18.8l-1.6 6.6c41.5-117.2 95-230.4 161.6-335.5-68.5 93.6-125.6 197.4-155.3 310.1Zm410.4-584.4L542.3 305l-11.5 10.3c101-71.9 211-132.7 327.7-174.8-25.2 3.3-51.3 3.5-76 9.5a632 632 0 0 0-58.7 27.3c-60.3 31.2-116 71-167.3 115.4Zm359.7-179.8a992 992 0 0 0-63.7 14.3c23-2.3 46-5.2 69.3-6 32.3-9 65.3-15.2 98.4-20.4a720 720 0 0 0-104 12.1Z"
          fill="#000"
        ></path></svg
      >

      <!-- Center Mascot -->
      <div class="relative z-10 h-72 w-72">
        <PandaLogo class="h-full w-full" />
      </div>

      <!-- Orbital Link Container -->
      <div
        bind:this={linkOrbit}
        class="pointer-events-none absolute inset-0 flex items-center justify-center"
      >
        {#each links as link, i}
          {@const angle = (i / links.length) * Math.PI * 2}
          <!-- Orbit radius set to 320px -->
          {@const x = Math.cos(angle) * 290}
          {@const y = Math.sin(angle) * 290}
          <div
            class="pointer-events-auto absolute"
            style="transform: translate({x}px, {y}px)"
          >
            <!-- Node that gets counter-rotated -->
            <div
              bind:this={linkNodes[i]}
              class="transition-transform hover:scale-110 bg-(--aqua) px-6 py-2 rounded-full"
            >
              <a
                href={link.href}
                class="font-serif text-2xl text-(--text)! transition-colors hover:text-(--accent)"
                onclick={closeMenu}
                data-cursor="View"
              >
                {link.label}
              </a>
            </div>
          </div>
        {/each}
      </div>
    </div>

    <!-- Mobile Navigation Stage (< 1024px) -->
    <div class="flex flex-col items-center justify-center gap-12 lg:hidden">
      <div class="h-40 w-40">
        <PandaLogo class="h-full w-full" />
      </div>
      <div class="grid grid-cols-2 items-center gap-6">
        {#each links as link}
          <a
            href={link.href}
            class={`font-serif text-2xl leading-none text-[#070706]! transition-opacity hover:opacity-60 ${
              page.url.pathname === link.href ? "text-(--accent)" : ""
            }`}
            onclick={closeMenu}
          >
            {link.label}
          </a>
        {/each}
      </div>
    </div>
  </div>
</div>

<style>
  /* Subtle float for the central mascot */
  @keyframes float {
    0%,
    100% {
      transform: translateY(0) rotate(-1deg);
    }
    50% {
      transform: translateY(-20px) rotate(1deg);
    }
  }
  .animate-float {
    animation: float 5s ease-in-out infinite;
  }

  /* Typography refinement */
  .font-serif {
    letter-spacing: -0.02em;
  }
</style>
