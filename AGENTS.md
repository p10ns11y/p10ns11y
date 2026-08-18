# Profile repo — agent guide

GitHub profile README for [p10ns11y](https://github.com/p10ns11y). One file ships: `README.md`.

## Load order

Before editing `README.md`, read in this order:

1. **[PRODUCT.md](PRODUCT.md)** — who the reader is, what success means, hard constraints
2. **[TASTE.md](TASTE.md)** — voice, axioms, settled facts, anti-goals
3. **[DESIGN.md](DESIGN.md)** — markdown structure, components, section ladder
4. **[.impeccable/surfaces/readme-md.md](.impeccable/surfaces/readme-md.md)** — surface brief (visitor mode, hire-loop outcome)
5. **`/p10ns11y-profile` skill** — section-scoped edit procedure and token budget

Do **not** rewrite the whole file for a one-line taste fix. Read only the section you will change (±15 lines).

## When to use what

| Task | Start here |
|------|------------|
| One section tweak, new product line, shield fix | `TASTE.md` + `/p10ns11y-profile` |
| Resequence, new section, hire-loop change | Surface brief + `DESIGN.md` |
| Product truth (audience, purpose, constraints) | `PRODUCT.md` |
| Full visual/structural rethink | `/impeccable shape README.md` then implement |

## Edit procedure

1. Read the target section only.
2. If adding a product claim: read **that repo's** README — do not invent uniqueness.
3. Apply `TASTE.md` axioms and `DESIGN.md` section ladder.
4. One focused edit (or a few `search_replace` calls). Preserve all 8 shields and nav anchors unless the brief explicitly changes them.
5. Run `node scripts/check-profile-readme.mjs`.
6. Commit on the current profile branch. Message should name the taste rule applied.

## Out of scope

- GitHub bio / `hireable` flag (needs `gh auth refresh -s user`)
- Live employer names, apply state, interview dates (process-safety)
- `private/` finance ops

## Verification

```bash
node scripts/check-profile-readme.mjs
```

Structural checks: no ghcards embed/go desync; Featured has plain `github.com/p10ns11y/...` links with matching labels.

## Related files

| File | Role |
|------|------|
| `README.md` | Live profile (only rendered file) |
| `PRODUCT.md` | Durable product truth |
| `TASTE.md` | Voice + axioms + settled facts |
| `DESIGN.md` | Markdown craft + section architecture |
| `GROK_TESTIMONIAL.md` | Footer quote source |
| `.impeccable/surfaces/readme-md.md` | Surface strategy brief |
