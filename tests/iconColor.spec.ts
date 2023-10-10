import { test, expect } from '@playwright/test';
import { color } from 'pengrape';
import { LoginPage } from '../pages/login';
import { iconColorPage } from '../pages/iconColor';

test('icon color', async ({ page }) => {

    const randomColor = color({ format: 'hex' });
    const login = new LoginPage(page);
    const iconColor = new iconColorPage(page);

    await login.gotoLoginPage();
    await login.login('cglrcndr@gmail.com','1Q2w3e4r5t6y.');
    await expect(page.locator('div[class="flex items-center"]')).toBeVisible(); //it fails when I call it from POM with an object
    await page.locator(iconColor.warehouseManager).click();
    await page.locator(iconColor.pagesSection).click();
    await page.locator(iconColor.adminInventory).click();
    await page.locator('div [data-cy="Inventory"]').click();//it fails when I call it from POM with an object
    await page.locator('div [data-cy="View Warehouse Inventory Details"]').click();//it fails when I call it from POM with an object

});