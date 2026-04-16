<script lang="ts">
  import { onMount } from 'svelte';

  let progress = $state(0);

  onMount(() => {
    let frame = 0;

    function update() {
      const scrollTop = window.scrollY;
      const max = Math.max(1, document.documentElement.scrollHeight - window.innerHeight);
      progress = Math.min(100, Math.round((scrollTop / max) * 100));
      frame = requestAnimationFrame(update);
    }

    frame = requestAnimationFrame(update);

    return () => cancelAnimationFrame(frame);
  });
</script>

<div class="fixed left-0 top-0 z-[60] h-1 w-full bg-transparent" aria-hidden="true">
  <div class="h-full bg-[var(--accent)]" style:width={`${progress}%`}></div>
</div>
