/* =====================================================================
   Utilitários de i18n: detectar idioma pela URL, traduzir, e montar
   caminhos localizados. PT vive na raiz (/), EN vive em /en/.
   ===================================================================== */

import { ui, defaultLang, type Lang, type UIKey } from "./ui";

/** Detecta o idioma a partir do pathname (/en/... => "en", senão "pt"). */
export function getLangFromUrl(url: URL): Lang {
  const [, seg] = url.pathname.split("/");
  if (seg === "en") return "en";
  return defaultLang;
}

/** Retorna uma função de tradução para o idioma dado. */
export function useTranslations(lang: Lang) {
  return function t(key: UIKey): string {
    return ui[lang][key] ?? ui[defaultLang][key];
  };
}

/** Segmentos de rota localizados (slugs amigáveis por idioma). */
export const routeNames = {
  pt: { projects: "projetos" },
  en: { projects: "projects" },
} as const;

/** Prefixo base do idioma. PT = "", EN = "/en". */
export function langBase(lang: Lang): string {
  return lang === defaultLang ? "" : `/${lang}`;
}

/** Caminho da home do idioma. */
export function homePath(lang: Lang): string {
  return lang === defaultLang ? "/" : "/en/";
}

/** Caminho do índice de projetos. */
export function projectsPath(lang: Lang): string {
  return `${langBase(lang)}/${routeNames[lang].projects}`;
}

/** Caminho de um projeto específico. */
export function projectPath(lang: Lang, slug: string): string {
  return `${projectsPath(lang)}/${slug}`;
}

/** Âncoras de seção da home (mesma página, ids fixos). */
export function sectionPath(lang: Lang, id: string): string {
  return `${homePath(lang)}#${id}`;
}

/** Idioma "oposto" para o seletor de idioma. */
export function otherLang(lang: Lang): Lang {
  return lang === "pt" ? "en" : "pt";
}

/**
 * Equivalente de uma URL no outro idioma, preservando a página atual.
 * Faz o mapeamento dos segmentos de rota localizados.
 */
export function alternatePath(url: URL, target: Lang): string {
  const current = getLangFromUrl(url);
  if (current === target) return url.pathname;

  // Remove o prefixo de idioma atual para obter o "miolo" da rota.
  let path = url.pathname;
  if (current !== defaultLang) {
    path = path.replace(new RegExp(`^/${current}`), "");
  }
  path = path.replace(/\/$/, ""); // sem barra final
  const segments = path.split("/").filter(Boolean);

  // Traduz o primeiro segmento se for uma rota nomeada (projetos <-> projects).
  if (segments.length > 0) {
    for (const key of Object.keys(routeNames[current]) as Array<
      keyof (typeof routeNames)[Lang]
    >) {
      if (segments[0] === routeNames[current][key]) {
        segments[0] = routeNames[target][key];
        break;
      }
    }
  }

  const base = target === defaultLang ? "" : `/${target}`;
  const rest = segments.join("/");
  if (!rest) return base ? `${base}/` : "/";
  return `${base}/${rest}`;
}
