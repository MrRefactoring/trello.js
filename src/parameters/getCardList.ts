import { z } from 'zod';
import { TrelloIDSchema } from '../models';

export const GetCardListSchema = z.object({
  /** The ID of the Card */
  id: TrelloIDSchema,
  /**
   * `all` or a comma-separated list of list
   * [fields](https://developer.atlassian.com/cloud/trello/guides/rest-api/object-definitions/)
   */
  fields: z.union([z.string(), z.array(z.string())]).optional(),
});

export type GetCardList = z.input<typeof GetCardListSchema>;
