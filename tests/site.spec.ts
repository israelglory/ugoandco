import AxeBuilder from "@axe-core/playwright";
import { expect, test, type Page } from "@playwright/test";

const PAGES = [
  "/",
  "/corporate-finance-strategy",
  "/private-exhibitions",
  "/private-art",
  "/strategic-engagements",
  "/about",
  "/contact",
];

const MOBILE = { width: 390, height: 844 };
const EM_DASH = String.fromCharCode(0x2014);

async function open(page: Page, path: string) {
  await page.goto(path, { waitUntil: "networkidle" });
  await page.evaluate(() => document.fonts.ready);
}

test.describe("every page", () => {
  for (const path of PAGES) {
    test(`${path}: axe has no serious or critical violations (desktop and mobile)`, async ({ page }) => {
      for (const viewport of [{ width: 1440, height: 900 }, MOBILE]) {
        await page.setViewportSize(viewport);
        await open(page, path);
        const { violations } = await new AxeBuilder({ page })
          .withTags(["wcag2a", "wcag2aa", "wcag21aa", "wcag22aa"])
          .analyze();
        const blocking = violations.filter((v) => v.impact === "serious" || v.impact === "critical");
        expect(blocking, JSON.stringify(blocking, null, 2)).toEqual([]);
      }
    });

    test(`${path}: no horizontal scroll at 320px`, async ({ page }) => {
      await page.setViewportSize({ width: 320, height: 700 });
      await open(page, path);
      const overflow = await page.evaluate(() => document.documentElement.scrollWidth - window.innerWidth);
      expect(overflow).toBeLessThanOrEqual(0);
    });

    test(`${path}: one h1, a canonical URL and an active nav link`, async ({ page }) => {
      await page.setViewportSize({ width: 1440, height: 900 });
      await open(page, path);
      await expect(page.locator("h1")).toHaveCount(1);
      await expect(page.locator('link[rel="canonical"]')).toHaveCount(1);
      await expect(page.locator('meta[property="og:image"]')).toHaveCount(1);
      const current = page.getByRole("navigation", { name: "Main" }).locator('[aria-current="page"]');
      await expect(current).toHaveCount(1);
      await expect(current).toHaveAttribute("href", path);
    });
  }
});

test("no em dashes in rendered text", async ({ page }) => {
  for (const path of PAGES) {
    await open(page, path);
    const html = await page.content();
    expect(html.includes(EM_DASH), path).toBe(false);
  }
});

test("header shrinks from 92px to 76px after scrolling", async ({ page }) => {
  await page.setViewportSize({ width: 1440, height: 900 });
  await open(page, "/");
  const bar = page.locator("header > div").first();
  await expect.poll(async () => (await bar.boundingBox())?.height).toBe(92);
  await page.mouse.wheel(0, 400);
  await expect.poll(async () => Math.round((await bar.boundingBox())?.height ?? 0)).toBe(76);
});

test("Explore Our Work scrolls to What We Do", async ({ page }) => {
  await page.setViewportSize({ width: 1440, height: 900 });
  await open(page, "/");
  await page.getByRole("link", { name: "Explore Our Work" }).click();
  await expect(page).toHaveURL(/#work$/);
  await expect(page.locator("#work")).toBeInViewport();
});

test.describe("mobile menu", () => {
  test.use({ viewport: MOBILE });

  test("opens, traps focus, locks scroll, closes on Escape and on navigation", async ({ page }) => {
    await open(page, "/");
    const toggle = page.getByRole("button", { name: "Open menu" });
    await expect(toggle).toHaveAttribute("aria-expanded", "false");
    await expect(page.getByRole("navigation", { name: "Main" })).toBeHidden();

    await toggle.click();
    const close = page.getByRole("button", { name: "Close menu" });
    await expect(close).toHaveAttribute("aria-expanded", "true");
    const menu = page.getByRole("navigation", { name: "Mobile" });
    await expect(menu).toBeVisible();
    expect(await page.evaluate(() => getComputedStyle(document.documentElement).overflow)).toBe("hidden");

    // Focus trap: Tab past the last link wraps to the toggle; Shift+Tab wraps back.
    await menu.getByRole("link", { name: "Contact" }).focus();
    await page.keyboard.press("Tab");
    await expect(close).toBeFocused();
    await page.keyboard.press("Shift+Tab");
    await expect(menu.getByRole("link", { name: "Contact" })).toBeFocused();

    await page.keyboard.press("Escape");
    await expect(menu).toBeHidden();
    await expect(page.getByRole("button", { name: "Open menu" })).toBeFocused();
    expect(await page.evaluate(() => getComputedStyle(document.documentElement).overflow)).not.toBe("hidden");

    await page.getByRole("button", { name: "Open menu" }).click();
    await menu.getByRole("link", { name: "About" }).click();
    await expect(page).toHaveURL(/\/about$/);
    await expect(menu).toBeHidden();
    await expect(page.getByRole("button", { name: "Open menu" })).toHaveAttribute("aria-expanded", "false");
  });
});

test.describe("contact form", () => {
  test.beforeEach(async ({ page }) => {
    await page.setViewportSize({ width: 1440, height: 900 });
    await open(page, "/contact");
  });

  test("shows inline errors and focuses the first invalid field", async ({ page }) => {
    await page.getByRole("button", { name: "Submit" }).click();
    const name = page.getByLabel("Name");
    await expect(name).toBeFocused();
    await expect(name).toHaveAttribute("aria-invalid", "true");
    await expect(name).toHaveAccessibleDescription("Please enter your name.");
    await expect(page.getByLabel("Email")).toHaveAccessibleDescription("Please enter a valid email address.");
    await expect(page.getByRole("group", { name: "Nature of Inquiry" })).toHaveAccessibleDescription(
      "Please select at least one option.",
    );
    await expect(page.getByLabel("Tell us briefly about the opportunity")).toHaveAccessibleDescription(
      "Please write at least 20 characters.",
    );

    // Errors clear as the visitor fixes them.
    await name.fill("Ada Lovelace");
    await expect(name).not.toHaveAttribute("aria-invalid", "true");
  });

  test("pills toggle as checkboxes", async ({ page }) => {
    const pill = page.getByRole("checkbox", { name: "Private Art", exact: true });
    await expect(pill).not.toBeChecked();
    await pills(page).getByText("Private Art", { exact: true }).click();
    await expect(pill).toBeChecked();
    await pills(page).getByText("Private Art", { exact: true }).click();
    await expect(pill).not.toBeChecked();
  });

  const pills = (page: Page) => page.getByRole("group", { name: "Nature of Inquiry" });

  async function fillValid(page: Page) {
    await page.getByLabel("Name").fill("Ada Lovelace");
    await page.getByLabel("Company / Organization").fill("Analytical Engines Ltd");
    await page.getByLabel("Email").fill("ada@example.com");
    await page.getByLabel(/Phone/).fill("+1 555 0100");
    await pills(page).getByText("Private Exhibition", { exact: true }).click();
    await pills(page).getByText("U.S.–Africa Opportunity", { exact: true }).click();
    await page.getByLabel("Tell us briefly about the opportunity").fill("We would like to host a private exhibition.");
  }

  test("a delivery failure shows the error banner and keeps the visitor's input", async ({ page }) => {
    // The test server has no Resend credentials, so production delivery fails.
    await fillValid(page);
    await page.getByRole("button", { name: "Submit" }).click();
    await expect(page.getByRole("alert").filter({ hasText: "[ERROR MESSAGE]" })).toBeVisible();
    await expect(page.getByLabel("Name")).toHaveValue("Ada Lovelace");
    await expect(page.getByLabel("Tell us briefly about the opportunity")).toHaveValue(
      "We would like to host a private exhibition.",
    );
    await expect(page.getByRole("checkbox", { name: "Private Exhibition", exact: true })).toBeChecked();
  });

  test("the honeypot short-circuits to the success state", async ({ page }) => {
    await fillValid(page);
    await page.locator('input[name="website"]').fill("spam", { force: true });
    await page.getByRole("button", { name: "Submit" }).click();
    const status = page.getByRole("status");
    await expect(status).toContainText("[SUCCESS MESSAGE]");
    await expect(status).toBeFocused();
    await expect(page.locator("form")).toHaveCount(0);
  });
});
