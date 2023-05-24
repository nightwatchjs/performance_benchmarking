// @ts-check
const { test, expect } = require('@playwright/test');

test('Assert if title matches', async ({ page }) => {
  await page.goto('https://bstackdemo.com/');

   // Expect a title "to match" the string.
   await expect(page).toHaveTitle("StackDemo");

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Stack/);
});
