// @ts-check
const { test, expect } = require('@playwright/test');

test('Login, verify the username, logout & verify the URL', async ({ page }) => {
  await page.goto('https://bstackdemo.com/');
  await page.locator("#signin").click();
  await page.locator("#react-select-2-input").type("demouser");
  await page.keyboard.press('Enter');
  await page.locator("#react-select-3-input").type("testingisfun99");
  await page.keyboard.press('Enter');
  await page.locator("#login-btn").click();
  await expect(page.locator("span.username")).toHaveText("demouser");
  await expect(page.url()).toContain("signin=true");
  await page.locator("#logout").click();
  await expect(page.url()).toEqual("https://bstackdemo.com/");
});
