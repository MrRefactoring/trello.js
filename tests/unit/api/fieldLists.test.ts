import { describe, expect, it, vi } from 'vitest';
import { z } from 'zod';
import * as parameters from '../../../src/parameters';
import { getCardAttachment } from '../../../src/api/cards';
import type { Client } from '../../../src/core';

const fieldLists = Object.entries(parameters).flatMap(([name, schema]) => {
  if (!(schema instanceof z.ZodObject)) return [];

  return Object.entries(schema.shape)
    .filter(([field, value]) => /fields$/i.test(field) && !(value as z.ZodType).safeParse(true).success)
    .map(([field, value]) => [name, field, value as z.ZodType] as const);
});

describe('field selection parameters', () => {
  it.each(fieldLists)('%s.%s accepts strings and arrays', (_name, _field, schema) => {
    for (const fields of ['all', 'id,name', ['id', 'name']]) {
      expect(schema.safeParse(fields).success).toBe(true);
    }

    expect(schema.safeParse(42).success).toBe(false);
    expect(schema.safeParse(['id', 42]).success).toBe(false);
  });

  it('keeps customFields as a boolean flag', () => {
    expect(parameters.GetBoardSchema.shape.customFields.parse(true)).toBe(true);
    expect(parameters.GetBoardSchema.shape.customFields.safeParse('id,name').success).toBe(false);
  });

  it.each([
    { fields: 'id,name', expected: 'id,name' },
    { fields: ['id', 'name'], expected: 'id,name' },
    { fields: 'all', expected: 'all' },
    { fields: undefined, expected: undefined },
  ])('sends attachment fields $fields as one query value', async ({ fields, expected }) => {
    const sendRequest = vi.fn().mockResolvedValue({ id: 'attachment' });
    const client = { sendRequest } as unknown as Client;

    await getCardAttachment(client, { id: 'card', idAttachment: 'attachment', fields });

    expect(sendRequest).toHaveBeenCalledWith(expect.objectContaining({
      url: '/cards/card/attachments/attachment',
      searchParams: { fields: expected },
    }));
  });
});
