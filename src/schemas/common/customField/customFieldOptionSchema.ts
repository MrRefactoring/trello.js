import { z } from 'zod';
import { TrelloIdSchema } from '~/schemas/common';
import { PrimaryColorSchema } from '~/schemas/common/color';

export const CustomFieldOptionSchema = z.strictObject({
  value: z.strictObject({
    text: z.string(),
  }),
  color: PrimaryColorSchema,
  pos: z.number(),
  _id: TrelloIdSchema
});

export type CustomFieldOption = z.infer<typeof CustomFieldOptionSchema>;
