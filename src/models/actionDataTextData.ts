import { z } from 'zod';
import { apiObject } from '#/core';

export const ActionDataTextDataSchema = apiObject({
  emoji: z.record(z.string(), z.any()),
});

export type ActionDataTextData = z.infer<typeof ActionDataTextDataSchema>;
