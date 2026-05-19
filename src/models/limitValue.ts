import { z } from 'zod';
import { apiObject } from '#/core/apiObject';

export const LimitValueSchema = apiObject({
  status: z.string(),
  disableAt: z.number(),
  warnAt: z.number(),
  count: z.number().optional(),
});

export type LimitValue = z.infer<typeof LimitValueSchema>;
