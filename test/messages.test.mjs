import { test } from 'node:test';
import assert from 'node:assert/strict';
import { messageCategories, messageExamples } from '../lib/messages.ts';
import { extras } from '../lib/content.ts';
import { existsSync, readFileSync } from 'node:fs';

const source = JSON.parse(readFileSync(new URL('./fixtures/message-source.json', import.meta.url), 'utf8'));
for (const kind of Object.keys(source.examples)) {
  const count = source.examples[kind].length;
  test(`${kind}: complete source-backed bilingual examples and groups`, () => {
    const examples = messageExamples[kind];
    const categories = messageCategories[kind];
    assert.equal(examples.length, count);
    assert.equal(categories.length, 4);
    assert.equal(new Set(examples.map((x) => x.id)).size, count);
    assert.deepEqual(examples, source.examples[kind], 'no unsourced lines or unreviewed changes');
    for (const language of ['ar', 'en']) {
      assert.equal(new Set(examples.map((x) => x[language].trim().normalize('NFKC'))).size, count);
      for (const example of examples) assert.ok(example[language].length > 15);
      for (const category of categories) {
        assert.ok(category[language].length > 2);
        assert.ok(category[language === 'ar' ? 'tipAr' : 'tipEn'].length > 50);
      }
    }
    for (const example of examples) assert.ok(categories.some((x) => x.id === example.category));
    for (const category of categories) assert.equal(examples.filter((x) => x.category === category.id).length, count / 4);
    const entry = extras.find((x) => x.slug === kind);
    assert.ok(entry);
    assert.ok(existsSync(new URL(`../public${entry.img}`, import.meta.url)));
    assert.ok(existsSync(new URL(`../app/${kind}/page.tsx`, import.meta.url)));
  });
}
test('IDs are unique across every library', () => {
  const ids = Object.values(messageExamples).flat().map((x) => x.id);
  assert.equal(new Set(ids).size, ids.length);
});
