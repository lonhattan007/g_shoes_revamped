import { describe, it, expect, test } from 'vitest';

test('True to be true', () => {
  expect(true).toBe(true);
});

test('False to be false', () => {
  expect(false).toBe(false);
});

describe.concurrent('Concurrent suite', () => {
  it('True to be true', async ({ expect }) => {
    expect(true).toBe(true);
  });
  it('False to be false', async ({ expect }) => {
    expect(false).toBe(false);
  });
});
