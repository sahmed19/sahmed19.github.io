---
layout: single
title:  "Starting out with Flecs ECS in Monogame"
date:   2022-08-17 10:35:00 +0800
categories: blog
---
# Leaving the Unity birdnest
I started game development when I was around ten or so using Clickteam Fusion to make simple platformers. After I learned to code, I started using Unity, and have been a pretty loyal Unity dev ever since. All I've ever really known is coding within Unity's paradigm of GameObjects and C# and whatnot. I figured it was time to try something new.

### What to pick?
To maximize the learning opportunity I wanted to use a lower-key framework, something that leaves most of the game loop to me.

I ended up settling with Monogame, as coming from Unity I'm most used to C# anyway. Monogame (prev. XNA) is very battle-tested: several high-profile indie games use it, like [*Celeste*](http://www.celestegame.com/) by [Extremely Ok Games](https://exok.com/games.html), [*Terraria*](https://terraria.org/) by [Re-Logic](https://re-logic.com/) and [*Stardew Valley*](https://www.stardewvalley.net/) by [Eric Barone](https://twitter.com/ConcernedApe).

*Other choices I researched and did not go with, but you might!*
- **Godot**: Although I appreciate how much more it stays 'out of your way' than other engines, it still feels too much for my current wants.
- **Bevy**: Very young, but I am definitely keeping an eye on this one.
- **SDL2/C++**: I use C++ all the time at school anyway so wanted to do something else when I'm coding for fun.

### First date with Monogame, a little nervous
It seems like a pattern I have for any new engine/framework is... **try to make Cave Story with it**. It was the first thing I tried to do with Clickteam Fusion, Unity, and now Monogame.

![MyFirstMonoScreenshot](/assets/images/posts/01_my-first-mono-screenshot.png)

Getting Quote on the screen with relatively basic platformer controls is at this point my personal *Hello World*. I have to admit, I was intimidated at first by having no software to go off other than good old VSCode, but after this point most of my anxieties disappeared. I love the freedom of having the framework give me the bare essentials: an entry point, a `Tick()`, and a `Draw()`.

I was about to type out a familiar Actor.cs class... when the freedom really went to my head. After all, I've been doing the traditional pattern my whole life. While everyone else was going out and partying and hating OOP last year, I had to stay inside with my GameObjects and MonoBehaviours. It's not a phase, Mom!

![FriendshipEnded](/assets/images/posts/01_friendship-ended-with-actor.png)

Which brings us to...

# In my ECS Era

I watched [that one Overwatch GDC Talk that everyone mentions about ECS](https://youtu.be/zrIY0eIyqmI) and was immediately sold. One of my absolute favorite aspects of game design is **consistent systems.** I love when every actor in a game, from the player to enemies to even random little objects, have to obey the same rules of the universe. 

These personal core values of game design is basically a match made in heaven with ECS, a programming paradigm based on "declarations (there shall be this)" instead of "imperative statements (do this)" ([Martens](https://ajmmertens.medium.com/why-vanilla-ecs-is-not-enough-d7ed4e3bebe5)). To use an example from *Breath of the Wild*: I want to tell my game that fire catches on wood, **no matter the circumstance of fire catching wood**, whether I am lighting an arrowhead on a bonfire or hurling magic fireballs at an enemy Bokoblin's wooden shield.

For my project I decided to go with [a C# wrapper for Flecs](https://github.com/flecs-hub/flecs-cs).


### Paradigm shift

ECS sounds very cool at first, but once you start trying to create components and systems it can be a bit daunting of how to proceed appropriately. Researching the Flecs user manual helped me understand a lot of the unique aspects and challenges of ECS. I decided on a new Hello World: Have at least 4 digits of entities carrying this image of Pochita from *CHAINSAW MAN* bounce around in an enclosed square.

![Pochita](/assets/images/posts/01_pochita.png)

One thing that I ended up changing was converting a `struct Transform` into `Position`, `Rotation`, and `Scale` structs. As per the Flecs manual, ECS is best when using as granular data-types as possible. This really allows systems to *only* bother the data that they need to, instead of having to manage potential side effects of entire OOP classes. I'm excited by the possibilities but recognize that this will take a lot of getting used to.


![Thousand Pochitas](/assets/images/posts/01_thousand-pochitas.png)

This is a very basic ECS game that consists of 2500 entities, 5 components, and 4 systems.
The 5 components are as follows: Position, Rotation, Scale, Velocity, and Sprite. They are kind of self-explanatory, especially since they literally do not contain anything other than their named value. Like, Position is just:
```cs
public struct C_Position : IComponent
{
    public Vector2 Position;
}
```
That's literally it. It's very freeing that in terms of data, ECS is very "What you see is what you get" about things. Data is granular and gives you exactly what you expect, nothing less, nothing more.

Systems are defined as functions that can get subscribed into the Flecs ecosystem. Here is the system that applies velocity to position.

```cs
public static void ApplyVelocityToPosition(Iterator it)
{
    float deltaTime = it.DeltaSystemTime();     // I contributed this helper function! :D
    
    var posIter = it.Field<C_Position>(1);      // Initialize iterator for position
    var velIter = it.Field<C_Velocity>(2);      // Initialize iterator for velocity

    for(int i = 0; i < it.Count; i++)           // Loop thru every entity in the game
    {
        ref var pos = ref posIter[i];           // Position component MUSt be mutated so use 'ref' keyword
        var vel = velIter[i];                   // Velocity component is simply being read.

        pos.Position += vel.Velocity * deltaTime; //Add velocity*dt to position
    }
}
```

Subscribing the function as a system to ECS looks like this:
```cs
World.RegisterSystem(S_Physics.ApplyVelocityToPosition, EcsOnUpdate, $"{typeof(C_Position)}, {typeof(C_Velocity)}");
```

The `EcsOnUpdate` describes the phase this will participate in. the `$"{typeof(C_Position)}, {typeof(C_Velocity)}"` describes the query that will occur to search through entities to update. It specifies to only bother Entities with `C_Position` and `C_Velocity` components with this system.

This is pretty beautiful because this system will apply to any entity that has both a position and velocity without asking any other questions about them. Also, the data being structs means I have to explicitly state when variables are to be mutated or not, using the ref keyword.

The 4 total systems are: ApplyVelocityToPosition, BounceOffWall, RotateTowardVelocityDirection, and PendSpritesForDraw. All of them were pretty straightforward to write, but if you would like to check them out they are available at [my project repo on Github.](https://github.com/sahmed19/ProjectMono).


### Visualizing ECS data with Dear IMGUI

With ECS as data-driven as it is, I would like to have a way to visualize all of my entities with their components. I decided to start with a simple approach that could grow to be more complex later. For my visualization I went with the [.NET Wrapper](https://github.com/mellinoe/ImGui.NET) for Dear IMGUI. [(This tutorial)](https://flatredball.com/news/dear-imgui-integration/) was really helpful to figure out how to do this.


![Dear IMGUI Integration](/assets/images/posts/01_dear-imgui.png)

So far it's just a simple setup with an entity browser that allows the user to dynamically change values at runtime. It doesn't have any features for adding/removing components or entities as of now.

# Conclusion

The final result (for now) is 2500 Pochitas bouncing around a virtual box. I can move the camera around or change any of their positions/velocities as I wish.

{% include youtube.html id='Jxl7S-t2Azc' %}

### Next steps

So far all I have used Flecs ECS for is a simple physics simulation. I'm sure trying to make a character-based platformer video game like *Cave Story* will have it's own set of challenges, like handling different kinds of queries, using tags and component relationships. I'll see how it goes and continue to publish my progress here.

For the IMGUI visualizer, there are a couple next steps I have in mind.
- **Entity focuser**. A toggle that targets the camera at a specific entity's position.
- **Entity browser filter by component.**
- **Hierarchy based on Flecs relationships.**

Thanks for reading! School starts in a couple days but I'll try to continue this side project as well as I can.

Follow me [@wheatpenguin](https://twitter.com/wheatpenguin) on Twitter.