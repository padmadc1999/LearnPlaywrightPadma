import { test , expect} from '@playwright/test';


const jobtitles ={
    title1 : "SDET1",
    title2: "Automation QA Engineer",
    title3: "Account Assistant"
}

for(let title in jobtitles){

test(`verify Add job title - ${title} `, async ({ page }) => {
await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
await page.getByRole('textbook',{name:'username'}).fill('Admin');
await page.getByRole('textbook',{name:'password'}).fill('admin123');
await page.getByRole('textbook').nth(1).fill(jobtitles[titles]);
// await page.locator("(//div[contains(@class='avatar mx-auto')])[1]").click()
// await page.locator("//li[contais(.,'Text Box')]").click()
// await expect(page).toHaveURL('https://demoqa.com/text-box')
// await page.locator("//input[@placeholder='Full Name']").fill(data.fullame)
// await page.locator('#useEmail').fill(data.email)
// await page.locator('#curretAdress').fill(data.curretAdress)
// await page.locator('#permaentAdress').fill(data.permanentAdress)
// await page.locator("//input[@placeholder='Full Name']").pressSequentially("padma",{delay: 4000})
// await page.locator('#useEmail').fill("padmadc1999@gmail.com")
// await page.locator('#curretAdress').fill("banglore")
// await page.locator('#permaentAdress').fill("sira")
// await page.locator('#submit').click()
// await expect(page.locator('#ame')).toContainText(data.fullame);
// await expect(page.locator('#ame')).toContainText('padma');
});
}