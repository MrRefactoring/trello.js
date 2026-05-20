import { z } from 'zod';
import { apiObject } from '#/core';

export const CustomFieldOptionSchema = apiObject({
  _id: z.string(),
  idCustomField: z.string().optional(),
  value: apiObject({
    text: z.string().optional(),
  }).optional(),
  color: z.string().nullish(),
  pos: z.number().optional(),
});

export type CustomFieldOption = z.infer<typeof CustomFieldOptionSchema>;
