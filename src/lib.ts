// Small helpers shared by all pages.
const base = import.meta.env.BASE_URL.replace(/\/$/, '');

/** Address of a page or file inside the site, e.g. url('about.html') or url('favicon/favicon-32.png'). */
export const url = (path = '') => `${base}/${path.replace(/^\//, '')}`;

/** Full public address (needed for canonical links and social previews). */
export const absoluteUrl = (path = '') => `https://federicolucifora.github.io${url(path)}`;
