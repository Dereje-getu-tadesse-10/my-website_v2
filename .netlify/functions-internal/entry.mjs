import * as adapter from '@astrojs/netlify/netlify-functions.js';
import { renderers } from './renderers.mjs';
import { j as deserializeManifest } from './chunks/astro.671be3f2.mjs';

const _page0  = () => import('./chunks/index@_@astro.432d78cc.mjs');
const _page1  = () => import('./chunks/index@_@astro.da8f0a81.mjs');
const _page2  = () => import('./chunks/index@_@astro.d7392d3f.mjs');
const _page3  = () => import('./chunks/spotify-api@_@md.bd6a2295.mjs');
const _page4  = () => import('./chunks/spotify@_@md.883ec038.mjs');
const _page5  = () => import('./chunks/404@_@astro.d9776c10.mjs');const pageMap = new Map([["src/pages/index.astro", _page0],["src/pages/mentions-legales/index.astro", _page1],["src/pages/posts/index.astro", _page2],["src/pages/post/spotify-api.md", _page3],["src/pages/post/spotify.md", _page4],["src/pages/404.astro", _page5]]);
const _manifest = Object.assign(deserializeManifest({"adapterName":"@astrojs/netlify/functions","routes":[{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.b6f7a4c6.js"}],"styles":[{"type":"external","src":"/_astro/404.4226abfa.css"},{"type":"external","src":"/_astro/spotify-api.4d9c6cca.css"}],"routeData":{"route":"/","type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.b6f7a4c6.js"}],"styles":[{"type":"external","src":"/_astro/404.4226abfa.css"},{"type":"external","src":"/_astro/spotify-api.4d9c6cca.css"}],"routeData":{"route":"/mentions-legales","type":"page","pattern":"^\\/mentions-legales\\/?$","segments":[[{"content":"mentions-legales","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/mentions-legales/index.astro","pathname":"/mentions-legales","prerender":false,"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.b6f7a4c6.js"}],"styles":[{"type":"external","src":"/_astro/404.4226abfa.css"},{"type":"external","src":"/_astro/spotify-api.4d9c6cca.css"}],"routeData":{"route":"/posts","type":"page","pattern":"^\\/posts\\/?$","segments":[[{"content":"posts","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/posts/index.astro","pathname":"/posts","prerender":false,"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.b6f7a4c6.js"}],"styles":[{"type":"external","src":"/_astro/404.4226abfa.css"},{"type":"external","src":"/_astro/spotify-api.4d9c6cca.css"}],"routeData":{"route":"/post/spotify-api","type":"page","pattern":"^\\/post\\/spotify-api\\/?$","segments":[[{"content":"post","dynamic":false,"spread":false}],[{"content":"spotify-api","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/post/spotify-api.md","pathname":"/post/spotify-api","prerender":false,"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.b6f7a4c6.js"}],"styles":[{"type":"external","src":"/_astro/404.4226abfa.css"},{"type":"external","src":"/_astro/spotify-api.4d9c6cca.css"}],"routeData":{"route":"/post/spotify","type":"page","pattern":"^\\/post\\/spotify\\/?$","segments":[[{"content":"post","dynamic":false,"spread":false}],[{"content":"spotify","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/post/spotify.md","pathname":"/post/spotify","prerender":false,"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/404.4226abfa.css"}],"routeData":{"route":"/404","type":"page","pattern":"^\\/404\\/?$","segments":[[{"content":"404","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/404.astro","pathname":"/404","prerender":false,"_meta":{"trailingSlash":"ignore"}}}],"base":"/","compressHTML":false,"markdown":{"drafts":false,"syntaxHighlight":"shiki","shikiConfig":{"langs":[],"theme":"github-dark","wrap":false},"remarkPlugins":[],"rehypePlugins":[],"remarkRehype":{},"gfm":true,"smartypants":true},"componentMetadata":[["/Users/getutadesse/mportfolio/src/pages/index.astro",{"propagation":"none","containsHead":true}],["/Users/getutadesse/mportfolio/src/pages/mentions-legales/index.astro",{"propagation":"none","containsHead":true}],["/Users/getutadesse/mportfolio/src/pages/posts/index.astro",{"propagation":"none","containsHead":true}],["/Users/getutadesse/mportfolio/src/pages/post/spotify-api.md",{"propagation":"none","containsHead":true}],["/Users/getutadesse/mportfolio/src/pages/post/spotify.md",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var i=t=>{let e=async()=>{await(await t())()};\"requestIdleCallback\"in window?window.requestIdleCallback(e):setTimeout(e,200)};(self.Astro||(self.Astro={})).idle=i;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var s=(i,t)=>{let a=async()=>{await(await i())()};if(t.value){let e=matchMedia(t.value);e.matches?a():e.addEventListener(\"change\",a,{once:!0})}};(self.Astro||(self.Astro={})).media=s;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var r=(i,c,n)=>{let s=async()=>{await(await i())()},t=new IntersectionObserver(e=>{for(let o of e)if(o.isIntersecting){t.disconnect(),s();break}});for(let e of n.children)t.observe(e)};(self.Astro||(self.Astro={})).visible=r;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000@astrojs-ssr-virtual-entry":"_@astrojs-ssr-virtual-entry.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000empty-middleware":"_empty-middleware.mjs","/src/pages/404.astro":"chunks/pages/404.astro.2a769830.mjs","/src/pages/post/spotify.md":"chunks/pages/spotify.md.f1d247ee.mjs","\u0000@astro-page:src/pages/index@_@astro":"chunks/index@_@astro.432d78cc.mjs","\u0000@astro-page:src/pages/mentions-legales/index@_@astro":"chunks/index@_@astro.da8f0a81.mjs","\u0000@astro-page:src/pages/posts/index@_@astro":"chunks/index@_@astro.d7392d3f.mjs","\u0000@astro-page:src/pages/post/spotify-api@_@md":"chunks/spotify-api@_@md.bd6a2295.mjs","\u0000@astro-page:src/pages/post/spotify@_@md":"chunks/spotify@_@md.883ec038.mjs","\u0000@astro-page:src/pages/404@_@astro":"chunks/404@_@astro.d9776c10.mjs","/astro/hoisted.js?q=0":"_astro/hoisted.b6f7a4c6.js","astro:scripts/before-hydration.js":""},"assets":["/_astro/404.4226abfa.css","/_astro/spotify-api.4d9c6cca.css","/icon.ico","/_astro/hoisted.b6f7a4c6.js"]}), {
	pageMap,
	renderers,
});
const _args = {};

const _exports = adapter.createExports(_manifest, _args);
const handler = _exports['handler'];

const _start = 'start';
if(_start in adapter) {
	adapter[_start](_manifest, _args);
}

export { handler, pageMap };
