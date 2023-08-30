/* empty css                         */import { c as createAstro, a as createComponent, r as renderTemplate, b as addAttribute, d as renderSlot, e as renderTransition, f as renderHead, g as renderComponent, s as slide, m as maybeRenderHead } from '../astro.671be3f2.mjs';
import { format, parseISO } from 'date-fns';
import { fr } from 'date-fns/locale';
/* empty css                                 */
const $$Astro$b = createAstro();
const $$ViewTransitions = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$b, $$props, $$slots);
  Astro2.self = $$ViewTransitions;
  const { fallback = "animate" } = Astro2.props;
  return renderTemplate`<meta name="astro-view-transitions-enabled" content="true">
<meta name="astro-view-transitions-fallback"${addAttribute(fallback, "content")}>
`;
}, "/Users/getutadesse/mportfolio/node_modules/.pnpm/registry.npmjs.org+astro@2.10.14/node_modules/astro/components/ViewTransitions.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$Astro$a = createAstro();
const $$Layout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$a, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title, description, url } = Astro2.props;
  return renderTemplate(_a || (_a = __template(['<html lang="fr">\n	<head>\n		<meta charset="UTF-8">\n		<title>\n			', '\n		  </title>\n		  <meta name="title"', '>\n		  <meta name="description"', '>\n		  \n		  <meta property="og:type" content="article">\n		  <meta property="og:url"', '>\n		  <meta property="og:title"', '>\n		  <meta property="og:description"', '>\n		  <meta property="og:image" content="https://metatags.io/images/meta-tags.png">\n		  \n		  <meta property="twitter:card" content="summary_large_image">\n		  <meta property="twitter:url"', '>\n		  <meta property="twitter:title"', '>\n		  <meta property="twitter:description"', '>\n		  <meta property="twitter:image" content="https://metatags.io/images/meta-tags.png">\n			  <meta name="viewport" content="width=device-width">\n			  <link rel="icon" type="image/svg+xml" href="/icon.ico">\n		<meta name="viewport" content="width=device-width">\n		<link rel="icon" type="image/x-icon" href="/icon.ico">\n		<script async src="https://analytics.umami.is/script.js" data-website-id="d76e4153-562f-4dcc-b239-d346dfe85bb8"><\/script>\n		', "\n	", '</head>\n	<body class="px-4 prose mx-w-none mx-auto"', ">\n		", "\n		  <!-- <PageTransition speed={500} zIndex={99} /> -->\n	</body></html>"])), title, addAttribute(title, "content"), addAttribute(description, "content"), addAttribute(url, "content"), addAttribute(title, "content"), addAttribute(description, "content"), addAttribute(url, "content"), addAttribute(title, "content"), addAttribute(description, "content"), renderComponent($$result, "ViewTransitions", $$ViewTransitions, {}), renderHead(), addAttribute(renderTransition($$result, "NQ4ZMEDB", slide({ duration: "0.4s" }), ""), "data-astro-transition-scope"), renderSlot($$result, $$slots["default"]));
}, "/Users/getutadesse/mportfolio/src/layouts/Layout.astro", "self");

const $$Astro$9 = createAstro();
const $$About = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$9, $$props, $$slots);
  Astro2.self = $$About;
  return renderTemplate`${maybeRenderHead()}<p>
    Hey 👋 je suis <strong>Dereje Getu Tadesse</strong> Un développeur <strong>frontend</strong>.
    J&apos;aime transformer des idées en réalités visuelles sur le <strong>web</strong>.
</p>`;
}, "/Users/getutadesse/mportfolio/src/components/About.astro", void 0);

const $$Astro$8 = createAstro();
const $$Projects = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$8, $$props, $$slots);
  Astro2.self = $$Projects;
  const projects = [
    {
      name: "Application Point relais",
      description: `Gestion de l'UI et de l'authentification via l'API interne.`,
      view: "https://relais.qru.pet/"
    },
    {
      name: "QRU mon compte",
      description: `Authentification, gestion des animaux et int\xE9gration Stripe dans une app e-commerce.`,
      view: "https://moncompte.qru.pet/home"
    },
    {
      name: "Boilerplate SvelteKit",
      description: `Boilerplate de mon blog KS, d\xE9ploy\xE9 via Cloudflare Workers.`,
      view: "https://svelte-mdx-blog.dereje.workers.dev/"
    },
    {
      name: "Pan-lib",
      description: `Un package npm cr\xE9\xE9 pour le fun, contenant des fonctions utilitaires comme 'truncate'. (Projet archiv\xE9)`,
      view: "https://www.npmjs.com/package/pan-lib"
    }
  ];
  return renderTemplate`${maybeRenderHead()}<div class="my-12">
    <h3${addAttribute("text-rose-500", "class")}>
        Projets
    </h3>
    <div${addAttribute("grid grid-cols-1 sm:grid-cols-2 gap-4 md:grid-cols-3", "class")}>
    ${projects.map((p) => renderTemplate`<div${addAttribute("flex flex-col", "class")}>
        <a${addAttribute(p.view, "href")}${addAttribute("text-underline-300 underline decoration-neutral-300 underline-offset-4 focus:decoration-rose-400 focus:outline-offset-6 hover:text-rose-500 transition-colors", "class")}${addAttribute("_blank", "target")}>
            <span>${p.name}</span>
        </a>
        <span${addAttribute("block pt-2", "class")}>
            ${p.description}
        </span>
        </div>`)}
    </div>
</div>`;
}, "/Users/getutadesse/mportfolio/src/components/Projects.astro", void 0);

const $$Astro$7 = createAstro();
const $$Posts = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$7, $$props, $$slots);
  Astro2.self = $$Posts;
  const posts = await Astro2.glob(/* #__PURE__ */ Object.assign({"../pages/post/spotify-api.md": () => import('./spotify-api.md.1b3af1ce.mjs').then(n => n.s),"../pages/post/spotify.md": () => import('./spotify.md.f1d247ee.mjs')}), () => "../pages/post/*.md");
  const nonDraftPosts = posts.filter((post) => !post.frontmatter.draft);
  return renderTemplate`${maybeRenderHead()}<div${addAttribute("flex flex-col my-12", "class")}>
    <h3${addAttribute("text-rose-500", "class")}>
        Blog
    </h3>
    ${nonDraftPosts.map((p) => {
    return renderTemplate`<div${addAttribute("flex justify-between flex-wrap my-1", "class")}>
                <a${addAttribute(p.url, "href")} class="text-underline-300 text-neutral-800 underline decoration-neutral-300 underline-offset-4 focus:decoration-rose-400 focus:outline-offset-6 hover:text-rose-500 transition-colors">
                   <span>${p.frontmatter.title}</span>
                </a> 
                <time${addAttribute(p.frontmatter.date, "date-time")} class="text-neutral-800">
                ${format(parseISO(p.frontmatter.date), "d LLLL yyyy", { locale: fr })}
            </time>
            </div>`;
  })} 
     <a${addAttribute("/posts", "href")}${addAttribute("mt-6 text-neutral-600 flex items-center gap-2 text-underline-300 underline decoration-neutral-300 underline-offset-4 focus:decoration-rose-400 focus:outline-offset-6 hover:text-rose-500 transition-colors", "class")}>
        Tous les articles   
     </a>
</div>`;
}, "/Users/getutadesse/mportfolio/src/components/Posts.astro", void 0);

const $$Astro$6 = createAstro();
const $$Header = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$Header;
  return renderTemplate`${maybeRenderHead()}<header${addAttribute("md:px-0 prose mx-auto h-37 my-2 flex items-center justify-between", "class")}>
    <a${addAttribute("/", "href")}${addAttribute("Lien de retour \xE0 l'accueil", "aria-label")} role="button"${addAttribute(0, "tab-index")}>
          <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="30" height="30" rx="6" fill="#F43F5E"></rect>
            <path d="M11.4943 27H7.88494V16.8182H11.5241C12.5483 16.8182 13.4299 17.022 14.169 17.4297C14.9081 17.834 15.4766 18.4157 15.8743 19.1747C16.2753 19.9337 16.4759 20.8419 16.4759 21.8991C16.4759 22.9598 16.2753 23.8712 15.8743 24.6335C15.4766 25.3958 14.9048 25.9808 14.1591 26.3885C13.4167 26.7962 12.5284 27 11.4943 27ZM10.0376 25.1555H11.4048C12.0412 25.1555 12.5765 25.0429 13.0107 24.8175C13.4482 24.5888 13.7763 24.2358 13.995 23.7585C14.2171 23.2779 14.3281 22.6581 14.3281 21.8991C14.3281 21.1468 14.2171 20.532 13.995 20.0547C13.7763 19.5774 13.4498 19.2261 13.0156 19.0007C12.5814 18.7753 12.0462 18.6626 11.4098 18.6626H10.0376V25.1555ZM24.8219 20.1094C24.7523 19.8674 24.6545 19.6536 24.5286 19.468C24.4026 19.2791 24.2485 19.12 24.0662 18.9908C23.8873 18.8582 23.6818 18.7571 23.4498 18.6875C23.2211 18.6179 22.9675 18.5831 22.6891 18.5831C22.1687 18.5831 21.7114 18.7124 21.3169 18.9709C20.9258 19.2294 20.6209 19.6056 20.4022 20.0994C20.1834 20.59 20.074 21.1899 20.074 21.8991C20.074 22.6084 20.1818 23.2116 20.3972 23.7088C20.6126 24.206 20.9176 24.5855 21.312 24.8473C21.7064 25.1058 22.1721 25.2351 22.709 25.2351C23.1962 25.2351 23.6122 25.1489 23.9569 24.9766C24.3049 24.8009 24.57 24.554 24.7523 24.2358C24.9379 23.9176 25.0307 23.5414 25.0307 23.1072L25.4682 23.1719H22.8432V21.5511H27.1039V22.8338C27.1039 23.7287 26.915 24.4976 26.5371 25.1406C26.1593 25.7803 25.6389 26.2741 24.976 26.6222C24.3132 26.9669 23.5542 27.1392 22.699 27.1392C21.7445 27.1392 20.906 26.9287 20.1834 26.5078C19.4609 26.0836 18.8974 25.482 18.4931 24.7031C18.092 23.9209 17.8915 22.9929 17.8915 21.919C17.8915 21.0937 18.0108 20.358 18.2495 19.7116C18.4914 19.062 18.8295 18.5118 19.2637 18.0611C19.6979 17.6103 20.2033 17.2673 20.78 17.032C21.3567 16.7966 21.9815 16.679 22.6543 16.679C23.231 16.679 23.7679 16.7635 24.2651 16.9325C24.7623 17.0982 25.2031 17.3336 25.5875 17.6385C25.9753 17.9434 26.2918 18.3063 26.5371 18.7273C26.7824 19.1449 26.9398 19.6056 27.0094 20.1094H24.8219Z" fill="white"></path>
        </svg>
</a>
</header>`;
}, "/Users/getutadesse/mportfolio/src/components/Header.astro", void 0);

const $$Astro$5 = createAstro();
const $$SocialsLinks = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$SocialsLinks;
  const socials = [
    {
      name: "Github",
      link: "/"
    },
    {
      name: "Linkedin",
      link: "/"
    }
  ];
  return renderTemplate`${maybeRenderHead()}<ul${addAttribute("text-sm flex gap-2", "class")} aria-label="Liens vers mes profils sociaux">
      ${socials.map((s) => renderTemplate`<li role="listitem">
          <a${addAttribute(
    "flex gap-2 items-center justify-center hover:text-rose-500 hover:underline transition-colors text-neutral-800",
    "class"
  )}${addAttribute(s.link, "href")}${addAttribute("_blank", "target")} rel="noopener noreferrer"${addAttribute(`Visitez mon profil ${s.name}`, "aria-label")}${addAttribute(`Visitez mon profil ${s.name}`, "title")}>
            ${s.name}
          </a>
        </li>`)}
      <li>
        <a href="/mentions-legales" class="flex gap-2 items-center justify-center hover:text-rose-500 hover:underline transition-colors text-neutral-800">
        Mentions légales
        </a>
      </li>
</ul>`;
}, "/Users/getutadesse/mportfolio/src/components/SocialsLinks.astro", void 0);

const $$Astro$4 = createAstro();
const truncate$1 = (txt, min) => {
  if (!txt)
    return "";
  if (txt.length > min)
    return `${txt.slice(0, min)}...`;
  return txt;
};
const $$SpotifyCurrentSong = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$SpotifyCurrentSong;
  const getCurrentPlayingSong = async () => {
    const API_SPOTIFY_WORKERS = "https://api-spotify-song.dereje.workers.dev/";
    const data2 = await fetch(API_SPOTIFY_WORKERS, { cache: "no-cache" });
    const response = await data2.json();
    const { current_song } = response;
    return current_song;
  };
  const data = await getCurrentPlayingSong();
  return renderTemplate`${!data ? renderTemplate`${maybeRenderHead()}<div${addAttribute("rounded-md px-2 py-1 shadow-md ring-1 ring-neutral-900/5 backdrop-blur shadow-neutral/5 text-base text-neutral-600 flex items-center w-max gap-1", "class")}>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"${addAttribute("fill-neutral-600", "class")} aria-hidden="true"><path d="M12.01 2.019c-5.495 0-9.991 4.496-9.991 9.991 0 5.494 4.496 9.99 9.991 9.99 5.494 0 9.99-4.496 9.99-9.99 0-5.495-4.446-9.991-9.99-9.991zm4.595 14.436c-.199.299-.549.4-.85.201-2.349-1.45-5.296-1.75-8.793-.951-.348.102-.648-.148-.748-.449-.101-.35.149-.648.45-.749 3.795-.85 7.093-.499 9.69 1.1.35.149.4.548.251.848zm1.2-2.747c-.251.349-.7.499-1.051.249-2.697-1.646-6.792-2.148-9.939-1.148-.398.101-.85-.1-.949-.498-.101-.402.1-.852.499-.952 3.646-1.098 8.143-.548 11.239 1.351.3.149.45.648.201.998zm.099-2.799c-3.197-1.897-8.542-2.097-11.59-1.146a.938.938 0 0 1-1.148-.6.937.937 0 0 1 .599-1.151c3.547-1.049 9.392-.85 13.089 1.351.449.249.599.849.349 1.298-.25.35-.849.498-1.299.248z"></path></svg>
            Pas d&apos;ecoute en cours
        </div>` : renderTemplate`<a${addAttribute("rounded-md px-2 py-1 shadow-md ring-1 ring-neutral-900/5 backdrop-blur shadow-neutral/5 text-base text-neutral-600 flex items-center w-max gap-1", "class")}${addAttribute(data.song_url, "href")}${addAttribute("_blank", "target")} rel="noopener noreferrer"${addAttribute(`\xC9coutez "${data.title}" de ${data.artist} sur Spotify`, "aria-label")}${addAttribute(`\xC9coutez "${data.title}" de ${data.artist} sur Spotify`, "title")}>
 <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"${addAttribute("fill-rose-500 animate-spin-slow", "class")} aria-hidden="true"><path d="M12.01 2.019c-5.495 0-9.991 4.496-9.991 9.991 0 5.494 4.496 9.99 9.991 9.99 5.494 0 9.99-4.496 9.99-9.99 0-5.495-4.446-9.991-9.99-9.991zm4.595 14.436c-.199.299-.549.4-.85.201-2.349-1.45-5.296-1.75-8.793-.951-.348.102-.648-.148-.748-.449-.101-.35.149-.648.45-.749 3.795-.85 7.093-.499 9.69 1.1.35.149.4.548.251.848zm1.2-2.747c-.251.349-.7.499-1.051.249-2.697-1.646-6.792-2.148-9.939-1.148-.398.101-.85-.1-.949-.498-.101-.402.1-.852.499-.952 3.646-1.098 8.143-.548 11.239 1.351.3.149.45.648.201.998zm.099-2.799c-3.197-1.897-8.542-2.097-11.59-1.146a.938.938 0 0 1-1.148-.6.937.937 0 0 1 .599-1.151c3.547-1.049 9.392-.85 13.089 1.351.449.249.599.849.349 1.298-.25.35-.849.498-1.299.248z"></path></svg>
 <p>
     ${truncate$1(data.title, 13)} de <span>${truncate$1(data.artist, 15)}</span>
 </p>
</a>`}`;
}, "/Users/getutadesse/mportfolio/src/components/SpotifyCurrentSong.astro", void 0);

const $$Astro$3 = createAstro();
const $$Footer = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Footer;
  const currentYear = () => {
    return (/* @__PURE__ */ new Date()).getFullYear();
  };
  return renderTemplate`${maybeRenderHead()}<footer${addAttribute("flex flex-col justify-center items-center gap-7 mt-10 not-prose", "class")} role="contentinfo">
    <h2 class="sr-only">Informations du pied de page</h2>
    <a${addAttribute("/", "href")}${addAttribute("Lien de retour \xE0 l'accueil", "aria-label")} role="button"${addAttribute(0, "tab-index")}>
          <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="30" height="30" rx="6" fill="#F43F5E"></rect>
            <path d="M11.4943 27H7.88494V16.8182H11.5241C12.5483 16.8182 13.4299 17.022 14.169 17.4297C14.9081 17.834 15.4766 18.4157 15.8743 19.1747C16.2753 19.9337 16.4759 20.8419 16.4759 21.8991C16.4759 22.9598 16.2753 23.8712 15.8743 24.6335C15.4766 25.3958 14.9048 25.9808 14.1591 26.3885C13.4167 26.7962 12.5284 27 11.4943 27ZM10.0376 25.1555H11.4048C12.0412 25.1555 12.5765 25.0429 13.0107 24.8175C13.4482 24.5888 13.7763 24.2358 13.995 23.7585C14.2171 23.2779 14.3281 22.6581 14.3281 21.8991C14.3281 21.1468 14.2171 20.532 13.995 20.0547C13.7763 19.5774 13.4498 19.2261 13.0156 19.0007C12.5814 18.7753 12.0462 18.6626 11.4098 18.6626H10.0376V25.1555ZM24.8219 20.1094C24.7523 19.8674 24.6545 19.6536 24.5286 19.468C24.4026 19.2791 24.2485 19.12 24.0662 18.9908C23.8873 18.8582 23.6818 18.7571 23.4498 18.6875C23.2211 18.6179 22.9675 18.5831 22.6891 18.5831C22.1687 18.5831 21.7114 18.7124 21.3169 18.9709C20.9258 19.2294 20.6209 19.6056 20.4022 20.0994C20.1834 20.59 20.074 21.1899 20.074 21.8991C20.074 22.6084 20.1818 23.2116 20.3972 23.7088C20.6126 24.206 20.9176 24.5855 21.312 24.8473C21.7064 25.1058 22.1721 25.2351 22.709 25.2351C23.1962 25.2351 23.6122 25.1489 23.9569 24.9766C24.3049 24.8009 24.57 24.554 24.7523 24.2358C24.9379 23.9176 25.0307 23.5414 25.0307 23.1072L25.4682 23.1719H22.8432V21.5511H27.1039V22.8338C27.1039 23.7287 26.915 24.4976 26.5371 25.1406C26.1593 25.7803 25.6389 26.2741 24.976 26.6222C24.3132 26.9669 23.5542 27.1392 22.699 27.1392C21.7445 27.1392 20.906 26.9287 20.1834 26.5078C19.4609 26.0836 18.8974 25.482 18.4931 24.7031C18.092 23.9209 17.8915 22.9929 17.8915 21.919C17.8915 21.0937 18.0108 20.358 18.2495 19.7116C18.4914 19.062 18.8295 18.5118 19.2637 18.0611C19.6979 17.6103 20.2033 17.2673 20.78 17.032C21.3567 16.7966 21.9815 16.679 22.6543 16.679C23.231 16.679 23.7679 16.7635 24.2651 16.9325C24.7623 17.0982 25.2031 17.3336 25.5875 17.6385C25.9753 17.9434 26.2918 18.3063 26.5371 18.7273C26.7824 19.1449 26.9398 19.6056 27.0094 20.1094H24.8219Z" fill="white"></path>
        </svg>
</a>
    ${renderComponent($$result, "SocialsLinks", $$SocialsLinks, {})}
    ${renderComponent($$result, "SpotifyCurrentSong", $$SpotifyCurrentSong, {})}
    <p${addAttribute("text-sm text-neutral-400", "class")}>© ${currentYear()} Dereje Getu Tadesse</p>
</footer>`;
}, "/Users/getutadesse/mportfolio/src/components/Footer.astro", void 0);

const $$Astro$2 = createAstro();
const $$Index$2 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Index$2;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Dereje Getu Tadesse", "description": "Hey ! je suis dereje getu tadesse un d\xE9veloppeur frontend. J'aime transformer des id\xE9es en r\xE9alit\xE9s visuelles sur le web.", ",": true, "url": "https://dereje.fr/" }, { "default": ($$result2) => renderTemplate`
	${maybeRenderHead()}<main class="max-w-3xl mx-auto">
		${renderComponent($$result2, "Header", $$Header, {})}
		${renderComponent($$result2, "About", $$About, {})}
		${renderComponent($$result2, "Projects", $$Projects, {})}
		${renderComponent($$result2, "Posts", $$Posts, {})}
		${renderComponent($$result2, "Footer", $$Footer, {})}
	</main>
` })}`;
}, "/Users/getutadesse/mportfolio/src/pages/index.astro", void 0);

const $$file$2 = "/Users/getutadesse/mportfolio/src/pages/index.astro";
const $$url$2 = "";

const index$2 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index$2,
	file: $$file$2,
	url: $$url$2
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$1 = createAstro();
const $$Index$1 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Index$1;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "MENTIONS L\xC9GALES", "description": "MENTIONS L\xC9GALES", "url": "https://dereje.fr/mentions-legales" }, { "default": ($$result2) => renderTemplate`
${renderComponent($$result2, "Header", $$Header, {})}
${maybeRenderHead()}<main class="min-h-screen prose prose-headings:text-rose-500 md:prose-headings:text-3xl prose-a:text-rose-600 ">
    <section class="my-12">
    <h1>MENTIONS LÉGALES</h1>
    <p>Conformément aux dispositions de la loi n° 2004-575 du 21 juin 2004 pour la confiance en l'économie numérique, il est précisé aux utilisateurs du site dereje l'identité des différents intervenants dans le cadre de sa réalisation et de son suivi.</p>
   
   <h2>Edition du site </h2> 
    
    <p>Le présent site, accessible à l’URL www.dereje.fr (le « Site »), est édité par :</p>
    
    <p> <strong>Dereje Getu Tadesse</strong>, résidant Besançon, de nationalité Éthiopienne (Éthiopie), né(e) le 16/04/2001, </p>
    
    
   <h2> Hébergement</h2>
    
   <p>Le Site est hébergé par la société Cloudflare, situé 101 Townsend St, San Francisco, CA 94107, États-Unis, (contact téléphonique ou email : +16503198930).</p> 
    
   <h2> Directeur de publication </h2>
    
    <p>Le Directeur de la publication du Site est Dereje Getu Tadesse.</p>
    
    <h2>Nous contacter </h2>
    
   <p> Par téléphone : +33 6 61 10 77 20</p>
   <p> Par email : contact@dereje.fr</p>
   <p> Par courrier : Besançon</p>
    
    </section>
</main>
${renderComponent($$result2, "Footer", $$Footer, {})}
` })}`;
}, "/Users/getutadesse/mportfolio/src/pages/mentions-legales/index.astro", void 0);

const $$file$1 = "/Users/getutadesse/mportfolio/src/pages/mentions-legales/index.astro";
const $$url$1 = "/mentions-legales";

const index$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index$1,
	file: $$file$1,
	url: $$url$1
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro = createAstro();
const truncate = (txt, min) => {
  if (!txt)
    return "";
  if (txt.length > min)
    return `${txt.slice(0, min)}...`;
  return txt;
};
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const posts = await Astro2.glob(/* #__PURE__ */ Object.assign({"../post/spotify-api.md": () => import('./spotify-api.md.1b3af1ce.mjs').then(n => n.s),"../post/spotify.md": () => import('./spotify.md.f1d247ee.mjs')}), () => "../../pages/post/*.md");
  const nonDraftPosts = posts.filter((post) => !post.frontmatter.draft);
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Tous les articles", "description": "Tous les articles", "url": "https://dereje.fr/" }, { "default": ($$result2) => renderTemplate`
    ${renderComponent($$result2, "Header", $$Header, {})}
    ${maybeRenderHead()}<main class="max-w-3xl mx-auto min-h-screen">
        ${nonDraftPosts.map((p) => {
    return renderTemplate`<div${addAttribute("my-6", "class")}>
                <div${addAttribute("flex flex-col gap-2", "class")}>
                    <a${addAttribute(p.url, "href")} class="mt-0 text-neutral-600 flex items-center gap-2 text-underline-300 underline decoration-neutral-300 underline-offset-4 focus:decoration-rose-400 focus:outline-offset-6 hover:text-rose-500 transition-colors">
                    ${p.frontmatter.title}
                    </a>
                    <p${addAttribute("m-0 text-sm text-neutral-600", "class")}>${truncate(p.frontmatter.description, 100)}</p>
                    <time${addAttribute(p.frontmatter.date, "date-time")} class="text-sm text-neutral-600">
                            ${format(parseISO(p.frontmatter.date), "d LLLL yyyy", { locale: fr })}
                    </time>
                </div>
            </div>`;
  })} 
    </main>
    ${renderComponent($$result2, "Footer", $$Footer, {})}
` })}`;
}, "/Users/getutadesse/mportfolio/src/pages/posts/index.astro", void 0);

const $$file = "/Users/getutadesse/mportfolio/src/pages/posts/index.astro";
const $$url = "/posts";

const index = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index,
	file: $$file,
	truncate,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$Footer as $, $$Header as a, $$ViewTransitions as b, index$1 as c, index as d, index$2 as i };
