import * as server from '../entries/pages/projects/_page.server.ts.js';

export const index = 10;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/projects/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/projects/+page.server.ts";
export const imports = ["_app/immutable/nodes/10.DfBjHcau.js","_app/immutable/chunks/KE3d35lL.js","_app/immutable/chunks/D0N5aSzK.js","_app/immutable/chunks/CP97kCR3.js","_app/immutable/chunks/D6Rm7NB9.js","_app/immutable/chunks/B571PCF-.js","_app/immutable/chunks/DoQaelaO.js","_app/immutable/chunks/oMNzmCzC.js","_app/immutable/chunks/O6-aNYLC.js","_app/immutable/chunks/CNtXYDPd.js","_app/immutable/chunks/rgiSnIML.js","_app/immutable/chunks/QThUHRwC.js"];
export const stylesheets = [];
export const fonts = [];
