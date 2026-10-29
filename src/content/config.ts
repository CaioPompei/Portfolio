import { defineCollection, z } from "astro:content";

/*
  Projects live in src/content/projects/<lang>/<slug>.md
  Use the same <slug> in pt/ and en/ to pair the two versions.
*/
const projects = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    /** What it is, in a few words: "Game engine", "Concept website"… */
    kind: z.string(),
    year: z.coerce.number(),
    /** One or two sentences for the home page. */
    summary: z.string(),
    stack: z.array(z.string()).default([]),
    /** Image path in /public. */
    cover: z.string(),
    coverAlt: z.string(),
    liveUrl: z.string().url().optional(),
    repoUrl: z.string().url().optional(),
    order: z.number().default(0),
    draft: z.boolean().default(false),
  }),
});

export const collections = { projects };
