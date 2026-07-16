#!/usr/bin/env node
/**
 * Structural checks for the GitHub profile README.
 * Asserts: no ghcards embed/go desync surface; featured section has plain github.com links.
 *
 * Usage: node scripts/check-profile-readme.mjs
 * Exit 0 on pass; non-zero on failure.
 */
import { readFileSync, existsSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, "..");
const README_PATH = join(ROOT, "README.md");
const WORKFLOW_PATH = join(ROOT, ".github", "workflows", "update-ghcards-readme.yml");
const OLD_SCRIPT = join(ROOT, "scripts", "update-ghcards-readme.mjs");

const failures = [];
const notes = [];

function fail(msg) {
  failures.push(msg);
}

function ok(msg) {
  notes.push(`OK: ${msg}`);
}

const readme = readFileSync(README_PATH, "utf8");

// (a) No ghcards embed/go (failure mode: SVG row vs click target desync)
const banned = [
  "api/ghcards/embed",
  "api/ghcards/go",
  "ghcards/embed",
  "ghcards/go",
  "ghcards:recent-pushed",
  "ghcards:recent-prs",
];
let bannedHit = false;
for (const needle of banned) {
  if (readme.includes(needle)) {
    bannedHit = true;
    fail(`README still contains banned ghcards surface: ${needle}`);
  }
}
if (!bannedHit) {
  ok("no ghcards/embed, ghcards/go, or ghcards marker blocks in README.md");
}

// (b) Featured / recent section with plain https://github.com/p10ns11y/... links
const mdLinkRe = /\[([^\]]+)\]\((https:\/\/github\.com\/[^)\s]+)\)/g;
const featuredLinks = [];
let m;
while ((m = mdLinkRe.exec(readme)) !== null) {
  const label = m[1];
  const href = m[2];
  // strip trailing punctuation from URL if any
  const url = href.replace(/[.,;]+$/, "");
  if (url.includes("github.com/p10ns11y/") && !url.includes("/pull/") && !url.includes("/issues/")) {
    // link text should relate to repo path (avoid opaque labels for featured)
    const pathMatch = url.match(/github\.com\/(p10ns11y\/[A-Za-z0-9._-]+)/);
    if (pathMatch) {
      featuredLinks.push({ label, href: url, path: pathMatch[1] });
    }
  }
}

// Prefer links under Featured section if present
const featuredSection = readme.match(/##\s+(Featured|Recently shipped|Recent)\b[\s\S]*?(?=\n##\s|\n<details|\n---\s*$|$)/i);
const sectionText = featuredSection ? featuredSection[0] : readme;
const sectionLinks = [];
const secRe = /\[([^\]]+)\]\((https:\/\/github\.com\/p10ns11y\/[A-Za-z0-9._-]+)\)/g;
while ((m = secRe.exec(sectionText)) !== null) {
  sectionLinks.push({ label: m[1], href: m[2] });
}

if (sectionLinks.length < 1) {
  fail("expected at least one plain markdown link to https://github.com/p10ns11y/<repo> in Featured/recent section");
} else {
  ok(`found ${sectionLinks.length} plain p10ns11y repo link(s) in featured/recent section`);
}

for (const { label, href } of sectionLinks) {
  if (!href.startsWith("https://github.com/")) {
    fail(`href is not full https github URL: ${href}`);
    continue;
  }
  // opaque redirectors banned
  if (/ghcards|redirect|go\?/.test(href)) {
    fail(`opaque redirector href: ${href}`);
  }
  const repo = href.replace(/^https:\/\/github\.com\//, "").replace(/\/$/, "");
  // label should match repo name (bold markdown inner text may be just the name)
  const plainLabel = label.replace(/\*\*/g, "").trim();
  const repoName = repo.split("/")[1] || "";
  if (repoName && plainLabel !== repoName && !plainLabel.includes(repoName)) {
    fail(`link label "${plainLabel}" does not match path ${repo}`);
  } else {
    ok(`link ${plainLabel} → ${href}`);
  }
}

// (c) Workflow / old refresh script must not re-inject embeds
if (existsSync(WORKFLOW_PATH)) {
  const wf = readFileSync(WORKFLOW_PATH, "utf8");
  const hasSchedule = /^\s*schedule\s*:/m.test(wf) || /cron\s*:/.test(wf);
  const runsOldScript =
    /update-ghcards-readme\.mjs/.test(wf) ||
    /ghcards.*embed/.test(wf) ||
    /refresh ghcard/i.test(wf);
  if (hasSchedule && runsOldScript) {
    fail("workflow still schedules refresh that rewrites ghcards embeds into README");
  } else if (runsOldScript) {
    fail("workflow still invokes ghcards README rewrite (even without schedule)");
  } else {
    ok("workflow file exists but does not run embed refresh");
  }
} else {
  ok("update-ghcards-readme.yml deleted (cannot auto re-inject embeds)");
}

if (existsSync(OLD_SCRIPT)) {
  const script = readFileSync(OLD_SCRIPT, "utf8");
  if (
    script.includes("api/ghcards") ||
    script.includes("ghcards:recent") ||
    script.includes("readme-html")
  ) {
    fail("scripts/update-ghcards-readme.mjs still writes ghcards embed HTML — remove or rewrite");
  }
}

// Summary
for (const n of notes) console.log(n);
if (failures.length) {
  console.error("\nFAILURES:");
  for (const f of failures) console.error(`- ${f}`);
  process.exit(1);
}
console.log("\nprofile README structural checks passed");
process.exit(0);
