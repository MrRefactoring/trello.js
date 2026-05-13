import { z } from 'zod';

export const GetCardListSchema = z.object({
  /** The ID of the Card */
  id: z.unknown(),
  /** `all` or a comma-separated list of list [fields](/cloud/trello/guides/rest-api/object-definitions/) */
  fields: z.union([z.string(), z.array(z.string())]).optional(),
});

export type GetCardList = z.input<typeof GetCardListSchema>;
