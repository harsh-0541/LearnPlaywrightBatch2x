import { test, Browser, BrowserContext, Page } from "@playwright/test";

test("Multi-context: TTA Cart + TTA Bank", async ({ browser }: { browser: Browser }) => {

    // ── Context 1 – TTA Cart ───────────────────────────────────────────────
    const context1: BrowserContext = await browser.newContext();
    const page1: Page = await context1.newPage();
    await page1.goto("https://app.thetestingacademy.com/playwright/ttacart/");
    console.log("Context 1 title:", await page1.title());

    // TODO: add Context-1 interactions here
    // e.g. await page1.click('...');


    // ── Context 2 – TTA Bank ───────────────────────────────────────────────
    const context2: BrowserContext = await browser.newContext();
    const page2: Page = await context2.newPage();
    await page2.goto("https://tta-bank-digital-973242068062.us-west1.run.app/");
    console.log("Context 2 title:", await page2.title());

    // TODO: add Context-2 interactions here
    // e.g. await page2.click('...');


    // ── Cross-context verification (optional) ─────────────────────────────
    // Both contexts are fully isolated: separate cookies, storage, sessions.
    // You can drive page1 and page2 independently and assert on both.


    // ── Cleanup ────────────────────────────────────────────────────────────
    await context1.close();
    await context2.close();
});