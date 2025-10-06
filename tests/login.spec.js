import { test, expect } from '@playwright/test';

//testcase1

test('Verify Login with valid credentials', async ({ page }) => {
await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
await page.locator("//input[@placeholder='Username']").fill('Admin')
await expect(page.locator("//input[@placeholder='Username']")).toContainText('Admin');// to check admin is their or not verification
//await page.locator("//input[@placeholder='Username']").pressSequentially('Admin',{delay: 4000ms})
await page.locator("//input[@placeholder='Password']").fill('admin123') //3 methods for text box edit - fill() / type() / pressSequentially
await page.locator("//button[@type='submit']").click()
await expect(page).toHaveURL('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index') //expect statments have 5seconds timeout,remailing all 30seconds(we can change in playwright config.js file)
await expect(page.locator("//h6[text()='Dashboard']")).toBeVisible()
});

//testcase2

test('Verify Login with valid inuserame ad valid password', async ({ page }) => {
await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
await page.locator("//input[@placeholder='Username']").fill('admin')
await page.locator("//input[@placeholder='Password']").fill('admin1234')
await page.locator("//button[@type='submit']").click()
await expect(page).toHaveURL('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index')
await expect(page.locator("//h6[text()='Dashboard']")).toBeVisible()
});

//testcase3

test('Verify Login with valid invaliduserame ad valid password', async ({ page }) => {
await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
await page.locator("//input[@placeholder='Username']").fill('admin')
await page.locator("//input[@placeholder='Password']").fill('admin1234')
await page.locator("//button[@type='submit']").click()
await expect(page).toHaveURL('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index') //this comment used check dashoard 
await expect(page.locator("//h6[text()='Dashboard']")).toBeVisible() //this comment used check dashoard
});

//testcase4

test('Verify Login with valid invalid userame ad invalid password', async ({ page }) => {
await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
await page.locator("//input[@placeholder='Username']").fill('admin')
await page.locator("//input[@placeholder='Password']").fill('admin1234')
await page.locator("//button[@type='submit']").click()
await expect(page).toHaveURL('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index')
await expect(page.locator("//h6[text()='Dashboard']")).toBeVisible()
});
