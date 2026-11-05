---
title: "Left on Read: Dialogue Tool"
project_id: left-on-read-dialogue
description: "Writer-controlled texting behaviors, including pauses, deletions, rewrites, and custom events."
---

Left on Read is an choice-driven narrative platformer about the harsh realities of modern age communication.

On *Left on Read*, I needed to provide my development partner, the writer of the story, with an easy solution to write texting conversations that felt natural. The protagonist needed to pause, delete words, rewrite sentences, and have a certain cadence to the way they wrote. It was imperative that we established their personality using these little texting quirks.

I wrote a text parsing solution that used `<alligator>` tags to define texting behaviors. With tags like `<delete>`, `<pause>`, or even opening up to custom events using a `<custom>` tag, I allowed my development partner full control to make whatever kind of text-based narrative he desired.
