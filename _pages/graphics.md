---
permalink: /graphics/
title: "Tech Art & Graphics"
toc: true
toc_sticky: true

---

## Skills

- Software: Unity, Unreal Engine, Blender, Maya, Substance 3D Suite
- Languages: HLSL/GLSL, ShaderGraph, Amplify SE, Unreal Material Editor, C#, C++, Python, PyQt

## Pokémon GO: Keldeo Water Shader
*2025, HLSL (Unity URP)*

* Water FX: the splash, the ripples, and the reflection.
* Optimized for mobile.

{% include gif.html name="keldeo-water-shader" alt="Keldeo water shader in Pokémon GO" width="50%" %}

## SPOOKULELE: Environment Art (WIP)
*2023, Unreal*

* Updated version of *SPOOKULELE*'s French Quarter level in Unreal engine.
* Modelled, sculpted, and textured various assets & trim sheets.

![](https://cdna.artstation.com/p/assets/images/images/067/322/020/large/sheehan-ahmed-fq-wip-01.jpg?1695101981)
![](https://cdna.artstation.com/p/assets/images/images/067/322/022/large/sheehan-ahmed-fq-wip-02.jpg?1695101986)
![](https://cdna.artstation.com/p/assets/images/images/067/322/024/large/sheehan-ahmed-fq-wip-04.jpg?1695101997)
![](https://cdnb.artstation.com/p/assets/images/images/067/322/027/large/sheehan-ahmed-fq-wip-06.jpg?1695102008)
![](https://cdna.artstation.com/p/assets/images/images/067/322/028/large/sheehan-ahmed-fq-wip-07.jpg?1695102012){:width="75%"}
![](https://cdnb.artstation.com/p/assets/images/images/067/322/029/large/sheehan-ahmed-fq-wip-08.jpg?1695102017){:width="75%"}

[For more, see the Artstation post here.](https://www.artstation.com/artwork/QXwE44)

## Rain Visual Effect
*2023, HLSL, VFX Graph & ShaderGraph (Unity URP)*

{% include gif.html src="/assets/images/portfolio/swallow-falls-rain.gif" alt="FinalGif" %}

[Read the breakdown blogpost here.](https://www.sheehanahmed.com/realtime-rain-vfx-breakdown/)

## Shadertoy Raycaster
*2022, GLSL*

{% include gif.html src="/assets/images/portfolio/shadertoy-raycaster.gif" width="75%" %}

Done as part of a Blizzard graphics test. I implemented:
* Point & directional lighting with PBR reflectance and normal mapping
* ambient & emissive lighting with environment-mapped reflections
* directional shadows & bloom

[View the ShaderToy here.](https://www.shadertoy.com/view/cd2GWW)

## SPOOKULELE: Character Ubershader
*2021, HLSL & Amplify Shader Editor (Unity URP)*

Stylized Lighting            |  Aniso Hair & POM Eyes          |  Character FX
:-------------------------:|:-------------------------:|:-------------------------:
{% include gif.html src="/assets/images/portfolio/spookulele-character-shader-1.gif" %} | {% include gif.html src="/assets/images/portfolio/spookulele-character-shader-2.gif" %} | {% include gif.html src="/assets/images/portfolio/spookulele-character-shader-3.gif" %}


Created to handle all character materials in SPOOKULELE.
* Directional Subsurface Scattering
* Kajiya-Kay anisotropic hair shading
* Parallax Occlusion Mapping eye-shading
* Character FX such as flashes, disintegration

## SPOOKULELE: Procedural Animation
*2021, C#, HLSL*

{% include gif.html src="/assets/images/portfolio/spookulele-procedural-animation-1.gif" %}

Head Tracking            |  Blinking          |  Voice-controlled lighting
:-------------------------:|:-------------------------:|:-------------------------:
{% include gif.html src="/assets/images/portfolio/spookulele-procedural-animation-2.gif" %} | {% include gif.html src="/assets/images/portfolio/spookulele-procedural-animation-3.gif" %} | {% include gif.html src="/assets/images/portfolio/spookulele-procedural-animation-4.gif" %}


## BLOOMPUNK: Environment Set Dress & Lighting
*2022, Unity*

* Led a team of 7 3D artists to produce assets in a consistent style for the game
* Set dressed, lit, and authored vfx for the game environment

![](https://cdna.artstation.com/p/assets/images/images/062/971/888/large/sheehan-ahmed-bp-pf-01.jpg?1684380933)
![](https://cdnb.artstation.com/p/assets/images/images/062/971/889/large/sheehan-ahmed-bp-pf-02.jpg?1684380944)

{% include gif.html name="bloompunk-set-dress-1" %}
{% include gif.html name="bloompunk-set-dress-2" %}

[For more, see the Artstation here.](https://www.artstation.com/artwork/OGwmy8)

## SPOOKULELE: Vango Rig & Animation
*2021, Blender*

Vango is a ranged, shielded enemy. I modelled, rigged and animated the Vango animations.

**Rig Breakdown**

{% include gif.html src="/assets/images/portfolio/spookulele-vango-rig-breakdown.gif" width="50%" %}

**Walk Cycle**

{% include gif.html src="/assets/images/portfolio/spookulele-vango-walk.gif" width="75%" %}

**Prepare to Shoot**

{% include gif.html src="/assets/images/portfolio/spookulele-vango-shoot.gif" width="75%" %}

**Knock-up & Topple**

{% include gif.html src="/assets/images/portfolio/spookulele-vango-knock-up.gif" width="75%" %}

<!---
## House-builder: Painting UV Manipulation

*House-builder* is an in-progress game about creating and decorating home interiors.

{% include gif.html src="/assets/images/portfolio/housebuilder-painting-resizer.gif" %}

I implemented a painting asset that features custom images with stretch, tile, and fit modes. This utilizes an enum shader keyword to switch between the separate modes. In order to preserve the aspect ratio of the source image, I store the width and height ratio in the UV2 of each painting mesh.

-->