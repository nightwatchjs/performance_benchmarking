// @ts-check
const { test, expect } = require('@playwright/test');

test('Select different vendors and verify products', async ({ page }) => {
  await page.goto('https://bstackdemo.com/');
  await page.getByText("Apple").click();
  const appleshelfitems =  page.locator(".shelf-item");
  for (let i = 0; i < 9; i++) {
    await expect(appleshelfitems.nth(i)).toContainText("iPhone");
  }
  await expect(page.locator(".shelf-item")).toHaveCount(9);

  await page.getByText("Apple").click();
  await page.getByText("Samsung").click();

  const samsungshelfitems =  page.locator(".shelf-item");
  for (let i = 0; i < 7; i++) {
    await expect(samsungshelfitems.nth(i)).toContainText("Galaxy");
  }
  await expect(page.locator(".shelf-item")).toHaveCount(7);

  await page.getByText("Samsung").click();
  await page.getByText("Google").click();

  const googleshelfitems =  page.locator(".shelf-item");
  for (let i = 0; i < 3; i++) {
    await expect(googleshelfitems.nth(i)).toContainText("Pixel");
  }
  await expect(page.locator(".shelf-item")).toHaveCount(3);

  await page.getByText("Google").click();
  await page.getByText("OnePlus").click();
  const oneplusshelfitems =  page.locator(".shelf-item");
  for (let i = 0; i < 6; i++) {
    await expect(oneplusshelfitems.nth(i)).toContainText("One Plus");
  }
  await expect(page.locator(".shelf-item")).toHaveCount(6);
});

