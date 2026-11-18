import { test } from 'node:test';
import assert from 'node:assert/strict';
import { messageCategories, messageExamples } from '../lib/messages.ts';
import { extras } from '../lib/content.ts';
import { existsSync } from 'node:fs';

for (const kind of ['pickup-lines', 'morning-texts']) {
  test(`${kind}: 30 unique bilingual examples, five complete categories`, () => {
    const examples = messageExamples[kind];
    const categories = messageCategories[kind];
    assert.equal(examples.length, 30);
    assert.equal(categories.length, 5);
    assert.equal(new Set(examples.map((x) => x.id)).size, 30);
    for (const language of ['ar', 'en']) {
      assert.equal(new Set(examples.map((x) => x[language])).size, 30);
      for (const example of examples) assert.ok(example[language].length > 15);
      for (const category of categories) {
        assert.ok(category[language].length > 2);
        assert.ok(category[language === 'ar' ? 'tipAr' : 'tipEn'].length > 50);
      }
    }
    for (const example of examples) assert.ok(categories.some((x) => x.id === example.category));
    for (const category of categories) assert.equal(examples.filter((x) => x.category === category.id).length, 6);
    const entry = extras.find((x) => x.slug === kind);
    assert.ok(entry);
    assert.ok(existsSync(new URL(`../public${entry.img}`, import.meta.url)));
    assert.ok(existsSync(new URL(`../app/${kind}/page.tsx`, import.meta.url)));
  });
}

test('IDs are unique across both sections', () => {
  const ids = Object.values(messageExamples).flat().map((x) => x.id);
  assert.equal(new Set(ids).size, 60);
});
