<script lang="ts">
  import '../app.css';
  import '$lib/bones/registry.js';
  import LenisProvider from '$lib/components/animations/LenisProvider.svelte';
  import RouteTransition from '$lib/components/animations/RouteTransition.svelte';
  import CookieBanner from '$lib/components/cookies/CookieBanner.svelte';
  import CookieConsentScripts from '$lib/components/cookies/CookieConsentScripts.svelte';
  import Footer from '$lib/components/layout/Footer.svelte';
  import Loader from '$lib/components/loader/Loader.svelte';
  import RouteProgress from '$lib/components/loader/RouteProgress.svelte';
  import Navbar from '$lib/components/navigation/Navbar.svelte';
  import PwaInstallPrompt from '$lib/components/pwa/PwaInstallPrompt.svelte';
  import type { Snippet } from 'svelte';

  interface Props {
    children?: Snippet;
  }

  let { children }: Props = $props();
</script>

<LenisProvider>
  <div class="page-shell">
    <Loader />
    <RouteProgress />
    <RouteTransition />
    <CookieConsentScripts />
    <PwaInstallPrompt />
    <Navbar />
    <main id="main-content">
      {@render children?.()}
    </main>
    <Footer />
    <CookieBanner />
  </div>
</LenisProvider>
