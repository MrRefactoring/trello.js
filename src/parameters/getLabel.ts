import { z } from 'zod';
import { TrelloIDSchema } from '../models';

export const GetLabelSchema = z.object({
  /**
   * All or a comma-separated list of
   * [fields](https://developer.atlassian.com/cloud/trello/guides/rest-api/object-definitions/)
   */
  fields: z.union([z.string(), z.array(z.string())]).optional(),
  /** The ID of the Label */
  id: TrelloIDSchema,
});

export type GetLabel = z.input<typeof GetLabelSchema>;
