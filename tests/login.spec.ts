import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/login';

test('Log in to builder', async ({ page }) => {
    const login = new LoginPage(page);
    await login.gotoLoginPage();
    await login.login('cglrcndr@gmail.com','1Q2w3e4r5t6y.');
    await expect(page.locator('div[class="flex items-center"]')).toBeVisible(); //it fails when I call it from POM with an object
});