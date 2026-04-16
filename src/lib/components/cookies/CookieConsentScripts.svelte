<script lang="ts">
  import { onMount } from 'svelte';
  import { cookieConsent, type CookieConsentState } from '$lib/cookies/useCookieConsent';

  interface AnalyticsWindow extends Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }

  const googleAnalyticsId = import.meta.env.VITE_GA_MEASUREMENT_ID as string | undefined;
  let analyticsLoaded = false;

  function validAnalyticsId(id: string | undefined): id is string {
    return Boolean(id && /^G-[A-Z0-9]+$/u.test(id));
  }

  function loadGoogleAnalytics(id: string | undefined) {
    if (analyticsLoaded || !validAnalyticsId(id)) return;

    analyticsLoaded = true;

    const script = document.createElement('script');
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(id)}`;
    document.head.appendChild(script);

    const analyticsWindow = window as AnalyticsWindow;

    analyticsWindow.dataLayer = analyticsWindow.dataLayer ?? [];
    analyticsWindow.gtag = (...args: unknown[]) => {
      analyticsWindow.dataLayer?.push(args);
    };

    analyticsWindow.gtag('js', new Date());
    analyticsWindow.gtag('config', id, {
      anonymize_ip: true,
      send_page_view: true
    });
  }

  function maybeLoadScripts(state: CookieConsentState) {
    if (!state.initialized || !state.preferences.analytics) return;

    loadGoogleAnalytics(googleAnalyticsId);
  }

  onMount(() => {
    const unsubscribe = cookieConsent.subscribe(maybeLoadScripts);

    const removeAcceptHook = cookieConsent.onAccept((consent) => {
      if (consent.preferences.analytics) {
        loadGoogleAnalytics(googleAnalyticsId);
      }
    });

    return () => {
      unsubscribe();
      removeAcceptHook();
    };
  });
</script>
