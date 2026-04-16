<script lang="ts">
  import { page } from '$app/state';
  import Button from '$lib/components/ui/Button.svelte';
</script>

<section class="section-pad grid min-h-screen place-items-center">
  <div class="mx-auto max-w-2xl text-center">
    <p class="eyebrow">Error {page.status}</p>
    <h1 class="large-title mt-4">{page.error?.message ?? 'This page is unavailable.'}</h1>
    <p class="body-large mt-6 text-[var(--text-muted)]">
      The route may have moved, or the requested engineering case study is no longer available.
    </p>
    <div class="mt-8">
      <Button href="/">Return home</Button>
    </div>
  </div>
</section>
