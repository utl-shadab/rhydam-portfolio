import * as server from '../entries/pages/contact/_page.server.ts.js';

export const index = 8;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/contact/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/contact/+page.server.ts";
export const imports = ["_app/immutable/nodes/8.BrRSsQC2.js","_app/immutable/chunks/KE3d35lL.js","_app/immutable/chunks/CP97kCR3.js","_app/immutable/chunks/B_iJdvKS.js","_app/immutable/chunks/CNtXYDPd.js","_app/immutable/chunks/D6Rm7NB9.js"];
export const stylesheets = [];
export const fonts = [];
