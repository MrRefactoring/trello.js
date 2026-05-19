import { z } from 'zod';
import { apiObject } from '#/core/apiObject';
import { TrelloIDSchema } from '#/models/trelloID';

export const CustomFieldSchema = apiObject({
  id: TrelloIDSchema,
  idModel: z.string().optional(),
  modelType: z.enum(['card', 'board', 'member']).optional(),
  fieldGroup: z.string().optional(),
  display: apiObject({
    cardFront: z.boolean().optional(),
    name: z.string().optional(),
    pos: z.string().optional(),
    options: z
      .array(
        apiObject({
          id: TrelloIDSchema,
          idCustomField: TrelloIDSchema.optional(),
          value: apiObject({
            text: z.string().optional(),
          }).optional(),
          color: z.string().optional(),
          pos: z.number().optional(),
        }),
      )
      .optional(),
  }).optional(),
  type: z.string().optional(),
});

export type CustomField = z.infer<typeof CustomFieldSchema>;
