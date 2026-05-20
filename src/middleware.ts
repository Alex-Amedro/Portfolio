import { defineMiddleware } from 'astro:middleware';

// Routes exclues du routing i18n (pages temporaires, hors contexte de langue)
const BYPASS_PATHS = ['/cam'];

export const onRequest = defineMiddleware((context, next) => {
  if (BYPASS_PATHS.includes(context.url.pathname)) {
    return next();
  }
  return next();
});
