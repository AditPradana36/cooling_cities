# Cooling Cities, Warming Communities — Project Site

A single-page static site for the *Cooling Cities, Warming Communities*
research project. Same style and structure as the *Prompting Sustainability*
site. Designed for direct push to GitHub Pages.

## File structure

```
site/
├── index.html       The whole site — all sections in one file
├── style.css        Stylesheet
├── README.md        This file
└── images/          Figures used on the page
    ├── greenness_2015.png
    ├── greenness_2025.png
    ├── panorama_overlay_2015.png
    └── panorama_overlay_2025.png
```

## How the navigation works

- Each top-bar link points to a section anchor (`#home`, `#about`, `#outputs`,
  `#data`, `#related`, `#funding`, `#news`, `#team`).
- `scroll-behavior: smooth` in CSS makes the jump animated.
- A small IntersectionObserver script highlights the currently visible
  section's nav link with an underline.
- `scroll-padding-top: 72px` ensures sections don't sit hidden under the
  sticky nav when you click a link.

## Editing content

All content lives in `index.html`. Search for the `<!-- ============ NAME` 
banner comments to find each section quickly.

### Team section — adding contacts

Each team member is a `.member-card` block. The contact links live inside
`.member-links`. Add any of these patterns:

```html
<a href="mailto:user@example.org">Email</a>
<a href="https://orcid.org/0000-0000-0000-0000" target="_blank" rel="noopener">ORCID</a>
<a href="https://www.scopus.com/authid/detail.uri?authorId=XXXXXXXXX" target="_blank" rel="noopener">Scopus</a>
<a href="https://github.com/USERNAME" target="_blank" rel="noopener">GitHub</a>
<a href="https://www.linkedin.com/in/USERNAME/" target="_blank" rel="noopener">LinkedIn</a>
<a href="https://your-site.com" target="_blank" rel="noopener">Site</a>
```

Empty cards currently show a `(contacts to be added)` placeholder. Once
you add at least one real link, delete the
`<span class="pending">…</span>` line for that card.

To use a real photo instead of initials, replace the
`<div class="member-avatar">XX</div>` with
`<img src="images/photo-name.jpg" alt="Name" class="member-avatar"
style="object-fit: cover;">`.

### Outputs section

Each output is one `<li>` inside `<ul class="outputs-list">`. The status pill
has three styles:

- `<span class="output-status accepted">Accepted</span>` — green
- `<span class="output-status submitted">Submitted</span>` — orange
- `<span class="output-status progress">In Development</span>` — neutral

### News section

A template comment shows how to add an entry. Newest entries go at the top.
Once you have at least one entry, delete the `<div class="news-empty">`
block.

### Funding section

Add a new grant by copying the existing `<li>` block.

## Deploying to GitHub Pages

1. Push the contents of this folder to a GitHub repository.
2. In **Settings → Pages**, set the source branch and folder.
3. Save. The site publishes at
   `https://<your-username>.github.io/<repo-name>/`.

## Notes

- Font is **Arial** throughout.
- No external CSS or JS dependencies — everything works offline.
- The IntersectionObserver script (~20 lines, no libraries) is the only
  JavaScript on the page.
