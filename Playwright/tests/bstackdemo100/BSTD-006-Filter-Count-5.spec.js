// @ts-check
const { test, expect } = require('@playwright/test');

test('Select Samsung using xpath selector, favourite 2nd and 5th items, check count in favourites', async ({ page }) => {
  await page.goto('https://bstackdemo.com/');
  await page.locator("#signin").click();
  await page.locator("#react-select-2-input").type("demouser");
  await page.keyboard.press('Enter');
  await page.locator("#react-select-3-input").type("testingisfun99");
  await page.keyboard.press('Enter');
  await page.locator("#login-btn").click();
  await expect(page.locator("span.username")).toHaveText("demouser");
  await expect(page.url()).toContain("signin=true");
  await page.getByText("Samsung").click();
  await expect(page.locator(".shelf-item")).toHaveCount(7);
  await page.locator(".shelf-item").nth(3).locator("svg").click();
  await page.locator(".shelf-item").nth(6).locator("svg").click();
  await page.locator("#favourites").click();
  await expect(page.locator(".shelf-item")).toHaveCount(2);
});
