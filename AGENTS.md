# Working on this portfolio

Read [README.md](README.md) for setup, content ownership, media conventions, and URL compatibility.

## Owner's design decisions

These decisions were established during the November 2026 session. Preserve them unless the owner requests a change:

- The homepage itself is the full portfolio. All projects and demos are visible in one continuous scroll; reviewing the work must not require opening detail pages.
- Retain the compact F1 styling: red highlights, slashes and angled shapes, dark field-grey surfaces, and restrained military cues.
- Main navigation is Portfolio, Resume, Blog Posts, and About. Redundant Work and Projects navigation items were removed.
- Do not restore the visible “Technical art & tools” intro heading. The role under the name already establishes context. A visually hidden H1 provides structure.
- The left index shows only project titles. Game/context names belong with the writeup, not as extra index headers.
- Clearly highlight the currently viewed project, tracking forward and reverse scrolling. Keep the active link visible within a short sidebar.
- Wide screens use a narrow index, prominent media column, and readable writeup to its right. Stack on smaller screens.
- Project images and videos must scroll normally. Sticky/following media was explicitly rejected because it felt like a hiccup. The header and desktop index can remain sticky.
- Separate projects with generous whitespace and no horizontal divider lines. Latest spacing was reduced 25% from the deliberately oversized experiment.
- Join images and videos within each project with zero gallery gaps. Preserve useful captions and credits inside the media group.
- Use full-width, natural-aspect stacked previews for editor interfaces and writing screenshots that become unreadable as thumbnails.
- Avoid category badges, numbered project labels, and tiny monospaced metadata. Keep secondary text readable. Graphics/Tools categories were deliberately removed.
- LinkedIn, ArtStation, GitHub, and Resume links belong in the footer. The main navigation also provides Resume.
- Help recruiters see factual contributions, technologies, and demos quickly. Do not invent employers, shipping claims, performance figures, or outcomes.

## Implementation pitfalls

- **Restart Jekyll after `_config.yml` changes.** A stale server previously rendered headings but zero project videos because the new collection configuration had not loaded.
- Verify the actual served homepage at `http://127.0.0.1:4000/` when that preview is running. A separate successful build does not verify the running preview.
- The catalog owns media; `_projects/*.md` owns longer copy. Avoid duplicating previews in writeups.
- Keep project IDs and legacy mappings stable. Generated `/projects/<id>/` pages are compatibility redirects, not the primary portfolio experience.
- `_data/videos.yml` dimensions matter for natural-aspect tool galleries and avoiding layout shifts.
- Preserve muted looping inline playback, offscreen pausing, and reduced-motion manual controls.
- LiveReload may navigate an isolated test browser during regeneration. Wait for rebuilding to finish or block only its client in the test browser; preserve reload behavior in the owner's preview.

## Handoff snapshot — 2026-11-04

- The initial handoff was local and uncommitted. The owner subsequently authorized committing, pushing, and deploying through GitHub Pages. Consult Git history and the latest Pages run for current publication status. New collection documents, redirect layouts, and the environment image must accompany the tracked changes.
- The preview was left running on port 4000, with LiveReload on 35729. Continued lifetime after agent exit is not guaranteed.
- Working Ruby directory: `/opt/homebrew/opt/ruby@3.3/bin`.
- The preview reused this existing temporary gem cache as `BUNDLE_PATH`:

```text
/tmp/claude-501/-Users-xian-Projects-sahmed19-github-io/5c04b66e-d8c2-43bf-bcb0-447cf67d9194/scratchpad/bundle33
```

- Its output destination was the same `scratchpad` directory's `_site` sibling. These paths are machine/session conveniences, not repository dependencies. Use normal README setup if the cache is gone.
- Standalone build output: `/tmp/sheehan-portfolio-preview`.
- Latest implementation checks passed: Jekyll build, whitespace checks, 13 project sections, 23 videos, 10 images, gallery playback, and full-width/native-aspect tool media at 390/768/1024/1440px.
- Earlier checks also covered original category anchors and individual-project redirects, all 13 active-index states in both scroll directions at 700px and 1000px viewport heights, no-JavaScript rendering, and reduced-motion playback.
- Temporary browser scripts and screenshots under `/tmp` are not durable tests or production assets. Latest useful screenshots: `/tmp/sheehan-refined-spacing.png` and `/tmp/sheehan-readable-tool-gallery.png`.
- No known blocking implementation issue remained at the documentation handoff. Publication was explicitly authorized afterward.
