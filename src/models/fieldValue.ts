import { z } from 'zod';
import { apiObject } from '#/core/apiObject';

export const FieldValueSchema = apiObject({
  _value: z.unknown(),
});

export type FieldValue<T = unknown> = {
  _value: T;
};
