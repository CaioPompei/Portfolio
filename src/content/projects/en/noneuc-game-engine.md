---
title: "NonEucGameEngine"
group: "games"
kind: "Non-Euclidean game engine"
year: 2026
summary: "A non-Euclidean game engine in Python and OpenGL. The challenge: build impossible spaces, where portals join rooms that aren't side by side and a portal seen inside another one opens up too."
stack: ["Python", "OpenGL 3.3", "GLSL", "NumPy", "GLFW"]
cover: "/covers/noneuc-game-engine.webp"
loop: "/media/noneuc-loop.mp4"
video: "/media/noneuc-demo.mp4"
poster: "/media/noneuc-poster.webp"
coverAlt: "Engine capture: a long dark corridor seen from a doorway that, from the other side, seemed to open straight into another room."
repoUrl: "https://github.com/CaioPompei/NonEucGameEngine"
order: 1
---

The challenge was to build impossible spaces: a door that shows a room that isn't behind it, a corridor that loops back to its start, a place that wouldn't fit on an ordinary map. To get there I wrote a non-Euclidean game engine from scratch, small but complete, with lighting, physics, levels and a menu.

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
