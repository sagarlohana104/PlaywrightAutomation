const { test, expect } = require('@playwright/test');

test('Login', async ({ page }) => {
  await page.goto('https://www.demoblaze.com/');

  await page.click('id=login2');

  // Enter credentials (CSS selectors)
  await page.fill("#loginusername", 'kashif23');
  await page.fill("input[id='loginpassword']", 'Connect!23');

  // Login button
  await page.click("//button[normalize-space()='Log in']");


});
