---
title:  "Realtime Rain VFX Breakdown"
date:   2022-08-17 10:35:00 +0800
tags:
  - C#
  - HLSL

toc: true
toc_sticky: true
---

{% include youtube.html id='S7RwDOuJ_ds' %}

---

*Made with Unity, Blender, HLSL, ShaderGraph, VFX Graph*

My friends in LA always look at me like I'm crazy when I mention how much I love the rain and overcast, cloudy days. I can't help it! I'm from the best place on Earth: the Pacific Northwest. As a Pacific Northwest native, it would be shameful for me to not make a rain visual effect. You can see the final product above.


### Gathering Reference

Now usually if I wanted to take a close look at rain, I would just take a stroll outside, but Portland is having an unfortunately dry summer. I checked out some YouTube videos instead, like this one:

{% include youtube.html id='0en2q82Zaok' %}

---

There were some phenomena in the reference video that I chose to leave out, namely the bubbles and the base waves on the surface of the water. I wanted to shoot for puddles that looked a little shallower but still had the vibrancy of rain hitting a deep body of water. It's not completely realistic, but then again, no great visual effect ever is!

My effect was made in Unity by layering several steps/passes:

- Droplets (ortho camera depth pass -> VFX graph spawn)
- Splashes (ortho camera depth pass -> VFX graph spawn)
- Puddles (vertex color + height blend)
- Ripples (UV manipulation shader)
- Wash cascades (transparent mesh with scrolling shader)
- Mist (depth effect)

### The Base Environment

The base environment is a simple blocky mesh that has areas of cover, elevated ground, and varied shapes (sphere and angled block). This represents the main environment problems I expected my rain to solve for. I wanted the splashes to follow the form of the environment and rain to ignore areas that should be covered and safe from rainfall.

![BaseEnvironment](/assets/images/posts/02_base-environment.png){:width="100%"}

### The Ortho Camera

Inspired by my friend Sichen Liu's [Odradek Scanner effect](https://80.lv/articles/recreating-death-stranding-odradek-terrain-scanner-in-unity/), I created an orthographic camera facing down on the scene. I render out this camera's depth and normals to a RenderTexture. These will come in handy later.

![NormalDepth](/assets/images/posts/02_normal-depth.png){:width="100%"}

### Droplets

The droplets are as simple as can be: a LineRenderer in the VFX Graph that scales the lifetime of each line according to the depth of the ortho camera. This ensures that rain droplets don't intersect the level and appear underneath cover.

![Nodes](/assets/images/posts/02_raindrop-depth-sample-node.png){:width="50%"}

![NormalDepth](/assets/images/posts/02_raindrop-depth-sample-result.gif){:width="50%"}

### Splashes

Splashes are a spritesheet particle spawned along the ground with the particle-up facing the normal and the particle-forward facing the camera plane. However, I ran into issues with ledges; splashes were spawning half-on a ledge and along the wall, which was immersion-breaking and ugly. To solve this, I run the orthographic camera's depth through a Sobel filter, which essentially creates outlines around areas of depth contrast. Because the camera is facing downward, these areas of high contrast are my walls and ledges.

![Sobel](/assets/images/posts/02_sobel.png){:width="50%"}

By passing this mask into my VFX graph, I can make my splashes ignore walls. The outline has the added benefit of culling away a bit from the ledges, which doubly solves the half-on-ledge problem as well.

![Splashes](/assets/images/posts/02_splashes.gif)

### Puddles

The puddles and general wetness in the scene was painted on through vertex color and adjusted by sharpness and fill. This is also influenced by the heightmap of the underlying texture.

![Wetness](/assets/images/posts/02_wetness.gif)

### Ripples

The typical approach for ripples on deep water is a voronoi-style pattern that creates overlapping circles. I wanted to make the ripples feel like they had more local impact. I used a normal texture for the ripple.

![Wetness](/assets/images/posts/02_ripple-texture.png){:width="50%"}

In my shader, I sampled this texture with two layers of ripples. Having two layers on separate start times helps kill the grid-like look. I then simulate a ripple animation by scaling the UV of the ripples and fading the normal strength in and out with an ease curve based on the following function: `1.0 - pow(2.0 * input - 1.0, 2)`

This function gives a nice ease in and out to the ripple transparency that looks natural.

![Ripple](/assets/images/posts/02_ripples-shader.png)

I also use a population slider that basically compares a `floor(rand(uv))` sample against a threshold value to kill a certain percentage of ripples. A full set of ripples looks strangely uniform anyway, and this gives me control over how fierce I want the rainfall to look.

![RipplePopulation](/assets/images/posts/02_ripple-population.gif)

### Wash Cascades

I saw this effect on a pillar in Overwatch 2, and it felt like a nice, slightly stylized way to evoke water travelling down a lateral surface.

![OW2Cascades](/assets/images/posts/02_water-cascades-overwatch.gif)

I recreated it in a relatively simple way: generating a mesh at the side of every ledge that water would be washing down on and scrolling a voronoi + clouds texture along the Y of the UV.
Here is the effect with exaggurated visibility.

![OW2Cascades](/assets/images/posts/02_water-cascades.gif)

### Mist

Finally, the mist is scrolling noise with a depth mask in order to keep it closely hugging the ground.
Here is the effect with exaggurated visibility.

![Mist](/assets/images/posts/02_mist.gif)

### Conclusion

Thank you for reading my breakdown! This was a fun project that challenged me to use the information I had at hand in interesting ways. Finally, I feel that the duty I owe my home state has been fulfilled.

![FinalGif](/assets/images/portfolio/swallow-falls-rain.gif)

Follow me [@wheatpenguin](https://twitter.com/wheatpenguin) on Twitter.