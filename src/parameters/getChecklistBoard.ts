import { z } from 'zod';
import { openEnum } from '#/core';

export const GetChecklistBoardSchema = z.object({
  /** ID of a checklist. */
  id: z.string(),
  /**
   * `all` or a comma-separated list of board
   * [fields](https://developer.atlassian.com/cloud/trello/guides/rest-api/object-definitions/)
   */
  fields: openEnum(['all', 'name']).optional(),
});

export type GetChecklistBoard = z.input<typeof GetChecklistBoardSchema>;
