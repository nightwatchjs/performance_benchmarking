// @ts-check
const { test, expect } = require('@playwright/test');

test('Select Samsung using xpath selector, favourite 2nd and 5th items, check count in favourites', async ({ page, context }) => {
  context.setGeolocation({ longitude: 77.036500, latitude: 38.897700 });
  await page.goto('https://bstackdemo.com/');
  await page.locator("#signin").click();
  await page.locator("#react-select-2-input").type("demouser");
  await page.keyboard.press('Enter');
  await page.locator("#react-select-3-input").type("testingisfun99");
  await page.keyboard.press('Enter');
  await page.locator("#login-btn").click();
  await page.locator("#offers").click();
  await expect(page.getByText("Sorry we do not have any promotional offers in your city.")).toBeVisible();
});
