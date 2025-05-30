const {test} = require('@playwright/test');

test('Browser Context', async ({browser}) => {
    // This format is used when you want to pass cookies or proxy etc. into the browser before opening a page
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto('https://playwright.dev/');

})

test('Page', async ({page}) => {
    // This format is used when you don't have any cookie or proxy to pass to inject into the browser
    await page.goto('https://playwright.dev/');
})