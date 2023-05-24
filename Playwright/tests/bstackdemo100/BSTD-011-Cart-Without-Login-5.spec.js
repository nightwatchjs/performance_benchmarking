// @ts-check
const { test, expect } = require('@playwright/test');

test('Visit bstackdemo, add to cart, click checkout and validate if sign in page is visible', async ({ page, context }) => {
  context.setGeolocation({ longitude: 77.036500, latitude: 38.897700 });
  await page.goto('https://bstackdemo.com/');
  await expect(page.locator(".float-cart__content")).not.toBeVisible;
  await page.locator(".shelf-item").nth(3).locator(".shelf-item__buy-btn").click();
  await expect(page.locator(".float-cart__content")).toBeVisible;
  await page.locator(".buy-btn").click();
  await expect(page.locator("#login-btn")).toBeVisible;
});
