---
name: p10ns11y-profile
description: GitHub profile README — markdown craft and section architecture
---

# Design — p10ns11y profile README

Visual authority for `README.md` on GitHub. Medium: GitHub-flavored markdown only — no custom CSS, no JS. Toolbox: centered `div`, shields, HTML tables (`valign`/`width`/`align`), `kbd`, `details`/`summary`, blockquote, bold, links.

Visitor mode: **Read**. Primary outcome: hire-loop conversion (CV or email click within two screens).

## Overview

The profile is a three-act ladder optimized for cold hiring readers:

1. **Act I** — Who + why unique (hero, identity 2×2)
2. **Act II** — Claim + proof bridge (thesis, architecture table, running now, connect)
3. **Act III** — Depth on demand (timeline, featured, cooking, POCs, long arc, archive)

Beauty within constraint: maximize scannability inside GitHub's markdown renderer. GitHub HTML tables (`valign`, `width`, `align`) are the layout engine. Prose for featured depth; `details` for archive and Featured overflow.

## Section ladder

Fixed order — do not reorder without updating the surface brief:

| # | Section | Role | Disclosure |
|---|---------|------|------------|
| 1 | Hero | Name, tagline, location, 8 shields, nav | Visible |
| 2 | Identity hook | Blockquote + 2×2 HTML table of uniqueness | Visible |
| 3 | Thesis bridge | Papers + "Same five boxes, new clothes" | Visible |
| 4 | Architecture table | 6-row 2015→2026 HTML table — signature artifact | Visible |
| 5 | Honesty + Now | Limits, Grok Build work, quota honesty | Visible (1 paragraph) |
| 6 | That machine, running | 3 equivalent HTML columns (kanithanj, devprofile, sorkalam) | Visible |
| 7 | Connect | Centered `<kbd>` CV · email · X · Articles | Visible |
| 8 | An inch at a time | Git-dated timeline | Visible |
| 9 | Featured | 11 repos, Sorkalam first; first 3 open, eight in `<details>` | Mixed |
| 10 | Cooking | 5-row present-tense table | Visible |
| 11 | Proof of concepts | 2-row clickable proof table | Visible |
| 12 | Long arc | Evidence + limits; thesis in `details` | Mixed |
| 13 | Writing & packages | npm + long-form | Visible |
| 14 | More | Open source PRs, archive | Collapsed |
| 15 | Footer | Grok testimonial + skim line | Visible |

## Components

### Hero

- **One H1** — name only
- Tagline: hiring-magnetic, evidence of lineage, still p10ns11y voice
- Location line in `<sub>`
- **8 shields** — always present. Primary row: GitHub, CV, X. Secondary row in `<sub>`: npm, thecuriousts, GitRoll, Grokipedia, skills.sh
- Nav: 7 `<kbd>` anchors max — `story · now · featured · cooking · pocs · long arc · more`

### Identity grid

- Blockquote carries “One person. This stack does not recur”
- 2×2 HTML table, `width="50%"` `valign="top"`, one idea per cell

### Architecture table

- 6 rows, 3 columns — never collapse into prose
- HTML `<table>` with `valign="top"` and column `width` (22 / 38 / 40)
- Cell copy: ~12–15 words; spell terms on first use
- Full nuance belongs in Featured items that exemplify each box

### That machine, running

- Exactly **3 items**: kanithanj.ai, devprofile, sorkalam-extension
- One HTML row, three `width="33%"` `align="center"` `valign="top"` cells
- One sentence each: claim → proof → click
- Points to [Featured](#featured) for the full stack
- On phone GitHub tables scroll sideways — keep cells short, never put Featured into columns

### Connect

- Visible H2 (not buried in `<details>`)
- Centered `<kbd>` links: CV, email, X, Articles

### Featured block

- `### [repo-name](url) · stack · [Live](url)` heading pattern
- One tight paragraph per item; repo-verified copy only
- Sorkalam always first; 11 items fixed
- First three open in the page; remaining eight inside one `<details>`

### Tables vs prose vs collapse

| Pattern | Use for |
|---------|---------|
| HTML table + `valign`/`width` | Identity 2×2, architecture map, running-now 3-col, timeline, Cooking, POCs |
| Prose paragraph | Featured item descriptions |
| Bullet list | Open-source PRs, archive surfaces (Tamil stays out of tables) |
| `<kbd>` | Hero nav, Connect |
| `<details>` | Featured overflow, thesis papers, course craft, archive |
| Mermaid in `<details>` | Optional box-map diagram under architecture table |

## Typography and rhythm

Type roles on GitHub (no custom fonts):

| Role | Element | Use for |
|------|---------|---------|
| Display | `#` H1 | Name only |
| Lead | `**bold**` | Tagline, section claims |
| Metadata | `<sub>` | Location, shield row, cell labels, footer |
| Control | `<kbd>` | Nav, Connect, routes, downloads |
| Gloss | `<abbr title="...">` | MVU, KEI, KDI, ACP, ReAct, WASM, EEaaS, tinai |
| Script | `<ruby>…<rt>…</rt></ruby>` | Tamil terms with roman reading (e.g. நாழிகை) |
| Code | backticks | Paths, flags, file names |

- **Bold** for emphasis on key terms and box names — not entire sentences
- *Italic* sparingly; prefer `<abbr>` or `<ruby>` for non-English terms
- Horizontal rule `---` between hero and body, before footer

## Responsive intent

GitHub profile is read on mobile. Tables **do not stack** — they scroll sideways. Prioritize:

- Short table cells over completeness
- Running-now columns stay one short sentence each
- Connect as `<kbd>` (no `details` wrapper)
- Featured: three open headings; eight behind one summary
- Archive Tamil as wrapping list, not a 3-column table

## Rules

1. Evidence over assertion — every claim links to proof
2. Progressive disclosure — depth in `details`, not above the fold
3. No rotting content — no dated "now shipping" tables
4. Preserve shields and nav unless brief explicitly changes them
5. Long arc does not repeat the architecture table

## Do not

- Add a second H1 or product-billboard hero
- Use ghcards embed/go (desync risk — see `scripts/check-profile-readme.mjs`)
- Hide Connect in collapsed sections
- Drop Featured items to shorten the page
- Fight the medium with unsupported HTML/CSS
