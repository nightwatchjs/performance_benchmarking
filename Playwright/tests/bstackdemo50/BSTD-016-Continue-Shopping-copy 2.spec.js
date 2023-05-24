// @ts-check
const { test, expect } = require('@playwright/test');

test('Visit bstackdemo,sign in, add to cart, click checkout, fill form, submit and continue shopping', async ({ page, context }) => {
  context.setGeolocation({ longitude: 77.036500, latitude: 38.897700 });
  await page.goto('https://bstackdemo.com/');
  await page.locator("#signin").click();
  await page.locator("#react-select-2-input").type("demouser");
  await page.keyboard.press('Enter');
  await page.locator("#react-select-3-input").type("testingisfun99");
  await page.keyboard.press('Enter');
  await page.locator("#login-btn").click();
  await expect(page.locator(".float-cart__content")).not.toBeVisible;
  await page.locator(".shelf-item").nth(3).locator(".shelf-item__buy-btn").click();
  await expect(page.locator(".float-cart__content")).toBeVisible;
  await page.locator(".buy-btn").click();
  await expect(page.locator(".checkoutHeader-link")).toBeVisible;
  await page.locator("#firstNameInput").type("John");
  await page.locator("#lastNameInput").type("Doe");
  await page.locator("#addressLine1Input").type("North Pole");
  await page.locator("#provinceInput").type("Alaska");
  await page.locator("#postCodeInput").type("000000");
  await page.locator("#checkout-shipping-continue").click();
  await expect(page.getByText("Your Order has been successfully placed.")).not.toBeVisible();
  await page.locator(".optimizedCheckout-buttonSecondary").click();
  await expect(page.locator("span.username")).toHaveText("demouser")
  await expect(page.url()).toEqual("https://bstackdemo.com/");
});
