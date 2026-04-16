<script lang="ts">
  interface Props {
    count?: number;
  }

  let { count = 4 }: Props = $props();
</script>

<div class="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
  {#each Array.from({ length: count }) as _, index}
    <div class={index % 2 === 1 ? 'md:pt-16' : ''} aria-hidden="true">
      <div class="skeleton-shimmer h-80 rounded-[8px]"></div>
      <div class="skeleton-shimmer mt-5 h-4 w-24 rounded-[8px]"></div>
      <div class="skeleton-shimmer mt-4 h-8 w-4/5 rounded-[8px]"></div>
      <div class="skeleton-shimmer mt-3 h-4 w-2/5 rounded-[8px]"></div>
    </div>
  {/each}
</div>
