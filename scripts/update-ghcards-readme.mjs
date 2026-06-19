#!/usr/bin/env node
/**
 * Refresh ghcard README embed blocks from the live CV API.
 * Used by .github/workflows/update-ghcards-readme.yml
 */
import { readFileSync, writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const __dirname = dirname(fileURLToPath(import.meta.url));
const README_PATH = join(__dirname, "..", "README.md");

const BASE_URL =
  process.env.GHCARDS_BASE_URL ?? "https://peramanathan-sathyamoorthy-cv.vercel.app";
const USERNAME = process.env.GHCARDS_USERNAME ?? "p10ns11y";
const CACHE_BUSTER = process.env.GHCARDS_CACHE_BUSTER ?? String(Date.now());

const SECTIONS = [
  { marker: "recent-pushed", card: "recent-pushed", limit: 4 },
  { marker: "recent-prs", card: "recent-prs", limit: 5 },
];

function escapeRegExp(value) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

async function fetchSectionHtml(card, limit) {
  const url = new URL("/api/ghcards/readme-html", BASE_URL);
  url.searchParams.set("card", card);
  url.searchParams.set("username", USERNAME);
  url.searchParams.set("limit", String(limit));
  url.searchParams.set("base", BASE_URL);
  url.searchParams.set("v", CACHE_BUSTER);

  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`readme-html failed for ${card}: ${response.status} ${response.statusText}`);
  }
  return response.text();
}

function replaceBetweenMarkers(readme, marker, html) {
  const start = `<!-- ghcards:${marker}:start -->`;
  const end = `<!-- ghcards:${marker}:end -->`;
  const pattern = new RegExp(`${escapeRegExp(start)}[\\s\\S]*?${escapeRegExp(end)}`);
  if (!pattern.test(readme)) {
    throw new Error(`Missing README markers: ${start} … ${end}`);
  }
  return readme.replace(pattern, `${start}\n${html.trim()}\n${end}`);
}

async function main() {
  let readme = readFileSync(README_PATH, "utf8");

  for (const section of SECTIONS) {
    const html = await fetchSectionHtml(section.card, section.limit);
    readme = replaceBetweenMarkers(readme, section.marker, html);
  }

  writeFileSync(README_PATH, readme);
  console.log(`Updated ghcard sections in ${README_PATH} (v=${CACHE_BUSTER})`);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
