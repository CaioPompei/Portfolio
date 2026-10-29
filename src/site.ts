/* Identity and links. Everything on the site reads from here. */

export const site = {
  author: "Caio Pompei",
  /** Keep in sync with `SITE` in astro.config.mjs. */
  url: "https://caiopompei.com",
  email: "caiopompei@gmail.com",
  social: {
    github: "https://github.com/CaioPompei",
    linkedin: "https://www.linkedin.com/in/caiopompei/",
  },
} as const;
