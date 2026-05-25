import { z } from 'zod';
import { apiObject } from '#/core';

export const CustomFieldItemsSchema = apiObject({
  id: z.string(),
  value: apiObject({
    checked: z.string().optional(),
  }).optional(),
  idCustomField: z.string().optional(),
  idModel: z.string().optional(),
  modelType: z.enum(['card', 'board', 'member']).optional(),
});

export type CustomFieldItems = z.infer<typeof CustomFieldItemsSchema>;
