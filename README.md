# Sheehan Ahmed — portfolio

A custom Jekyll / GitHub Pages site for technical art, shaders, real-time effects, and game-development tools. The homepage is the complete scrollable portfolio; visitors can review the work without opening individual project pages.

## Local development

Use Ruby 3.3 with Bundler. The current GitHub Pages dependency chain includes `commonmarker`, which does not support Ruby 4. The macOS system Ruby 2.6 also does not work with the current local Bundler setup.

On this Apple Silicon Mac, Ruby 3.3 is available through Homebrew:

```sh
export PATH="/opt/homebrew/opt/ruby@3.3/bin:$PATH"
bundle install
bundle exec jekyll serve --livereload --port 4000
```

Open <http://127.0.0.1:4000/>. For a standalone build:

```sh
bundle exec jekyll build --destination /tmp/sheehan-portfolio-preview
```

**Restart `jekyll serve` after changing `_config.yml`.** Configuration does not reload automatically. Adding the `projects` collection without restarting previously left project bodies and videos empty while headings still rendered. Check the actual running preview, not only a separate build.

Machine-specific cache paths and handoff notes are in [AGENTS.md](AGENTS.md).

## Site structure

| File or directory | Purpose |
| --- | --- |
| `index.html` | Uses the `home` layout. |
| `_layouts/home.html` | Scrollable portfolio, project index, media groups, and writeups. |
| `_data/projects.yml` | Project order, summaries, technologies, media, and legacy links. |
| `_projects/<id>.md` | Longer writeups, matched through front matter `project_id`. |
| `_includes/media.html` | MP4 previews and posters, with GIF fallback. |
| `_data/videos.yml` | Video pixel dimensions for stable, natural-aspect layout. |
| `assets/video/` | Local MP4 previews and matching JPG posters. |
| `assets/images/portfolio/` | Screenshots, artwork, and GIF fallbacks. |
| `assets/css/main.scss` | Styles, responsive layout, spacing, and colors. |
| `assets/js/site.js` | Navigation, active-project tracking, video playback, and article TOCs. |
| `_data/navigation.yml` | Main navigation. |
| `_config.yml` | Identity, social URLs, collections, and build settings. |
| `_posts/` | Blog posts. |

This site no longer uses the Minimal Mistakes layout described in the former template README.

## Editing or adding projects

1. Edit `catalog` in `_data/projects.yml`. Array order determines the homepage order and left index.
2. Keep each `id` unique and stable. Its homepage link is `/#<id>`.
3. Add or update `_projects/<id>.md` with matching `project_id`, plus `title` and `description` front matter. The Markdown body supplies the longer writeup.
4. Set the catalog's `media` field to a video filename stem, or use `image` for a still. Supply an accurate `alt` description.
5. Put supporting demos in `gallery`, using `media` or `image`, `alt`, and an optional `caption`. Screenshot `width` and `height` reserve natural proportions before lazy loading.

Example catalog entry:

```yaml
- id: example-tool
  title: "Example Tool"
  context: "Game name"
  role: "Editor tool development"
  stack: ["Unity Editor", "C#"]
  description: "A short, factual statement of what the tool enables."
  media: "example-tool"
  alt: "A useful description of the demonstrated workflow"
  media_layout: stacked
  gallery:
    - media: "example-tool-detail"
      caption: "Workflow detail"
      alt: "The specific feature shown in this demo"
  url: "/#example-tool"
```

Use `media_layout: stacked` for interface-heavy work needing full-column previews at natural aspect ratios. The frame-data editor and Left on Read dialogue tool use this. Default galleries are compact and gapless. `portrait: true` constrains a tall lead preview, as used for Keldeo.

Keep media in the catalog rather than duplicating it in Markdown writeups. The homepage displays the already-rendered collection document content alongside catalog media. An empty writeup is acceptable when the summary and demos suffice.

For an MP4 named `example-tool`, supply:

- `assets/video/example-tool.mp4`
- `assets/video/example-tool.jpg`
- An entry in `_data/videos.yml`, such as `"example-tool": [800, 450]`

Without an MP4, the media include falls back to `assets/images/portfolio/example-tool.gif`. Some existing environment images still load from ArtStation and require a network connection.

## URLs and compatibility

The portfolio lives at `/`. Compatibility routes are:

- `/projects/` redirects to `/`, preserving recognized project hashes.
- `/projects/<id>/` redirects to `/#<id>`.
- `/graphics/` and `/toolsdev/` map original section anchors to homepage projects; without an anchor, they redirect to `/`.

The implementation is in `_layouts/project-redirect.html`; `_layouts/project.html` applies it to collection documents. Preserve existing catalog `source` and `anchor` fields so old links continue working. Redirect pages use `noindex` and are excluded from the sitemap.

## Deployment

GitHub Pages builds the root of `master` in `sahmed19/sahmed19.github.io`. Pushing to that branch triggers the repository's **pages build and deployment** workflow. The custom domain is <https://www.sheehanahmed.com/>, configured through `CNAME` and GitHub Pages settings.

Commit source changes, including new collection documents and assets; do not commit generated `_site` output. After pushing, verify the workflow for the pushed commit and inspect the live site's content and video playback before reporting deployment complete.

```sh
gh run list --repo sahmed19/sahmed19.github.io --limit 5
gh api repos/sahmed19/sahmed19.github.io/pages/builds/latest
```

## Verification

Run the Jekyll build and `git diff --check`. After portfolio changes, check the actual preview:

- Project bodies contain rendered copy and media, without raw Liquid or missing collection content.
- Video and poster URLs load. Normal-motion demos play near the viewport and pause offscreen; reduced-motion settings expose manual playback controls.
- The index tracks scrolling in both directions and jump links stay on the homepage.
- Desktop, tablet, and phone layouts have no horizontal overflow. Project layouts stack below 1200px; the index becomes a jump menu at 1000px and below.
- Media stays joined within projects. Projects are separated by generous whitespace without divider lines.

At the November 2026 handoff, the homepage contains **13 projects, 23 videos, and 10 images**. These counts are regression references for this version, not permanent limits. No automated browser-test suite is committed; previous browser checks used temporary Playwright scripts against the local preview.
