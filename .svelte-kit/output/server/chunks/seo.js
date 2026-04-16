//#region src/lib/utils/seo.ts
var siteName = "Rhydam Panda";
var siteUrl = "https://rhydam-panda.example";
function createSeo(input) {
	return {
		...input,
		title: input.title.includes(siteName) ? input.title : `${input.title} | ${siteName}`,
		canonical: input.canonical ? `${siteUrl}${input.canonical}` : siteUrl
	};
}
function absoluteUrl(path) {
	if (path.startsWith("http")) return path;
	return `${siteUrl}${path.startsWith("/") ? path : `/${path}`}`;
}
//#endregion
export { createSeo as n, absoluteUrl as t };
