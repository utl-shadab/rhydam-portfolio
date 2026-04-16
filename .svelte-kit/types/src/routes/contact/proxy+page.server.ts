// @ts-nocheck
import { getContactPage } from '$lib/api/portfolio';
import type { PageServerLoad } from './$types';

export const load = async () => {
  return getContactPage();
};
;null as any as PageServerLoad;