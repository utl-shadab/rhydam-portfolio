// @ts-nocheck
import { getDeveloperProfile } from '$lib/api/portfolio';
import type { PageServerLoad } from './$types';

export const load = async () => {
  return getDeveloperProfile();
};
;null as any as PageServerLoad;