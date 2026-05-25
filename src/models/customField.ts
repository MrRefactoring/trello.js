import { z } from 'zod';
import { apiObject } from '#/core';

export const CustomFieldSchema = apiObject({
  id: z.string(),
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
          id: z.string(),
          idCustomField: z.string().optional(),
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
