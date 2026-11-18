import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';

const sw = readFileSync(new URL('../components/ui/switch.tsx', import.meta.url), 'utf8');
const header = readFileSync(new URL('../components/Header.tsx', import.meta.url), 'utf8');

test('checked thumb moves right in LTR and left in RTL', () => {
  assert.match(sw, /ltr:group-data-\[size=default\]\/switch:data-checked:translate-x-\[calc\(100%-2px\)\]/);
  assert.match(sw, /rtl:group-data-\[size=default\]\/switch:data-checked:-translate-x-\[calc\(100%-2px\)\]/);
  // no unguarded physical checked transform that would break RTL
  assert.doesNotMatch(sw, /(?<!ltr:)(?<!rtl:)group-data-\[size=default\]\/switch:data-checked:translate-x/);
});

test('unchecked thumb sits at inline start (x = 0) in both directions', () => {
  assert.match(sw, /group-data-\[size=default\]\/switch:data-unchecked:translate-x-0/);
});

test('unchecked track is a neutral off color, not the pink input tint', () => {
  assert.match(sw, /data-unchecked:bg-muted-foreground\/25/);
  assert.doesNotMatch(sw, /data-unchecked:bg-input/);
});

test('settings switches map to the right state (language EN, theme light)', () => {
  assert.match(header, /checked=\{lang === 'en'\}/);
  assert.match(header, /checked=\{theme === 'light'\}/);
  assert.match(header, /onCheckedChange=\{\(v\) => setLang\(v \? 'en' : 'ar'\)\}/);
  assert.match(header, /onCheckedChange=\{\(v\) => setTheme\(v \? 'light' : 'dark'\)\}/);
});
