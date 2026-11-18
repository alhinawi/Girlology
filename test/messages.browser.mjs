import { chromium } from 'playwright';
import { spawn } from 'node:child_process';
import assert from 'node:assert/strict';
import { mkdirSync } from 'node:fs';

const server = spawn('python3', ['-m', 'http.server', '4173', '--bind', '127.0.0.1', '--directory', 'out'], { stdio: 'ignore' });
const browser = await chromium.launch({ headless: true, args: ['--no-sandbox'] });
const base = 'http://127.0.0.1:4173';
mkdirSync('/downloads/girlology-checks', { recursive: true });
const errors = [];
try {
  for (const width of [390, 1440]) {
    const context = await browser.newContext({ viewport: { width, height: 900 }, permissions: ['clipboard-read', 'clipboard-write'] });
    const page = await context.newPage();
    page.on('pageerror', (e) => errors.push(e.message));
    for (const kind of ['pickup-lines', 'morning-texts', 'conversation-topics']) {
      const expected = kind === 'conversation-topics' ? 24 : 48;
      await page.goto(`${base}/${kind}/`);
      await page.locator('[data-testid="message-card"]').first().waitFor();
      await page.evaluate(() => document.fonts.ready);
      assert.equal(await page.locator('html').getAttribute('lang'), 'ar');
      assert.equal(await page.locator('[data-testid="message-card"]').count(), expected);
      assert.equal(await page.locator('img').evaluateAll((images) => images.every((i) => i.complete && i.naturalWidth > 0)), true);
      assert.equal(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth), true);
      const screenshot = `/downloads/girlology-checks/${kind}-ar-${width}.png`;
      await page.screenshot({ path: screenshot, fullPage: false });
      const groups = page.getByRole('group', { name: 'التصنيفات' }).getByRole('button');
      for (let i = 1; i < 5; i++) {
        await groups.nth(i).click();
        assert.equal(await page.locator('[data-testid="message-card"]').count(), expected / 4);
        assert.equal(await page.locator('[data-testid="category-tip"]').count(), 1);
      }
      await groups.first().click();
      await page.getByLabel('دور على كلمة في الرسالة').fill('لايوجدمثلذلكنص');
      assert.equal(await page.locator('[data-testid="message-card"]').count(), 0);
      await page.getByRole('button', { name: 'اعرض الكل', exact: true }).click();
      const firstText = await page.locator('[data-testid="message-text"]').first().innerText();
      await page.getByRole('button', { name: /^انسخ الرسالة/ }).first().click();
      assert.equal(await page.evaluate(() => navigator.clipboard.readText()), firstText);
      await page.locator('[data-testid="message-card"] details').first().locator('summary').click();
      assert.equal(await page.locator('[data-testid="message-card"] details').first().getAttribute('open'), '');
      await page.getByRole('button', { name: 'settings', exact: true }).click();
      await page.getByRole('switch', { name: 'language', exact: true }).click();
      await page.waitForFunction(() => document.documentElement.lang === 'en');
      assert.equal(await page.locator('html').getAttribute('dir'), 'ltr');
      assert.ok(/^[A-Za-z]/.test(await page.locator('[data-testid="message-text"]').first().innerText()));
      await page.getByRole('button', { name: 'close', exact: true }).click();
      await page.screenshot({ path: `/downloads/girlology-checks/${kind}-en-${width}.png`, fullPage: false });
      assert.equal(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth), true);
      await page.getByRole('button', { name: /^Copy message/ }).first().click();
      assert.equal(await page.evaluate(() => navigator.clipboard.readText()), await page.locator('[data-testid="message-text"]').first().innerText());
      // A denied clipboard permission must not claim success.
      await page.evaluate(() => Object.defineProperty(navigator, 'clipboard', { configurable: true, value: { writeText: async () => { throw new Error('Denied'); } } }));
      await page.getByRole('button', { name: /^Copy message/ }).first().click();
      await page.locator('#manual-copy').waitFor();
      assert.equal(await page.locator('#manual-copy').inputValue(), await page.locator('[data-testid="message-text"]').first().innerText());
      await page.getByRole('button', { name: 'Close', exact: true }).click();
      await page.getByRole('button', { name: 'settings', exact: true }).click();
      await page.getByRole('switch', { name: 'language', exact: true }).click();
      await page.getByRole('button', { name: 'close', exact: true }).click();
      console.log(`PASS ${kind} ${width}: language, 4 filters, search, clipboard, failure fallback, images, overflow`);
    }
    await page.goto(`${base}/`);
    assert.ok(await page.locator('a[href="/pickup-lines/"]').count() >= 1);
    assert.ok(await page.locator('a[href="/morning-texts/"]').count() >= 1);
    assert.ok(await page.locator('a[href="/conversation-topics/"]').count() >= 1);
    await page.getByRole('button', { name: 'menu', exact: true }).click();
    const dialog = page.getByRole('dialog');
    await dialog.locator('a[href="/conversation-topics/"]').click();
    await page.waitForURL('**/conversation-topics/');
    await context.close();
  }
  assert.deepEqual(errors, []);
  console.log('PASS homepage links, mobile menu routing, no runtime errors');
} finally {
  await browser.close();
  server.kill();
}
