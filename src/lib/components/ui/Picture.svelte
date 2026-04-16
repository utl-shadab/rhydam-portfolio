<script lang="ts">
  import type { ImageAsset } from '$types/content';

  interface Props {
    image: ImageAsset;
    class?: string;
    sizes?: string;
    priority?: boolean;
  }

  let { image, class: className = '', sizes = '100vw', priority = false }: Props = $props();

  const widths = [480, 768, 1024, 1280, 1600, 1920];

  function imageUrl(width: number): string {
    const separator = image.src.includes('?') ? '&' : '?';
    return `${image.src}${separator}auto=format&fit=crop&w=${width}&q=82`;
  }

  const srcset = $derived(widths.map((width) => `${imageUrl(width)} ${width}w`).join(', '));
  const fallbackSrc = $derived(imageUrl(Math.min(1600, image.width)));
</script>

<img
  class={className}
  src={fallbackSrc}
  srcset={srcset}
  sizes={sizes}
  width={image.width}
  height={image.height}
  alt={image.alt}
  loading={priority ? 'eager' : 'lazy'}
  fetchpriority={priority ? 'high' : 'auto'}
  decoding="async"
  style:object-position={image.focal ?? 'center'}
/>
