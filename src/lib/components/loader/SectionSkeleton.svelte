<script lang="ts">
  interface Props {
    rows?: number;
  }

  let { rows = 3 }: Props = $props();
</script>

<div class="content-grid" aria-hidden="true">
  <div class="skeleton-shimmer h-4 w-28 rounded-[8px]"></div>
  <div>
    <div class="skeleton-shimmer h-12 w-4/5 rounded-[8px]"></div>
    <div class="mt-8 space-y-4">
      {#each Array.from({ length: rows }) as _}
        <div class="skeleton-shimmer h-5 rounded-[8px]"></div>
      {/each}
    </div>
  </div>
</div>
