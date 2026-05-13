import { z } from 'zod';
import { apiObject } from '#/core/apiObject';

export const CFValueSchema = apiObject({
  number: z.string().optional(),
});

export type CFValue = z.infer<typeof CFValueSchema>;
