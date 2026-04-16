<script lang="ts">
  import { navigating } from '$app/state';
</script>

{#if navigating.to}
  <div class="fixed left-0 top-0 z-[90] h-1 w-full bg-transparent" aria-hidden="true">
    <div class="h-full w-2/3 animate-[route-progress_900ms_ease-in-out_infinite] rounded-r-[8px] bg-[var(--aqua)]"></div>
  </div>
{/if}

<style>
  @keyframes route-progress {
    0% {
      transform: translate3d(-100%, 0, 0);
    }
    100% {
      transform: translate3d(160%, 0, 0);
    }
  }
</style>
