import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/login';
import { iconColorPage } from '../pages/iconColor';
import { filteringInventoryPage } from '../pages/filteringInventory';

test('filtering inventory', async ({ page }) => {

    const login = new LoginPage(page);
    const iconColor =new iconColorPage(page);
    const filteringInventory = new filteringInventoryPage(page);

    await login.gotoLoginPage();
    await login.login('cglrcndr@gmail.com','1Q2w3e4r5t6y.');
    await expect(page.locator('div[class="flex items-center"]')).toBeVisible(); //it fails when I call it from POM with an object
    await page.locator(iconColor.warehouseManager).click();
    await page.locator('a[data-cy="nav-records"]').click();
    await page.locator(filteringInventory.warehouseInventory).click();
    await page.locator(filteringInventory.addFiltersButton).click();
    await page.selectOption('select[data-cy="field-list-field"]','Needs Re-Order');
    await page.locator('button[data-cy="save-filters"]').click();
    await expect(page.locator('table[class="knTable is-fullwidth knTable--striped"]')).toBeVisible();
    await page.locator('button[data-cy="app-options-open"]').click();
    await page.locator('a[data-cy="app-option-go-to-live-app"]').click();
    await login.adminLogin(' admin@test.com','test');
    await page.locator('a[href="#inventory2"]').click();
    await page.locator('div[class="kn-filters-nav"]').click();
    await page.selectOption('select[class="field select"]','Needs Re-Order');
    await page.locator('#kn-submit-filters').click();
    const elements = await page.$$('td[data-field-key="field_142"]');
    
});