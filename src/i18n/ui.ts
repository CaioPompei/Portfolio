export const languages = { pt: "Português", en: "English" } as const;
export type Lang = keyof typeof languages;
export const defaultLang: Lang = "pt";

export const ui = {
  pt: {
    "site.title": "Caio Pompei — Engenheiro de software",
    "site.description":
      "Portfólio de Caio Pompei, desenvolvedor full stack e de jogos.",
    "site.role": "Engenheiro de software",

    "nav.skip": "Pular para o conteúdo",
    "nav.work": "Projetos",
    "nav.about": "Sobre",
    "nav.contact": "Contato",
    "nav.lang": "English",
    "nav.langShort": "EN",

    "hero.intro": "Desenvolvedor full stack e de jogos.",
    "hero.web": "Projetos web",
    "hero.games": "Jogos",
    "hero.scroll": "Ir para os projetos",

    "work.title": "Projetos",
    "work.view": "Ver projeto",
    "work.code": "Código",
    "work.live": "Site no ar",
    "work.play": "Jogar",
    "work.games": "Jogos",
    "work.web": "Web",

    "about.title": "Sobre",
    "about.p1":
      "Sou desenvolvedor full stack. No back-end trabalho com .NET, Go e Python; na web, com JavaScript e Astro.",
    "about.p2":
      "Começo todo projeto pela arquitetura: defino as partes, como elas conversam e onde ficam os dados. Com essa base pronta, uso IA no dia a dia para prototipar e revisar código, e consigo entregar rápido sem abrir mão da qualidade.",
    "about.p3":
      "Fora do trabalho, faço jogos. Escrevi uma engine não euclidiana do zero, participei da GMTK Game Jam e quero seguir carreira em desenvolvimento de jogos.",
    "about.tools": "Ferramentas",
    "about.backend": "Back-end",
    "about.frontend": "Front-end",
    "about.graphics": "Gráficos",
    "about.data": "Dados",

    "contact.title": "Contato",

    "project.back": "Todos os projetos",
    "project.year": "Ano",
    "project.kind": "Tipo",
    "project.stack": "Tecnologias",
    "project.next": "Próximo projeto",


    "404.title": "Página não encontrada",
    "404.body": "Esse endereço não existe. Talvez o link esteja errado ou a página tenha mudado de lugar.",
    "404.home": "Voltar para o início",
  },
  en: {
    "site.title": "Caio Pompei — Software engineer",
    "site.description":
      "Portfolio of Caio Pompei, full stack and game developer.",
    "site.role": "Software engineer",

    "nav.skip": "Skip to content",
    "nav.work": "Work",
    "nav.about": "About",
    "nav.contact": "Contact",
    "nav.lang": "Português",
    "nav.langShort": "PT",

    "hero.intro": "Full stack and game developer.",
    "hero.web": "Web projects",
    "hero.games": "Games",
    "hero.scroll": "Go to the projects",

    "work.title": "Work",
    "work.view": "View project",
    "work.code": "Code",
    "work.live": "Live site",
    "work.play": "Play",
    "work.games": "Games",
    "work.web": "Web",

    "about.title": "About",
    "about.p1":
      "I'm a full stack developer. On the back end I work with .NET, Go and Python; on the web, with JavaScript and Astro.",
    "about.p2":
      "I start every project with the architecture: the parts, how they talk to each other and where the data lives. With that in place, I use AI day to day to prototype and review code, so I can ship fast without giving up quality.",
    "about.p3":
      "Outside work, I make games. I wrote a non-Euclidean engine from scratch, took part in the GMTK Game Jam and want to build a career in game development.",
    "about.tools": "Tools",
    "about.backend": "Back-end",
    "about.frontend": "Front-end",
    "about.graphics": "Graphics",
    "about.data": "Data",

    "contact.title": "Contact",

    "project.back": "All projects",
    "project.year": "Year",
    "project.kind": "Type",
    "project.stack": "Stack",
    "project.next": "Next project",


    "404.title": "Page not found",
    "404.body": "This address doesn't exist. The link may be wrong or the page may have moved.",
    "404.home": "Back to the home page",
  },
} as const;

export type UIKey = keyof (typeof ui)["pt"];
