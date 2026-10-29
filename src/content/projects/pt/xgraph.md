---
title: "XGraph"
kind: "Ferramenta web"
year: 2025
summary: "Um visualizador de funções no navegador: você digita uma expressão em x e vê o gráfico na hora, com zoom."
stack: ["JavaScript", "Chart.js", "math.js", "Tailwind CSS"]
cover: "/covers/xgraph.svg"
coverAlt: "Ilustração de um plano cartesiano com grade fina e uma curva senoidal azul-cobalto cruzando os eixos."
repoUrl: "https://github.com/CaioPompei/XGraph"
order: 3
---

Um projeto pequeno, feito para conferir gráficos de funções sem abrir um programa pesado.

## Como funciona

- A expressão digitada é compilada com **math.js**, que entende operadores, potências e funções como `sin` e `sqrt`.
- O app avalia a função em passos de 0,1 dentro da janela visível e desenha os pontos com **Chart.js**, com os eixos cruzando no centro.
- Pontos onde a função não pode ser avaliada são pulados, em vez de travar o gráfico inteiro.
- Os botões de zoom mudam a janela e recalculam os pontos, em vez de só esticar a imagem.

## Próximos passos

Desenhar mais de uma função ao mesmo tempo e arrastar o gráfico com o mouse.
