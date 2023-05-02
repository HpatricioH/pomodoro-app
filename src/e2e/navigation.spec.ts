import { test, expect } from '@playwright/test'

test('should navigate to short break page', async ({ page }) => {
  // start from the index page of the app
  await page.goto('http://localhost:3000/')
  // find element with the text 'shot break' and click it
  await page.click('text=Short Break')
  // the url should be '/short-break'
  await expect(page).toHaveURL('http://localhost:3000/short-break')
  // the text of the element with the text time should be '05:00'
  await expect(page.locator('text')).toHaveText('05:00')
})

test('should navigate to long break page', async ({ page }) => {
  // start from the index page of the app
  await page.goto('http://localhost:3000/')
  // find element with the text 'long break' and click it
  await page.click('text=Long Break')
  // the url should be '/long-break'
  await expect(page).toHaveURL('http://localhost:3000/long-break')
  // the text of the element with the text time should be '15:00'
  await expect(page.locator('text')).toHaveText('15:00')
})
