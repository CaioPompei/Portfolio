---
title: "NonEucGameEngine"
kind: "Game engine"
year: 2026
summary: "A Python and OpenGL engine built to draw spaces that ignore ordinary geometry: portals connect different rooms, and what you see inside a portal can have portals too."
stack: ["Python", "OpenGL 3.3", "GLSL", "NumPy", "GLFW"]
cover: "/covers/noneuc-game-engine.svg"
coverAlt: "Illustration of rectangular portals nested inside one another, alternating cobalt blue and light grey, like a tunnel seen in perspective."
repoUrl: "https://github.com/CaioPompei/NonEucGameEngine"
order: 1
---

The question that started it: how do you draw a door that shows a room that isn't behind it? The answer became a small but complete engine, with lighting, physics, levels and a menu.

## Stencil-buffer portals

Every portal has a pair. To draw what's inside one, the engine marks the portal's area in the stencil buffer, places a virtual camera behind the destination portal and renders the scene again, only inside that area.

- Rendering is **recursive**: portals seen inside a portal open up too, up to a configurable depth.
- An oblique near-plane projection clips the geometry between the virtual camera and the destination portal.
- Because the scene is drawn once per recursion level, static geometry is batched into a handful of draw calls per texture and colour.

## The rest of the engine

- **Lighting**: Phong/Blinn-Phong with up to 10 point, directional and spot lights.
- **Shadows**: depth-cubemap shadows for point lights with PCF filtering, baked per level.
- **Player**: acceleration, friction, gravity, jumping with coyote time and AABB collision that slides along walls. Walking through a portal reorients position, view direction and velocity.
- **JSON levels**: scene, lights, portals, triggers, puzzles and level transitions all come from data files. No geometry lives in the code.

## What I learned

Camera matrices stop being abstract the moment a sign error makes you exit a portal upside down. It also taught me to measure before optimising: geometry batching only came in once recursion started tanking the frame rate.
