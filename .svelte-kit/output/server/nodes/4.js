import * as server from '../entries/pages/_page.server.ts.js';

export const index = 4;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/+page.server.ts";
export const imports = ["_app/immutable/nodes/4.C5FM7o50.js","_app/immutable/chunks/KE3d35lL.js","_app/immutable/chunks/D0N5aSzK.js","_app/immutable/chunks/CP97kCR3.js","_app/immutable/chunks/Ca6vn3Yw.js","_app/immutable/chunks/oMNzmCzC.js","_app/immutable/chunks/O6-aNYLC.js","_app/immutable/chunks/CNtXYDPd.js","_app/immutable/chunks/B_iJdvKS.js","_app/immutable/chunks/D6Rm7NB9.js","_app/immutable/chunks/B571PCF-.js","_app/immutable/chunks/DoQaelaO.js","_app/immutable/chunks/rgiSnIML.js","_app/immutable/chunks/QThUHRwC.js","_app/immutable/chunks/9Juh3JSs.js","_app/immutable/chunks/CLyll-qn.js"];
export const stylesheets = ["_app/immutable/assets/Logo.PDYC9B-J.css"];
export const fonts = [];
