export const languages = { pt: "Português", en: "English" } as const;
export type Lang = keyof typeof languages;
export const defaultLang: Lang = "pt";

export const ui = {
  pt: {
    "site.title": "Caio Pompei — Engenheiro de software",
    "site.description":
      "Portfólio de Caio Pompei, engenheiro de software. Back-end em .NET, Go e Python, interfaces para a web e computação gráfica.",
    "site.role": "Engenheiro de software",

    "nav.skip": "Pular para o conteúdo",
    "nav.work": "Projetos",
    "nav.about": "Sobre",
    "nav.contact": "Contato",
    "nav.lang": "English",
    "nav.langShort": "EN",

    "hero.intro":
      "Engenheiro de software. Escrevo back-end em .NET, Go e Python, construo interfaces para a web e gosto de computação gráfica, principalmente quando a geometria não se comporta.",
    "hero.portal": "Portais dentro de portais, como no NonEucGameEngine.",
    "hero.portalHint": "Mova o cursor para olhar pelo portal.",

    "work.title": "Projetos",
    "work.view": "Ver projeto",
    "work.code": "Código",
    "work.live": "Site no ar",

    "about.title": "Sobre",
    "about.p1":
      "Sou desenvolvedor e gosto de entender as coisas até o fim: do banco de dados à tela, da matriz de projeção ao pixel. Meus projetos pessoais costumam começar com uma pergunta, tipo \"como se desenha um portal que mostra outra sala?\", e terminam bem maiores do que eu planejava.",
    "about.p2":
      "No dia a dia escrevo serviços em .NET e Go. Fora disso, estudo computação gráfica, monto sites com Astro e escrevo ferramentas pequenas em Python quando uma tarefa repetitiva me incomoda.",
    "about.tools": "Ferramentas",
    "about.backend": "Back-end",
    "about.frontend": "Front-end",
    "about.graphics": "Gráficos",
    "about.data": "Dados",

    "contact.title": "Contato",
    "contact.body": "O jeito mais rápido de falar comigo é por e-mail.",

    "project.back": "Todos os projetos",
    "project.year": "Ano",
    "project.kind": "Tipo",
    "project.stack": "Tecnologias",
    "project.next": "Próximo projeto",

    "footer.made": "Feito com Astro.",

    "404.title": "Página não encontrada",
    "404.body": "Esse endereço não existe. Talvez o link esteja errado ou a página tenha mudado de lugar.",
    "404.home": "Voltar para o início",
  },
  en: {
    "site.title": "Caio Pompei — Software engineer",
    "site.description":
      "Portfolio of Caio Pompei, software engineer. Back-end in .NET, Go and Python, web interfaces and computer graphics.",
    "site.role": "Software engineer",

    "nav.skip": "Skip to content",
    "nav.work": "Work",
    "nav.about": "About",
    "nav.contact": "Contact",
    "nav.lang": "Português",
    "nav.langShort": "PT",

    "hero.intro":
      "Software engineer. I write back-end code in .NET, Go and Python, build web interfaces, and enjoy computer graphics, especially when the geometry misbehaves.",
    "hero.portal": "Portals inside portals, like in NonEucGameEngine.",
    "hero.portalHint": "Move your cursor to look through the portal.",

    "work.title": "Work",
    "work.view": "View project",
    "work.code": "Code",
    "work.live": "Live site",

    "about.title": "About",
    "about.p1":
      "I'm a developer who likes to understand things all the way down: from the database to the screen, from the projection matrix to the pixel. My side projects usually start with a question, like \"how do you draw a portal that shows another room?\", and end up much bigger than planned.",
    "about.p2":
      "Day to day I write services in .NET and Go. Outside of that I study computer graphics, build websites with Astro and write small Python tools whenever a repetitive task bugs me.",
    "about.tools": "Tools",
    "about.backend": "Back-end",
    "about.frontend": "Front-end",
    "about.graphics": "Graphics",
    "about.data": "Data",

    "contact.title": "Contact",
    "contact.body": "Email is the fastest way to reach me.",

    "project.back": "All projects",
    "project.year": "Year",
    "project.kind": "Type",
    "project.stack": "Stack",
    "project.next": "Next project",

    "footer.made": "Built with Astro.",

    "404.title": "Page not found",
    "404.body": "This address doesn't exist. The link may be wrong or the page may have moved.",
    "404.home": "Back to the home page",
  },
} as const;

export type UIKey = keyof (typeof ui)["pt"];
