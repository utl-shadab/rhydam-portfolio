import * as server from '../entries/pages/philosophy/_page.server.ts.js';

export const index = 9;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/philosophy/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/philosophy/+page.server.ts";
export const imports = ["_app/immutable/nodes/9.Cj7YCpXr.js","_app/immutable/chunks/KE3d35lL.js","_app/immutable/chunks/CP97kCR3.js","_app/immutable/chunks/Ca6vn3Yw.js","_app/immutable/chunks/oMNzmCzC.js","_app/immutable/chunks/O6-aNYLC.js","_app/immutable/chunks/CNtXYDPd.js","_app/immutable/chunks/D6Rm7NB9.js"];
export const stylesheets = [];
export const fonts = [];
