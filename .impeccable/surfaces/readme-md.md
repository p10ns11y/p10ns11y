---
version: 1
slug: "readme-md"
primary_target: "README.md"
related_targets: []
---

# README.md — surface brief

**Visitor mode:** Read  
**Primary audience:** Hiring managers (SpaceXAI-class filter), with technical peers as secondary  
**Primary outcome:** The right reader finishes screens 1–2 thinking *this person is unusually real and technically original — I should reach out*

---

## 1. Job and audience

Cold visitors land on `github.com/p10ns11y` with 10–30 seconds of attention. They are not here to browse repos alphabetically; they are deciding whether this profile is worth a CV click, an email, or a bookmark. Peers use the same page to judge originality and depth. The surface must earn both, but **hire-loop conversion** wins ties.

---

## 2. Outcome and proof

**One claim must land:** the 2015 orchestration boxes (orchestrator, temporal–spatial context, knowledge graph, control, wisdom) still appear in 2026 agent stacks — and this profile has **live, dated code** proving that lineage.

**Proof already on hand (do not invent):**
- IEEE 2015 + Wiley 2017 papers, thesis PDFs
- Git-dated timeline (Sorkalam 2014–15 through 2026 instances)
- 11 Featured repos with repo-verified one-liners
- Live deploys: devprofile CV, thepulimaangani, POCs
- Honest limits: no big-lab internals, slight Grok Build $ wins, eval paused on quota, AgenC is a fork

**Success signal:** reader clicks **CV** or **Connect** (email/X) after seeing claim + one running proof — not after scrolling 150 lines of prose.

---

## 3. Reading-path diagnosis

### Scan path (target: screens 1–2, ~15–25 lines)

| Zone | Current lines | What works | What hides the hiring signal |
|------|---------------|------------|------------------------------|
| Hero | 1–41 | Name, shields (all 8), nav anchors, CV badge prominent | Tagline is clever but not hiring-magnetic; 8 badges + nav consume full first screen before any claim |
| Identity hook | 45–50 | **"One person. This stack does not recur"** + 4 bullets — strongest uniqueness beat | Strong; keep as first content below fold |
| Thesis setup | 52 | Papers + honest scope in one paragraph | Good facts; sits immediately before the densest table with no bridge sentence |
| Architecture table | 54–61 | The profile's core proof artifact | 6 rows × 3 columns of prose — unreadable on mobile; hiring reader may bounce before finishing row 2 |
| Honesty + Now | 63–65 | Limits and current Grok Build work | Valuable but adds two more paragraphs **before any Featured project** |
| First live proof | 82+ | Featured section | **~40 lines of claim/honesty before first "machine running" proof** — critical conversion gap |

**Verdict:** The scan path is thesis-heavy and proof-late. A hiring reader who skims sees credentials and density, not a person worth contacting.

### Proof path (target: screens 2–6, engaged reader)

| Zone | Role | Issue |
|------|------|-------|
| Architecture table | Core claim | Correct focal artifact; cell copy too long for GitHub table rendering |
| An inch at a time | Git-dated spine | Correct content; **misplaced between claim and Featured** — breaks claim→proof momentum |
| Featured (11 items) | "Machine running" | Equal weight on all 11; no "start here" tier; **devprofile (CV/qa) is last** despite being the hire CTA surface |
| Cooking (5 rows) | Present-tense heat | Good table format; clear |
| POCs (2 rows) | Clickable proof | Good; appropriately short |
| Long arc | Evidence + limits | Correctly does not repeat table; thesis details properly collapsed |

**Verdict:** Proof material is excellent but sequenced for the author’s narrative spine, not the hiring reader’s decision loop.

### Archive path (target: optional deep read)

| Zone | Role | Issue |
|------|------|-------|
| Writing & packages | Credibility tail | Fine as-is |
| More → Open source | Social proof | Properly collapsed |
| More → Connect | **Hire CTA** | **Buried in `<details>`** — worst placement for primary outcome |
| More → Archive | Historical depth | Correctly nested and collapsed |
| Footer testimonial | Memorable close | Good; keep |

**Verdict:** Archive strategy is mostly right; Connect must surface for hiring outcome.

---

## 4. Selected direction

**Refinement, not redesign.** Preserve worldview, voice, evidence, shields, and settled facts from `p10ns11y-profile`. Resequence and compress so the hiring reader gets **claim → proof → contact** within two screens.

### Structural thesis

Treat the README as a **three-act ladder**:

```text
Act I   — Who + why unique        (hero + identity bullets)
Act II  — Claim + proof bridge    (compressed thesis + table + top-3 running proof)
Act III — Depth on demand         (full featured, timeline, cooking, long arc, archive)
```

### Hero (Act I opener)

- **Keep:** name, all 8 shields, nav anchors, location/stack line
- **Evolve tagline** from clever wordplay toward a hiring-magnetic line that still feels like p10ns11y — e.g. lead with the orchestration lineage or "one person, this stack does not recur" energy without becoming corporate
- **Do not:** add a second H1, drop shields, or turn hero into a product billboard

### Opening claim (Act I body)

- **Keep:** "One person. This stack does not recur" + 4 uniqueness bullets unchanged in substance
- **Add:** one bridge sentence before the table — states the claim in plain language a skimmer can grasp without reading 6 rows (e.g. "Same five boxes, new clothes — mapped below")
- **Compress:** papers paragraph to 1–2 sentences; move nuance to Long arc if needed
- **Keep:** honesty line ("not sat inside a big-lab cluster") but consider merging with bridge sentence to avoid triple-stacked paragraphs pre-table

### Architecture table (Act II anchor)

- **Keep:** all 6 rows and the 2015→2026 mapping — this is the profile's signature artifact
- **Shorten:** cell copy — target ~12–15 words per cell where possible; spell terms on first use per taste rules
- **Consider:** on mobile, the table will still wrap — prioritize scannability over completeness in cells; full nuance can live in Featured items that exemplify each box

### Proof bridge — NEW tier (Act II closer)

Insert a **"Running now"** (or equivalent) micro-section **immediately after the table** (before "An inch at a time") with exactly **3 items**:

| Slot | Project | Why |
|------|---------|-----|
| 1 | kanithanj.ai | Downloadable agent reactor; guards, keyring, hiring-adjacent "Heading" screen |
| 2 | devprofile | Live CV + /qa + /focus — the surface a hiring reader should click |
| 3 | sorkalam-extension | Origin story; built during thesis; ties claim to 2015 |

Each entry: **one sentence** (claim → proof → click). Links to live/download/repo. This gives the skim reader proof without reading 11 Featured blocks.

### Section ladder (Act III)

**Recommended order:**

1. Hero
2. Identity hook (4 bullets)
3. Compressed thesis bridge + architecture table
4. Honesty + Now (tight; 1 paragraph max combined if possible)
5. **Running now** (3 items) — NEW
6. **Connect** (email · X · CV) — promoted from buried details
7. An inch at a time (timeline)
8. Featured (full 11; Sorkalam stays first per settled spine)
9. Cooking
10. Proof of concepts
11. Long arc (+ collapsed thesis/course details)
12. Writing & packages
13. More (open source, archive — Connect removed since promoted)
14. Footer testimonial

**Rationale:** Timeline moves **after** first proof beat so claim→click momentum is not interrupted. Featured stays complete for deep readers. Connect surfaces once hiring reader is convinced.

### Featured section (Act III depth)

- **Keep:** all 11 items, repo-verified copy, Sorkalam first, date stamp pattern
- **Add:** one-line section intro that points back to table ("each line is that machine, running — from the repo today")
- **Optional compression:** items 8–11 could use slightly shorter paragraphs if total Featured length exceeds ~2 screens — but do not drop items
- **Do not:** add rotting "now shipping" status tables

### Progressive disclosure

| Content | Above fold / visible | Collapsed |
|---------|---------------------|-----------|
| Identity + 4 bullets | Yes | — |
| Architecture table | Yes (shortened cells) | — |
| Running now (3) | Yes | — |
| Connect | Yes | — |
| Full Featured (11) | Yes (scroll) | — |
| Timeline | Yes (scroll) | — |
| Thesis & papers detail | Summary in Long arc | `<details>` (keep) |
| Course craft 2011 | — | `<details>` (keep) |
| Open source PRs | — | `<details>` (keep) |
| Archive / blog surfaces | — | Nested `<details>` (keep) |
| Grok testimonial | Footer visible | — |

---

## 5. Scope and boundaries

### In scope for implementation

- Hero tagline evolution
- Opening compression and bridge sentence
- Table cell shortening
- New "Running now" 3-item tier
- Connect promotion
- Section reorder (timeline after proof bridge)
- Minor Featured intro tightening

### Out of scope

- Rewriting factual history or git dates
- New claims, metrics, testimonials, employer/process signals
- Dropping any shield
- Replacing voice with generic personal-brand polish
- AgenC as Featured original work
- Live hiring identifiers on profile

### Preserved elements (do not touch substance)

- All 8 shields (GitHub, CV, X, npm, thecuriousts, GitRoll, Grokipedia, skills.sh)
- Nav anchor set (story · featured · cooking · pocs · long arc · writing · more)
- "One person. This stack does not recur" identity frame
- 4 uniqueness bullets (elomaxz, kanithanj, arch-machine, thepulimaangani)
- Full 6-row architecture table (content, not necessarily cell length)
- Honesty limits (no GPT/Grok design claim, no big-lab internals, slight $ wins, eval paused)
- Settled product facts (Sorkalam, devprofile/xAI Collections, prompt-tuning-lab local harvest, AgenC fork)
- Featured order spine (Sorkalam first)
- Footer Grok testimonial + "you skimmed" line
- Process-safety rule (no live hiring IDs)

### Anti-goals

- **Over-clean:** removing shields, badges, or personality to look "minimal"
- **Over-minimalize:** collapsing the architecture table or Featured into a single paragraph
- **Invent proof:** fabricated benchmarks, employer signals, or "now shipping" tables that rot
- **Billboard hero:** download-first kanithanj CTA above identity
- **Essay opening:** 80-word sentences or TED-talk planning prose before proof
- **Hidden contact:** Connect buried in nested details when hire is the primary outcome
- **Repeat the table:** Long arc must remain evidence + limits, not a second mapping table

---

## 6. States and reader ranges

| Reader depth | What they see | What they should do |
|--------------|---------------|---------------------|
| Skim (5–15 s) | Hero → identity bullets → bridge → table scan → Running now (3) → Connect | Click CV or email |
| Engaged (1–3 min) | + timeline → top Featured items → Cooking | Click 1–2 repos; bookmark profile |
| Deep (5+ min) | + full Featured → Long arc details → archive | Read papers; explore full stack |

**Content ranges (confirmed):**
- Featured: 11 items (fixed)
- Cooking: 5 rows
- POCs: 2 rows
- Timeline: 7 rows
- Architecture table: 6 rows
- Running now: 3 items (new, fixed)

---

## 7. Interaction and layout (intent, not CSS)

### First major fold (before scroll on desktop)

Must contain: name, evolved tagline, primary shields (CV visible), identity hook headline, and start of uniqueness bullets. Table may begin below fold — acceptable if bridge sentence is visible.

### Hierarchy

1. **H1:** Name only (one H1 total)
2. **Primary beat:** Identity hook ("One person…" + bullets)
3. **Secondary beat:** Architecture table (the proof artifact)
4. **Tertiary beat:** Running now (3) + Connect
5. **Body:** Timeline, Featured, Cooking, POCs, Long arc
6. **Tail:** Writing, More, testimonial

### Tables vs prose

- **Tables earn their place:** architecture mapping, timeline, Cooking, POCs
- **Prose earns its place:** Featured item descriptions (one tight paragraph each), Long arc framing
- **Bullets earn their place:** identity uniqueness list, open-source PR list

### Nav anchors

Update only if section names change. If "Running now" is added, consider nav entry `now` or fold into `featured` anchor — do not bloat nav beyond 7 items.

### Mobile

GitHub profile is read on phone. Table will wrap. Prioritize short cells and the 3-item Running now list over table completeness. Connect must be tappable without opening details.

---

## 8. Constraints and open decisions

### Hard constraints

- Single `README.md`; GitHub markdown subset only
- All links live and reachable
- Truth / evidence / precision non-negotiable
- `p10ns11y-profile` taste axioms apply to every edit

### Open decisions (builder must resolve at implementation)

1. **Exact hero tagline** — evolve toward hiring magnet while keeping p10ns11y voice; user approved evolution not replacement
2. **"Running now" section title** — literal "Running now" vs "That machine, running" vs other; must connect to Featured intro language
3. **Honesty + Now merge** — one paragraph or two; do not lose the quota/eval-paused honesty
4. **Table cell shortening** — how aggressive; verify readability on mobile after edit
5. **Nav anchor** — add `now` or not

### Recommended next command

After brief confirmation: implement via targeted `README.md` edits following `p10ns11y-profile` procedure (section-scoped reads, one commit per logical change). Optional: `/impeccable document README.md` if a DESIGN.md for markdown craft patterns is wanted later — not required for this refinement.
