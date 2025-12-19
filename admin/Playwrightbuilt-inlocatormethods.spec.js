const { test, expect } = require('@playwright/test');

test('multilocator', async ({ page }) => {

    await page.goto(
      "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login",
      { timeout: 5000 }
    );

    const logo = page.getByAltText("company-branding");
    await expect(logo).toBeVisible({ timeout: 10000 });

    await page.getByPlaceholder('Username').fill('Admin', { timeout: 5000 });
    await page.getByPlaceholder('Password').fill('admin123', { timeout: 5000 });

    await page.getByRole('button', { type: 'submit' }).click({ timeout: 7000 });

    // ✅ Correct dashboard assertion
    await expect(page.getByRole('heading', { name: 'Dashboard' })).toBeVisible({ timeout: 10000 });

});
