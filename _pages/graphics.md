---
permalink: /graphics/
title: "Tech Art & Graphics"
toc: true
toc_sticky: true
author_profile: false

---

![](/assets/images/portfolio/shadertoy-raycaster.gif)

#### Shadertoy Raycaster

*Written in GLSL*

Done as part of a Blizzard graphics test. I implemented:
* Point & directional lighting with PBR reflectance
* ambient lighting
* emissive lighting
* environment-mapped reflections
* directional shadows
* normal mapping
* bloom

View the ShaderToy here: [link](https://www.shadertoy.com/view/cd2GWW)

---

Lighting            |  Aniso Hair & POM Eyes          |  Character FX
:-------------------------:|:-------------------------:|:-------------------------:
![](/assets/images/portfolio/spookulele-character-shader-1.gif) | ![](/assets/images/portfolio/spookulele-character-shader-2.gif) | ![](/assets/images/portfolio/spookulele-character-shader-3.gif)

#### SPOOKULELE: Character Ubershader
*Written in HLSL & Amplify Shader Editor (Unity URP)*

Created to handle all character materials in SPOOKULELE.
* Directional Subsurface Scattering
* Kajiya-Kay anisotropic hair shading
* Parallax Occlusion Mapping eye-shading
* Character FX such as flashes, disintegration