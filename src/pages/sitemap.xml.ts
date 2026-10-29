import type { APIRoute } from "astro";
import { getProjects, cleanSlug } from "@/lib/projects";
import { homePath, projectPath } from "@/i18n/utils";

/**
 * Sitemap com alternâncias hreflang (pt-BR / en / x-default).
 * Cada "grupo" é uma página lógica disponível em um ou mais idiomas.
 */
type Group = { pt?: string; en?: string };

function withSlash(path: string): string {
  if (path === "/") return path;
  return path.endsWith("/") ? path : `${path}/`;
}

export const GET: APIRoute = async ({ site }) => {
  const origin = (site ?? new URL("https://caiopompei.com")).origin;
  const abs = (path: string) => origin + withSlash(path);

  const ptProjects = await getProjects("pt");
  const enProjects = await getProjects("en");
  const enSlugs = new Set(enProjects.map(cleanSlug));
  const ptSlugs = new Set(ptProjects.map(cleanSlug));

  const groups: Group[] = [
    { pt: homePath("pt"), en: homePath("en") },
  ];

  for (const p of ptProjects) {
    const slug = cleanSlug(p);
    groups.push({
      pt: projectPath("pt", slug),
      en: enSlugs.has(slug) ? projectPath("en", slug) : undefined,
    });
  }
  // Projetos que existem só em EN.
  for (const p of enProjects) {
    const slug = cleanSlug(p);
    if (!ptSlugs.has(slug)) groups.push({ en: projectPath("en", slug) });
  }

  const urls = groups
    .flatMap((g) => {
      const present = (["pt", "en"] as const).filter((l) => g[l]);
      return present.map((lang) => {
        const links = present
          .map(
            (l) =>
              `    <xhtml:link rel="alternate" hreflang="${
                l === "pt" ? "pt-BR" : "en"
              }" href="${abs(g[l]!)}" />`
          )
          .join("\n");
        const xDefault = g.pt
          ? `\n    <xhtml:link rel="alternate" hreflang="x-default" href="${abs(
              g.pt
            )}" />`
          : "";
        return `  <url>\n    <loc>${abs(
          g[lang]!
        )}</loc>\n${links}${xDefault}\n  </url>`;
      });
    })
    .join("\n");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${urls}
</urlset>
`;

  return new Response(xml, {
    headers: { "Content-Type": "application/xml; charset=utf-8" },
  });
};
