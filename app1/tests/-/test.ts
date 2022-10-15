import { expect, test } from '@playwright/test';

test('index page has expected div', async ({ page }) => {
	await page.goto('/app1');
	expect(await page.textContent('div')).toContain('app1');
});
