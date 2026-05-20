import { z } from 'zod';
import { apiObject } from '#/core';

export const CFValueSchema = apiObject({
  number: z.string().optional(),
});

export type CFValue = z.infer<typeof CFValueSchema>;
