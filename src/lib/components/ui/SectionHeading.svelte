<script lang="ts">
  interface Props {
    eyebrow: string;
    title: string;
    body?: string;
  }

  let { eyebrow, title, body }: Props = $props();
</script>

<div class="content-grid">
  <p class="eyebrow">{eyebrow}</p>
  <div class="max-w-4xl">
    <h2 class="large-title">{title}</h2>
    {#if body}
      <p class="body-large mt-6 text-[var(--text-muted)]">{body}</p>
    {/if}
  </div>
</div>
