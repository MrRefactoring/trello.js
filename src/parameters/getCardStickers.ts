import { z } from 'zod';
import { TrelloIDSchema } from '../models';

export const GetCardStickersSchema = z.object({
  /** The ID of the Card */
  id: TrelloIDSchema,
  /**
   * `all` or a comma-separated list of sticker
   * [fields](https://developer.atlassian.com/cloud/trello/guides/rest-api/object-definitions/)
   */
  fields: z.union([z.string(), z.array(z.string())]).optional(),
});

export type GetCardStickers = z.input<typeof GetCardStickersSchema>;
