/* empty css                         */import { c as createAstro, a as createComponent, r as renderTemplate, m as maybeRenderHead } from '../astro.671be3f2.mjs';

const $$Astro = createAstro();
const $$404 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$404;
  return renderTemplate`${maybeRenderHead()}<h1>
    404
</h1>`;
}, "/Users/getutadesse/mportfolio/src/pages/404.astro", void 0);

const $$file = "/Users/getutadesse/mportfolio/src/pages/404.astro";
const $$url = "/404";

export { $$404 as default, $$file as file, $$url as url };
