<script lang="ts">
  import { onMount } from 'svelte';
  import Logo from '$lib/components/ui/Logo.svelte';
  import { prefersReducedMotion } from '$lib/utils/performance';

  let visible = $state(true);
  let progress = $state(0);

  onMount(() => {
    const seen = sessionStorage.getItem('rhydam-panda-loader') === 'done';

    if (seen || prefersReducedMotion()) {
      visible = false;
      return;
    }

    let frame = 0;
    const started = performance.now();

    function tick(now: number) {
      const elapsed = now - started;
      progress = Math.min(100, Math.round((elapsed / 1200) * 100));

      if (progress < 100) {
        frame = requestAnimationFrame(tick);
        return;
      }

      sessionStorage.setItem('rhydam-panda-loader', 'done');
      window.setTimeout(() => {
        visible = false;
      }, 180);
    }

    frame = requestAnimationFrame(tick);

    return () => cancelAnimationFrame(frame);
  });
</script>

{#if visible}
  <div class="fixed inset-0 z-[80] grid place-items-center bg-[var(--bg)] text-[var(--text)]" aria-live="polite">
    <div class="grid w-64 justify-items-center gap-7">
      <Logo class="h-20 w-20 animate-pulse" />
      <div class="h-1 w-full overflow-hidden rounded-[8px] bg-[var(--surface-soft)]">
        <div class="h-full rounded-[8px] bg-[var(--accent)] transition-[width] duration-150" style:width={`${progress}%`}></div>
      </div>
      <p class="text-sm text-[var(--text-muted)]">{progress}%</p>
    </div>
  </div>
{/if}
