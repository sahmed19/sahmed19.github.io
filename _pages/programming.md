---
permalink: /programming/
title: "Game & Systems Programming"
toc: true
toc_sticky: true
author_profile: false

---

## SPOOKULELE: Combat
*Written in C#, Unity*

SPOOKULELE is an Action-Adventure game set in New Orleans. You play as two Reapers, Spooky and Haru, who use their musical abilities to fight ghosts haunting the city.

<a href="https://www.spookulele.games/spookulele" class="btn btn--primary">Spookulele Website</a>

![](/assets/images/portfolio/spookulele-gameplay-3.gif)



As director, I organized and architected the fundamental code for *SPOOKULELE*'s combat engine.

I implemented:
- An Unreal-inspired Gameplay Framework system in Unity (Pawns & Controllers)
- A robust character class every player and enemy inherits from with Devil-May-Cry-inspired simulated physics and hit-reactions
- An extensive state machine for the player characters that seamlessly cancels between attacks, movement options, and spellcasts
- An input buffering system with designer-customizable buffer priorities (ie: prioritizes note inputs above jump inputs)
- Attack system with customizable frame data and hit reactions ([see more in tools section](/toolsdev/#spookulele-frame-data-editor--visualizer))
- An in-engine root motion editor for tuning attack displacements that remains stable at variable frame-rates

![](/assets/images/portfolio/spookulele-gameplay-2.gif)

### Unreal Gameplay Framework in Unity

*SPOOKULELE* was created in Unity due to team experience and platform constraints. However, we had many design needs that were complemented by Unreal's Actor-Controller framework, most notably the seamless switching between two protagonists. To support this, I did extensive research on how Unreal structured the Game Framework and utilized my own Unreal experience to recreate the Game Framework in Unity C#.

For example, here is what the `APawn` class looks like:

```cs
public abstract class APawn : AActor
{
    [ShowInInspector, ReadOnly] public List<APawnController> ControllerSuitors { get; private set; }
    [ShowInInspector, ReadOnly] public APawnController CurrentController => ControllerSuitors?.FirstOrDefault();

    public void AddController(APawnController newController)
    {/*...*/}

    public void RemoveController(APawnController controller)
    {/*...*/}
}
```

**Pawns** and **Controllers** have clear, separate responsibilities. For any entity, the `APawn` class defines the capabilities of that entity, or what it can do, whereas one of multiple `AController` classes will define what it *wants* to do.

In the case of the player characters, the switch function looked like this:

```cs
spookyController.Unpossess();
haruPlayerController.Possess(haru);
spookyAIController.Possess(spooky);
```

![](/assets/images/portfolio/spookulele-gameplay-1.gif)

### Enemy Hit Reactions

The enemies in *SPOOKULELE* have several exploitable hit-reactions that needed to be supported. I authored the hit-reaction system and upkept it extensively during production.

Enemies can be:
- Damaged
- Staggered
- Knocked back
- Knocked up into the air
- (when midair) Knocked downward
- Toppled (Knocked prone)

This was handled with a state machine that specifically designated which states could transition to which other states based on an enemy's weight class. For example, light enemies (the most common enemy type) could be knocked up and toppled, whereas heavy enemies could only be toppled. Attacks that deal knock-up hit effects have no effect on heavy enemies.

Here's a peek at the State Machine initializer from the `ALightEnemy` class I wrote:
```cs
protected override void InitializeStateMachineTransitions()
{
    base.InitializeStateMachineTransitions();

    CharacterStateMachine.AddTransition(_staggerState, _aerialStaggerState, () => _staggerVelocity.y > 0f)
        .RegisterOnTransitionCallback(() => Animator.CrossFade("KnockUp", .02f, 0, 0));
    
    CharacterStateMachine.AddTransition(_aerialStaggerState, _toppledState, () => (_staggerVelocity.y < -1f && IsGrounded));
    
    CharacterStateMachine.AddTransition(_aerialStaggerState, _aerialStaggerState, () => _staggerTriggered)
        .RegisterOnTransitionCallback(() => Animator.CrossFade("KnockUp", .02f, 0, 0.15f));

    CharacterStateMachine.AddTransition(_staggerState, _toppledState, () => IsGrounded && _staggerVelocity.y < 0f, 1);
    CharacterStateMachine.AddTransition(_toppledState, _toppledState, () => _staggerTriggered);
}
```


![](/assets/images/portfolio/spookulele-vfx-1.gif)

### Spellcasting & Player State Machine

In *SPOOKULELE*, the player casts spells by playing notes to access a requisite spell first. Note-playing counts as it's own action that can double as a special attack if used during a basic attack combo or a parry otherwise. I authored this system and implemented note-playing and spell-casting into the player state machine.

Here is an example of a scripted state transition in SPOOKULELE:
```cs
CharacterStateMachine.AddTransition(
    AerialSpecialState, 
    AerialPlayNoteState,
    () => TriggerPlayNote && AerialSpecialState.InCancellable());
```

What this transition is expressing is: if performing a special attack in the air, transition to playing a note if the player has buffered a note-playing input and they are currently in cancellable frames.