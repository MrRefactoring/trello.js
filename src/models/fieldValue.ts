import { z } from 'zod';
import { apiObject } from '#/core';

export const FieldValueSchema = apiObject({
  _value: z.unknown(),
});

export interface FieldValue<T = unknown> {
  _value: T;
}
