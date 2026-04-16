<script lang="ts">
  import type { Metric, Stat } from '$types/content';

  interface Props {
    items: Array<Metric | Stat>;
  }

  let { items }: Props = $props();
</script>

<div class="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
  {#each items as item}
    <div class="surface p-5">
      <p class="font-serif text-4xl leading-none text-[var(--text)]">{item.value}</p>
      <p class="mt-3 text-sm font-semibold uppercase tracking-[0.08em] text-[var(--text-muted)]">{item.label}</p>
      {#if 'detail' in item}
        <p class="mt-3 text-sm text-[var(--text-muted)]">{item.detail}</p>
      {/if}
    </div>
  {/each}
</div>
