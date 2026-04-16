import { t as index_server_exports } from "./index-server.js";
import { y as noop } from "./shared.js";
import "./environment.js";
import "./exports.js";
import { O as writable, Z as noop$1, tt as getContext } from "./dev.js";
import "./internal.js";
import "@sveltejs/kit/internal";
import "@sveltejs/kit/internal/server";
var PRELOAD_PRIORITIES = {
	tap: 1,
	hover: 2,
	viewport: 3,
	eager: 4,
	off: -1,
	false: -1
};
({ ...PRELOAD_PRIORITIES }), PRELOAD_PRIORITIES.hover;
/** @param {any} value */
function notifiable_store(value) {
	const store = writable(value);
	let ready = true;
	function notify() {
		ready = true;
		store.update((val) => val);
	}
	/** @param {any} new_value */
	function set(new_value) {
		ready = false;
		store.set(new_value);
	}
	/** @param {(value: any) => void} run */
	function subscribe(run) {
		/** @type {any} */
		let old_value;
		return store.subscribe((new_value) => {
			if (old_value === void 0 || ready && new_value !== old_value) run(old_value = new_value);
		});
	}
	return {
		notify,
		set,
		subscribe
	};
}
var updated_listener = { v: noop };
function create_updated_store() {
	const { set, subscribe } = writable(false);
	return {
		subscribe,
		check: async () => false
	};
}
var navigating$3;
var updated$1;
var is_legacy = noop$1.toString().includes("$$") || /function \w+\(\) \{\}/.test(noop$1.toString());
var placeholder_url = "a:";
if (is_legacy) {
	new URL(placeholder_url);
	navigating$3 = { current: null };
	updated$1 = { current: false };
} else {
	new class Page {
		data = {};
		form = null;
		error = null;
		params = {};
		route = { id: null };
		state = {};
		status = -1;
		url = new URL(placeholder_url);
	}();
	navigating$3 = new class Navigating {
		current = null;
	}();
	updated$1 = new class Updated {
		current = false;
	}();
	updated_listener.v = () => updated$1.current = true;
}
//#endregion
//#region node_modules/@sveltejs/kit/src/runtime/client/client.js
/** @import { RemoteQueryCacheEntry } from './remote-functions/query.svelte.js' */
var { onMount, tick } = index_server_exports;
var stores = {
	url: /* @__PURE__ */ notifiable_store({}),
	page: /* @__PURE__ */ notifiable_store({}),
	navigating: /* @__PURE__ */ writable(null),
	updated: /* @__PURE__ */ create_updated_store()
};
/**
* Note on before_navigate_callbacks, on_navigate_callbacks and after_navigate_callbacks:
* do not re-assign as some closures keep references to these Sets
*/
/** @type {Set<(navigation: import('@sveltejs/kit').BeforeNavigate) => void>} */
var before_navigate_callbacks = /* @__PURE__ */ new Set();
/** @type {Set<(navigation: import('@sveltejs/kit').AfterNavigate) => void>} */
var after_navigate_callbacks = /* @__PURE__ */ new Set();
/**
* @template {Function} T
* @param {Set<T>} callbacks
* @param {T} callback
*/
function add_navigation_callback(callbacks, callback) {
	onMount(() => {
		callbacks.add(callback);
		return () => {
			callbacks.delete(callback);
		};
	});
}
/**
* A lifecycle function that runs the supplied `callback` when the current component mounts, and also whenever we navigate to a URL.
*
* `afterNavigate` must be called during a component initialization. It remains active as long as the component is mounted.
* @param {(navigation: import('@sveltejs/kit').AfterNavigate) => void} callback
* @returns {void}
*/
function afterNavigate(callback) {
	add_navigation_callback(after_navigate_callbacks, callback);
}
/**
* A navigation interceptor that triggers before we navigate to a URL, whether by clicking a link, calling `goto(...)`, or using the browser back/forward controls.
*
* Calling `cancel()` will prevent the navigation from completing. If `navigation.type === 'leave'` — meaning the user is navigating away from the app (or closing the tab) — calling `cancel` will trigger the native browser unload confirmation dialog. In this case, the navigation may or may not be cancelled depending on the user's response.
*
* When a navigation isn't to a SvelteKit-owned route (and therefore controlled by SvelteKit's client-side router), `navigation.to.route.id` will be `null`.
*
* If the navigation will (if not cancelled) cause the document to unload — in other words `'leave'` navigations and `'link'` navigations where `navigation.to.route === null` — `navigation.willUnload` is `true`.
*
* `beforeNavigate` must be called during a component initialization. It remains active as long as the component is mounted.
* @param {(navigation: import('@sveltejs/kit').BeforeNavigate) => void} callback
* @returns {void}
*/
function beforeNavigate(callback) {
	add_navigation_callback(before_navigate_callbacks, callback);
}
Object.defineProperty({
	get from() {
		return navigating$3.current ? navigating$3.current.from : null;
	},
	get to() {
		return navigating$3.current ? navigating$3.current.to : null;
	},
	get type() {
		return navigating$3.current ? navigating$3.current.type : null;
	},
	get willUnload() {
		return navigating$3.current ? navigating$3.current.willUnload : null;
	},
	get delta() {
		return navigating$3.current ? navigating$3.current.delta : null;
	},
	get complete() {
		return navigating$3.current ? navigating$3.current.complete : null;
	}
}, "current", { get() {
	throw new Error("Replace navigating.current.<prop> with navigating.<prop>");
} });
stores.updated.check;
//#endregion
//#region node_modules/@sveltejs/kit/src/runtime/app/state/server.js
function context() {
	return getContext("__request__");
}
var page$1 = {
	get data() {
		return context().page.data;
	},
	get error() {
		return context().page.error;
	},
	get form() {
		return context().page.form;
	},
	get params() {
		return context().page.params;
	},
	get route() {
		return context().page.route;
	},
	get state() {
		return context().page.state;
	},
	get status() {
		return context().page.status;
	},
	get url() {
		return context().page.url;
	}
};
var navigating$1 = {
	from: null,
	to: null,
	type: null,
	willUnload: null,
	delta: null,
	complete: null
};
//#endregion
//#region node_modules/@sveltejs/kit/src/runtime/app/state/index.js
/**
* A read-only reactive object with information about the current page, serving several use cases:
* - retrieving the combined `data` of all pages/layouts anywhere in your component tree (also see [loading data](https://svelte.dev/docs/kit/load))
* - retrieving the current value of the `form` prop anywhere in your component tree (also see [form actions](https://svelte.dev/docs/kit/form-actions))
* - retrieving the page state that was set through `goto`, `pushState` or `replaceState` (also see [goto](https://svelte.dev/docs/kit/$app-navigation#goto) and [shallow routing](https://svelte.dev/docs/kit/shallow-routing))
* - retrieving metadata such as the URL you're on, the current route and its parameters, and whether or not there was an error
*
* ```svelte
* <!--- file: +layout.svelte --->
* <script>
* 	import { page } from '$app/state';
* <\/script>
*
* <p>Currently at {page.url.pathname}</p>
*
* {#if page.error}
* 	<span class="red">Problem detected</span>
* {:else}
* 	<span class="small">All systems operational</span>
* {/if}
* ```
*
* Changes to `page` are available exclusively with runes. (The legacy reactivity syntax will not reflect any changes)
*
* ```svelte
* <!--- file: +page.svelte --->
* <script>
* 	import { page } from '$app/state';
* 	const id = $derived(page.params.id); // This will correctly update id for usage on this page
* 	$: badId = page.params.id; // Do not use; will never update after initial load
* <\/script>
* ```
*
* On the server, values can only be read during rendering (in other words _not_ in e.g. `load` functions). In the browser, the values can be read at any time.
*
* @type {import('@sveltejs/kit').Page}
*/
var page = page$1;
/**
* A read-only object representing an in-progress navigation, with `from`, `to`, `type` and (if `type === 'popstate'`) `delta` properties.
* Values are `null` when no navigation is occurring, or during server rendering.
* @type {import('@sveltejs/kit').Navigation | { from: null, to: null, type: null, willUnload: null, delta: null, complete: null }}
*/
var navigating = navigating$1;
//#endregion
export { beforeNavigate as i, page as n, afterNavigate as r, navigating as t };
