// Full-page screenshots for comparing against handoff/design/screenshots.
// Usage: node scripts/screenshots.mjs [baseUrl] [outDir] [page ...]
import { mkdir } from "node:fs/promises";
import { chromium } from "@playwright/test";

const PAGES = {
  index: "/",
  contact: "/contact",
  "corporate-finance-strategy": "/corporate-finance-strategy",
  "private-exhibitions": "/private-exhibitions",
  "private-art": "/private-art",
  "strategic-engagements": "/strategic-engagements",
  about: "/about",
};

const [baseUrl = "http://localhost:3000", outDir = "screenshots", ...only] = process.argv.slice(2);
const names = only.length ? only : Object.keys(PAGES);

await mkdir(outDir, { recursive: true });
const browser = await chromium.launch();

for (const [label, width] of [
  ["desktop", 1440],
  ["mobile", 390],
]) {
  // Reduced motion so scroll reveals do not hide content that never scrolls into view.
  const context = await browser.newContext({
    viewport: { width, height: 900 },
    deviceScaleFactor: label === "mobile" ? 2 : 1,
    reducedMotion: "reduce",
  });
  const page = await context.newPage();
  page.on("console", (msg) => {
    if (msg.type() === "error") console.error(`  console error: ${msg.text().slice(0, 300)}`);
  });
  for (const name of names) {
    await page.goto(baseUrl + PAGES[name], { waitUntil: "networkidle" });
    await page.evaluate(() => document.fonts.ready);
    // Scroll through the page so lazily loaded images are fetched before the capture.
    await page.evaluate(async () => {
      for (let y = 0; y < document.body.scrollHeight; y += 600) {
        window.scrollTo(0, y);
        await new Promise((resolve) => setTimeout(resolve, 60));
      }
      window.scrollTo(0, 0);
    });
    await page.waitForLoadState("networkidle");
    await page.screenshot({ path: `${outDir}/${name}-${label}.png`, fullPage: true });
    console.log(`${name}-${label}.png`);
  }
  await context.close();
}

await browser.close();
