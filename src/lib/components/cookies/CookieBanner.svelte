<script lang="ts">
  import { onMount } from 'svelte';
  import CookiePreferencesModal from '$lib/components/cookies/CookiePreferencesModal.svelte';
  import {
    DEFAULT_COOKIE_CONSENT_STATE,
    cookieConsent,
    type CookieConsentState,
    type CookiePreferences
  } from '$lib/cookies/useCookieConsent';

  let consent = $state<CookieConsentState>(DEFAULT_COOKIE_CONSENT_STATE);

  onMount(() => {
    const unsubscribe = cookieConsent.subscribe((state) => {
      consent = state;
    });

    cookieConsent.init();

    return unsubscribe;
  });

  function savePreferences(preferences: CookiePreferences) {
    cookieConsent.savePreferences(preferences);
  }
</script>

{#if consent.initialized}
  {#if consent.bannerOpen}
    <div
      class="cookie-banner"
      role="dialog"
      aria-live="polite"
      aria-labelledby="cookie-banner-title"
      aria-describedby="cookie-banner-description"
    >
      <div>
        <p class="cookie-banner__eyebrow">Privacy</p>
        <h2 id="cookie-banner-title">Cookies, kept intentional.</h2>
        <p id="cookie-banner-description">
          Essential cookies keep this portfolio working. Analytics and marketing scripts stay off until you choose them.
        </p>
      </div>

      <div class="cookie-banner__actions" aria-label="Cookie consent actions">
        <button class="cookie-button cookie-button--primary" type="button" onclick={() => cookieConsent.acceptAll()}>
          Accept all
        </button>
        <button class="cookie-button cookie-button--ghost" type="button" onclick={() => cookieConsent.rejectNonEssential()}>
          Reject non-essential
        </button>
        <button class="cookie-button cookie-button--quiet" type="button" onclick={() => cookieConsent.openPreferences()}>
          Customize preferences
        </button>
      </div>
    </div>
  {/if}

  {#if !consent.bannerOpen && !consent.preferencesOpen}
    <button class="manage-cookies" type="button" onclick={() => cookieConsent.manage()} aria-label="Manage cookie preferences">
      <span class="manage-cookies__text">Manage cookies</span>
      <span class="manage-cookies__icon">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-cookie"><path d="M12 2a10 10 0 1 0 10 10 4 4 0 0 1-5-5 4 4 0 0 1-5-5"/><path d="M8.5 8.5v.01"/><path d="M16 15.5v.01"/><path d="M12 12v.01"/><path d="M11 17v.01"/><path d="M7 14v.01"/></svg>
      </span>
    </button>
  {/if}

  <CookiePreferencesModal
    open={consent.preferencesOpen}
    preferences={consent.preferences}
    onClose={() => cookieConsent.closePreferences()}
    onSave={savePreferences}
  />
{/if}

<style>
  .cookie-banner {
    position: fixed;
    right: 1rem;
    bottom: 1rem;
    z-index: 115;
    display: grid;
    gap: 1rem;
    width: min(100% - 2rem, 34rem);
    border: 1px solid var(--line);
    border-radius: 8px;
    background: rgba(16, 15, 13, 0.92);
    box-shadow: var(--shadow-soft);
    color: var(--text);
    padding: 1rem;
    backdrop-filter: blur(18px);
    animation: cookie-slide-in 260ms ease-out;
  }

  .cookie-banner__eyebrow {
    margin: 0 0 0.35rem;
    color: var(--accent);
    font-size: 0.72rem;
    font-weight: 700;
    letter-spacing: 0.08em;
    text-transform: uppercase;
  }

  h2 {
    margin: 0;
    font-family: var(--font-serif);
    font-size: 2.2rem;
    font-weight: 300;
    line-height: 0.95;
  }

  p {
    margin: 0.65rem 0 0;
    color: var(--text-muted);
    line-height: 1.55;
  }

  .cookie-banner__actions {
    display: flex;
    flex-wrap: wrap;
    gap: 0.65rem;
  }

  .cookie-button,
  .manage-cookies {
    border: 1px solid var(--line);
    border-radius: 8px;
    cursor: pointer;
    font: inherit;
    font-size: 0.9rem;
  }

  .cookie-button {
    min-height: 2.75rem;
    padding: 0.75rem 1rem;
    font-weight: 700;
  }

  .cookie-button--primary {
    border-color: var(--accent);
    background: var(--accent);
    color: var(--bg);
  }

  .cookie-button--ghost,
  .cookie-button--quiet {
    background: transparent;
    color: var(--text);
  }

  .cookie-button--quiet {
    color: var(--text-muted);
  }

  .manage-cookies {
    position: fixed;
    right: 1rem;
    bottom: 1rem;
    z-index: 80;
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgba(16, 15, 13, 0.72);
    color: var(--text-muted);
    padding: 0.65rem 0.8rem;
    backdrop-filter: blur(12px);
    transition: all 0.2s ease;
  }

  .manage-cookies:hover {
    background: rgba(16, 15, 13, 1);
    color: var(--text);
  }

  .manage-cookies__text {
    display: none;
  }

  .manage-cookies__icon {
    display: flex;
  }

  @media (min-width: 768px) {
    .manage-cookies__text {
      display: inline;
    }

    .manage-cookies__icon {
      display: none;
    }
  }

  @keyframes cookie-slide-in {
    from {
      opacity: 0;
      transform: translate3d(0, 0.75rem, 0);
    }

    to {
      opacity: 1;
      transform: translate3d(0, 0, 0);
    }
  }

  @media (max-width: 560px) {
    .cookie-banner {
      right: 0.75rem;
      bottom: 0.75rem;
      width: calc(100% - 1.5rem);
    }

    .cookie-banner__actions {
      display: grid;
    }

    .manage-cookies {
      right: 0.75rem;
      bottom: 0.75rem;
    }
  }

  @media (prefers-reduced-motion: reduce) {
    .cookie-banner {
      animation: none;
    }
  }
</style>
