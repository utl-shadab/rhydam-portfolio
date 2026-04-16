import { browser } from '$app/environment';

export function prefersReducedMotion(): boolean {
  return browser && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

export function isFinePointer(): boolean {
  return browser && window.matchMedia('(pointer: fine)').matches;
}

export function supportsHover(): boolean {
  return browser && window.matchMedia('(hover: hover)').matches;
}
