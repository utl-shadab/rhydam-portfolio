import * as server from '../entries/pages/projects/_slug_/_page.server.ts.js';

export const index = 11;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/projects/_slug_/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/projects/[slug]/+page.server.ts";
export const imports = ["_app/immutable/nodes/11.BVtIZGQi.js","_app/immutable/chunks/KE3d35lL.js","_app/immutable/chunks/CP97kCR3.js","_app/immutable/chunks/MJEBLPBQ.js","_app/immutable/chunks/QThUHRwC.js","_app/immutable/chunks/oMNzmCzC.js","_app/immutable/chunks/O6-aNYLC.js","_app/immutable/chunks/CNtXYDPd.js","_app/immutable/chunks/B_iJdvKS.js","_app/immutable/chunks/D6Rm7NB9.js","_app/immutable/chunks/rgiSnIML.js","_app/immutable/chunks/CLyll-qn.js"];
export const stylesheets = [];
export const fonts = [];
