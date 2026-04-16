import * as server from '../entries/pages/work/_page.server.ts.js';

export const index = 12;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/work/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/work/+page.server.ts";
export const imports = ["_app/immutable/nodes/12.C79cE6nM.js","_app/immutable/chunks/KE3d35lL.js","_app/immutable/chunks/CP97kCR3.js","_app/immutable/chunks/MJEBLPBQ.js","_app/immutable/chunks/QThUHRwC.js","_app/immutable/chunks/oMNzmCzC.js","_app/immutable/chunks/O6-aNYLC.js","_app/immutable/chunks/CNtXYDPd.js","_app/immutable/chunks/B_iJdvKS.js","_app/immutable/chunks/D6Rm7NB9.js","_app/immutable/chunks/CLyll-qn.js"];
export const stylesheets = [];
export const fonts = [];
