// @ts-check
const { test, expect } = require('@playwright/test');

test('Sort high to low & low to high and validate products', async ({ page }) => {
  await page.goto('https://bstackdemo.com/');
  await page.locator("select").selectOption({ value: 'highestprice' });
  await expect(page.locator(".shelf-item").nth(0).locator(".shelf-item__title")).toHaveText("Galaxy S20 Ultra");
  await expect(page.locator(".shelf-item").nth(0).locator(".shelf-item__price > .val > b")).toHaveText("1399");
  await page.locator("select").selectOption({ value: 'lowestprice' });
  await expect(page.locator(".shelf-item").nth(0).locator(".shelf-item__title")).toHaveText("Pixel 2");
  await expect(page.locator(".shelf-item").nth(0).locator(".shelf-item__price > .val > b")).toHaveText("399");
});
