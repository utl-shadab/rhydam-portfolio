<script lang="ts">
  import { tick } from "svelte";
  import {
    DEFAULT_COOKIE_PREFERENCES,
    type CookiePreferences,
  } from "$lib/cookies/useCookieConsent";

  interface Props {
    open: boolean;
    preferences: CookiePreferences;
    onClose: () => void;
    onSave: (preferences: CookiePreferences) => void;
  }

  let { open, preferences, onClose, onSave }: Props = $props();
  let closeButton = $state<HTMLButtonElement | null>(null);
  let draft = $state<CookiePreferences>(DEFAULT_COOKIE_PREFERENCES);

  $effect(() => {
    if (!open) return;

    draft = {
      ...preferences,
      essential: true,
    };

    void tick().then(() => closeButton?.focus());
  });

  function setPreference(key: "analytics" | "marketing", value: boolean) {
    draft = {
      ...draft,
      [key]: value,
    };
  }

  function save() {
    onSave({
      ...draft,
      essential: true,
    });
  }

  function handleKeydown(event: KeyboardEvent) {
    if (open && event.key === "Escape") {
      onClose();
    }
  }
</script>

<svelte:window onkeydown={handleKeydown} />

{#if open}
  <div class="cookie-modal" role="presentation">
    <button
      class="cookie-modal__backdrop"
      type="button"
      aria-label="Close cookie preferences"
      onclick={onClose}
    ></button>
    <div
      class="cookie-modal__panel"
      role="dialog"
      aria-modal="true"
      aria-labelledby="cookie-preferences-title"
      aria-describedby="cookie-preferences-description"
    >
      <div class="cookie-modal__header">
        <div>
          <p class="cookie-modal__eyebrow">Privacy controls</p>
          <h2 id="cookie-preferences-title">Cookie preferences</h2>
        </div>
        <button
          bind:this={closeButton}
          class="cookie-modal__close"
          type="button"
          aria-label="Close preferences"
          onclick={onClose}
        >
          Close
        </button>
      </div>

      <p id="cookie-preferences-description" class="cookie-modal__body">
        Essential cookies keep the portfolio working. Analytics and marketing
        cookies are optional and only load after you choose them.
      </p>

      <div class="cookie-modal__options">
        <article class="cookie-option">
          <div>
            <h3>Essential</h3>
            <p>
              Required for core functionality, security, consent storage, and
              offline app behavior.
            </p>
          </div>
          <span
            class="cookie-option__locked"
            aria-label="Essential cookies are always enabled">Always on</span
          >
        </article>

        <label class="cookie-option">
          <div>
            <h3>Analytics</h3>
            <p>
              Helps measure page views and performance so the portfolio can
              improve without identifying you personally.
            </p>
          </div>
          <input
            type="checkbox"
            checked={draft.analytics}
            onchange={(event) =>
              setPreference("analytics", event.currentTarget.checked)}
          />
        </label>

        <label class="cookie-option">
          <div>
            <h3>Marketing</h3>
            <p>
              Allows optional campaign or attribution scripts. These stay off
              unless you explicitly enable them.
            </p>
          </div>
          <input
            type="checkbox"
            checked={draft.marketing}
            onchange={(event) =>
              setPreference("marketing", event.currentTarget.checked)}
          />
        </label>
      </div>

      <div class="cookie-modal__actions flex justify-end">
        <button
          class="cookie-button cookie-button--ghost"
          type="button"
          onclick={onClose}>Cancel</button
        >
        <button
          class="cookie-button cookie-button--primary"
          type="button"
          onclick={save}>Save preferences</button
        >
      </div>
    </div>
  </div>
{/if}

<style>
  .cookie-modal {
    position: fixed;
    inset: 0;
    z-index: 120;
    display: grid;
    place-items: center;
    padding: 1rem;
  }

  .cookie-modal__backdrop {
    position: absolute;
    inset: 0;
    border: 0;
    background: rgba(7, 7, 6, 0.72);
    backdrop-filter: blur(12px);
  }

  .cookie-modal__panel {
    position: relative;
    width: min(100%, 38rem);
    max-height: min(42rem, calc(100vh - 2rem));
    overflow: auto;
    border: 1px solid var(--line);
    border-radius: 8px;
    background: rgba(16, 15, 13, 0.94);
    box-shadow: var(--shadow-soft);
    color: var(--text);
    padding: 1rem;
    animation: cookie-modal-in 240ms ease-out;
  }

  .cookie-modal__header {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    gap: 1rem;
  }

  .cookie-modal__eyebrow {
    margin: 0 0 0.4rem;
    color: var(--accent);
    font-size: 0.72rem;
    font-weight: 700;
    letter-spacing: 0.08em;
    text-transform: uppercase;
  }

  h2 {
    margin: 0;
    font-family: var(--font-serif);
    font-size: 2.5rem;
    font-weight: 300;
    line-height: 0.95;
  }

  .cookie-modal__close,
  .cookie-button {
    border: 1px solid var(--line);
    border-radius: 8px;
    cursor: pointer;
    font: inherit;
  }

  .cookie-modal__close {
    background: var(--surface-soft);
    color: var(--text-muted);
    padding: 0.6rem 0.75rem;
  }

  .cookie-modal__body {
    margin: 1rem 0 0;
    color: var(--text-muted);
    line-height: 1.6;
  }

  .cookie-modal__options {
    display: grid;
    gap: 0.75rem;
    margin-top: 1rem;
  }

  .cookie-option {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;
    border: 1px solid var(--line);
    border-radius: 8px;
    background: var(--surface-soft);
    padding: 0.9rem;
  }

  .cookie-option h3 {
    margin: 0;
    font-size: 1rem;
  }

  .cookie-option p {
    margin: 0.35rem 0 0;
    color: var(--text-muted);
    font-size: 0.9rem;
    line-height: 1.5;
  }

  .cookie-option input {
    width: 2.8rem;
    height: 1.5rem;
    accent-color: var(--accent);
  }

  .cookie-option__locked {
    flex: 0 0 auto;
    color: var(--accent);
    font-size: 0.82rem;
    font-weight: 700;
  }

  .cookie-modal__actions {
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-end;
    gap: 0.75rem;
    margin-top: 1rem;
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

  .cookie-button--ghost {
    background: transparent;
    color: var(--text);
  }

  @keyframes cookie-modal-in {
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
    .cookie-option,
    .cookie-modal__header {
      align-items: flex-start;
      flex-direction: column;
    }

    .cookie-modal__actions {
      justify-content: flex-start;
      display: flex;
    }
  }

  @media (prefers-reduced-motion: reduce) {
    .cookie-modal__panel {
      animation: none;
    }
  }
</style>
