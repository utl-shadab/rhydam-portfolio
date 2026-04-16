import { r as getContactPage } from "../../../chunks/portfolio.js";
//#region src/routes/contact/+page.server.ts
var load = async () => {
	return getContactPage();
};
//#endregion
export { load };
