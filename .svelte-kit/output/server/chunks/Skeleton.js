import { B as attr, V as clsx, a as derived, l as stringify, n as attr_class, o as ensure_array_like, r as attr_style } from "./dev.js";
//#region node_modules/boneyard-js/dist/types.js
/** Normalize a bone from either format to the object format */
function normalizeBone(b) {
	if (Array.isArray(b)) {
		if (b.length < 5 || b.length > 6) throw new Error(`Invalid bone format: expected [x,y,w,h,r,c?] but got ${b.length} elements`);
		return {
			x: b[0],
			y: b[1],
			w: b[2],
			h: b[3],
			r: b[4],
			c: b[5] || void 0
		};
	}
	return b;
}
//#endregion
//#region node_modules/boneyard-js/dist/extract.js
var DEFAULT_LEAF_TAGS = new Set([
	"p",
	"h1",
	"h2",
	"h3",
	"h4",
	"h5",
	"h6",
	"li",
	"td",
	"th"
]);
/**
* Snapshot the exact visual layout of a rendered DOM element as skeleton bones.
* Walks the DOM, finds every visible leaf element, and captures its exact
* bounding rect relative to the root. No layout engine, no heuristics —
* just pixel-perfect positions read directly from the browser.
*
*   const { bones, width, height } = snapshotBones(el, 'my-component', config)
*/
function snapshotBones(el, name = "component", config) {
	const rootRect = el.getBoundingClientRect();
	const bones = [];
	const leafTags = config?.leafTags ? new Set([...DEFAULT_LEAF_TAGS, ...config.leafTags]) : DEFAULT_LEAF_TAGS;
	const captureRoundedBorders = config?.captureRoundedBorders ?? true;
	const excludeTags = config?.excludeTags ? new Set(config.excludeTags) : null;
	const excludeSelectors = config?.excludeSelectors ?? null;
	function walk(node) {
		const style = getComputedStyle(node);
		if (style.display === "none" || style.visibility === "hidden" || style.opacity === "0") return;
		const tag = node.tagName.toLowerCase();
		if (excludeTags?.has(tag)) return;
		if (excludeSelectors?.some((sel) => node.matches(sel))) return;
		const children = [...node.children].filter((child) => {
			const cs = getComputedStyle(child);
			return cs.display !== "none" && cs.visibility !== "hidden" && cs.opacity !== "0";
		});
		const isMedia = tag === "img" || tag === "svg" || tag === "video" || tag === "canvas";
		const isFormEl = tag === "input" || tag === "button" || tag === "textarea" || tag === "select";
		const isLeaf = children.length === 0 || isMedia || isFormEl || leafTags.has(tag);
		const bg = style.backgroundColor;
		const hasBg = bg !== "rgba(0, 0, 0, 0)" && bg !== "transparent";
		const hasBgImage = style.backgroundImage !== "none";
		const borderTopWidth = parseFloat(style.borderTopWidth) || 0;
		const hasBorder = captureRoundedBorders && borderTopWidth > 0 && style.borderTopColor !== "rgba(0, 0, 0, 0)" && style.borderTopColor !== "transparent";
		const hasBorderRadius = (parseFloat(style.borderTopLeftRadius) || 0) > 0;
		const hasVisualSurface = hasBg || hasBgImage || hasBorder && hasBorderRadius;
		const isTableNode = tag === "tr" || tag === "td" || tag === "th" || tag === "thead" || tag === "tbody" || tag === "table";
		if (isLeaf) {
			const rect = node.getBoundingClientRect();
			if (rect.width < 1 || rect.height < 1) return;
			const isSquarish = isMedia && rect.width > 0 && rect.height > 0 && Math.abs(rect.width - rect.height) < 4;
			const br = isTableNode ? 0 : isSquarish ? "50%" : parseBorderRadius(style, node) ?? 8;
			const rw = rootRect.width;
			bones.push({
				x: rw > 0 ? +((rect.left - rootRect.left) / rw * 100).toFixed(4) : 0,
				y: Math.round(rect.top - rootRect.top),
				w: rw > 0 ? +(rect.width / rw * 100).toFixed(4) : 0,
				h: Math.round(rect.height),
				r: br
			});
			return;
		}
		if (hasVisualSurface) {
			const rect = node.getBoundingClientRect();
			if (rect.width >= 1 && rect.height >= 1) {
				const br = isTableNode ? 0 : parseBorderRadius(style, node) ?? 8;
				const rw = rootRect.width;
				bones.push({
					x: rw > 0 ? +((rect.left - rootRect.left) / rw * 100).toFixed(4) : 0,
					y: Math.round(rect.top - rootRect.top),
					w: rw > 0 ? +(rect.width / rw * 100).toFixed(4) : 0,
					h: Math.round(rect.height),
					r: br,
					c: true
				});
			}
		}
		for (const child of children) walk(child);
	}
	for (const child of el.children) walk(child);
	return {
		name,
		viewportWidth: Math.round(rootRect.width),
		width: Math.round(rootRect.width),
		height: Math.round(rootRect.height),
		bones
	};
}
/**
* Parse border-radius from computed style, preserving per-corner values.
* Returns: '50%' for circles, a number for uniform radius,
* or a CSS string like '8px 8px 0px 8px' for asymmetric corners.
*
* Important distinction:
* - `border-radius: 50%` on a square → circle → returns '50%'
* - `border-radius: 9999px` on a rectangle → pill → returns 9999 (large number)
* - `border-radius: 50%` on a rectangle → oval → returns '50%'
*/
function parseBorderRadius(style, el) {
	const tl = parseFloat(style.borderTopLeftRadius) || 0;
	const tr = parseFloat(style.borderTopRightRadius) || 0;
	const br = parseFloat(style.borderBottomRightRadius) || 0;
	const bl = parseFloat(style.borderBottomLeftRadius) || 0;
	if (tl === 0 && tr === 0 && br === 0 && bl === 0) return void 0;
	const isSquarish = el ? (() => {
		const rect = el.getBoundingClientRect();
		return rect.width > 0 && rect.height > 0 && Math.abs(rect.width - rect.height) < 4;
	})() : false;
	if (style.borderRadius === "50%") return "50%";
	if (Math.max(tl, tr, br, bl) > 9998) return isSquarish ? "50%" : 9999;
	if (tl === tr && tr === br && br === bl) return tl !== 8 ? tl : void 0;
	return `${tl}px ${tr}px ${br}px ${bl}px`;
}
//#endregion
//#region node_modules/boneyard-js/dist/shared.js
var bonesRegistry = /* @__PURE__ */ new Map();
function getRegisteredBones(name) {
	return bonesRegistry.get(name);
}
function ensureBuildSnapshotHook() {
	if (typeof window !== "undefined" && window.__BONEYARD_BUILD) window.__BONEYARD_SNAPSHOT = snapshotBones;
}
function isBuildMode() {
	return typeof window !== "undefined" && window.__BONEYARD_BUILD === true;
}
function resolveResponsive(bones, width) {
	if (!("breakpoints" in bones)) return bones;
	const bps = Object.keys(bones.breakpoints).map(Number).sort((a, b) => a - b);
	if (bps.length === 0) return null;
	const match = [...bps].reverse().find((bp) => width >= bp) ?? bps[0];
	return bones.breakpoints[match] ?? null;
}
var SHIMMER = {
	angle: 110,
	start: 30,
	end: 70,
	speed: "2s",
	lightHighlight: "#f7f7f7",
	darkHighlight: "#2c2c2c"
};
var PULSE = {
	speed: "1.8s",
	lightAdjust: .3,
	darkAdjust: .02
};
var DEFAULTS = {
	web: {
		light: "#f0f0f0",
		dark: "#222222"
	},
	native: {
		light: "#f0f0f0",
		dark: "#222222"
	},
	runtime: "#f0f0f0"
};
var RGBA_REGEX = /rgba?\(\s*([\d.]+)\s*,\s*([\d.]+)\s*,\s*([\d.]+)\s*(?:,\s*([\d.]+))?\s*\)/;
function adjustColor(color, amount) {
	const rgbaMatch = color.match(RGBA_REGEX);
	if (rgbaMatch) {
		const [, r, g, b, a = "1"] = rgbaMatch;
		return `rgba(${r},${g},${b},${Math.min(1, parseFloat(a) + amount * .5).toFixed(3)})`;
	}
	if (color.startsWith("#") && color.length >= 7) {
		const r = parseInt(color.slice(1, 3), 16);
		const g = parseInt(color.slice(3, 5), 16);
		const b = parseInt(color.slice(5, 7), 16);
		if (!isNaN(r) && !isNaN(g) && !isNaN(b)) {
			const nr = Math.round(r + (255 - r) * amount);
			const ng = Math.round(g + (255 - g) * amount);
			const nb = Math.round(b + (255 - b) * amount);
			return `#${nr.toString(16).padStart(2, "0")}${ng.toString(16).padStart(2, "0")}${nb.toString(16).padStart(2, "0")}`;
		}
	}
	return color;
}
//#endregion
//#region node_modules/boneyard-js/dist/Skeleton.svelte
var _globalConfig = {};
function configureBoneyard(config) {
	_globalConfig = {
		..._globalConfig,
		...config
	};
}
function Skeleton($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		ensureBuildSnapshotHook();
		let { loading, name, initialBones, color, darkColor, animate = "pulse", stagger = false, transition = false, boneClass, class: classProp, className: classNameProp, fallback, fixture, children, snapshotConfig } = $$props;
		let containerWidth = 0;
		let containerHeight = 0;
		let isDark = false;
		const uid = Math.random().toString(36).slice(2, 8);
		let resolvedClassName = derived(() => classNameProp ?? classProp);
		let buildMode = isBuildMode();
		let resolvedColor = derived(() => color ?? _globalConfig.color ?? DEFAULTS.web.light);
		let serializedSnapshotConfig = derived(() => snapshotConfig ? JSON.stringify(snapshotConfig) : void 0);
		let effectiveBones = derived(() => initialBones ?? (name ? getRegisteredBones(name) : void 0));
		let viewportWidth = derived(() => typeof window !== "undefined" ? window.innerWidth : containerWidth);
		let activeBones = derived(() => effectiveBones() && (viewportWidth() > 0 || containerWidth > 0) ? resolveResponsive(effectiveBones(), viewportWidth() || containerWidth) : null);
		let resolvedBoneClass = derived(() => boneClass ?? _globalConfig.boneClass);
		let staggerMs = derived(() => (() => {
			const v = stagger ?? _globalConfig.stagger;
			return v === true ? 80 : v === false || !v ? 0 : v;
		})());
		let transitionMs = derived(() => (() => {
			const v = transition ?? _globalConfig.transition;
			return v === true ? 300 : v === false || !v ? 0 : v;
		})());
		let transitioning = false;
		let showSkeleton = derived(() => (loading || transitioning) && !!activeBones());
		let showFallback = derived(() => loading && !activeBones() && true);
		let effectiveHeight = derived(() => containerHeight > 0 ? containerHeight : activeBones()?.height ?? 0);
		let capturedHeight = derived(() => activeBones()?.height ?? 0);
		let scaleY = derived(() => effectiveHeight() > 0 && capturedHeight() > 0 ? effectiveHeight() / capturedHeight() : 1);
		let rawAnimate = derived(() => animate ?? _globalConfig.animate ?? "pulse");
		let animationStyle = derived(() => rawAnimate() === true ? "pulse" : rawAnimate() === false ? "solid" : rawAnimate());
		function getBoneStyle(raw, scale, colorValue, dark, index = 0, capturedWidth = 0) {
			const bone = normalizeBone(raw);
			const radius = typeof bone.r === "string" ? bone.r : `${bone.r}px`;
			const boneColor = colorValue;
			const capturedPxW = bone.w / 100 * capturedWidth;
			const w = bone.r === "50%" && capturedWidth > 0 && Math.abs(capturedPxW - bone.h) < 4 ? `${bone.h * scale}px` : `${bone.w}%`;
			const stagger = staggerMs() > 0 ? `opacity:0;animation:by-${uid} 0.3s ease-out ${index * staggerMs()}ms forwards;` : "";
			return `position:absolute;left:${bone.x}%;top:${bone.y * scale}px;width:${w};height:${bone.h * scale}px;border-radius:${radius};background-color:${boneColor};overflow:hidden;${stagger}`;
		}
		function getOverlayStyle(colorValue, dark, anim) {
			if (anim === "solid") return "";
			const lighterColor = adjustColor(colorValue, dark ? PULSE.darkAdjust : PULSE.lightAdjust);
			if (anim === "pulse") return `position:absolute;inset:0;background-color:${lighterColor};animation:bp-${uid} ${PULSE.speed} ease-in-out infinite;`;
			if (anim === "shimmer") return `position:absolute;inset:0;background:linear-gradient(${SHIMMER.angle}deg, transparent ${SHIMMER.start}%, ${lighterColor} 50%, transparent ${SHIMMER.end}%);background-size:200% 100%;animation:bs-${uid} ${SHIMMER.speed} linear infinite;`;
			return "";
		}
		if (buildMode) {
			$$renderer.push("<!--[0-->");
			$$renderer.push(`<div${attr_class(clsx(resolvedClassName()))} style="position:relative;"${attr("data-boneyard", name)}${attr("data-boneyard-config", serializedSnapshotConfig())}><div>`);
			if (fixture) {
				$$renderer.push("<!--[0-->");
				fixture($$renderer);
				$$renderer.push(`<!---->`);
			} else {
				$$renderer.push("<!--[-1-->");
				children?.($$renderer);
				$$renderer.push(`<!---->`);
			}
			$$renderer.push(`<!--]--></div></div>`);
		} else {
			$$renderer.push("<!--[-1-->");
			$$renderer.push(`<div${attr_class(clsx(resolvedClassName()))} style="position:relative;"${attr("data-boneyard", name)}${attr("data-boneyard-config", serializedSnapshotConfig())}><div data-boneyard-content="true"${attr_style("", { visibility: showSkeleton() && true ? "hidden" : void 0 })}>`);
			if (showFallback()) {
				$$renderer.push("<!--[0-->");
				fallback?.($$renderer);
				$$renderer.push(`<!---->`);
			} else {
				$$renderer.push("<!--[-1-->");
				children?.($$renderer);
				$$renderer.push(`<!---->`);
			}
			$$renderer.push(`<!--]--></div> `);
			if (showSkeleton() && activeBones()) {
				$$renderer.push("<!--[0-->");
				$$renderer.push(`<div data-boneyard-overlay="true"${attr_style(`position:absolute;inset:0;overflow:hidden;opacity:${stringify(1)};${stringify(transitionMs() > 0 ? `transition:opacity ${transitionMs()}ms ease-out;` : "")}`)}><div style="position:relative;width:100%;height:100%;"><!--[-->`);
				const each_array = ensure_array_like(activeBones().bones.filter((b) => !normalizeBone(b).c));
				for (let i = 0, $$length = each_array.length; i < $$length; i++) {
					let bone = each_array[i];
					$$renderer.push(`<div data-boneyard-bone="true"${attr_class(clsx(resolvedBoneClass()))}${attr_style(getBoneStyle(bone, scaleY(), resolvedColor(), isDark, i, activeBones()?.width ?? 0))}>`);
					if (animationStyle() !== "solid" && !(Array.isArray(bone) ? bone[5] : bone.c)) {
						$$renderer.push("<!--[0-->");
						$$renderer.push(`<div${attr_style(getOverlayStyle(resolvedColor(), isDark, animationStyle()))}></div>`);
					} else $$renderer.push("<!--[-1-->");
					$$renderer.push(`<!--]--></div>`);
				}
				$$renderer.push(`<!--]--> `);
				if (animationStyle() === "pulse") {
					$$renderer.push("<!--[0-->");
					$$renderer.push(`<style>{\`@keyframes bp-\${uid}{0%,100%{opacity:0}50%{opacity:1}}\`}</style>`);
				} else $$renderer.push("<!--[-1-->");
				$$renderer.push(`<!--]--> `);
				if (animationStyle() === "shimmer") {
					$$renderer.push("<!--[0-->");
					$$renderer.push(`<style>{\`@keyframes bs-\${uid}{0%{background-position:200% 0}100%{background-position:-200% 0}}\`}</style>`);
				} else $$renderer.push("<!--[-1-->");
				$$renderer.push(`<!--]--> `);
				if (staggerMs() > 0) {
					$$renderer.push("<!--[0-->");
					$$renderer.push(`<style>{\`@keyframes by-\${uid}{from{opacity:0}to{opacity:1}}\`}</style>`);
				} else $$renderer.push("<!--[-1-->");
				$$renderer.push(`<!--]--></div></div>`);
			} else $$renderer.push("<!--[-1-->");
			$$renderer.push(`<!--]--></div>`);
		}
		$$renderer.push(`<!--]-->`);
	});
}
//#endregion
export { configureBoneyard as n, Skeleton as t };
