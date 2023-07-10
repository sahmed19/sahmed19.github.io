---
permalink: /graphics/
title: "Tech Art & Graphics"
toc: true
toc_sticky: true
author_profile: false

---

## Skills

- Software: Unity, Unreal Engine
- Languages: HLSL/GLSL, ShaderGraph, Amplify SE, Unreal Material Editor, C#, C++, Python, PyQt

## Rain Visual Effect
*Written in HLSL and ShaderGraph (Unity URP)*

![FinalGif](../_site/assets/images/portfolio/swallow-falls-rain.gif)

Read the breakdown blogpost [here.](https://www.sheehanahmed.com/realtime-rain-vfx-breakdown/)

## Shadertoy Raycaster
*Written in GLSL*

![](/assets/images/portfolio/shadertoy-raycaster.gif)



Done as part of a Blizzard graphics test. I implemented:
* Point & directional lighting with PBR reflectance
* ambient lighting
* emissive lighting
* environment-mapped reflections
* directional shadows
* normal mapping
* bloom

View the ShaderToy here: [link](https://www.shadertoy.com/view/cd2GWW)

## SPOOKULELE: Character Ubershader
*Written in HLSL & Amplify Shader Editor (Unity URP)*

SPOOKULELE is an Action-Adventure game set in New Orleans. You play as two Reapers, Spooky and Haru, who use their musical abilities to fight ghosts haunting the city.

Stylized Lighting            |  Aniso Hair & POM Eyes          |  Character FX
:-------------------------:|:-------------------------:|:-------------------------:
![](/assets/images/portfolio/spookulele-character-shader-1.gif) | ![](/assets/images/portfolio/spookulele-character-shader-2.gif) | ![](/assets/images/portfolio/spookulele-character-shader-3.gif)


Created to handle all character materials in SPOOKULELE.
* Directional Subsurface Scattering
* Kajiya-Kay anisotropic hair shading
* Parallax Occlusion Mapping eye-shading
* Character FX such as flashes, disintegration

## SPOOKULELE: Procedural Animation
*Written in C#. Some HLSL*

![](/assets/images/portfolio/spookulele-procedural-animation-1.gif)

Head Tracking            |  Blinking          |  Voice-controlled lighting
:-------------------------:|:-------------------------:|:-------------------------:
![](/assets/images/portfolio/spookulele-procedural-animation-2.gif) | ![](/assets/images/portfolio/spookulele-procedural-animation-3.gif) | ![](/assets/images/portfolio/spookulele-procedural-animation-4.gif)

## BLOOMPUNK: Environment Set Dress & Lighting
*Unity*

Bloompunk is a unique hybrid of first-person shooter and roguelike games set in a vibrant world of animated plants.

I led a team of 7 3D artists as Technical Art Director to produce assets in a consistent style for the game. I also set dressed, lit, and did environmental visual effects for the game environment.

![](https://cdna.artstation.com/p/assets/images/images/062/971/888/large/sheehan-ahmed-bp-pf-01.jpg?1684380933)
![](https://cdnb.artstation.com/p/assets/images/images/062/971/889/large/sheehan-ahmed-bp-pf-02.jpg?1684380944)

![](https://cdna.artstation.com/p/assets/images/images/062/971/842/original/sheehan-ahmed-bp-gif01.gif?1684380786)
![](https://cdnb.artstation.com/p/assets/images/images/062/971/845/original/sheehan-ahmed-bp-gif02.gif?1684380796)

For more, see the [Artstation post on my BLOOMPUNK environment work.](https://www.artstation.com/artwork/OGwmy8)

## BLOOMPUNK: Documentation & Leadership

As Technical Art Director, it was my responsibility to set a clear visual style and specify asset conventions for the team of 3D artists.

**Art Bible**: Authored to document the style, tone, asset specifications, and naming conventions for BLOOMPUNK artwork.

<iframe src="https://docs.google.com/presentation/d/e/2PACX-1vT1r_zCHBDd-lSEA7oSzUYJciENr_6UDgb4DAf9SfUh2BxeK_W33xe7gcDRHBPxGcgK9pXnjvvFZ2BA/embed?start=false&loop=false&delayms=3000" frameborder="0" width="720" height="440" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true"></iframe>

**Perforce Guide**: Authored to help the 3D artists navigate using Perforce.

<iframe src="https://docs.google.com/presentation/d/e/2PACX-1vQdu-5Cl3APe16DpUnxfqBE5YvmhiGMfOS54QBipygqnHbWsQowrpPfkK-H_OgYruNZNl-gSM2tD4In/embed?start=false&loop=false&delayms=3000" frameborder="0" width="720" height="440" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true"></iframe>

## House-builder: Painting UV Manipulation

*House-builder* is an in-progress game about creating and decorating home interiors.

![](/assets/images/portfolio/housebuilder-painting-resizer.gif)

I implemented a painting asset that features custom images with stretch, tile, and fit modes. This utilizes an enum shader keyword to switch between the separate modes. In order to preserve the aspect ratio of the source image, I store the width and height ratio in the UV2 of each painting mesh.

## SPOOKULELE: Vango Rig & Animation
*Blender*

Vango is a ranged, shielded enemy. I modelled, rigged and animated the Vango animations.

**Rig Breakdown**

![](/assets/images/portfolio/spookulele-vango-rig-breakdown.gif){:width="50%"}

**Walk Cycle**

![](/assets/images/portfolio/spookulele-vango-walk.gif){:width="75%"}

**Prepare to Shoot**

![](/assets/images/portfolio/spookulele-vango-shoot.gif){:width="75%"}

**Knock-up & Topple**

![](/assets/images/portfolio/spookulele-vango-knock-up.gif){:width="75%"}