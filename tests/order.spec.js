import {test, expect}  from '@playwright/test'

test.describe("navigation", ()=>{
    test.beforeEach(async ({page})=>{
        await page.goto('https://playwright.dev/');
    });

    test('main navigation', async ({page})=>{
        await expect(page).toHaveURL('https://playwright.dev/');
    });

    test('test title navigation', async ({page})=>{
        await expect(page).toHaveTitle(/Playwright/);
        expect(true).toBeTruthy();
    });
})