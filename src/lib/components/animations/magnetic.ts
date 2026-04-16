import { isFinePointer, prefersReducedMotion } from '$lib/utils/performance';

export function magnetic(node: HTMLElement, strength = 0.28) {
  if (!isFinePointer() || prefersReducedMotion()) {
    return {};
  }

  function handlePointerMove(event: PointerEvent) {
    const rect = node.getBoundingClientRect();
    const x = (event.clientX - rect.left - rect.width / 2) * strength;
    const y = (event.clientY - rect.top - rect.height / 2) * strength;

    node.style.transition = 'transform 80ms linear';
    node.style.transform = `translate3d(${x}px, ${y}px, 0)`;
  }

  function handlePointerLeave() {
    node.style.transition = 'transform 520ms cubic-bezier(0.22, 1, 0.36, 1)';
    node.style.transform = 'translate3d(0, 0, 0)';
  }

  node.addEventListener('pointermove', handlePointerMove);
  node.addEventListener('pointerleave', handlePointerLeave);

  return {
    destroy() {
      node.removeEventListener('pointermove', handlePointerMove);
      node.removeEventListener('pointerleave', handlePointerLeave);
      node.style.transition = '';
      node.style.transform = '';
    }
  };
}
