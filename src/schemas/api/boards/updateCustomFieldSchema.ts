import { z } from 'zod';
import { TrelloIdSchema } from '~/schemas/common';

export const UpdateCustomFieldSchema = z.strictObject({
  /** ID of the Custom Field. */
  id: TrelloIdSchema,
  /** The name of the Custom Field */
  name: z.string().optional(),
  pos: z.union([z.string(), z.number()]).optional(),
  /** Whether to display this custom field on the front of cards */
  cardFront: z.boolean().optional(),
});

export type UpdateCustomField = z.infer<typeof UpdateCustomFieldSchema>;
