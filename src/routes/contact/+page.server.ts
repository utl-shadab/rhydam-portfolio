import { getContactPage } from '$lib/api/portfolio';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
  return getContactPage();
};
