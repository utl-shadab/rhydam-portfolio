<script lang="ts">
  import { onMount } from "svelte";
  import Logo from "$lib/components/ui/Logo.svelte";
  import { prefersReducedMotion } from "$lib/utils/performance";

  type InstallOutcome = "accepted" | "dismissed";

  interface BeforeInstallPromptEvent extends Event {
    readonly platforms: string[];
    readonly userChoice: Promise<{ outcome: InstallOutcome; platform: string }>;
    prompt: () => Promise<void>;
  }

  let visible = $state(false);
  let installPrompt = $state<BeforeInstallPromptEvent | null>(null);

  const dismissedKey = "rhydam-panda-install-dismissed";

  onMount(() => {
    const dismissed = localStorage.getItem(dismissedKey) === "true";
    if (dismissed) return;

    function handleBeforeInstallPrompt(event: Event) {
      event.preventDefault();
      installPrompt = event as BeforeInstallPromptEvent;
      visible = true;
    }

    function handleInstalled() {
      visible = false;
      installPrompt = null;
      localStorage.setItem(dismissedKey, "true");
    }

    window.addEventListener("beforeinstallprompt", handleBeforeInstallPrompt);
    window.addEventListener("appinstalled", handleInstalled);

    return () => {
      window.removeEventListener(
        "beforeinstallprompt",
        handleBeforeInstallPrompt,
      );
      window.removeEventListener("appinstalled", handleInstalled);
    };
  });

  async function installApp() {
    if (!installPrompt) return;

    await installPrompt.prompt();
    const choice = await installPrompt.userChoice;
    if (choice.outcome === "accepted" || choice.outcome === "dismissed") {
      visible = false;
      installPrompt = null;
      localStorage.setItem(dismissedKey, "true");
    }
  }

  function dismiss() {
    visible = false;
    installPrompt = null;
    localStorage.setItem(dismissedKey, "true");
  }
</script>

{#if visible}
  <aside
    class={`fixed bottom-24 right-5 z-[65] w-[min(22rem,calc(100vw-2.5rem))] rounded-[8px] border border-[var(--line)] bg-[rgba(7,7,6,0.78)] p-4 text-[var(--text)] shadow-2xl backdrop-blur-xl transition-opacity duration-300 ${
      prefersReducedMotion()
        ? ""
        : "motion-safe:animate-[pwa-rise_420ms_ease-out]"
    }`}
    aria-label="Install Rhydam Panda portfolio app"
  >
    <div class="flex gap-4">
      <Logo class="h-12 w-12 shrink-0" />
      <div>
        <p class="font-serif text-2xl leading-none">Install Panda portfolio</p>
        <p class="mt-2 text-sm text-[var(--text-muted)]">
          Add the portfolio app for offline browsing and fast return visits.
        </p>
      </div>
    </div>
    <div class="mt-4 flex gap-2">
      <button
        class="rounded-[8px] bg-[var(--accent)] text-[var(--bg)] hover:bg-[var(--text)] px-4 py-2 text-sm font-semibold"
        type="button"
        onclick={installApp}
        data-cursor="Open"
      >
        Install
      </button>
      <button
        class="rounded-[8px] border border-[var(--line)] px-4 py-2 text-sm text-[var(--text-muted)]"
        type="button"
        onclick={dismiss}
        data-cursor="Open"
      >
        Not now
      </button>
    </div>
  </aside>
{/if}

<style>
  @keyframes pwa-rise {
    from {
      opacity: 0;
      transform: translate3d(0, 1rem, 0);
    }
    to {
      opacity: 1;
      transform: translate3d(0, 0, 0);
    }
  }
</style>
