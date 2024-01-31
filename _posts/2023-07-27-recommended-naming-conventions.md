---
title:  "Recommended Naming Conventions"
date:   2023-07-27 10:35:00 +0800
tags:
  - Production

toc: true
toc_sticky: true

excerpt: ""
---

## Artwork & Other Non-Code Files

### File Naming

The format for all filenames is: `PREFIX_[Group]_[Name]_SUFFIX`
- `PREFIX` defines the kind of asset.
- `[Group]` defines which group in the project this asset belongs to. For example, if an environmental model, which level it appears in. Or, if an NPC model, whether it is an Enemy or a Player.
- `[Name]` self explanatory. Name appropriately and descriptively.
- `SUFFIX` for extra dilineation on the asset type.

| Asset | Prefix | Suffix | 
| --- | --- | --- |
| (UNITY) Material | `MAT_` | |
| (UNREAL) Material | `MAT_` | `Lit` or `Unlit`|
| (UNREAL) Material Instance | `MI_` | |
| Texture | `TEX_` | |
| Texture (PBR Diffuse) | `TEX_` | `_D` |
| Texture (PBR Normal) | `TEX_` | `_N` |
| Texture (PBR Occlusion/Roughness/Metallic) | `TEX_` | `_ORM` |
| Texture (PBR Emission) | `TEX_` | `_E` |
| Texture (HDRi) | `TEX_` | `_HDR` |
| Render Target / Render Texture | `RT_` | |
| Static Mesh | `SM_` | |
| Skeletal Mesh | `SK_` | |
| Post Process Profile | `PP_` | |
| Visual Effect | `VFX_` | |
| (UNREAL) Blueprint | `BP_` | |
| (UNITY) Prefab | `PF_` | |
| Config | `CONFIG_` | |
| Icon | `ICON_` | |
| (UNREAL) Map | `MAP_` | |
| (UNITY) Scene | `SCENE_` | |
| (UNITY) Input System Controls | `CONTROLS_` | |
| Shader (Lit) | | `Lit` |
| Shader (Unlit) | | `Unlit` |
| Shader Function (HLSL) | `HLSL_` | |

## Code

### Code File Naming

| Class Catagory | Prefix | Suffix | Example |
| --- | --- | --- | --- |
| Standard | | | `Thing.cs` |
| Abstract | `A` | | `AThing.cs` |
| Interface | `I` | | `IThing.cs` |
| Scriptable Object | | `Data` | `ThingData.cs` |
| Singleton Manager | | `Manager` | `ThingManager.cs` |
| Static Extensions | | `Extensions` | `Vector3Extensions.cs ` |
| Asset Library | | `Library` | `ThingLibrary.cs` |
| Unit Tests | | `Tests` | `ThingTests.cs` |

### Code Naming

```cs
public enum ExampleEnum
{
  ENUM_MEMBER_ONE,
  ENUM_MEMBER_TWO,
  ENUM_MEMBER_THREE
}

// "A" prefix because abstract class
public abstract class AExampleClass
{

  // Arrange variables in this order: 
  // Serialized > Public Vars > Public Properties > Member Vars

  [SerializeField] int SerializedVariable;
  public int PublicVariable;
  public int Property => mMemberVariable;
  int mMemberVariable; // Omit 'private' for private vars
  bool mIsElectric; // Bools should be named in such a way that you can tell what true or false means implicity. IE: `mIsElectric` instead of `mElectric`

  // Arrange methods in this order:
  // Unity > Protected > Public > Private

  // Unity functions should be private
  void Update()
  {
    
  }

  protected virtual void ExampleVirtualMethod() {}
  protected abstract void ExampleAbstractMethod();

  public int GetValue(int parameter)
  {
    return parameter * mMemberVariable;
  }

// ----------------------------------------------------
// Run coroutines like this:

  // Reference to the running coroutine so starting again stops the old one.
  IEnumerator mDoTaskCoroutine;

  // Function to start coroutine
  void DoTask()
  {
    mDoTaskCoroutine = CR_DoTask();
    StartCoroutine(mDoTaskCoroutine);
  }

  //Function of the coroutine itself, CR_ prefix
  IEnumerator CR_DoTask()
  {
    for(float t = 0; t < 1.0f; t += Time.deltaTime)
    {
      Debug.Log("The current time is " Time.time);
      yield return null;
    }
  }

// ----------------------------------------------------

}

```

## Folder Structure

Top-level folders are capitalized, all else lower are lowercase.

- Art
  - example_category_static
    - material instance (UNREAL) / material (UNITY)
    - model
    - texture
  - example_category_skinned
    - animation
    - avatar_masks
    - material instance (UNREAL) / material (UNITY)
    - model
    - texture
  - ...
- Blueprints (UNREAL)
- Data
- Font
- Icon
- Maps (UNREAL) / Scenes (UNITY)
- MasterMaterials (UNREAL) / Shaders (UNITY)
- PostProcessProfiles
- Prefabs (UNITY)
- RenderTargets (UNREAL) / RenderTextures (UNITY)
- VisualEffects