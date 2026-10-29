import { defineCollection, z } from "astro:content";

/*
  Projects live in src/content/projects/<lang>/<slug>.md
  Use the same <slug> in pt/ and en/ to pair the two versions.
*/
const projects = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    /** Which list on the home page: "games" or "web". */
    group: z.enum(["games", "web"]).default("web"),
    /** What it is, in a few words: "Game engine", "Concept website"… */
    kind: z.string(),
    year: z.coerce.number(),
    /** One or two sentences for the home page. */
    summary: z.string(),
    stack: z.array(z.string()).default([]),
    /** Image path in /public. */
    cover: z.string(),
    coverAlt: z.string(),
    /** Short muted loop for the home card (in /public). */
    loop: z.string().optional(),
    /** Full video for the project page (in /public). */
    video: z.string().optional(),
    poster: z.string().optional(),
    liveUrl: z.string().url().optional(),
    /** Link to play the game (itch.io, web build…). */
    playUrl: z.string().url().optional(),
    repoUrl: z.string().url().optional(),
    order: z.number().default(0),
    draft: z.boolean().default(false),
  }),
});

export const collections = { projects };
