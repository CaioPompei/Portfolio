import { getCollection, type CollectionEntry } from "astro:content";
import type { Lang } from "@/i18n/ui";

export type Project = CollectionEntry<"projects">;

/** "pt/lamina" -> "lamina" */
export function cleanSlug(entry: Project): string {
  return entry.slug.replace(/^(pt|en)\//, "");
}

/** Published projects for a language, by `order` then newest first. */
export async function getProjects(lang: Lang): Promise<Project[]> {
  const all = await getCollection("projects", ({ id, data }) => {
    const published = import.meta.env.PROD ? !data.draft : true;
    return id.startsWith(`${lang}/`) && published;
  });
  return all.sort((a, b) =>
    a.data.order !== b.data.order
      ? a.data.order - b.data.order
      : b.data.year - a.data.year
  );
}
