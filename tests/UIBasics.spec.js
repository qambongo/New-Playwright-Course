const {test, expect} = require('@playwright/test');

test('Page Context', async ({page}) => {
    // This format is used when you don't have any cookie or proxy to pass to inject into the browser
    await page.goto('https://google.com/');
    await expect(page).toHaveTitle('Google');
})

test('Browser Context', async ({browser}) => {
    // This format is used when you want to pass cookies or proxy etc. into the browser before opening a page
    const context = await browser.newContext();
    const page = await context.newPage();

    const userName = page.locator('#username')
    const password = page.locator('#password')
    const loginButton = page.locator('[type = \'submit\']')
    const itemsCardBody = page.locator('.card-body')
    const itemsCardTitle = page.locator('.card-title')

    await page.goto('https://rahulshettyacademy.com/loginpagePractise/');
    await userName.fill('Kreatives');
    await password.fill('learning');
    await loginButton.click();

    const text= await page.locator('.alert.alert-danger.col-md-12').textContent();
    await expect(page.locator('.alert.alert-danger.col-md-12')).toContainText('Incorrect username/password.')
    console.log(text);

    await userName.fill('rahulshettyacademy');
    await password.fill('learning');
    await loginButton.click();

    const firstItemName = await itemsCardTitle.first().textContent();
    const allItemNames = await itemsCardTitle.allTextContents();
    console.log(firstItemName)
    console.log(allItemNames.map(name => name.trim()))

})

test.only('Assignment', async ({page}) => {
    const registerButton = page.locator('.btn1');
    const firtName = page.locator('#firstName');
    const lastName = page.locator('#lastName');
    const email = page.locator('#userEmail');
    const phoneNumber = page.locator('#userMobile');
    const occupation = page.locator('select[formcontrolname="occupation"]');
    const gender = page.locator("input[value='Male']");
    const password = page.locator('#userPassword');
    const confirmPassword = page.locator('#confirmPassword');
    const ageCheckbox = page.locator("input[type='checkbox']");
    const registerSubmit = page.locator('#login');
    const headerText = page.locator("div[class='left mt-1'] h3");

    await page.goto('https://rahulshettyacademy.com/client');
    await registerButton.click();
    await firtName.fill('Kreatives');
    await lastName.fill('Learning');
    await email.fill('319s8Fw@examplwee.com');
    await phoneNumber.fill('1234567890');
    await occupation.selectOption('Doctor');
    await gender.click();
    await password.fill('learning');
    await confirmPassword.fill('learning');
    await ageCheckbox.click();
    await registerButton.click();

    await email.fill('319s8Fw@examplwee.com');
    await password.fill('learning');
    await registerSubmit.click();

    await expect(headerText.textContent()).toContainText('Automation')

})