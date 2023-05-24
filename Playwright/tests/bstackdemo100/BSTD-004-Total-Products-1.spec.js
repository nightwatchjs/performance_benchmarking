// @ts-check
const { test, expect } = require('@playwright/test');

test('Count number of all products in the store', async ({ page }) => {
  await page.goto('https://bstackdemo.com/');
  await expect(page.locator(".shelf-item")).toHaveCount(25);
});
