import { z } from 'zod';

export const GetListBoardSchema = z.object({
  /** The ID of the list */
  id: z.string(),
  /**
   * `all` or a comma-separated list of board
   * [fields](https://developer.atlassian.com/cloud/trello/guides/rest-api/object-definitions/#board-object)
   */
  fields: z.union([z.string(), z.array(z.string())]).optional(),
});

export type GetListBoard = z.input<typeof GetListBoardSchema>;
