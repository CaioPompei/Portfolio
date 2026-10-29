---
title: "NonEucGameEngine"
kind: "Engine de jogo não euclidiana"
year: 2026
summary: "Uma engine de jogo não euclidiana em Python e OpenGL. O desafio: criar espaços impossíveis, onde portais ligam salas que não estão lado a lado e um portal visto dentro de outro também se abre."
stack: ["Python", "OpenGL 3.3", "GLSL", "NumPy", "GLFW"]
cover: "/covers/noneuc-game-engine.svg"
coverAlt: "Ilustração de portais retangulares encaixados uns dentro dos outros, alternando azul-cobalto e cinza-claro, como um túnel visto em perspectiva."
repoUrl: "https://github.com/CaioPompei/NonEucGameEngine"
order: 1
---

O desafio era criar espaços impossíveis: uma porta que mostra uma sala que não está atrás dela, um corredor que volta ao começo, um lugar que não caberia num mapa comum. Para isso, escrevi do zero uma engine de jogo não euclidiana, pequena mas completa, com iluminação, física, fases e um menu.

## Portais com stencil buffer

Cada portal tem um par. Para desenhar o que aparece dentro dele, a engine marca a área do portal no stencil buffer, posiciona uma câmera virtual atrás do portal de destino e renderiza a cena de novo, só dentro daquela área.

- A renderização é **recursiva**: portais vistos dentro de um portal também se abrem, até uma profundidade configurável.
- Uma projeção com plano próximo oblíquo corta a geometria que ficaria entre a câmera virtual e o portal de destino.
- Como a cena é desenhada uma vez por nível de recursão, a geometria estática é agrupada em poucas chamadas de desenho por textura e cor.

## O resto da engine

- **Iluminação** Phong/Blinn-Phong com até 10 luzes (pontual, direcional e spot).
- **Sombras** com cubemap de profundidade para luzes pontuais e filtragem PCF, pré-calculadas por fase.
- **Jogador** com aceleração, atrito, gravidade, pulo com coyote time e colisão AABB que desliza nas paredes. Atravessar um portal reorienta posição, direção e velocidade.
- **Fases em JSON**: cena, luzes, portais, gatilhos, quebra-cabeças e transições entre fases vêm de arquivos de dados. Nenhuma geometria fica no código.

## O que aprendi

Matrizes de câmera deixam de ser abstratas quando um erro de sinal faz você sair do portal de cabeça para baixo. O projeto também me ensinou a medir antes de otimizar: o agrupamento de geometria só apareceu quando a recursão começou a derrubar o FPS.
