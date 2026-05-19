import { z } from 'zod';

export const GetCardCustomFieldItemsSchema = z.object({
  /** The ID of the Card */
  id: z.unknown(),
});

export type GetCardCustomFieldItems = z.input<typeof GetCardCustomFieldItemsSchema>;
