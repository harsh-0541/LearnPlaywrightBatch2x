import { test, expect } from '@playwright/test';

test.only('Validate the tiitle of page', async ({ page }) => {
    await page.goto("https://app.thetestingacademy.com/playwright/ttacart/");
    await expect(page).toHaveTitle("TTACart - Login");
    await page.waitForTimeout(5000);
})