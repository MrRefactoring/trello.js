import { z } from 'zod';

export const GetCardBoardSchema = z.object({
  /** The ID of the Card */
  id: z.unknown(),
  /**
   * `all` or a comma-separated list of board
   * [fields](https://developer.atlassian.com/cloud/trello/guides/rest-api/object-definitions/#board-object)
   */
  fields: z.union([z.string(), z.array(z.string())]).optional(),
});

export type GetCardBoard = z.input<typeof GetCardBoardSchema>;
