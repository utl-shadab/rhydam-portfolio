// @ts-nocheck
import { getPhilosophyPage } from '$lib/api/portfolio';
import type { PageServerLoad } from './$types';

export const load = async () => {
  return getPhilosophyPage();
};
;null as any as PageServerLoad;