---
name: p10ns11y-profile
description: GitHub profile README — markdown craft and section architecture
---

# Design — p10ns11y profile README

Visual authority for `README.md` on GitHub. Medium: GitHub-flavored markdown only — no custom CSS, no JS. Toolbox: centered `div`, shields, tables, `details`/`summary`, bold, links.

Visitor mode: **Read**. Primary outcome: hire-loop conversion (CV or email click within two screens).

## Overview

The profile is a three-act ladder optimized for cold hiring readers:

1. **Act I** — Who + why unique (hero, identity bullets)
2. **Act II** — Claim + proof bridge (thesis, architecture table, running now, connect)
3. **Act III** — Depth on demand (timeline, featured, cooking, POCs, long arc, archive)

Beauty within constraint: maximize scannability inside GitHub's markdown renderer. Tables for mapping; prose for featured depth; `details` for archive.

## Section ladder

Fixed order — do not reorder without updating the surface brief:

| # | Section | Role | Disclosure |
|---|---------|------|------------|
| 1 | Hero | Name, tagline, location, 8 shields, nav | Visible |
| 2 | Identity hook | "One person. This stack does not recur" + 4 bullets | Visible |
| 3 | Thesis bridge | Papers + "Same five boxes, new clothes" | Visible |
| 4 | Architecture table | 6-row 2015→2026 mapping — signature artifact | Visible |
| 5 | Honesty + Now | Limits, Grok Build work, quota honesty | Visible (1 paragraph) |
| 6 | That machine, running | 3 clickable proofs (kanithanj, devprofile, sorkalam) | Visible |
| 7 | Connect | X · Articles · CV · email | Visible |
| 8 | An inch at a time | Git-dated timeline | Visible |
| 9 | Featured | 11 repos, Sorkalam first | Visible (scroll) |
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
- **8 shields** — always present: GitHub, CV, X, npm, thecuriousts, GitRoll, Grokipedia, skills.sh
- Nav: `story · featured · cooking · pocs · long arc · writing · more` (7 anchors max)

### Architecture table

- 6 rows, 3 columns — never collapse into prose
- Cell copy: ~12–15 words; spell terms on first use
- Full nuance belongs in Featured items that exemplify each box

### That machine, running

- Exactly **3 items**: kanithanj.ai, devprofile, sorkalam-extension
- One sentence each: claim → proof → click
- Points to [Featured](#featured) for the full stack

### Featured block

- `### [repo-name](url) · stack · [Live](url)` heading pattern
- One tight paragraph per item; repo-verified copy only
- Sorkalam always first; 11 items fixed

### Tables vs prose vs collapse

| Pattern | Use for |
|---------|---------|
| Table | Architecture mapping, timeline, Cooking, POCs |
| Prose paragraph | Featured item descriptions |
| Bullet list | Identity uniqueness, open-source PRs |
| `<details>` | Thesis papers, course craft, archive, nested surfaces |

## Typography and rhythm

- **Bold** for emphasis on key terms and box names — not entire sentences
- *Italic* for Tamil terms and foreign words on first use
- `code` for file paths, commands, technical identifiers
- Horizontal rule `---` between hero and body, before footer
- No ALL CAPS except established acronyms (IEEE, WASM, etc.)

## Responsive intent

GitHub profile is read on mobile. Prioritize:

- Short table cells over completeness
- Running now as bullet list (not table)
- Connect as inline links (no `details` wrapper)
- Featured headings as scannable anchors

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
