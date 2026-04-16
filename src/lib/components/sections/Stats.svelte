<script lang="ts">
  import { onMount } from 'svelte';
  import MetricStrip from '$lib/components/ui/MetricStrip.svelte';
  import type { Stat } from '$types/content';

  interface Props {
    stats: Stat[];
  }

  let { stats }: Props = $props();
  let root: HTMLDivElement;
  let animatedStats = $state<Stat[]>([]);

  $effect(() => {
    if (animatedStats.length === 0) {
      animatedStats = stats.map((stat) => ({ ...stat, value: stat.value.replace(/\d+/u, '0') }));
    }
  });

  function parseValue(value: string) {
    const match = value.match(/(\d+)/u);
    return {
      target: match ? Number(match[1]) : 0,
      suffix: value.replace(match?.[1] ?? '', '')
    };
  }

  onMount(() => {
    let frame = 0;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry?.isIntersecting) return;

        const started = performance.now();

        function tick(now: number) {
          const progress = Math.min(1, (now - started) / 1200);
          const eased = 1 - Math.pow(1 - progress, 3);

          animatedStats = stats.map((stat) => {
            const parsed = parseValue(stat.value);
            return {
              ...stat,
              value: `${Math.round(parsed.target * eased)}${parsed.suffix}`
            };
          });

          if (progress < 1) {
            frame = requestAnimationFrame(tick);
          }
        }

        frame = requestAnimationFrame(tick);
        observer.disconnect();
      },
      { threshold: 0.35 }
    );

    observer.observe(root);

    return () => {
      observer.disconnect();
      cancelAnimationFrame(frame);
    };
  });
</script>

<section class="section-pad">
  <div bind:this={root} class="mx-auto max-w-6xl">
    <MetricStrip items={animatedStats} />
  </div>
</section>
