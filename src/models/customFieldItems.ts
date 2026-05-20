import { z } from 'zod';
import { apiObject } from '#/core';
import { TrelloIDSchema } from '#/models/trelloID';

export const CustomFieldItemsSchema = apiObject({
  id: TrelloIDSchema,
  value: apiObject({
    checked: z.string().optional(),
  }).optional(),
  idCustomField: TrelloIDSchema.optional(),
  idModel: TrelloIDSchema.optional(),
  modelType: z.enum(['card', 'board', 'member']).optional(),
});

export type CustomFieldItems = z.infer<typeof CustomFieldItemsSchema>;
