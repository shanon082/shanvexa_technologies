import { test, expect } from "@playwright/test";

for (const width of [360, 375, 390, 768, 1024, 1440]) {
  test(`layout and navigation at ${width}px`, async ({ page }) => {
    await page.setViewportSize({ width, height: 900 });
    await page.goto("/");
    await expect(page.locator("h1")).toHaveCount(1);
    expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBe(true);
    for (const id of ["services", "work", "approach", "about", "contact"]) {
      await expect(page.locator(`#${id}`)).toBeVisible();
    }
    if (width <= 800) {
      const menu = page.locator(".menu-button");
      await menu.click();
      await expect(menu).toHaveAttribute("aria-expanded", "true");
      await page.keyboard.press("Escape");
      await expect(menu).toHaveAttribute("aria-expanded", "false");
    }
    await page.locator(".service-card").first().click();
    await expect(page.locator("#service")).toHaveValue("Website or web application");
    if (width === 360 || width === 1440) {
      await page.locator(".hero").screenshot({ path: `test-results/hero-${width}.png` });
      await page.locator("#contact").screenshot({ path: `test-results/contact-${width}.png` });
    }
    await page.screenshot({ path: `test-results/home-${width}.png`, fullPage: true });
  });
}

test("contact validation, draft and clipboard fallback without sending a message", async ({ page, context }) => {
  await context.addInitScript(() => {
    Object.defineProperty(navigator, "clipboard", { value: { writeText: () => Promise.reject(new Error("Denied for test")) } });
  });
  await page.goto("/");
  const form = page.locator("#enquiry-form");
  await form.getByRole("button", { name: "Prepare my enquiry" }).click();
  await expect(page.locator("#form-result")).toHaveCount(0);
  expect(await form.evaluate((el: HTMLFormElement) => el.checkValidity())).toBe(false);
  await form.locator('[name="name"]').fill("Test Visitor");
  await form.locator('[name="email"]').fill("invalid");
  expect(await form.locator('[name="email"]').evaluate((el: HTMLInputElement) => el.checkValidity())).toBe(false);
  await form.locator('[name="email"]').fill("test@example.com");
  await page.locator("#service").selectOption("Custom business system");
  await form.locator('[name="message"]').fill("                     ");
  await form.getByRole("button", { name: "Prepare my enquiry" }).click();
  await expect(page.locator("#form-error")).toContainText("at least 20 characters");
  await form.locator('[name="message"]').fill("We need a school records system for our administrators.");
  await form.locator('[name="timeline"]').fill("Next term");
  // Exercise the submit handler while preventing any external protocol navigation.
  await page.route("mailto:**", route => route.abort());
  await form.getByRole("button", { name: "Prepare my enquiry" }).click();
  await expect(page.locator("#form-result")).toContainText("Your enquiry is ready");
  await page.getByRole("button", { name: "Copy project brief" }).click();
  await expect(page.locator("#brief-fallback")).toHaveValue(/Service: Custom business system\nTimeline: Next term/);
  await form.locator('[name="timeline"]').fill("Flexible");
  await expect(page.locator("#form-result")).toHaveCount(0);
  await expect(page.getByRole("link", { name: "Chat on WhatsApp" })).toHaveAttribute("href", /^https:\/\/wa.me\/256771950092/);
});

test("project dialog, FAQ, section links and sharing metadata", async ({ page, request }) => {
  await page.goto("/");
  await page.getByRole("button", { name: "Explore the platform" }).click();
  const dialog = page.getByRole("dialog", { name: "Academic scheduling platform" });
  await expect(dialog).toBeVisible();
  await dialog.getByRole("link", { name: "Request a demonstration" }).click();
  await expect(dialog).not.toBeVisible();
  await expect(page.locator("#service")).toHaveValue("Academic scheduling demo");
  for (const [index, service] of ["Website or web application", "Custom business system", "Mobile application", "Integration, automation or support"].entries()) {
    await page.locator(".service-card").nth(index).click();
    await expect(page.locator("#service")).toHaveValue(service);
  }
  const summary = page.locator(".faq-list summary").first();
  await summary.click();
  await expect(summary.locator("..")).toHaveAttribute("open", "");
  expect(await page.locator('a[href^="#"]').evaluateAll(links => links.map(link => link.getAttribute("href")!).filter(href => href !== "#" && !document.getElementById(href.slice(1))))).toEqual([]);
  await expect(page.locator('link[rel="canonical"]')).toHaveAttribute("href", /^https:\/\/shanvexa-technologies\.vercel\.app\/?$/);
  await expect(page.locator('meta[property="og:image"]').first()).toHaveAttribute("content", /^https:\/\/shanvexa-technologies.vercel.app\/opengraph-image/);
  expect(JSON.parse(await page.locator('script[type="application/ld+json"]').textContent() || "{}").founder.name).toBe("Shanon Simon Lubega");
  for (const path of ["/robots.txt", "/sitemap.xml", "/opengraph-image"]) {
    const response = await request.get(path);
    expect(response.status()).toBe(200);
    if (path === "/opengraph-image") expect(response.headers()["content-type"]).toContain("image/png");
  }
});


test("keyboard entry, focus restoration and reduced motion", async ({ page }) => {
  await page.emulateMedia({ reducedMotion: "reduce" });
  await page.goto("/");
  await page.keyboard.press("Tab");
  await expect(page.getByRole("link", { name: "Skip to content" })).toBeFocused();
  expect(await page.evaluate(() => getComputedStyle(document.documentElement).scrollBehavior)).toBe("auto");
  const trigger = page.getByRole("button", { name: "Explore the platform" });
  await trigger.focus();
  await page.keyboard.press("Enter");
  await expect(page.getByRole("dialog", { name: "Academic scheduling platform" })).toBeVisible();
  await page.keyboard.press("Escape");
  await expect(trigger).toBeFocused();
});
