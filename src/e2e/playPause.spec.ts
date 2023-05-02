import { test, expect } from '@playwright/test'

test('should play and pause the timer', async ({ page }) => {
  await page.goto('http://localhost:3000/')
  await page.click('text=play')
  await page.waitForTimeout(1000)
  await page.click('text=pause')
  await page.waitForTimeout(1000)
  await expect(page.locator('text')).toHaveText('24:59')
  await page.click('text=play')
  await page.waitForTimeout(1000)
  await expect(page.locator('text')).toHaveText('24:58')
})
