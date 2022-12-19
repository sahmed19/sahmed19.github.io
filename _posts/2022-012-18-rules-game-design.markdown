---
layout: single
title:  "Rules of Game Design (yes, they're meant to be broken)"
date:   2022-12-18 10:35:00 +0800
categories: blog
---

 RULES OF GAME DESIGN (WIP) <!-- omit from toc -->
---
#### (Yes, they are meant to be broken) <!-- omit from toc -->
By Sheehan Ahmed

# INTRO + DISCLAIMER <!-- omit from toc -->
#### Why listen to me?

After all, I'm a student studying game design at USC. I'm not a professional designer, nor do I have years of experience to glean wisdom from in the industry. However, what I do offer is an intimacy with a beginner’s understanding of game design and development. I see a lot of amateur projects stumble on the same simple and easily fixable issues, and I wanted to make a compendium of beginner literacies for creating games.

#### Who is this for?

This is aimed specifically at beginner-to-intermediate designers who want to enter traditional design spaces of commercial video games. Advanced/professional designers will probably already know everything in this document. Designers aiming to make more experimental projects are not the target of this document but are free to read it! Hopefully it can be helpful in one way or another.

If you are interested in reading more about the professional process of creating a video game &ndash; prototyping, communicating with team members, iteration, managing scope &ndash; please check out Richard Lemarchand’s [A Playful Production Process](https://mitpress.mit.edu/9780262045513/a-playful-production-process/). Richard is kind, wise, and has more than a decade of experience working on famous games. It is my pleasure to call Richard one of my professors at USC and I could not more strongly recommend the read.

#### How much do I need to know?

Ideally, very little. I will try to explain technical concepts as thoroughly as possible. I will not over-explain concepts that are commonly understood to modern games audiences. As long as you have a passing knowledge of video games, this document should be just fine.

  

#### What’s a law? What’s a rule? What’s the difference?

- A law is an objective statement, observation, or definition about the nature of video games. It is a factual thing that is always correct, and something to keep in mind while making design decisions.
	- A law cannot be broken. It’s physically impossible to defy it.
	- *Ex. "The law of gravity is an objective truth that physicists need to heed when doing calculations."*
- A rule is a subjective pattern that many critically and/or commercially successful games utilize in order to achieve a common form of success.
	- A rule is simply a pattern. A designer may choose to follow it... or not.
	- *Ex. "The 180-degree rule is a common trick for filmmakers to maintain continuity of reverse shots."*

Remember, **rules exist for a reason.** These patterns have stood the test of time because they are meaningful and effective. There is no lesson I have learned during my four years at art school more thoroughly than **know the rules before you break them.** Break them at your own risk... but break them nonetheless. Be creative!

*Note: some of the laws are definitions for things I have not seen formalized nomenclature for yet. If you know a better word for something please let me know!*

#### Many of the examples are combat games. Is this document only relevant for combat games?

Nope! This document is meant to help improve the play experience of any game. I use combat games for most of my examples simply because they are an easy frame of reference to explain a point when the specific mechanics of the game at hand don’t matter.

#### Note on server reliability, networking inconsistencies, etc.

I will not discuss the potential problems of server lag and other network related issues. In most cases, these problems are not the gameplay designer's role to fix. For the sake of argument, assume any multiplayer game I mention exists in a utopian universe where everyone has access to light-speed internet.

## Table of Contents <!-- omit from toc -->

- [Law: The Five Stages of An Action](#law-the-five-stages-of-an-action)
	- [Rule: Failure should be predictable, preventable, and offer choices](#rule-failure-should-be-predictable-preventable-and-offer-choices)
		- [Notable Rule-Breaker: *Hollow Knight*](#notable-rule-breaker-hollow-knight)
	- [Rule: Minimize Input Mishaps](#rule-minimize-input-mishaps)
		- [Notable Rule-Breaker: Paper Bag in *Stray*](#notable-rule-breaker-paper-bag-in-stray)
		- [Notable Rule-Breaker: Difficult Inputs in Fighting Games](#notable-rule-breaker-difficult-inputs-in-fighting-games)
	- [Rule: Make Objectives Clear and Obvious](#rule-make-objectives-clear-and-obvious)
	- [Rule: Give the player a safe testing ground](#rule-give-the-player-a-safe-testing-ground)
	- [Rule: Computer Assistance should be toggled by options](#rule-computer-assistance-should-be-toggled-by-options)
- [Law: Discrete vs. Continuous Values](#law-discrete-vs-continuous-values)
	- [Rule: Use Discrete Functions](#rule-use-discrete-functions)
		- [Infamous Rule-Breaker: NPC's in Trailing Missions](#infamous-rule-breaker-npcs-in-trailing-missions)
		- [Notable Rule-Breaker: The daunting statistics of Pokemon](#notable-rule-breaker-the-daunting-statistics-of-pokemon)
- [Law: TTA \& TTB (Time To Action, Time To Benefit)](#law-tta--ttb-time-to-action-time-to-benefit)
		- [TTA](#tta)
		- [TTB](#ttb)
	- [Rule: Use animation-cancels to minimize TTA](#rule-use-animation-cancels-to-minimize-tta)
		- [Notable Rule-Breaker: *Dark Souls*](#notable-rule-breaker-dark-souls)
		- [Notable Rule-Breaker: *Red Dead Redemption II*](#notable-rule-breaker-red-dead-redemption-ii)
	- [Rule: Make High TTB more interesting than just waiting](#rule-make-high-ttb-more-interesting-than-just-waiting)


# Law: The Five Stages of An Action

Games are made up of actions, or things that the player can do in order to achieve a certain goal. Consider the following step-by-step breakdown of any action in a game:

|Stage | Description | Example Case |
|------|-------------|--------------|
| Desire | A player wants a certain benefit. | “I want to reach that platform.” |
| Strategy | They remember which action will grant them that benefit. | “If I jump, I can get to that platform.” |
| Input | They press the button to perform that action. | *presses spacebar* |
| Performance | The in-game avatar performs the action. | *jumps* |
| Result | The in-game avatar obtains the benefit. | *reaches platform* |

Although actions are typically designed with these 5 steps, keep in mind that an action might not hit all of the steps every time it is used. In some cases, actions are designed to only hit a couple of them. Here is a table that shows possible interactions a player can have with an action.

| Desire | Strat. | Input | Perf. | Result | Interaction |
|-|-|-|-|-|-| 
|<center>✅|<center>✅|<center>✅|<center>✅|<center>✅|**Success**<br /> The player wants a certain benefit, presses the appropriate button, and achieves their goal.|
|<center>✅|<center>✅|<center>✅|<center>✅|<center>❌|**Failure**<br /> A player conceives of a goal and presses a button to perform the correct action to achieve it but fails due to a strategic or mechanical negligence.|
|<center>✅|<center>✅|<center>✅|<center>❌|<center>❌|**Missed Input**<br /> A player wanted to perform an action and pressed the appropriate button, but for some reason the game misinterpreted the input, meaning that no action or an unexpected action occurred in-game.|
|<center>✅|<center>✅|<center>❌|<center>❌|<center>❌|**Forgotten Input**<br /> A player desires a certain benefit and remembers an action that can achieve it, but forgets which button enacts that action.<br /> *or* <br />**Mispress/Misclick**<br /> A player desires a certain benefit and remembers an action that can achieve it, but they accidentally press the wrong button and start a wholly different action.|
|<center>✅|<center>❌|<center>❌|<center>❌|<center>❌|**Unknown Strategy**<br /> A player desires a certain benefit but either doesn’t know an action that can help them achieve it or has forgotten which action does that.|
|<center>❌|<center>✅|<center>✅|<center>✅|<center>✅|**Educated Guess**<br /> A player does not know exactly what benefit they are trying to reach but they have a hunch that the game “wants them” to do something, so they do it. <br /> *Ex. You have no idea what to do, but you just got a horn item in the last room, so you decide to blow it just to see what happens. Sure enough, a magical door opens.*|
|<center>❌|<center>❌|<center>✅|<center>✅|<center>✅|**Lucky Guess**<br /> A player does not know exactly what they want, but they decide to perform an action anyway, and end up achieving a benefit they didn’t even know they wanted. <br />*Ex. Have you ever randomly done every action you can in a room and accidentally solved a puzzle you didn’t even realize was happening?*|
|<center>❌|<center>❌|<center>✅|<center>✅|<center>❌|**Testing out the buttons**<br /> A player presses a button to see what a particular action looks like or feels like, without necessarily having a certain goal in mind.|
|<center>❌|<center>❌|<center>❌|<center>✅|<center>✅|**Computer Assistance**<br /> There is a certain action the player can do that helps them achieve a benefit, but they do not know about it, so the computer just does it for them. <br />*Ex. You can turn on an option in The Last of Us that automatically picks up loot near the player without requiring a button press.*|
|<center>❌|<center>❌|<center>❌|<center>❌|<center>✅|**Auto Benefit**<br /> Some games will automatically award a player a certain benefit without any input or even a performed action from the player. <br /> *Ex. You gain passive gold every second during a game in League of Legends.*|
|<center>❌|<center>❌|<center>❌|<center>❌|<center>❌|**Away from Keyboard (AFK)**<br /> The player does not desire anything, nor are they pressing any buttons. Oh my, perhaps the baby woke up!|

As a designer, our entire job revolves around putting hidden (or sometimes not-so-hidden) guardrails that push a player into desired gameplay and away from undesirable gameplay.

## Rule: Failure should be predictable, preventable, and offer choices

Perhaps the trickiest interaction to get right is **failure**. It can be very frustrating for a player to know what they have to do, but simply lack the mechanical skill to enact it. How do successful, difficult games manage to give the player challenging gameplay without frustrating them to the point of turning it off?

I have noticed the following qualities of difficult games that improves their success:

- **Immersion.** If your player is truly and completely immersed in the experience, difficulty will simply blend into the natural danger of the world. Players tend to stop complaining about design when we have caught them completely under our spell, and the fact that they are even playing a designed, man-made experience fades to the back of their conscience. Many popular difficult games like *Dark Souls, Hollow Knight* and *Devil Daggers* tend to have moody atmospheres and sound design. 
- **Easy to Understand Lose-Conditions.** Players get frustrated the fastest when they lose for a reason that they did not know about or understand. Many RPG games fall into this trap: *"How was I supposed to know that Gigadeath was going to use a supermove that wipes my team on the last turn?"* If a player dies, they should generally consider it a mistake on their part rather than a screw-you from the game designer.
- **Multiple solutions to a single problem.** Giving players several ways to overcome an obstacle kills two birds with one stone: it makes the obstacle feel more fair and affords a level of personal expression to the tactic the player ends up using. These do not have to be completely different routes, by the way. I'm not suggesting to have an alternate route where you can talk your way around fighting a boss, *New Vegas*-style. The specificities of how you afford several solutions will depend from game-to-game, but try to contain these choices within the scope of your core gameplay. 
- **Minimal downtime between tries.** A little bit of breathing room is okay, but too much waiting between successive tries will frustrate players.

Try making sure that even if you are making a difficult game, the player has several options to try new things on successive attempts. Ramming your head against a brick wall over and over until it breaks is usually never fun.

### Notable Rule-Breaker: *Hollow Knight*
Yes, I did reference this game in the rule section and as a notable rule-breaker.

Hollow Knight has certain platforming challenges that demands perfect, precise inputs from the player that can only be solved in a single way. These challenges definitionally have zero player expression: anyone who completes them necessarily does so in the exact same way.

For certain players who care a lot about player expression (like myself) this is a major turn-off. I stopped playing *Hollow Knight* around the first time I encountered one of these.

However, given *Hollow Knight*'s meteoric popularity, for many, many other players, these types of challenges paired with the atmospheric and gorgeous bugworld of the game made for fun gauntlets to test their reflexes and mastery over the controls.

Other than exploration, *Hollow Knight* does not pose the player with many second-to-second choices. In fact, most players who are good at the game tend to play it in a very similar fashion. However, it makes up for this lack of player expression by **perfectly** nailing the other aspects of difficulty. *Hollow Knight* is a fast, responsive game with easy-to-read visuals, intuitive controls, and a wonderfully dangerous world for the player to explore at their own pace.

If you intend to make your gameplay as challenging and restrictive as *Hollow Knight*, make damn sure that your visuals and controls are just as polished as theirs. Players will not be forgiving if you slack in one field without making up for it in another.


## Rule: Minimize Input Mishaps

Many aspects of games are best when they disappear and become invisible to a player. Input is one of these things. Whenever players mention controls it is usually to complain about them, so here are some tips to avoid common input issues.

**Missed Input** interactions happen when player wanted to perform an action and pressed the appropriate button, but for some reason the game misinterpreted the input, meaning that no action or an unexpected action occurred in-game. In 99% of cases, these are objectively bad and probably a bug. Make sure to prioritize it in fixes, even for playtests. Once a player loses trust in a button, they will doubt it forever. 

*Tip: try to make use of Input Buffers to minimize the possibility of inputs being missed.*
<details><summary>Input Buffers Implementation Tips</summary>

Here is the basic way many beginner games implement input.

```c#
void Update()
{
	if(canJump && Input.GetKeyDown(KeyCode.Z))
	{
		Jump();
	}
}
```

This will *work*, don't get me wrong, but as you add complexity to your game it has the chance to eat inputs in undesirable situations. For example, let's say that the `canJump` bool is `false` whenever the player is in the air. What happens if the player presses the jump button on the frame right before they hit the ground? They are expecting to jump, even if technically they did not press the button at the correct time.

Here is an implementation using an Input Buffer.

```c#
bool inputBuffer_Jump;

void Update()
{
	if(Input.GetKeyDown(KeyCode.Z))
	{
		inputBuffer_Jump = true;
	}

	if(canJump && inputBuffer_Jump)
	{
		Jump();
		inputBuffer_Jump = false; //reset the buffer to false after the jump fires
	}
}
```

Pressing the jump button flips the `inputBuffer_Jump` to true. This bool declares our *intent* to jump, rather than doing the jumping all on it's own.

If we *can* jump and we *want to* jump, only then will we jump by calling `Jump()`. We also flip the buffer back to false.

This version is noticably sweeter to our player. It's the difference between "No, you can't have a jump, we are closed today >:(" and "We'll let you have a jump at the next available convenience :)".

This technique also allows you to prioritize certain inputs over other inputs, in the case that we want to give the player the option to cancel a previously queued input with a newer one.

```c#
bool inputBuffer_Jump;
bool inputBuffer_Dash;

void Update()
{
	if(Input.GetKeyDown(KeyCode.Z))
	{
		inputBuffer_Jump = true;
		inputBuffer_Dash = false;
	}

	if(Input.GetKeyDown(KeyCode.X))
	{
		inputBuffer_Dash = true;
		inputBuffer_Jump = false;
	}

	if(canJump && inputBuffer_Jump)
	{
		Jump();
		inputBuffer_Jump = false;
	} else if(canDash && inputBuffer_Dash)
	{
		Dash();
		inputBuffer_Dash = false;
	}
}
```

Here, we give the player two movement options, a jump and a dash. In the situation that they press the input for a jump but change their mind and press the input for a dash right after, the game will prioritize the dash input instead of the jump input. And vice versa.

Again, this is technical design that is 'sweet' to our players. These invisible touches go a long way to creating a game that feels pleasant to control rather than clunky.

</details>

**Forgotten Input** interactions happen when a player wants a benefit but they forget which button performs the appropriate action. A lot of games solve this problem by just telling you the right button straight to your face in the case that it’s particularly obvious what you want to do. For example: In God of War, when the player approaches a contextual object, a UI image pops up to tell you exactly which button you are supposed to press to interact with it.

![](https://lh3.googleusercontent.com/7DPiir0Ovi_fgJIBky2OUDVjB6jU9-US01Irj6EIMV7eqeWqgAnRV-JBDtrhnew0bt1XQlcr8eYVbBCI4tpo0b6b1w-XHXRuY0PxNLYXKhYTXLQYxUUEZqDmAQabB_tLH2BVQ8vK9Hhpy8J-gzW-Josdxi6qRBcksqr6dddUBE42ES_T_Sj9wSRssh7glg)

**Mispress/Misclick** is one of those things that there isn’t really anything you can do about, and usually a player will attribute the blame of that to themselves rather than the game. If you notice it happening often, try revising the default controls of your game. In particular, try to have distance between buttons for actions that are used commonly.

### Notable Rule-Breaker: Paper Bag in *Stray*

In *Stray*, when the player interacts with a paper bag, the cat avatar puts it on her head. This causes the player's movement controls to become temporarily reversed. The designers used jumbled inputs as an intentional choice to represent the in-universe confused blindness of the cat.

### Notable Rule-Breaker: Difficult Inputs in Fighting Games

A wise man named Hidetaka Miyazaki once said: “Controls [should] never be a factor from which difficulty is derived.” This is good advice, and also advice that most popular fighting games do not follow.

Many fighting games have very difficult controls that involve spinning the joystick in specific movement directions. Even if you know the input for a certain move, it can still be daunting to use it. This has stayed a staple in fighting game culture mostly for the balancing aspect -- a game like Street Fighter can give a character several strong moves by attributing the difficulty to the very input that activates that move.

![](https://lh3.googleusercontent.com/LGb3xQGEnMzMyuZ6vUHNsg6nVPZI1sBTMFGhSXIOm4nnRU2_6GY3yuPr3oY8SitclNgx5oBNw4QPn3pjyO2VCqbe3WKQCTGxNCuzFSsnKYXzFl60l9pDH6I2PRmW5CV6h950Iw5Qsov58RnyzzGe4_45UBMDTUs5m9Vr3HuWJCUSjwzdmV4ccib2j6CaUw)

Keep in mind that fighting games get away with this in large part due to the competitive satisfaction of learning to use a difficult input consistently in the heat of a player-vs-player match. Difficult inputs are much harder to justify to single-player audiences.

## Rule: Make Objectives Clear and Obvious

Remember, the "show don't tell" approach need not apply to the objectives of your game. Be bold, be brash! *Breath of the Wild*, a game famous for how soft-spoken it is compared to other open world games, loudly declares your goal as soon as you finish the tutorial:

![DestroyGanon](https://pbs.twimg.com/media/E4AaWRPVEAYCuOV.png)

Give the player freedom in *how* they achieve their goals, yes, but giving them a clear goal to work towards is never a negative.

**Unknown Strategy** is one of the boon-or-bane interactions. In some games, knowing what you are supposed to do but not knowing how to do it is endlessly frustrating. On the flip side, this is the entire appeal of puzzle games &ndash; players spend time putting disparate pieces together until that “a-ha” moment hits.

If you do not desire this interaction, try putting timed hints in a zone that pop up and give the player tips to achieve their goal. Use playtest information to tune what time these should appear at &ndash; and make sure to make an option to disable them.

**Educated Guess & Lucky Guess** are undesirable interactions. Having a player get bored/frustrated enough that they just start doing random things to see which is “what the designer wants them to do” is a big mood-killer, pace-stopper, and immersion-breaker. If you find this happening often, try to make sure that you communicate the goal more effectively.

## Rule: Give the player a safe testing ground

**Testing out the buttons** is a good thing to support. Having a little practice dojo with unlimited resources is a cheaply implemented feature that can help your players gain confidence in their skill.

## Rule: Computer Assistance should be toggled by options

**Computer Assistance** can help streamline your game for casual audiences, but it’s probably a good idea to make options to disable them. Many players despise the feeling that a game is “playing itself.”

# Law: Discrete vs. Continuous Values

In mathematics, discrete values are defined by functions with hard, consistent outputs. By contrast, continuous values are defined by functions with infinitely many variations.

Consider the case that there is a bow-and-arrow weapon in a shooter game that can be charged up to shoot. Looking at the graph below, these are two possible variations for a charge-to-damage function. 0 on the x-axis represents minimum charge, as if the player tapped the fire button, whereas 1 on the x-axis refers to a fully-charged shot. Likewise, 0 on the y-axis refers to the minimum damage whereas 1 on the y-axis represents the maximum damage.

![](https://lh3.googleusercontent.com/n-Rko3hd8RPlptmKJvIAvmMxyU9bzdki52PR9mELFZVd3iPsaku5GSBVYj2P59_cE-lvKaV3VSt1dcz_Hs1kfRYACqZhyx7WJFA-bqkvRxtRaLATmGTaCn2nbqBNIQt7TaFeDcfQymdAxBrIVEj5tSbeRctyLiCCHV_0MOrEpOcJ4ATZsyXgOlmC1Gi5uw)

The red line is a discrete function. It returns simple, consistent values for any given input. A human designer would be able to tell me the exact output of any given input charge.

The blue line is a continuous function. For simple functions, the output can be approximated, but it can never be confidently identified without the use of a computer or calculator.


Assume our bow has minimum damage 100 and maximum damage 300.

If I told Red Designer that a player charged their bow for 0.6 seconds, they could confidently tell me that it would deal exactly 200 damage. Even if I told them a very particular number like 0.7345 seconds, they would be able to confidently tell me that the arrow deals 200 damage.

However, if I told Blue Designer that a player charged their bow for 0.6 seconds, they might have a hunch that it deals something a bit less than 180, but they aren’t really sure (the correct answer is 172, by the way). If I told them a very particular number, they would probably have no clue.

## Rule: Use Discrete Functions

Save hours of balancing, guaranteed!

Many of your favorite games, even the ones that seem very continuous, have a lot of discrete functionality under the hood. This can be a beneficial tool both for designers and players; it gives designers the ability to accurately predict the gameplay situations while giving players consistent outcomes they can learn to predict.

In *Devil May Cry 3*, every move has a knockback value. This value determines the distance that an enemy will be knocked back after the move lands. We could assume that this value is a float variable, something like:
```c#
struct AttackData
{
	float knockbackDistance = ???; // Dismal
}
```
However, observing the game reveals that there are actually **four** distinct values: 0, 8, 12, and 16 meters. Every move in the game has one of these four knockback values.

This means that the knockback in this game is probably implemented more like this:

```c#
const enum KnockbackDistance
{
	NONE = 0f,
	LOW = 8f,
	MED = 12f,
	HIGH = 16f
}

struct AttackData
{
	KnockbackDistance knockbackDistance; //Smokin' Sexy Style!
}
```

Dante, the player character in DMC3, has access to **3 gap-closers**: moves that carry him forward a certain distance.

| Gap closer | Distance |
| - | - |
| Trickster Dash | 8m |
| Beowulf Straight | 12m |
| Stinger | 16m |

Hm, those numbers look familiar...

What if I told you that Dante's three main gap closing abilities &mdash; Trickster Dash, Beowulf Straight, and Stinger &mdash; *perfectly* correspond to the three non-zero knockback distances?

It gets even better. Only a single move, Beowulf Volcano, deals 12 meters of knockback. Coincidentally, Beowulf Straight is a gap closer on the same weapon that closes a distance of... 12 meters.

Poof! Mind blown.

This method gave the designers at Capcom two advantages. First, they knew that a clever player always has a way to instantly gap close to a target if they are comboing them. The player will never be able to knock an enemy away too far for one move but too close for another one. Second, this restriction yields simpler information for a designer to make accurate choices. Think: is it easier to give a move an arbitrary float value knockback... or to pick between None, Low, Medium and High?

Almost every number in your game will eventually get balanced by a designer. The best thing you can do today is simplify your design life tomorrow. Use discrete functions!

*I learned about this Devil May Cry fact from an [article by BroadestOfSwords](https://intothebluesky.com/2019/06/12/devil-may-cry-files-03-knockback-pt-1/), please read it for more details and video proof.*

### Infamous Rule-Breaker: NPC's in Trailing Missions

This particular villainy is one of those rare game design choices that has been memed far beyond the boundaries of professional designers: trailing missions where the NPC moves at a speed that is faster than the player's walking speed, but slower than the player's running speed.

There isn't a single game that is the culprit of breaking this rule, but many popular open world titles come to mind.

![](https://preview.redd.it/fx9ixfmfonh81.jpg?width=640&crop=smart&auto=webp&s=ad43fc948067c6de04b0f9f58c0d43069426b075)

This is a case where discrete values are used to maddening effect. Despite the analog feature of the joystick, the player is only able to move at two discrete speeds, with an NPC straddling the line between them.

My only guess for why this is so popular is to inject some tiny level of interactive challenge to a trailing mission. At least you have to continually tease the joystick back and forth to shift between walking and running, instead of just holding it forward with zero gameplay. However, if we must cheat in cheap interactivity into an otherwise boring scenario, it begs the question why trailing missions exist in the first place.

### Notable Rule-Breaker: The daunting statistics of Pokemon

For what is ostensibly considered a children's game, Pokemon is a fascinating foray into systems design. Some of the formulas for features such as the damage calculation or EXP gain rival the complexity of those found in college-level math courses.

On top of all these complex statistical formulas, Pokemon includes a more-than-healthy serving of randomness into the mix at almost every step. Individual Pokemon have random genetics that can influence their stats. Battles can be won or lost on the basis of random hit chance and a blanket random damage multiplier applied over everything.

This level of numerical emergence seems like any designers nightmare... and honestly, it probably was. The original Pokemon was horribly unbalanced, with subsequent iterations slightly improving little by little. Yet, to this day, Pokemon is still unbalanced, with a clear hierarchy of certain Pokemon and Types besting others. How do they cope?

Pokemon gets away with being unbalanced because it never pretended to be in the first place. Despite the random elements, casual players can easily play through the main content armed with basic knowledge of type advantages and a rare willingness to grind. Also, the numbers game prioritizes player-controlled elements over computer-controlled elements. Yes, certain Pokemon just suck, but even a Bidoof is a monster if you grinded it all the way up to level 80 for the Elite Four.

This deliberate unbalance also lends credibility to the core theme of the games; it doesn't matter if you have the strongest creatures as long as you show them love and dedication as a Trainer. 

# Law: TTA & TTB (Time To Action, Time To Benefit)

Mick West, a principal developer of Tony Hawk: Pro Skater, defines the term 'response lag' as "the delay between the player triggering an event and the player getting feedback (usually visual) that the event has occurred" ([West](https://cowboyprogramming.com/2008/05/27/programming-responsiveness/ "Permanent Link to Programming Responsiveness")). Response lag is an effective, immediately descriptive term, but I'm afraid it contains some ambiguities. Which aspect of the response is lagging? Is it the action being represented at all, or the benefit of the action? I propose splitting this response lag into A and B substages.

In simplest terms, TTA is the time between Input and Performance, while TTB is the time between Performance and Result. Let’s break them down.

![](https://lh3.googleusercontent.com/GxpSwfqPSJf5PSutWVW5-vWpzutuL0DCfT9-25PBot-DlOySnQcy1kc3One-i3aDpcva2i_ZOfcbNFgclkuiX3hNucZgN5CKvMKk_YLTGTe8fGa49VwjO5cTI0ZyArB4rRC305jUgvuGalaX-_X1jbywLIzEw1iBe7yldDCvjpK-ej6EaLFqBXcle6TsQQ)

### TTA
![](https://lh6.googleusercontent.com/36dbgsgn4fnPzYGXqfsDl00FLY3cmuKM5NfpdMaVTl3F_ydy6W0e3Wi2SHn9e9ubGvi5TN1SzNae1GbjjoWJKfvvL2r49U_laQtj4ISNiIOLnIxyNlJc51AsEtEsLyHkuaNnQ1Mcjby2Cc9FcQobe1CERAF0dquRGIuiCDBbYmk77Q-ZdOx5HMPosWGLbg)

TTA, or Time To Action, refers to the time it takes between a player pressing a button and their action **starting** in the game. For simplicity’s sake, hardware input lag is not factored into TTA.

For example, a shooter like Valorant has extremely low TTA for shooting, arguably zero. As soon as you press the left mouse button, you start firing your weapon. 

Most games usually have zero TTA for their actions, but sometimes the player’s state can change the TTA of a certain action. A game like Dark Souls can potentially doom the player with a very high TTA if they play carelessly. If you are in the middle of an attack animation and you press the dodge button, your player character will not initiate a dodge until after the attack animation is finished. Let's say that the attack animation is 45 frames long, and you press the dodge button at the 13th frame. This would make your TTA = 45 &ndash; 13 = 32, because you have to wait 32 frames between pressing the button and your character doing the intended action.

![](https://lh3.googleusercontent.com/WCexd2GGiidaS4VOmbCnaFwW9jjcbCu-Z-tcW2X9sOXmMpaUwT6nti5oZ38DQi9zTeYEr39F4isdOkVtFK8ooE4ZVqLrYzkRw5zAZ1zNmsj_7GfqDNnhyRgJr7tIYP7I8OjyPrFkiYZpBFrylkh94wUoOnzCsLovsybtviBmJs0eicQIhoyYJINMvDaihg)

*As you can see, this poor player saw the skeleton’s kick coming, but because they were in an attack animation, their TTA became much higher, and they weren’t able to dodge in time.*

### TTB
TTB, or Time To Benefit, refers to the time it takes between an action starting, and the benefit of the action being reached.

For example, in the shooter Overwatch, although firing your weapon is instantaneous (0 TTA), the TTB can vary between hitscan and projectile weapons. When you fire a hitscan weapon, it shoots a ray and checks if you hit an enemy in the same frame. This can be considered 0 TTB. By contrast, when you fire a projectile weapon, it instantiates a bullet object that has a travel speed. The TTB of a projectile weapon varies based on the speed of the projectile and the distance to the target.

![](https://lh6.googleusercontent.com/PNOAu6z2iFyLSU9K4dXS0MaBWjwRAZ07OAPhiU_HyRyaJvXwenSvhV7Ia30euf_UYxqtcEJ8vk2QSfp_ygtRX4ipjfSh94PePJQhDmaGq8Kmv3Rzzwxlgbi31sbgfz0XGjw-AUmY6wrM0GRoqty1fM_zLQhuQ20SWOWeDm9pd7V7JqYhUn7tRBlKG2ZjgQ)

This character has a hit-scan weapon. As soon as she fires, the game will check if an enemy is in her line of fire and deal damage if they are. Since the ‘benefit’ of firing your gun is damaging enemies, and damage is dealt instantly upon pressing the fire button, we can declare that the TTB of hitscan weapons is 0.

![](https://lh4.googleusercontent.com/db6PbzguQawzQwP2caBzToRdX6deSJWJEbJQDuTqKbg4OBOiggDpOZG7yX59mQBrzHlJbrEWGfnm8GYBMdq-kOC-aiemzHDvYVOKaLZ29bxKPG9L7YM7s30D5ogXpiQCLeE5VpdyNLh31dJVVLaCaIhaqUMjxqPxdqjva2oojO42sW2rQh8hrEylAGHozA)

This character has a projectile weapon. When she fires, it spawns a rocket that travels forward in the fire direction at a constant speed until either hitting an enemy or an obstacle. The ‘benefit’ of this weapon is also damaging enemies, but the damage occurs at a variable time due to the travel speed of the projectile. This means that we cannot confidently declare a consistent TTB for this weapon. However, the TTB will probably ‘average’ around a certain value based on the speed of the projectile and the size of levels. It can be an effective tool for designers to measure the TTB of their mechanics during playtests and tune them accordingly.

## Rule: Use animation-cancels to minimize TTA

A very common amateur mistake is having unnecessary TTA due to clinks and clanks in the game code. When people refer to a game as “sluggish” or “unresponsive”, that usually means that the TTA is much higher than it should be.

In many games, they allow a player to “cancel” current actions when they press the button for a new action. This creates that responsive, snappy feel that many players love.

![](https://lh4.googleusercontent.com/R06csq7ahk_5ASB4dROyCdsWbG99uacH5nWeGrcwYCFnlq8emaGNZo5awPqT5xbnneZkhLzGI-cEMdXmsntditIRLXgnM4E5YqR8HplNAlTG3nwEM-lUYCGg4Rs83Jv2mIK4EqESXStxnXp3TBnZcbP_GOW2Coczk6SoMblLqKBCYFL_m_mBdlePuy1OOw)

Observe that Bayonetta is firing her guns at the opponent, but is still able to dodge the attack in time. The game is effectively cutting the attack animation short in order to prioritize having a 0 TTA for the dodge.

If your playtests are reporting a sluggish, slow, or unresponsive experience, try reducing TTA using cancels.

<details><summary>Animation Cancel Implementation Tips</summary>

Most games utilize a state-machine to create the different actions a player can do. Here is a simple state machine that does not have any cancels implemented. 

```cpp
void Update()
{
	if(CurrentState == IDLE && AttackInputPressed)
	{
		BeginNewState(ATTACK); //returns to idle state after done
	}
	if(CurrentState == IDLE && DodgeInputPressed)
	{
		BeginNewState(DODGE); //returns to idle state after done
	}
}
```

This current code allows a player to attack or dodge, but only if they are currently in an idle state. Also, it will lock a player into an attack or a dodge once they have initiated the action until it has completed. 

Lets say that our playtesters report the game feeling sluggish, and especially complain that they want to dodge when an enemy attacks without waiting for their attack animation to complete. No problem! Let's implement a cancel.

```cpp
void Update()
{
	if(CurrentState == IDLE && AttackInputPressed)
	{
		BeginNewState(ATTACK); //returns to idle state after done
	}
	if((CurrentState == IDLE || CurrentState == ATTACK) && DodgeInputPressed)
	{
		BeginNewState(DODGE); //returns to idle state after done
	}
}
```
Now, the player can dodge even if they are currently in an attack animation.

</details>

### Notable Rule-Breaker: *Dark Souls*

I gave an example earlier of *Dark Souls* that illustrated a high TTA. Despite the legendary status the franchise has accrued over the years, this aspect of the game was actually very controversial in their prime entry *Demon Souls*.

FromSoftware wanted to create a very deliberate and consistent world for their game. Since then, The Souls franchise has about committing to actions and their consequences. Having a high TTA can make the game more sluggish and unresponsive, but it is the right choice to add value to their very particular atmosphere and vibe.

The Souls games are also meticulously balanced around the choice to make players commit to their actions. Enemies have windows to retaliate between their attacks that perfectly match up with certain weapon sets. You may have noticed that Soulslike copycats can feel ‘off’ when developers try to copy the base mechanics of Souls games without an appreciation for their balance.

### Notable Rule-Breaker: *Red Dead Redemption II*

Games traditionally have abstracted their features and expected players to mentally fill-in-the-blanks to accommodate for these abstractions. You intuitively know that doors don't magically swing open after you express the intent to open them, but you accept that it would be a hassle to animate a player-character painstakingly opening and closing that door.

Well, within the past decade, we have seen a push for AAA games to get more realistic and immersive, even at the cost of intuitiveness and responsiveness. *Red Dead Redemption II* is perhaps the final boss of these efforts, at least for the time being. Every single action is drawn out in long motion-capture animations that carefully show an impressive amount of detail.

Keep in mind that the immersive value RDR2 gains from this realism is completely at the mercy of consistency. Art based in realism is only as strong as the weakest link. If you can't afford to make **every** animation look that good, don't make a single one. Most games get by just fine abstracting here and there.

## Rule: Make High TTB more interesting than just waiting

TTB is one of the most important factors in the feel of a game. When it grows too large, the game can feel sluggish and frustrating.

Many designers make high TTB actions that also have ostensibly high benefits to make up for it. This isn’t a bad idea in theory but make sure to remember that a high TTB can be a devastatingly large turn-off for players. Many designers panic when a player doesn’t use a certain mechanic and tune the wrong value, believing that the benefit is too low. Sometimes, even if a move does 9999999 damage, if it takes 10 whole seconds to pull off, a player is never going to touch it.
  

//Can you do other things during TTB

//How soon can you do those things after TTA

//Sephiroth example
