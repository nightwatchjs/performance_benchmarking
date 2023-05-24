// @ts-check
const { test, expect } = require('@playwright/test');

test('Visit bstackdemo, set geolocation to India and view offers', async ({ page, context }) => {
  context.setGeolocation({ longitude: 72.877700, latitude: 19.076000 });
  await page.goto('https://bstackdemo.com/');
  await page.locator("#signin").click();
  await page.locator("#react-select-2-input").type("demouser");
  await page.keyboard.press('Enter');
  await page.locator("#react-select-3-input").type("testingisfun99");
  await page.keyboard.press('Enter');
  await page.locator("#login-btn").click();
  await page.locator("#offers").click();
  await expect(page.locator(".offer")).toHaveCount(3);
});
