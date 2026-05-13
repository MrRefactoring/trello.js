import { z } from 'zod';

export const UpdateCardCustomFieldItemSchema = z.object({
  /** ID of the card that the Custom Field value should be set/updated for */
  idCard: z.unknown(),
  /** ID of the Custom Field on the card. */
  idCustomField: z.unknown(),
  body: z.record(z.string(), z.any()).optional(),
});

export type UpdateCardCustomFieldItem = z.input<typeof UpdateCardCustomFieldItemSchema>;
