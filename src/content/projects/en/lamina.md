---
title: "Lâmina"
kind: "Concept website"
year: 2026
summary: "Website for a fictional three-location barbershop. Each location has its own page, generated from a single data file."
stack: ["Astro", "TypeScript", "CSS"]
cover: "/covers/lamina.webp"
coverAlt: "Lâmina home page: a dark barbershop interior with chairs and pendant lights, the headline 'Corte de precisão. Cuidado de alto padrão.' and the 01, 02, 03 location index in brass."
liveUrl: "https://lamina-xi.vercel.app"
repoUrl: "https://github.com/CaioPompei/Lamina"
order: 2
---

> **Concept project.** The brand, locations and data are fictional.

Lâmina is an imaginary barbershop with locations in Centro, Kobrasol and Estreito. The project answers an architecture question: how does a site handle several locations without turning into a heavy system?

## One page per location, one file per location

Each location (`/centro`, `/kobrasol`, `/estreito`) is generated from a JSON file with its address, hours, contact and services. Adding a fourth location means adding one file: the menu, footer, sitemap and structured data update themselves.

- The data follows a **Location → Category → Item** hierarchy, validated by a schema.
- Every page has its own `BarberShop` structured data with address and opening hours.
- Services are photo cards, and each one opens the right location's contact.

## Design

The direction was a warm, crafted barber club: charcoal, brass and paper, with full-bleed photography leading the layout. The one standout element is the 01/02/03 location index, joined by a thin vertical brass line.

## Under the hood

Static Astro with no UI framework, CMS or database. Self-hosted fonts, WebP images, deployed on Vercel.
