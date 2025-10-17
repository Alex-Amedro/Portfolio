// src/pages/sitemap.xml.ts
import type { APIRoute } from 'astro';
import { getAllProjects } from '../data/projects';

const BASE_URL = 'https://your-domain.com'; // À remplacer par votre domaine

const languages = ['en', 'fr', 'zh'];

export const GET: APIRoute = async () => {
  const projects = getAllProjects();
  
  // Pages statiques
  const staticPages = [
    '',  // page d'accueil
    ...languages.map(lang => `/${lang}`),
    ...languages.map(lang => `/${lang}/projects`),
  ];

  // Pages dynamiques (projets)
  const projectPages = [];
  for (const lang of languages) {
    for (const project of projects) {
      projectPages.push(`/${lang}/projects/${project.slug}`);
    }
  }

  // Combiner toutes les URLs
  const allPages = [...staticPages, ...projectPages];

  // Générer le XML
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">
${allPages.map(page => `  <url>
    <loc>${BASE_URL}${page}</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>${page.includes('/projects/') ? 'weekly' : 'monthly'}</changefreq>
    <priority>${page === '' || page.includes('/en') ? '1.0' : page.includes('/projects/') ? '0.7' : '0.8'}</priority>
  </url>`).join('\n')}
</urlset>`;

  return new Response(sitemap, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
    },
  });
};
