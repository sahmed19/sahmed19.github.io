---
title: "Pokémon GO: Keldeo Water Shader"
project_id: keldeo-water-shader
description: "Character reflections and footstep-driven ripples, with a reflection strategy designed for mobile."
---

The environment was provided; my contribution was the water shader and its effects.

* Built a water shader with character and environment reflections, plus footstep-driven ripples and splashes.
* Reduced reflection rendering costs for mobile by rendering only Keldeo dynamically and using a static reflection probe for the environment.
* Generated ripple rings in a separate pass from the collision points where Keldeo’s feet touch the water plane.
* Overlaid the ripple pass on the water normal map to animate the surface.
