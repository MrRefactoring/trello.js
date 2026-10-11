import { afterAll, beforeAll, describe, expect, it, vi } from 'vitest';

describe('Card summary timestamp in strict schema mode', () => {
  let schema: typeof import('../../../src/models/card').CardSchema;

  beforeAll(async () => {
    vi.stubEnv('TRELLO_STRICT_SCHEMAS', 'true');
    vi.resetModules();
    schema = (await import('../../../src/models/card')).CardSchema;
  });

  afterAll(() => vi.unstubAllEnvs());

  it('accepts an omitted timestamp', () => {
    expect(schema.parse({ id: 'card' }).lastSummaryChangeEventAt).toBeUndefined();
  });

  it('preserves null instead of coercing it to the epoch', () => {
    expect(schema.parse({ id: 'card', lastSummaryChangeEventAt: null }).lastSummaryChangeEventAt).toBeNull();
  });

  it('coerces an ISO timestamp to a Date', () => {
    const timestamp = '2026-10-11T09:30:00.000Z';
    expect(schema.parse({ id: 'card', lastSummaryChangeEventAt: timestamp }).lastSummaryChangeEventAt)
      .toEqual(new Date(timestamp));
  });

  it('rejects an invalid date', () => {
    expect(schema.safeParse({ id: 'card', lastSummaryChangeEventAt: 'invalid-date' }).success).toBe(false);
  });
});
