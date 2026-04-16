<script lang="ts">
  import PandaLogo from "./PandaLogo.svelte";
  interface Props {
    class?: string;
  }

  let { class: className = "h-20 w-20" }: Props = $props();
</script>

<span class={`${className} inline-grid place-items-center overflow-hidden `}>
  <PandaLogo class="h-full w-full" />
</span>
