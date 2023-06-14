---
permalink: /toolsdev/
title: "Tools Development"
toc: true
toc_sticky: true
author_profile: false

---

## Skills

- Software: Unity, Unreal Engine
- Languages: C#, C++, Python, PyQt

## SPOOKULELE: Frame Data Editor & Visualizer
*Written in C#, extension of Unity Editor*

SPOOKULELE is an Action-Adventure game set in New Orleans. You play as two Reapers, Spooky and Haru, who use their musical abilities to fight ghosts haunting the city.

![](/assets/images/portfolio/spookulele-frame-data-editor-1.gif)


Created to visualize the frame data of attacks in SPOOKULELE. This helped designers and animators tune frame data to fit animations, helping sell the responsive feel of the game.

The frame data editor could modify the following values:
- damaging frames
- cancellable frames (can cancel into another action)
- sticky frames (nudge the player towards nearest enemy)
- invincibility frames
- multi-hit frames (for attacks meant to hit several times during a single animation)

![](/assets/images/portfolio/spookulele-frame-data-editor-2.gif)

Here, the user modifies the knockback and screenshake of the first basic attack's on-hit effects. This change is responsively represented in the game right away with no recompilation needed, aiding prototype speed.


![](/assets/images/portfolio/spookulele-frame-data-editor-3.gif){:width="75%"}

The tool can also be used to profile enemies and visualize hitboxes. A frame-stepping feature is built-in.

## Grandma Green: Audio Tool
*Written in C#, extension of Unity Editor*

Grandma Green is a student-led, free-to-play virtual pet and gardening simulation game.

<details Video Demo><summary>Video Demo</summary>
{% include video id="1kAALUpsEf7EQTr3TKZI9_pOFnWzm6TMF" provider="google-drive" %}
</details>

**Gif Preview**

![](/assets/images/portfolio/grandma-green-audio-tool.gif){:width="75%"}


Created to help the audio team iterate on their sound assets right in Unity engine. Based on the WWise audio software.


## Grandma Green: Dialogue Tool
*Written in Python PyQt*

![](/assets/images/portfolio/grandma-green-dialogue-tool.gif){:width="75%"}


Created to help the narrative team quickly and painlessly convert their shared Google Sheet workspace to game-compatible Yarn files.

## Left on Read: Dialogue Tool
*Written in C# (Unity)*

Left on Read is an choice-driven narrative platformer about the harsh realities of modern age communication.

![](/assets/images/portfolio/left-on-read-1.gif)
*Credit: Crank Gameplays*

On *Left on Read*, I needed to provide my development partner, the writer of the story, with an easy solution to write texting conversations that felt natural. The protagonist needed to pause, delete words, rewrite sentences, and have a certain cadence to the way they wrote. It was imperative that we established their personality using these little texting quirks.

![](/assets/images/portfolio/left-on-read-2.png)

I wrote a text parsing solution that used `<alligator>` tags to define texting behaviors. With tags like `<delete>`, `<pause>`, or even opening up to custom events using a `<custom>` tag, I allowed my development partner full control to make whatever kind of text-based narrative he desired.

![](/assets/images/portfolio/left-on-read-3.png)

