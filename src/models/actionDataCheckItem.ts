import { z } from 'zod';
import { apiObject } from '#/core';

export const ActionDataCheckItemSchema = apiObject({
  id: z.string(),
  name: z.string(),
  state: z.string(),
  textData: z.record(z.string(), z.any()),
});

export type ActionDataCheckItem = z.infer<typeof ActionDataCheckItemSchema>;
