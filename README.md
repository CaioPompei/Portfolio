# Caio Pompei — Portfolio

Personal portfolio in Portuguese and English, built with [Astro](https://astro.build).

The hero shows a recursive portal drawn on a canvas, a nod to
[NonEucGameEngine](https://github.com/CaioPompei/NonEucGameEngine): each frame is the
view through the previous one, and the tunnel bends as you move the cursor.

## Run locally

```bash
npm install
npm run dev       # http://localhost:4321
npm run build     # static site in dist/
npm run preview   # serve the production build
```

## Add a project

1. Create `src/content/projects/pt/<slug>.md` and `src/content/projects/en/<slug>.md`
   (same `<slug>` in both).
2. Put the cover in `public/covers/` (16:10, WebP or SVG).
3. Fill in the frontmatter:

| Field | Required | Notes |
|---|---|---|
| `title` | yes | Project name |
| `kind` | yes | "Game engine", "Concept website"… |
| `year` | yes | Number |
| `summary` | yes | One or two sentences for the home page |
| `stack` | no | `["Astro", "TypeScript"]` |
| `cover`, `coverAlt` | yes | Image path in `/public` and its description |
| `repoUrl`, `liveUrl` | no | Links shown on the card and project page |
| `order` | no | Lower comes first |
| `draft` | no | `true` hides it in production |

## Where things live

| What | Where |
|---|---|
| Name, email, links | `src/site.ts` |
| Interface text (PT/EN) | `src/i18n/ui.ts` |
| Colours, type scale, spacing | `src/styles/global.css` |
| Portal animation | `src/components/Hero.astro` |

## Deploy

Static site: on Vercel or Netlify use build command `npm run build` and output
directory `dist`. Update the domain in `astro.config.mjs`, `src/site.ts` and
`public/robots.txt` first.
