import { z } from 'zod';
import { apiObject } from '#/core';

export const ActionDataCustomFieldSchema = apiObject({
  id: z.string(),
  name: z.string(),
});

export type ActionDataCustomField = z.infer<typeof ActionDataCustomFieldSchema>;
