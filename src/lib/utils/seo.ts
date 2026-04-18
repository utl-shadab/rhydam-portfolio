import type { PageSeo } from '$types/content';

export const siteName = 'Rhydam Panda';
export const siteUrl = 'https://rhydam-panda.example';

export function createSeo(input: PageSeo): PageSeo {
  return {
    ...input,
    title: input.title.includes(siteName) ? input.title : `${input.title} | ${siteName}`,
    canonical: input.canonical ? `${siteUrl}${input.canonical}` : siteUrl
  };
}

export function absoluteUrl(path: string): string {
  if (path.startsWith('http')) return path;
  return `${siteUrl}${path.startsWith('/') ? path : `/${path}`}`;
}
