import { i as getDeveloperProfile } from "../../../chunks/portfolio.js";
//#region src/routes/about/+page.server.ts
var load = async () => {
	return getDeveloperProfile();
};
//#endregion
export { load };
