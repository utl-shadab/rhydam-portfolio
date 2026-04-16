<script lang="ts">
  import Button from '$lib/components/ui/Button.svelte';
</script>

<section class="section-pad relative overflow-hidden">
  <div class="pointer-events-none absolute inset-x-0 top-8 text-center font-serif text-8xl text-[var(--surface-soft)] md:text-[10rem]">
    Build Next
  </div>
  <div class="relative mx-auto max-w-4xl text-center">
    <p class="eyebrow justify-center">Contact</p>
    <h2 class="large-title mt-5">Ready to turn a product idea into a serious system?</h2>
    <p class="body-large mx-auto mt-6 max-w-2xl text-[var(--text-muted)]">
      Bring the context, constraints, and ambition. I will help shape the interface, architecture, and delivery path around it.
    </p>
    <div class="mt-9">
      <Button href="/contact" cursor="Send">Start a conversation</Button>
    </div>
  </div>
</section>
