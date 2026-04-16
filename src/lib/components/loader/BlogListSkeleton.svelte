<script lang="ts">
  interface Props {
    count?: number;
  }

  let { count = 3 }: Props = $props();
</script>

<div class="grid gap-8 md:grid-cols-3">
  {#each Array.from({ length: count }) as _}
    <div aria-hidden="true">
      <div class="skeleton-shimmer aspect-[4/3] rounded-[8px]"></div>
      <div class="skeleton-shimmer mt-5 h-4 w-24 rounded-[8px]"></div>
      <div class="skeleton-shimmer mt-4 h-8 w-5/6 rounded-[8px]"></div>
      <div class="skeleton-shimmer mt-3 h-16 rounded-[8px]"></div>
    </div>
  {/each}
</div>
