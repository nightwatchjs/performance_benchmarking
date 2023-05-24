// @ts-check
const { test, expect } = require('@playwright/test');

test('Visit bstackdemo,select 2nd and 5th item and validate order total', async ({ page, context }) => {
  context.setGeolocation({ longitude: 77.036500, latitude: 38.897700 });
  await page.goto('https://bstackdemo.com/');
  await page.locator("#signin").click();
  await page.locator("#react-select-2-input").type("demouser");
  await page.keyboard.press('Enter');
  await page.locator("#react-select-3-input").type("testingisfun99");
  await page.keyboard.press('Enter');
  await page.locator("#login-btn").click();
  await expect(page.locator(".float-cart__content")).not.toBeVisible;
  await page.locator(".shelf-item").nth(1).locator(".shelf-item__buy-btn").click();
  await page.locator(".shelf-item").nth(4).locator(".shelf-item__buy-btn").click();
  await expect(page.locator(".float-cart__content")).toBeVisible;
  await page.locator(".buy-btn").click();
  await expect(page.locator(".checkoutHeader-link")).toBeVisible;
  await expect(page.locator(".cart-priceItem-value > span")).toContainText("1298");
});
