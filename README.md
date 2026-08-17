<div align="center">

# Peramanathan Sathyamoorthy

**Builder of useful things** · open source tinkerer · **LEA**r**NING** in re**PUBLIC**

Stockholm · TypeScript · Rust · C

[![GitHub](https://img.shields.io/badge/GitHub-p10ns11y-181717?style=flat-square&logo=github&logoColor=white)](https://github.com/p10ns11y)
&nbsp;
[![CV](https://img.shields.io/badge/CV-live-0891b2?style=flat-square)](https://peramanathan-sathyamoorthy-cv.vercel.app/)
&nbsp;
[![X](https://img.shields.io/badge/X-@peramanathan-000000?style=flat-square&logo=x&logoColor=white)](https://x.com/peramanathan)
&nbsp;
[![npm](https://img.shields.io/badge/npm-~p10ns11y-CB3837?style=flat-square&logo=npm&logoColor=white)](https://www.npmjs.com/~p10ns11y)
&nbsp;
[![thecuriousts](https://img.shields.io/badge/thecuriousts-181717?style=flat-square&logo=github&logoColor=white)](https://github.com/thecuriousts)
&nbsp;
[![GitRoll](https://img.shields.io/badge/GitRoll-FF6B6B?style=flat-square)](https://gitroll.io/profile/uQUk8uoBUTNOWCHltHi810sXytq33)
&nbsp;
[![Grokipedia](https://img.shields.io/badge/Grokipedia-00A3E0?style=flat-square)](https://grokipedia.com/page/Peramanathan_Sathyamoorthy)
&nbsp;
[![skills.sh](https://skills.sh/b/p10ns11y/skills)](https://skills.sh/p10ns11y/skills)

<sub>
<a href="#an-inch-at-a-time">story</a>
·
<a href="#featured">featured</a>
·
<a href="#cooking">cooking</a>
·
<a href="#proof-of-concepts">pocs</a>
·
<a href="#long-arc">long arc</a>
·
<a href="#writing--packages">writing</a>
·
<a href="#more">more</a>
</sub>

</div>

---

**One person.** This stack does not recur:

- **Elm MVU in C** — [elomaxz](https://github.com/p10ns11y/elomaxz)
- **Desktop agent reactor you download** — [kanithanj.ai](https://github.com/p10ns11y/collab-finder/releases/tag/v2)
- **Arch themed by Tamil *tinai* + circadian science** — [arch-machine](https://github.com/p10ns11y/arch-machine)
- **Tamil metre in Rust/WASM** — [thepulimaangani](https://github.com/p10ns11y/thepulimaangani)

The **same machine** as [Energy Efficiency as an Orchestration Service](https://ieeexplore.ieee.org/document/7396150) (IEEE CloudCom 2015) and [Wiley 2017](https://onlinelibrary.wiley.com/doi/10.1155/2017/6562915):

| 2015 · phones | 2026 · agents |
| --- | --- |
| Local **orchestrator**: profile · predict · act | Same loop |
| **Key Energy Indicators** — stop streaming raw telemetry | **KDIs**, local-first stack |
| **Escalate** only when a signal earns it | Memory / tool calls as first-class **cost** |

The unit is tokens and attention, not just joules. [Read /focus](https://peramanathan-sathyamoorthy-cv.vercel.app/focus). Not a metaphor.

**Now:** I did not only read Grok Build — I **tweaked** the harness and saw **slight** gains in **token use and $**. I will **not** burn the rest of the quota to prove overall perf or outcome quality. The number I still want is **quality per token per watt**; providers can apply learned optimization and cheapen tokens. Notes: [intelli-arch-designs](https://github.com/p10ns11y/grok-build/tree/local/intelli-arch-designs).

I turn personal friction into public tools. Side experiments: [@thecuriousts](https://github.com/thecuriousts).

## An inch at a time

I do not wait for a clean roadmap. Friction shows up — a season of life, a spark on [X](https://x.com/peramanathan) — and I **build the next link**. Git dates (not a memory):

| When | What actually landed |
| --- | --- |
| **Sep 2024** | [ama-about-me](https://github.com/p10ns11y/ama-about-me) — before Oneflow ended |
| **Oct–Nov 2024** | [latex-cv](https://github.com/p10ns11y/latex-cv) → [adaptate](https://github.com/p10ns11y/adaptate) on npm |
| **Dec 2024** | Oneflow closed. The chain did **not** start there. |
| **2025** | [selfie sign-in](https://github.com/p10ns11y/selfie-sign-in-flow-using-v0-xAI) · [Ask Grok](https://github.com/p10ns11y/grok-daily-productivity-extensions) in the toolbar · [devprofile](https://github.com/p10ns11y/devprofile) (Sep) |
| **Jan–Mar 2026** | [v0-live-feed](https://github.com/p10ns11y/v0-live-feed-app) · read [agenc-protocol](https://github.com/p10ns11y/agenc-protocol) (**fork** — not my protocol) |

Then DAD duty, then the graph below. Tesla / SpaceX shape is the bar: automations aimed at an impossible mission — not a prettier backlog.

## Featured

Hard to find this combo **today (17 Aug 2026)** on anyone else’s profile. Each line is from the repo, not a slogan.

### [kanithanj.ai](https://github.com/p10ns11y/collab-finder/releases/tag/v2) · [source](https://github.com/p10ns11y/collab-finder) · TS · Rust

**Linux binary + Heading cockpit.** You intervene only when **guards** fire (fit, cost, rate, CV promote) — not every step. Secrets in Rust keyring. **Generate apply CV never writes the master.** Waybar writes `open-route=heading` and the app consumes it. [v2](https://github.com/p10ns11y/collab-finder/releases/download/v2/kanithanj.ai-linux-x86_64).

### [elomaxz](https://github.com/p10ns11y/elomaxz) · C · [on X](https://x.com/Peramanathan/status/2060627340972151099)

**Elm tagged-msg MVU in C11** — pure `update`, Cmd/Effect shell, actor-style composition. The daily-driver is **[premflow](https://github.com/thecuriousts/premflow)**, not a `counter` demo.

### [thepulimaangani](https://github.com/p10ns11y/thepulimaangani) · TS · Rust · WASM · [Live](https://seiyul-alagi.vercel.app/)

**ML beliefs frozen *before* classical metre** (issue #36) so later rules cannot rewrite the story. **51-dim** features (no raw text). Offline: Monte Carlo, PCA/LDA, hybrid-logit, HMM/CRF sketches, plant/observer/controller. Online: WASM **predicts** on every parse. Classical checker stays empty until the evidence is frozen.

### [arch-machine](https://github.com/p10ns11y/arch-machine) · Shell · Python · Rust

**`archy`** Eagle + satellites — not a dotfiles dump. Thin host → **ml-dev / security-dev**, evidence bundles, inventory, weekly scans. **groxy** = ACP to a Grok agent *or* notify you on X. eye-comfort: circadian + latitude + **tinai / nāḻikai**. personal-tweaks restore the heading chip after Omarchy wipes waybar.

### [shellyxz.sh](https://github.com/p10ns11y/shellyxz.sh) · Shell

**Kernel vs plugin** (zsh · bash · fish) with a PATH contract and `ab` / `av` / `at` verify cockpit. Ontology skill so agents stop moving files across the kernel boundary.

### [adaptate](https://github.com/p10ns11y/adaptate) · TS · [npm](https://www.npmjs.com/package/adaptate)

One optional Zod model. **Each consumer names required fields at runtime.** OpenAPI `$ref` in, Zod out. Multi-tenant APIs where static “required:” dies.

### [skills](https://github.com/p10ns11y/skills) · [skills.sh](https://skills.sh/p10ns11y/skills)

**Scars, not best-practices.** Formal-first `SKILL.md` + EVA emptiness + fission/fusion + **CLT DualLoad** (human WM vs agent parallel). Extracted after the fighting stopped — not designed in a vacuum.

### [agent-prompt-tuning-lab](https://github.com/p10ns11y/agent-prompt-tuning-lab) · JS

Harvest **Cursor + Grok Build + Kilo + Cline** on disk. Raw transcripts, harness dumps, and agent **dotfiles stay local**. Only the **distill** step talks to an LLM — and only **tidied, extracted turns**, not the bulk session. Then Rhai workflows. No bundled dataset.

### [prototype-it-to-explain-itself](https://github.com/p10ns11y/prototype-it-to-explain-itself) · Python · [Live](https://prototype-it-to-explain-itself.sathyam-peram.workers.dev/)

Tiny LSTM + ReAct + memory + **self-critique data factory** + typed workflow — the agent-improves-itself flywheel you can hold in your head. [repo](https://github.com/p10ns11y/prototype-it-to-explain-itself)

### [sorkalam-extension](https://github.com/p10ns11y/sorkalam-extension) · JS · 2014→2026

**Built in a hurry. Used for the thesis.** I wrote [EEaaS](https://ieeexplore.ieee.org/document/7396150) with this in the toolbar: highlight a word → meaning **in the popup** so I could pick a **better word** without leaving the paper. Wiktionary + Tamil VU stay **in the popup** (meaning). Grok / Grokipedia when you want **subject and more context**, not just a gloss — they open out so the extension **does not pay API bills**. Manifest V3 clothes. Same 2026 loop: tap, stay for meaning, go deeper only when you ask.

### [devprofile](https://github.com/p10ns11y/devprofile) · TS · [Live](https://peramanathan-sathyamoorthy-cv.vercel.app/) · [/qa](https://peramanathan-sathyamoorthy-cv.vercel.app/qa)

**The RAG pipeline was already in xAI Collections.** Upload persona/CV — **xAI** chunks and embeds (I noticed the vectors appear on upload; it was not a loud feature while X was still yelling “build your own RAG”). `/qa` only **searches** (`documents/search`) + Grok. No chunker, no embed model, no Pinecone/pgvector of my own. Local `qa-index.json` is fallback when the reactor is off. [**/focus**](https://peramanathan-sathyamoorthy-cv.vercel.app/focus).

## Cooking

Hot. Same bar: unique today, not a status report.

| | Hard to find elsewhere · 17 Aug 2026 |
| --- | --- |
| **[ensembly](https://github.com/thecuriousts/ensembly)** | **Game of Peram** — Rust `peram-kernel` ticks HOOTL (claim *or* complete). You keep **authorization**. life-os is memory; this is the clone. |
| **[life-os](https://github.com/p10ns11y/life-os)** | Public vault with a **process-safety** rule: no live hiring identifiers on git. Runtime is ensembly. They do not merge. |
| **[plugins](https://github.com/p10ns11y/plugins)** | Installable Grok marketplace. **mission-map**: C PERT + Rust heading mermaid; nightly rewrite; **does not** invent `a/m/b`. |
| **[premflow](https://github.com/thecuriousts/premflow)** | Notes / wins / **TTY pomo** / smart review — a small **C** binary on elomaxz. I live in it. |
| **[Ask Grok](https://github.com/p10ns11y/grok-daily-productivity-extensions)** | Chrome: page-context Grok + vocab. Key stays local. Sep 2025. |

## Proof of concepts

Live. You can click. They are not the product — they prove I ship the idea, not a slide.

| | Proof |
| --- | --- |
| **[v0-live-feed](https://v0-live-feed-app.vercel.app/)** | X “For You” as a technical flow, not a clone of the chrome. [repo](https://github.com/p10ns11y/v0-live-feed-app) |
| **[selfie sign-in](https://v0-selfie-sign-in-process.vercel.app)** | Enroll → train → login with a face. XState + Rekognition. [repo](https://github.com/p10ns11y/selfie-sign-in-flow-using-v0-xAI) |

## Long arc

**Orchestrate under constraint.** When the calendar slips, **ship more than was asked** — not a thin late apology.

2015 phones: **orchestrator · profiler · predictor · policy · selective telemetry · escalate-on-threshold**. 2026 agents: the **same components** — KDIs instead of KEIs, local model then cloud, memory writes treated as energy. Not an analogy. [Read /focus](https://peramanathan-sathyamoorthy-cv.vercel.app/focus) and the diagrams.

**Bet:** harnesses compound; providers cheapen tokens. I **tweaked** Grok Build locally and measured **small token/$ wins**. Full quality / perf eval is **paused** — it would eat the token limit I have. Fleet learning is the provider’s job. Notes: [intelli-arch-designs](https://github.com/p10ns11y/grok-build/tree/local/intelli-arch-designs).

<details>
<summary>Thesis & papers · 2015–2017</summary>

Primary sources first; casual notes last.

| Artifact | |
| --- | --- |
| **Thesis PDF** (hosted) | [Full text](https://peramanathan-sathyamoorthy-cv.vercel.app/pdfs/master-thesis.pdf) — *Enabling Energy-Efficient Data Communication with Participatory Sensing and Mobile Cloud* ([devprofile#32](https://github.com/p10ns11y/devprofile/pull/32)) |
| **Thesis · Uppsala DiVA** | [Record](http://uu.diva-portal.org/smash/record.jsf?pid=diva2:893525) · [FULLTEXT01.pdf](https://www.diva-portal.org/smash/get/diva2:897798/FULLTEXT01.pdf) — original university deposit (DiVA is still UU’s system; off-campus access is often blocked) |
| **IEEE** | [Energy Efficiency as an Orchestration Service for Mobile Internet of Things](https://ieeexplore.ieee.org/document/7396150) (CloudCom 2015) |
| **Wiley** | [Profiling Energy Efficiency and Data Communications for Mobile Internet of Things](https://onlinelibrary.wiley.com/doi/10.1155/2017/6562915) (2017) |
| **On X** | [Here is how I explained the long arc in an X post](https://x.com/Peramanathan/status/2035707867844809074) |
| **Write-up** | [devprofile /focus](https://peramanathan-sathyamoorthy-cv.vercel.app/focus) — 2016 orchestration → 2026 agents |

**Why host a copy:** DiVA full-text is often **blocked off-campus** (ISP / network policy). Links used to work; if the public path changes, I’ll update. Prefer the hosted PDF when DiVA fails.

</details>

<details>
<summary>Course craft · 2011</summary>

| Artifact | |
| --- | --- |
| **Report PDF** | [ML face-recognition report (2011)](https://peramanathan-sathyamoorthy-cv.vercel.app/pdfs/ml_face_recognition_report_2011.pdf) |
| **On X** | [Here is how I explained delayed work (and shipping more than asked) in an X post](https://x.com/Peramanathan/status/2064993180328796667) |

Uppsala Machine Learning course (CMU-style project lineage). The assignment ran late — instead of a survey-only late submit, it was extended into **real implementation and hands-on work** (pair assignment; finished solo when the partner had no time). Same muscle as today: delay is not an excuse to shrink the outcome.

</details>

## Writing & packages

I write when the stake is real — [long-form on X](https://x.com/Peramanathan/articles), not take-farming. [Rust from First Principles](https://github.com/thecuriousts/shelf-life/blob/writealive/coding/rust_from_first_principles_companion.pdf) is a companion, not a tutorial dump.

npm since **2017**: [`adaptate`](https://www.npmjs.com/package/adaptate) (2024) · [`@p10ns11y/hy`](https://www.npmjs.com/package/@p10ns11y/hy) (2021) · [`react-redux-quest`](https://www.npmjs.com/package/react-redux-quest) (2018) · [`babel-plugin-react-intl-messages-generator`](https://www.npmjs.com/package/babel-plugin-react-intl-messages-generator) (2017). [~p10ns11y](https://www.npmjs.com/~p10ns11y)

## More

<details>
<summary>Open source — landed in other people’s trees</summary>

- **Zod** nullish chaining — [PR #1702](https://github.com/colinhacks/zod/pull/1702) (2022)
- **react-intl** — [babel-plugin-react-intl-messages-generator](https://www.npmjs.com/package/babel-plugin-react-intl-messages-generator) (2017)
- **Kent C. Dodds** — [bookshelf #116](https://github.com/kentcdodds/bookshelf/pull/116) · [#184](https://github.com/kentcdodds/bookshelf/pull/184) · [testing-react-apps #39](https://github.com/kentcdodds/testing-react-apps/pull/39) · [#42](https://github.com/kentcdodds/testing-react-apps/pull/42)
- **React Boilerplate** — [PR #1355](https://github.com/react-boilerplate/react-boilerplate/pull/1355) (merged **2016**) · [#1364](https://github.com/react-boilerplate/react-boilerplate/pull/1364) · [#1167](https://github.com/react-boilerplate/react-boilerplate/pull/1167)

</details>

<details>
<summary>Connect</summary>

[@peramanathan](https://x.com/peramanathan) · [Articles](https://x.com/Peramanathan/articles) · [CV](https://peramanathan-sathyamoorthy-cv.vercel.app/) · [sathyam.peram@gmail.com](mailto:sathyam.peram@gmail.com)

</details>

<details>
<summary>Archive — I was already public before it was a brand</summary>

Uppsala years: room to wander. Pro years: low time budget, honest stubs — not a victory lap.

<details>
<summary>Surfaces · samples · stubs</summary>

| Surface | Season | What it was |
| --- | --- | --- |
| **[சிரவை பெரமு](https://peramuwin.blogspot.com/)** | Uppsala · ~2012–2021 | Tamil poetry & language craft |
| **[Prem Sathya’s Tea Stall](https://peramanathan.blogspot.com/)** | Uppsala · 2011–2013 | English essays — algorithms, teaching, ergonomics |
| **[On The Way](https://prem-ontheway.blogspot.com/)** | Uppsala · 2011 | Photo stops — Sweden & Tamil Nadu |
| **[peramsathyam.fly.dev](https://peramsathyam.fly.dev/)** | Pro life · low bandwidth | Personal site — craft + Tamil poems |
| **[kingsparrow.space](https://kingsparrow.space/)** | Pro life · low bandwidth | Sparse tech notes — domain may be reused later |

**[சிரவை பெரமு](https://peramuwin.blogspot.com/)** — [அகலா விளக்கு](https://peramuwin.blogspot.com/2021/04/blog-post_4.html) · [அவனும் அவளும்](https://peramuwin.blogspot.com/2021/04/blog-post.html) · [அடடே அன்பு மழை](https://peramuwin.blogspot.com/2021/03/blog-post_5.html) · [பணியிடை பனிநடை](https://peramuwin.blogspot.com/2021/02/blog-post.html)

**[Tea Stall](https://peramanathan.blogspot.com/)** — [Fourier as warrior](https://peramanathan.blogspot.com/2012/11/a-warrior-to-fourier-series.html) · [Vedic binary mult](https://peramanathan.blogspot.com/2012/03/binary-multiplication-can-we-do-it.html) · [constraint programming](https://peramanathan.blogspot.com/2011/09/problem-from-real-world.html) · [ergonomics / RSI](https://peramanathan.blogspot.com/2011/05/ergonomics-and-repetitive-strain.html)

**[On The Way](https://prem-ontheway.blogspot.com/)** — [Autumn in Uppsala](https://prem-ontheway.blogspot.com/2011/06/autumn-in-uppsala.html) · [Sunnersta Lake](https://prem-ontheway.blogspot.com/2011/05/sunnersta-lake.html) · [Mannargudi Temple](https://prem-ontheway.blogspot.com/2011/05/mannargudi-temple.html)

**Pro-life stubs** — [peramsathyam.fly.dev](https://peramsathyam.fly.dev/) · [kingsparrow.space](https://kingsparrow.space/) (may reuse domain later)

</details>

</details>

---

<div align="center">

*“He doesn’t need to predict the future. He’s been quietly preparing for it since 2016.”*  
[Grok · April 2026](GROK_TESTIMONIAL.md)

<br />

<sub>If this still looks like everyone else — you skimmed.</sub>

</div>
