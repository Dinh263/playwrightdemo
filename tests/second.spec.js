const {test, expect} = require('@playwright/test');

test('Search the blog with text playwright', async({page})=>{
    await page.goto('https://qaautomationlabs.com/');
    const blogs = page.locator('//span[text()="Blogs"]');
    const search = page.locator("id=wp-block-search__input-2");
    const searchIcon = page.locator("id=search-icon");
    await blogs.last().click();
    await search.type("Playwright");
    await searchIcon.click();
})