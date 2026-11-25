import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';
import { areaIds } from './areas';

// A picture or a video of a chapter: write either "src" (picture) or "youtube" (the code after "embed/").
const chapterMedia = z.union([z.object({ src: z.string() }), z.object({ youtube: z.string() })]);

// Every project is a file in src/content/projects/ (see the README for how to add one).
const projects = defineCollection({
  loader: glob({ pattern: '*.yaml', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    description: z.string(), // used by search engines and social previews
    ogImage: z.string(), // image shown when the link is shared, e.g. materials/mkwii/mkwii10.jpg
    order: z.number(), // position in the portfolio grid (0 = first)
    listed: z.boolean().default(true), // false = the page exists but is not shown in the grid
    featured: z.boolean().default(false), // true = also shown on the home page
    areas: z.array(z.enum(areaIds)).min(1), // 3d, visual, interactive, motion: used by the filters of the work page
    tags: z.array(z.string()), // list of skills (kept as a note: not shown on the site at the moment)
    // Project card at the top of the project page: each line appears only if it is filled in.
    year: z.string().optional(), // e.g. "2025" or "2017–2022"
    client: z.string().optional(), // only when there is a real client
    tools: z.array(z.string()).optional(), // software used, e.g. Blender, Substance Painter
    card: z.object({ src: z.string(), position: z.string().optional() }),
    cover: z.object({
      src: z.string(),
      position: z.string().optional(),
      height: z.string().optional(),
      mobileHeight: z.string().optional(),
    }),
    link: z.string().url().optional(), // makes the title a link (with the little arrow)
    text: z.string(), // short introduction (shown only when the project has no "sections")
    // Text of the project page, in three parts. Paragraphs are separated by an empty line.
    // {{ ... }} = sentence written by Claude, to be checked; [[ ... ]] = information still to be completed.
    // In the preview both are highlighted; in the published site {{ }} is shown as normal text and [[ ]] is hidden.
    sections: z
      .object({
        overview: z.string().optional(),
        role: z.string().optional(),
        result: z.string().optional(),
        original: z.string().optional(), // your original text, kept for comparison: shown only in the preview
      })
      .optional(),
    // Chapters: for big projects made of several parts (e.g. the tracks of Mario Kart).
    // Each chapter has its title, its text (paragraphs separated by an empty line) and its own gallery.
    // At the top of the chapters there is an index of small pictures: "thumb" chooses the picture
    // (if it is missing, the first picture of the chapter is used). "chaptersTitle" is the title above the index.
    chaptersTitle: z.string().optional(),
    chapters: z
      .array(
        z.object({
          title: z.string(),
          thumb: z.string().optional(),
          text: z.string().optional(),
          media: z.array(chapterMedia).default([]),
        }),
      )
      .optional(),
    responsibilities: z.array(z.string()).optional(), // what you did (kept as a note: not shown on the site)
    collaborators: z.array(z.string()).optional(), // people you worked with (kept as a note: not shown on the site)
    // The pictures and videos of the page are arranged automatically in aligned rows, always whole:
    // the width / height / fit / position values of the blocks below are no longer used.
    blocks: z.array(
      z.discriminatedUnion('type', [
        z.object({
          type: z.literal('text'),
          text: z.union([z.string(), z.array(z.string())]), // a list = several paragraphs
          width: z.string().optional(),
          height: z.string().optional(),
          scroll: z.boolean().optional(),
        }),
        z.object({
          type: z.literal('image'),
          src: z.string(),
          width: z.string().optional(),
          height: z.string().optional(),
          fit: z.string().optional(),
          position: z.string().optional(),
          mobileWidth: z.string().optional(),
          mobileHeight: z.string().optional(),
        }),
        z.object({
          type: z.literal('video'),
          youtube: z.string(), // the code after "embed/" in the YouTube address
          width: z.string().optional(),
          height: z.string().optional(),
          mobileWidth: z.string().optional(),
          mobileHeight: z.string().optional(),
        }),
      ]),
    )
      .default([]),
  }),
});

const timelineItem = z.object({
  date: z.string(),
  title: z.string(),
  subtitle: z.string(), // can contain a small piece of HTML, e.g. a link
});

// Texts of the single pages and the contact links: one file each in src/data/.
const home = defineCollection({
  loader: glob({ pattern: 'home.yaml', base: './src/data' }),
  schema: z.object({
    presentation: z.string(),
    skillsIntro: z.string(),
    skills: z.object({ modeling: z.string(), levelDesign: z.string(), development: z.string() }),
  }),
});

const about = defineCollection({
  loader: glob({ pattern: 'about.yaml', base: './src/data' }),
  schema: z.object({
    intro: z.string(), // paragraphs separated by an empty line; can contain {{ }} and [[ ]]
    introOriginal: z.string().optional(), // previous text, shown only in the preview
    // Small info card under the presentation (e.g. Based in: Milan). A value written as [[ ... ]]
    // is still to be completed: highlighted in the preview, and the whole line is hidden in the published site.
    facts: z.array(z.object({ label: z.string(), value: z.string() })).default([]),
    experience: z.array(timelineItem),
    awards: z.array(timelineItem),
    education: z.array(timelineItem),
  }),
});

const site = defineCollection({
  loader: glob({ pattern: 'site.yaml', base: './src/data' }),
  schema: z.object({
    name: z.string(),
    email: z.string(),
    linkedin: z.string().url(),
    instagram: z.string().url(),
    contactsIntro: z.string().optional(), // sentence at the top of the Contacts page; can contain {{ }} and [[ ]]
  }),
});

export const collections = { projects, home, about, site };
