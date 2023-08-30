/* empty css                         */import { c as createAstro, a as createComponent, r as renderTemplate, g as renderComponent, d as renderSlot, b as addAttribute, e as renderTransition, f as renderHead, s as slide, h as createVNode, i as spreadAttributes, F as Fragment } from '../astro.671be3f2.mjs';
import { $ as $$Footer, a as $$Header, b as $$ViewTransitions } from './index.astro.6c5fd2f4.mjs';
import { format, parseISO } from 'date-fns';
import { fr } from 'date-fns/locale';
/* empty css                                 */
var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$Astro = createAstro();
const $$BaseLayout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$BaseLayout;
  const { frontmatter } = Astro2.props;
  const { title, description, url, date } = frontmatter;
  return renderTemplate(_a || (_a = __template(["<html>\n  <head>\n    <title>\n      ", '\n    </title>\n    <meta name="title"', '>\n    <meta name="description"', '>\n    \n    <meta property="og:type" content="article">\n    <meta property="og:url"', '>\n    <meta property="og:title"', '>\n    <meta property="og:description"', '>\n    <meta property="og:image" content="https://metatags.io/images/meta-tags.png">\n    \n    <meta property="twitter:card" content="summary_large_image">\n    <meta property="twitter:url"', '>\n    <meta property="twitter:title"', '>\n    <meta property="twitter:description"', '>\n    <meta property="twitter:image" content="https://metatags.io/images/meta-tags.png">\n		<meta name="viewport" content="width=device-width">\n		<link rel="icon" type="image/svg+xml" href="/icon.ico">\n    <script async src="https://analytics.umami.is/script.js" data-website-id="d76e4153-562f-4dcc-b239-d346dfe85bb8"><\/script>\n    ', "\n  ", '</head>\n    <main class="px-4 prose mx-w-none mx-auto prose-headings:text-rose-500 md:prose-headings:text-3xl prose-a:text-rose-600 prose-img:rounded-md prose-img:shadow-lg prose-img:mx-auto prose-strong:text-rose-600"', '>\n    <div class="mb-12">\n      ', "\n    </div>\n      \n      <h1>", "</h1>\n        <p>\n          Dereje Getu Tadesse | <time", ' class="text-neutral-600">\n            ', "\n           </time>\n        </p>\n      <hr>\n      ", ' \n    <div class="mt-12">\n    ', "\n    </div>\n    </main>\n \n</html>"])), title, addAttribute(title, "content"), addAttribute(description, "content"), addAttribute(url, "content"), addAttribute(title, "content"), addAttribute(description, "content"), addAttribute(url, "content"), addAttribute(title, "content"), addAttribute(description, "content"), renderComponent($$result, "ViewTransitions", $$ViewTransitions, {}), renderHead(), addAttribute(renderTransition($$result, "3VXX6E7C", slide({ duration: "0.4s" }), ""), "data-astro-transition-scope"), renderComponent($$result, "Header", $$Header, {}), title, addAttribute(date, "date-time"), format(parseISO(date), "d LLLL yyyy", { locale: fr }), renderSlot($$result, $$slots["default"]), renderComponent($$result, "Footer", $$Footer, {}));
}, "/Users/getutadesse/mportfolio/src/layouts/BaseLayout.astro", "self");

const images = {
					
				};

				function updateImageReferences(html) {
					return html.replaceAll(
						/__ASTRO_IMAGE_="([^"]+)"/gm,
						(full, imagePath) => spreadAttributes({src: images[imagePath].src, ...images[imagePath].attributes})
					);
				}

				const html = updateImageReferences("<p>Ceci est mon article en cours.</p>\n<p>Cette page ne sera pas construite pour cet article.</p>\n<p>Pour construire et publier cet article :</p>\n<ul>\n<li>mettez à jour le frontmatter Markdown en <code>draft: false</code></li>\n<li>ou supprimez complètement la propriété <code>draft</code>.</li>\n</ul>\n<p>Mais, cette page <em>sera</em> renvoyée par toute requête <code>Astro.glob()</code> correspondante.</p>");

				const frontmatter = {"layout":"../../layouts/BaseLayout.astro","title":"Mon article de blog","draft":false,"date":"2023-08-28T00:00:00.000Z"};
				const file = "/Users/getutadesse/mportfolio/src/pages/post/spotify-api.md";
				const url = "/post/spotify-api";
				function rawContent() {
					return "\nCeci est mon article en cours.\n\nCette page ne sera pas construite pour cet article.\n\nPour construire et publier cet article :\n\n- mettez à jour le frontmatter Markdown en `draft: false`\n- ou supprimez complètement la propriété `draft`.\n\nMais, cette page _sera_ renvoyée par toute requête `Astro.glob()` correspondante.\n";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [];
				}
				async function Content() {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;
					const contentFragment = createVNode(Fragment, { 'set:html': html });
					return createVNode($$BaseLayout, {
									file,
									url,
									content,
									frontmatter: content,
									headings: getHeadings(),
									rawContent,
									compiledContent,
									'server:root': true,
									children: contentFragment
								});
				}
				Content[Symbol.for('astro.needsHeadRendering')] = false;

const spotifyApi = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  Content,
  compiledContent,
  default: Content,
  file,
  frontmatter,
  getHeadings,
  images,
  rawContent,
  url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$BaseLayout as $, spotifyApi as s };
