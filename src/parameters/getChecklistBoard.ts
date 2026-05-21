import { z } from 'zod';
import { TrelloIDSchema } from '../models';

export const GetChecklistBoardSchema = z.object({
  /** ID of a checklist. */
  id: TrelloIDSchema,
  /**
   * `all` or a comma-separated list of board
   * [fields](https://developer.atlassian.com/cloud/trello/guides/rest-api/object-definitions/)
   */
  fields: z.enum(['all', 'name']).optional(),
});

export type GetChecklistBoard = z.input<typeof GetChecklistBoardSchema>;
