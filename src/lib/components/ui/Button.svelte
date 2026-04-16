<script lang="ts">
  import type { Snippet } from "svelte";
  import { magnetic } from "$lib/components/animations/magnetic";

  interface Props {
    href?: string;
    children?: Snippet;
    variant?: "primary" | "ghost" | "quiet";
    ariaLabel?: string;
    type?: "button" | "submit";
    cursor?: "Open" | "Send" | "Copy";
    class?: string;
  }

  let {
    href,
    children,
    variant = "primary",
    ariaLabel,
    type = "button",
    cursor,
    class: className = "",
  }: Props = $props();

  const variants = {
    primary: "bg-[var(--accent)] text-[var(--bg)] ",
    ghost:
      "border border-[var(--line)] bg-[var(--surface-soft)] text-[var(--text)] hover:border-[var(--accent)]",
    quiet: "text-[var(--text)] hover:text-[var(--aqua)]",
  };

  const cursorLabel = $derived(cursor ?? (type === "submit" ? "Send" : "Open"));
  const classes = $derived(
    `magnetic-target inline-flex min-h-11 items-center justify-center rounded-[8px] px-5 py-3 text-sm font-semibold transition-colors duration-300 ${variants[variant]} ${className}`,
  );
</script>

{#if href}
  <a
    use:magnetic
    class={classes}
    {href}
    aria-label={ariaLabel}
    data-cursor={cursorLabel}
  >
    {@render children?.()}
  </a>
{:else}
  <button
    use:magnetic
    class={classes}
    {type}
    aria-label={ariaLabel}
    data-cursor={cursorLabel}
  >
    {@render children?.()}
  </button>
{/if}
