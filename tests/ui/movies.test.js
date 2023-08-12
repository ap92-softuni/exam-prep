const { test, expect } = require('@playwright/test');

test('Check movies page', async ({ page }) => {
    await page.goto('https://ap-exam-prep-deployment.onrender.com/collection');
    const list = await page.$('ul');
    expect(list).toBeTruthy();
  });
  
