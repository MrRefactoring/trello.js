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

// Drift surfaced in issue #48 (ZodError on getBoardCards). The API returns
// `dueReminder` as a number (minutes before the due date), not a string, and
// labels can carry the undocumented `_light` / `_dark` shade colors.
describe('CardSchema — dueReminder is a number (issue #48)', () => {
  const baseCard = { id: 'a'.repeat(24) };

  it('accepts dueReminder as a number', () => {
    expect(() => CardSchema.parse({ ...baseCard, dueReminder: 1440 })).not.toThrow();
  });

  it('accepts dueReminder as null', () => {
    expect(() => CardSchema.parse({ ...baseCard, dueReminder: null })).not.toThrow();
  });

  it('rejects dueReminder as a string (the old, wrong shape)', () => {
    expect(() => CardSchema.parse({ ...baseCard, dueReminder: '1440' })).toThrow();
  });
});

describe('CardSchema — label shade colors (issue #48)', () => {
  const baseCard = { id: 'a'.repeat(24) };
  const label = (color: string) => ({ id: 'l'.repeat(24), color });

  it('accepts the new `_dark` / `_light` shade variants on labels', () => {
    expect(() =>
      CardSchema.parse({
        ...baseCard,
        labels: [label('sky_dark'), label('green_light'), label('blue')],
      }),
    ).not.toThrow();
  });

  it('rejects an unknown color that is not part of the palette', () => {
    expect(() => CardSchema.parse({ ...baseCard, labels: [label('teal')] })).toThrow();
  });
});
