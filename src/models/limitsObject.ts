import { z } from 'zod';
import { apiObject, openEnum } from '#/core';

export const LimitsObjectSchema = apiObject({
  status: openEnum(['ok', 'warning']).optional(),
  disableAt: z.number().optional(),
  warnAt: z.number().optional(),
  boards: z.record(z.string(), z.any()).optional(),
  orgs: z.record(z.string(), z.any()).optional(),
});

export type LimitsObject = z.infer<typeof LimitsObjectSchema>;
