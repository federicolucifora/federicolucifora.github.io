import { getCollection } from 'astro:content';
import { absoluteUrl } from '../lib';

// Built automatically: every page and every visible project in src/content/projects is listed here.
// Hidden projects (listed: false) are left out, so search engines don't find them.
export async function GET() {
  const projects = (await getCollection('projects')).filter((project) => project.data.listed);
  const pages = [
    { path: '', priority: 1.0 },
    { path: 'about.html', priority: 0.8 },
    { path: 'work.html', priority: 0.8 },
    { path: 'contacts.html', priority: 0.6 },
    ...projects.map((project) => ({ path: `work/${project.id}.html`, priority: 0.7 })),
  ];
  const body = pages
    .map(({ path, priority }) => `  <url>\n    <loc>${absoluteUrl(path)}</loc>\n    <priority>${priority.toFixed(1)}</priority>\n  </url>`)
    .join('\n');
  return new Response(`<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${body}\n</urlset>\n`, {
    headers: { 'Content-Type': 'application/xml' },
  });
}
