---
title: "Lâmina"
kind: "Site conceito"
year: 2026
summary: "Site de uma rede fictícia de barbearias com três unidades. Cada unidade tem sua página, gerada a partir de um único arquivo de dados."
stack: ["Astro", "TypeScript", "CSS"]
cover: "/covers/lamina.webp"
coverAlt: "Página inicial do site Lâmina: interior escuro de barbearia com cadeiras e luminárias pendentes, o título 'Corte de precisão. Cuidado de alto padrão.' e o índice de unidades 01, 02 e 03 em dourado."
liveUrl: "https://lamina-xi.vercel.app"
repoUrl: "https://github.com/CaioPompei/Lamina"
order: 2
---

> **Projeto conceito.** A marca, as unidades e os dados são fictícios.

Lâmina é uma barbearia imaginária com unidades no Centro, em Kobrasol e no Estreito. O projeto responde a uma pergunta de arquitetura: como um site lida com várias unidades sem virar um sistema pesado?

## Uma página por unidade, um arquivo por unidade

Cada unidade (`/centro`, `/kobrasol`, `/estreito`) é gerada a partir de um JSON com endereço, horários, contato e serviços. Criar uma quarta unidade é criar um arquivo: o menu, o rodapé, o sitemap e os dados estruturados se ajustam sozinhos.

- Os dados seguem a hierarquia **Unidade → Categoria → Item**, validada por schema.
- Cada página tem seus próprios dados estruturados de `BarberShop`, com endereço e horários.
- Os serviços aparecem como cartões com foto, e cada um abre o contato da unidade certa.

## Design

A direção foi um clube de barbearia quente e artesanal: carvão, latão e papel, com fotografia em tela cheia conduzindo o layout. O único elemento de destaque é o índice 01/02/03 das unidades, ligado por um fio vertical de latão.

## Técnica

Astro estático, sem framework de interface, sem CMS e sem banco de dados. Fontes hospedadas no próprio site, imagens em WebP e o site publicado na Vercel.
