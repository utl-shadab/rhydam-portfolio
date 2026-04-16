import { browser } from '$app/environment';
import { get, writable } from 'svelte/store';

export const COOKIE_CONSENT_VERSION = '2026-04-15';
export const COOKIE_CONSENT_STORAGE_KEY = 'rhydam-panda-cookie-consent';
export const COOKIE_CONSENT_COOKIE_NAME = 'rp_cookie_consent';

export type ConsentStatus = 'pending' | 'accepted' | 'rejected' | 'customized';
export type ConsentHandler = (consent: PersistedCookieConsent) => void;

export interface CookiePreferences {
  essential: true;
  analytics: boolean;
  marketing: boolean;
}

export interface PersistedCookieConsent {
  version: string;
  status: Exclude<ConsentStatus, 'pending'>;
  preferences: CookiePreferences;
  updatedAt: string;
}

export interface CookieConsentState {
  initialized: boolean;
  bannerOpen: boolean;
  preferencesOpen: boolean;
  version: string;
  status: ConsentStatus;
  preferences: CookiePreferences;
  updatedAt: string | null;
}

export const DEFAULT_COOKIE_PREFERENCES: CookiePreferences = {
  essential: true,
  analytics: false,
  marketing: false
};

export const DEFAULT_COOKIE_CONSENT_STATE: CookieConsentState = {
  initialized: false,
  bannerOpen: false,
  preferencesOpen: false,
  version: COOKIE_CONSENT_VERSION,
  status: 'pending',
  preferences: DEFAULT_COOKIE_PREFERENCES,
  updatedAt: null
};

const acceptHandlers = new Set<ConsentHandler>();
const rejectHandlers = new Set<ConsentHandler>();
const store = writable<CookieConsentState>(DEFAULT_COOKIE_CONSENT_STATE);

function isCookiePreferences(value: unknown): value is CookiePreferences {
  if (!value || typeof value !== 'object') return false;

  const candidate = value as Partial<CookiePreferences>;
  return candidate.essential === true && typeof candidate.analytics === 'boolean' && typeof candidate.marketing === 'boolean';
}

function isPersistedConsent(value: unknown): value is PersistedCookieConsent {
  if (!value || typeof value !== 'object') return false;

  const candidate = value as Partial<PersistedCookieConsent>;
  const validStatus = candidate.status === 'accepted' || candidate.status === 'rejected' || candidate.status === 'customized';

  return (
    candidate.version === COOKIE_CONSENT_VERSION &&
    validStatus &&
    typeof candidate.updatedAt === 'string' &&
    isCookiePreferences(candidate.preferences)
  );
}

function parseStoredConsent(value: string | null): PersistedCookieConsent | null {
  if (!value) return null;

  try {
    const parsed: unknown = JSON.parse(decodeURIComponent(value));
    return isPersistedConsent(parsed) ? parsed : null;
  } catch {
    return null;
  }
}

function readCookie(): string | null {
  if (!browser) return null;

  const prefix = `${COOKIE_CONSENT_COOKIE_NAME}=`;
  const cookie = document.cookie
    .split('; ')
    .find((item) => item.startsWith(prefix));

  return cookie ? cookie.slice(prefix.length) : null;
}

function writeCookie(consent: PersistedCookieConsent) {
  if (!browser) return;

  const encoded = encodeURIComponent(JSON.stringify(consent));
  const maxAge = 60 * 60 * 24 * 365;
  document.cookie = `${COOKIE_CONSENT_COOKIE_NAME}=${encoded}; Max-Age=${maxAge}; Path=/; SameSite=Lax`;
}

function writeStorage(consent: PersistedCookieConsent) {
  if (!browser) return;

  try {
    localStorage.setItem(COOKIE_CONSENT_STORAGE_KEY, JSON.stringify(consent));
  } catch {
    writeCookie(consent);
  }
}

function readStoredConsent(): PersistedCookieConsent | null {
  if (!browser) return null;

  try {
    const stored = parseStoredConsent(localStorage.getItem(COOKIE_CONSENT_STORAGE_KEY));
    if (stored) return stored;
  } catch {
    // Fall through to cookie fallback.
  }

  return parseStoredConsent(readCookie());
}

function notify(status: PersistedCookieConsent['status'], consent: PersistedCookieConsent) {
  const handlers = status === 'rejected' ? rejectHandlers : acceptHandlers;
  handlers.forEach((handler) => handler(consent));
}

function persistConsent(status: PersistedCookieConsent['status'], preferences: CookiePreferences) {
  const consent: PersistedCookieConsent = {
    version: COOKIE_CONSENT_VERSION,
    status,
    preferences: {
      ...preferences,
      essential: true
    },
    updatedAt: new Date().toISOString()
  };

  writeStorage(consent);
  writeCookie(consent);
  store.set({
    initialized: true,
    bannerOpen: false,
    preferencesOpen: false,
    version: consent.version,
    status: consent.status,
    preferences: consent.preferences,
    updatedAt: consent.updatedAt
  });
  notify(status, consent);
}

export const cookieConsent = {
  subscribe: store.subscribe,
  init() {
    if (!browser) return;

    const persisted = readStoredConsent();

    if (persisted) {
      store.set({
        initialized: true,
        bannerOpen: false,
        preferencesOpen: false,
        version: persisted.version,
        status: persisted.status,
        preferences: persisted.preferences,
        updatedAt: persisted.updatedAt
      });
      return;
    }

    store.set({
      ...DEFAULT_COOKIE_CONSENT_STATE,
      initialized: true,
      bannerOpen: true
    });
  },
  acceptAll() {
    persistConsent('accepted', {
      essential: true,
      analytics: true,
      marketing: true
    });
  },
  rejectNonEssential() {
    persistConsent('rejected', DEFAULT_COOKIE_PREFERENCES);
  },
  savePreferences(preferences: CookiePreferences) {
    const nonEssentialEnabled = preferences.analytics || preferences.marketing;
    persistConsent(nonEssentialEnabled ? 'customized' : 'rejected', preferences);
  },
  openPreferences() {
    store.update((state) => ({
      ...state,
      bannerOpen: false,
      preferencesOpen: true
    }));
  },
  closePreferences() {
    const current = get(store);
    store.update((state) => ({
      ...state,
      bannerOpen: state.status === 'pending',
      preferencesOpen: false
    }));

    if (current.status === 'pending') {
      store.update((state) => ({
        ...state,
        bannerOpen: true
      }));
    }
  },
  manage() {
    store.update((state) => ({
      ...state,
      bannerOpen: false,
      preferencesOpen: true
    }));
  },
  hasConsent(category: keyof CookiePreferences) {
    return get(store).preferences[category];
  },
  onAccept(handler: ConsentHandler) {
    acceptHandlers.add(handler);
    return () => acceptHandlers.delete(handler);
  },
  onReject(handler: ConsentHandler) {
    rejectHandlers.add(handler);
    return () => rejectHandlers.delete(handler);
  }
};
