import { test, expect } from '@playwright/test';
import data from "../testData/demoqa.json" //imort data from test data

test('Verify Demo QA Text box fields', async ({ page }) => {
await page.goto('https://demoqa.com/')
await page.locator("(//div[contains(@class,'avatar mx-auto')])[1]").click()
await page.locator("//li[contains(.,'Text Box')]").click()
await expect(page).toHaveURL('https://demoqa.com/text-box')
await page.locator("//input[@placeholder='Full Name']").fill(data.fullname)
await page.locator('#userEmail').fill(data.email)
await page.locator('#currentAddress').fill(data.curretAddress)
await page.locator('#permanentAddress').fill(data.permanentAddress)
// await page.locator("//input[@placeholder='Full Name']").pressSequentially("padma",{delay: 4000})
// await page.locator('#useEmail').fill("padmadc1999@gmail.com")
// await page.locator('#curretAdress').fill("banglore")
// await page.locator('#permaentAdress').fill("sira")
await page.locator('#submit').click()
//await expect(page.locator('#name')).toContainText(data.fullname);
// await expect(page.locator('#ame')).toContainText('padma');
});