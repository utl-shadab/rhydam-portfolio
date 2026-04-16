<script lang="ts">
  import ScrollReveal from '$lib/components/animations/ScrollReveal.svelte';

  interface Props {
    text: string;
  }

  let { text }: Props = $props();
</script>

<section class="section-pad">
  <ScrollReveal class="content-grid">
    <p class="eyebrow">Positioning</p>
    <p class="max-w-5xl font-serif text-3xl leading-tight md:text-5xl">{text}</p>
  </ScrollReveal>
</section>
