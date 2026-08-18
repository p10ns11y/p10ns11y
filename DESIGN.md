---
name: p10ns11y-profile
description: GitHub profile README — markdown craft and section architecture
---

# Design — p10ns11y profile README

Visual authority for `README.md` on GitHub. Medium: GitHub-flavored markdown only — no custom CSS, no JS. Toolbox: centered `div`, shields, HTML tables (`valign`/`width`/`align`), `kbd`, `details`/`summary`, **GFM alerts** (`NOTE` / `TIP` / `IMPORTANT`), blockquote, bold, links.

Visitor mode: **Read**. Primary outcome: hire-loop conversion (CV or email click within two screens).

## Overview

The profile is a three-act ladder optimized for cold hiring readers:

1. **Act I** — Who + why unique (hero, identity 2×2)
2. **Act II** — Claim + proof bridge (thesis, architecture table, running now, connect)
3. **Act III** — Depth on demand (timeline, featured, cooking, POCs, long arc, archive)

Beauty within constraint: maximize scannability inside GitHub's markdown renderer. GitHub HTML tables (`valign`, `width`, `align`) are the layout engine. **Column widths follow the golden ratio** φ ≈ 1.618. Prose for featured depth; `details` for archive and Featured overflow.

## Layout ratios (φ)

φ = (1 + √5) / 2 ≈ **1.618**. All `width` attributes derive from these rounded values:

| Pattern | Ratio | Widths | Use |
|---------|-------|--------|-----|
| Two columns | 1 : φ | **38% · 62%** | Identity grid (62% primary cell), timeline, Cooking, POCs (38% label) |
| Three columns | 1 : φ : φ² | **19% · 31% · 50%** | Architecture table (2026 proof column gets φ²) |
| Three columns, center emphasis | 1 : φ : 1 | **28% · 45% · 28%** | Running-now proof cards (CV center) |

Do not revert to 50/50, 33/33/33, or ad-hoc splits unless the surface brief changes.

## Section ladder

Fixed order — do not reorder without updating the surface brief:

| # | Section | Role | Disclosure |
|---|---------|------|------------|
| 1 | Hero | Name, tagline, location, 8 shields, nav | Visible |
| 2 | Identity hook | GFM `IMPORTANT` + 4-item bullet list | Visible |
| 3 | Thesis bridge | Papers + Mermaid diagram (eye-comfort) | Visible |
| 4 | Architecture map | 6-row table inside `<details>` only | Collapsed |
| 5 | Honesty + Now | GFM `NOTE` — limits, Grok Build work, quota honesty | Visible (1 paragraph) |
| 6 | That machine, running | 3-item bullet list + `<kbd>` | Visible |
| 7 | Connect | GFM `TIP` wrapping `<kbd>` CV · email · X · Articles | Visible |
| 8 | An inch at a time | Git-dated bullet timeline | Visible |
| 9 | Featured | 11 repos, thepulimaangani first; first 3 open, eight in `<details>` | Mixed |
| 10 | Cooking | 5-item bullet list | Visible |
| 11 | Proof of concepts | 2-item bullet list | Visible |
| 12 | Long arc | Evidence + limits; thesis in `details` | Mixed |
| 13 | Writing & packages | npm + long-form | Visible |
| 14 | More | Open source PRs, archive | Collapsed |
| 15 | Footer | Grok testimonial + skim line | Visible |

## Components

### Hero

- **One H1** — name only
- **Personal tagline:** **LEA**r**NING** in re**PUBLIC** (typographic wordplay — learning in public)
- **Proof line:** 2015 orchestration boxes → 2026 agent stacks · one person, live proof (hire-loop evidence)
- Location line in `<sub>`
- **8 shields** — always present on one markdown row (never wrap shields in `<sub>` — GitHub will not parse badge markdown inside HTML). Order: GitHub, CV, X, npm, thecuriousts, GitRoll, Grokipedia, skills.sh
- Nav: 7 `<kbd>` anchors max — `story · now · featured · cooking · pocs · long arc · more`

### Identity hook

- GFM `IMPORTANT` alert carries “One person. This stack does not recur”
- **4 bullets** — one uniqueness each (elomaxz, kanithanj, arch-machine, thepulimaangani); no HTML table

### Architecture map

- **Mermaid diagram visible** — primary scan path (2015 phone → 2026 agents); eye-comfort themeVariables
- **6-row HTML table** only inside `<details>` — for readers who want row-by-row text
- Full nuance belongs in Featured items that exemplify each box

### That machine, running

- Exactly **3 bullets**: kanithanj.ai, devprofile, thepulimaangani
- One line each: claim → proof → click; `<kbd>` for download/routes
- Points to [Featured](#featured) for the full stack

### Connect

- Visible H2 (not buried in `<details>`)
- GFM `TIP` alert wrapping `<kbd>` links: CV, email, X, Articles
- Do not wrap the alert in `<div align="center">` — GitHub will not parse `> [!TIP]` inside HTML

### Featured block

- `### [repo-name](url) · stack · [Live](url)` heading pattern
- One tight paragraph per item; repo-verified copy only
- thepulimaangani always first; 11 items fixed
- First three open in the page; remaining eight inside one `<details>`

### Tables vs prose vs collapse

| Pattern | Use for |
|---------|---------|
| Mermaid + eye-comfort theme | Architecture map (visible) |
| HTML table in `<details>` | Architecture row-by-row backup only |
| Bullet list | Identity, running-now, timeline, Cooking, POCs, thesis links |
| Prose paragraph | Featured item descriptions (trimmed open three) |
| `<kbd>` | Hero nav, Connect (inside `TIP`), download/routes |
| GFM alert | Color hierarchy — see Color roles |
| `<details>` | Architecture table, Featured overflow, thesis, archive |

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

## Color roles (GitHub-native + eye-comfort)

Source: [arch-machine eye-comfort](https://github.com/p10ns11y/arch-machine/tree/sentinel/modules/productivity/eye-comfort) `roles.json` locks (midday `#F5F0E8` / night `#181614`). GitHub strips `style=`, `class=`, and `<font>` — color rides on **shields**, **Mermaid**, and GFM alerts GitHub paints for you.

| Role | Vehicle | eye-comfort token | Hex (badge / diagram) |
|------|---------|-------------------|------------------------|
| Ink | shields (GitHub, X) | foreground (light) | `#2A2622` |
| Sage / action | CV shield, Mermaid nodes | accent_sage (blended) | `#4A6B5C` · `#628875` |
| Amber / attention | Grokipedia shield | accent_amber (light) | `#8A6030` |
| Clay / harmony | GitRoll shield, Mermaid lines | accent_clay (light) | `#8B6B4E` |
| Teal / link | thecuriousts shield | color4 (warm slate-teal) | `#405B5E` |
| Warm mark | npm shield | warning (light) | `#8B6020` |
| Paper on chips | shield `logoColor` | background (light) | `#F5F0E8` |
| Claim | `> [!IMPORTANT]` | — | GitHub purple (not overridable) |
| Limits | `> [!NOTE]` | — | GitHub blue |
| Connect | `> [!TIP]` | — | GitHub green |
| Quote | `<blockquote>` | selection (light) | gray bar only |

**Blended sage `#628875`** = midpoint of light `#4A6B5C` and dark `#7D9A8C` so Mermaid reads on both GitHub themes. Shields use **light-lock fills** (mid-chroma umber family) — self-contained images, same on light and dark pages.

Do **not** use `WARNING` / `CAUTION` on this surface. Do not nest alerts. Do not put `> [!…]` inside HTML wrappers. Shields stay markdown — never wrap them in HTML.

## Responsive intent

GitHub profile is read on mobile. Prefer **vertical bullets and Mermaid** over multi-column HTML tables. Prioritize:

- Short bullet lines over table cells
- Architecture diagram open; text map folded
- Connect as GFM `TIP` + `<kbd>`
- Featured: three open headings; eight behind one summary

## Rules

1. Evidence over assertion — every claim links to proof
2. Progressive disclosure — depth in `details`, not above the fold
3. No rotting content — no dated "now shipping" tables
4. Preserve shields and nav unless brief explicitly changes them
5. Long arc does not repeat the architecture table

## Do not

- Add a second H1 or product-billboard hero
- Use ghcards embed/go (desync risk — see `scripts/check-profile-readme.mjs`)
- Wrap shields in `<sub>`, `<p>`, or other HTML — GitHub stops parsing badge markdown
- Hide Connect in collapsed sections
- Drop Featured items to shorten the page
- Fight the medium with unsupported HTML/CSS (`style=`, custom classes, `<font>`)
