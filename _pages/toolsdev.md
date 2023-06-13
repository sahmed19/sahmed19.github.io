---
permalink: /toolsdev/
title: "Tools Development"
toc: true
toc_sticky: true
author_profile: false

---

## SPOOKULELE: Frame Data Editor & Visualizer
*Written in C#, extension of Unity Editor*

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

