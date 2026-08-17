---
name: p10ns11y-profile
description: >
  Edit github.com/p10ns11y/p10ns11y README.md (the public profile).
  Use when the user edits the profile, GitHub README hero, featured products,
  hire-loop visibility, or runs /p10ns11y-profile.
---

# p10ns11y-profile

> **Load rule:** This file is the **taste + procedure**. Do **not** re-read the 2026-08-17 chat. Do **not** rewrite the whole README for a one-line fix.

**Repo:** `p10ns11y/p10ns11y` · **File:** `README.md` · **Live:** https://github.com/p10ns11y  
**Token budget:** one targeted `Read` of the section you touch + this skill. Cap ~20% of a session. No full-file rewrite unless the user asked “end to end.”

## When to use

- Any edit to the profile README, hero, featured, cooking, long arc, shields
- “Punch this product,” “add context,” “too vague,” “too much space”

Skip: bio/`hireable` (needs `gh auth refresh -s user`). Live employer / apply state (process-safety).

## Axioms (taste, settled)

| # | Do | Do not |
|---|----|--------|
| 1 | Identity first: **this stack does not recur** | Product billboard, second H1, for-the-badge stack |
| 2 | Claim → proof → click | Essay, TED on planning, “Now shipping” tables (they rot) |
| 3 | **2015 = same architecture**, not a rhyme | “Same shape,” “same loop” with no steps |
| 4 | Spell every term on first use | Hanging KEI/KDI/MVU/RAG/PERT/`a/m/b`/ACP/HOOTL/EEaaS |
| 5 | Unique **today** from **reading the repo** | Slogans, memory-as-timeline |
| 6 | Git `created_at` / `pushed_at` for dates | “After Oneflow” as origin (ama-about-me is **Sep 2024**) |
| 7 | Split dense walls: list + table | One 80-word sentence |
| 8 | Process-safety: no live hiring IDs | Employer + applied/waiting/interview DATE |
| 9 | Honest limits (quota, fork, slight $ wins) | Overclaim quality-per-watt as measured |
| 10 | Keep all shields (GitRoll, Grokipedia, skills.sh) | Drop shields to “clean up” |

## Settled facts (do not re-litigate)

- **Sorkalam:** built fast; **used while writing** Energy Efficiency as an Orchestration Service. Popup = meaning (Wiktionary, Tamil Virtual University). Grok/Grokipedia = **subject and more context**, open out so the extension **does not pay API bills**. Not “only if you leave.”
- **devprofile `/qa`:** **xAI Collections** chunks and embeds on upload (noticed, not loudly announced). App only `documents/search` + Grok. No own chunker / embed model / Pinecone. Local `qa-index.json` = fallback. Say **xAI**, not “they.”
- **prompt-tuning-lab:** harvest stays local. Distill LLM sees **tidied turns only** — not raw harness or agent dotfiles. Never “nothing leaves the machine.”
- **AgenC protocol:** **fork** — timeline only, not Featured as original.
- **Harness:** **tweaked** Grok Build; **slight** token/$ wins. Full quality/perf eval **paused** (would eat the quota). Target remains quality per token per watt. Notes: `grok-build` `intelli-arch-designs/`.
- **Spine:** 2014 toolbar → 2015 machine (table) → inch (git dates, Sorkalam first) → Featured = that machine running (Sorkalam first) → Cooking → POCs → Long arc = evidence + limit, **do not repeat the table**.

## Steps

1. Read **only** the heading you will change (plus ±15 lines).
2. Apply axioms. If a product claim: `gh`/read **that** repo README — do not invent uniqueness.
3. One `search_replace` (or a few). Preserve shields and nav.
4. Commit on `feat/profile-kanithanj-hero` (or current profile branch). Do not open a new essay.

## Done when

- The touched section is scannable without unexplained abbreviations
- No rotting weekly table
- Commit message names the taste rule you applied

## Do not

- Re-open “download-first billboard” vs identity (identity won)
- Re-read the whole 2026-08-17 thread
- Feature AgenC as original work
- Put live apply/employer state on the profile

## Related

Taste log (load **only** if the user asks why): [references/taste-log.md](references/taste-log.md)
