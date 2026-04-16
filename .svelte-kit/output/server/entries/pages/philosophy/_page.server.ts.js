import { l as getPhilosophyPage } from "../../../chunks/portfolio.js";
//#region src/routes/philosophy/+page.server.ts
var load = async () => {
	return getPhilosophyPage();
};
//#endregion
export { load };
