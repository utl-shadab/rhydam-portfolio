import * as server from '../entries/pages/about/_page.server.ts.js';

export const index = 5;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/about/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/about/+page.server.ts";
export const imports = ["_app/immutable/nodes/5.zqVpYcqF.js","_app/immutable/chunks/KE3d35lL.js","_app/immutable/chunks/CP97kCR3.js","_app/immutable/chunks/MJEBLPBQ.js","_app/immutable/chunks/QThUHRwC.js","_app/immutable/chunks/oMNzmCzC.js","_app/immutable/chunks/O6-aNYLC.js","_app/immutable/chunks/CNtXYDPd.js","_app/immutable/chunks/D6Rm7NB9.js","_app/immutable/chunks/CLyll-qn.js"];
export const stylesheets = [];
export const fonts = [];
