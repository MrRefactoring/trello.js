import { describe, it, expect } from 'vitest';
import { z } from 'zod';
import { CardSchema } from '../../../src/models/card';

// Regression coverage for issue #42 (ZodError on getListCards / getBoardCards).
// The live API returns `agent: null` on cards (the AI-agent feature rolls out
// per account, so live tests can't deterministically reproduce it). These unit
// tests pin the schema directly so the fix can't silently regress.
describe('CardSchema — nullable agent (issue #42)', () => {
  const baseCard = { id: 'a'.repeat(24) };

  it('accepts a card whose agent is null', () => {
    expect(() => CardSchema.parse({ ...baseCard, agent: null })).not.toThrow();
  });

  it('accepts a card with agent omitted', () => {
    expect(() => CardSchema.parse(baseCard)).not.toThrow();
  });

  it('accepts a populated agent object', () => {
    expect(() =>
      CardSchema.parse({ ...baseCard, agent: { name: 'Atlas', conversationId: 'abc' } }),
    ).not.toThrow();
  });

  // Mirrors the exact failure from the bug report: path [0, "agent"] in an array.
  it('accepts an array of cards with null agents (getListCards / getBoardCards shape)', () => {
    const payload = [
      { ...baseCard, agent: null },
      { id: 'b'.repeat(24), agent: null },
    ];

    expect(() => z.array(CardSchema).parse(payload)).not.toThrow();
  });
});

// Second drift surfaced while testing #42: getBoardCards returns checkItemStates
// as objects, not strings. The schema must accept the object shape.
describe('CardSchema — checkItemStates objects', () => {
  const baseCard = { id: 'a'.repeat(24) };

  it('accepts checkItemStates as an array of objects', () => {
    expect(() =>
      CardSchema.parse({
        ...baseCard,
        checkItemStates: [{ idCheckItem: 'c'.repeat(24), state: 'complete' }],
      }),
    ).not.toThrow();
  });

  it('rejects checkItemStates as an array of strings (the old, wrong shape)', () => {
    expect(() =>
      CardSchema.parse({ ...baseCard, checkItemStates: ['complete'] }),
    ).toThrow();
  });
});
