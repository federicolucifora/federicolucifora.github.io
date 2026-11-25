// Finds the pictures in src/assets/materials/ starting from the short path written in the .yaml files
// (e.g. "mkwii/mkwii12.jpg"). Astro then turns them into light WebP files in several sizes.
// Pictures that no page uses are not published.
import type { ImageMetadata } from 'astro';

const files = import.meta.glob<{ default: ImageMetadata }>(
  './assets/materials/**/*.{jpg,jpeg,png,webp,avif,gif,svg,JPG,JPEG,PNG}',
);

/** Returns the picture "src/assets/materials/<path>". Also accepts "materials/<path>". */
export async function img(path: string): Promise<ImageMetadata> {
  const clean = path.replace(/^\/+/, '').replace(/^materials\//, '');
  const load = files[`./assets/materials/${clean}`];
  if (!load) {
    throw new Error(
      `Immagine non trovata: "${path}". Controlla che il file esista in src/assets/materials/${clean} ` +
        `e che il nome sia scritto esattamente uguale (maiuscole, minuscole ed estensione comprese).`,
    );
  }
  return (await load()).default;
}

/** One element of a project gallery (components/Gallery.astro): a picture or a YouTube video. */
export type GalleryItem =
  | { kind: 'image'; picture: ImageMetadata; alt: string }
  | { kind: 'video'; youtube: string; title: string };

/**
 * Turns a width written in the .yaml files (e.g. "40%") into the share of the screen it takes,
 * so the browser downloads a picture of the right size. The project pages are 92vw wide.
 */
export function screenShare(width: string | undefined, fallback: string): string {
  if (!width) return fallback;
  if (width.endsWith('%')) return `${Math.max(1, Math.round(parseFloat(width) * 0.92))}vw`;
  if (width.endsWith('vw')) return width;
  return fallback;
}
