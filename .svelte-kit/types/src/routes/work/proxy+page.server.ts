// @ts-nocheck
import { getWorkPage } from '$lib/api/portfolio';
import type { PageServerLoad } from './$types';

export const load = async () => {
  return getWorkPage();
};
;null as any as PageServerLoad;