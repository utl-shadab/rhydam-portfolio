import { g as getWorkPage } from "../../../chunks/portfolio.js";
//#region src/routes/work/+page.server.ts
var load = async () => {
	return getWorkPage();
};
//#endregion
export { load };
