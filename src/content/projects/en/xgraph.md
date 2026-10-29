---
title: "XGraph"
kind: "Web tool"
year: 2025
summary: "A function plotter in the browser: type an expression in x and see its graph instantly, with zoom."
stack: ["JavaScript", "Chart.js", "math.js", "Tailwind CSS"]
cover: "/covers/xgraph.svg"
coverAlt: "Illustration of a Cartesian plane with a fine grid and a cobalt-blue sine curve crossing the axes."
repoUrl: "https://github.com/CaioPompei/XGraph"
order: 6
draft: true
---

A small project for checking function graphs without opening a heavy program.

## How it works

- The expression you type is compiled with **math.js**, which understands operators, powers and functions like `sin` and `sqrt`.
- The app evaluates the function in steps of 0.1 across the visible window and draws the points with **Chart.js**, with the axes crossing at the centre.
- Points where the function can't be evaluated are skipped instead of breaking the whole plot.
- The zoom buttons change the window and recompute the points instead of just stretching the image.

## Next steps

Plotting more than one function at once and dragging the graph with the mouse.
