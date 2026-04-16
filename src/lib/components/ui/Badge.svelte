<script lang="ts">
  interface Props {
    label: string;
  }

  let { label }: Props = $props();
</script>

<span class="inline-flex rounded-[8px] border border-[var(--line)] px-3 py-1 text-xs font-semibold uppercase tracking-[0.08em] text-[var(--text-muted)]">
  {label}
</span>
