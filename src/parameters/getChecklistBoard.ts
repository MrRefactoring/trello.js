import { z } from 'zod';

export const GetChecklistBoardSchema = z.object({
  /** ID of a checklist. */
  id: z.unknown(),
  /** `all` or a comma-separated list of board [fields](/cloud/trello/guides/rest-api/object-definitions/) */
  fields: z.enum(['all', 'name']).optional(),
});

export type GetChecklistBoard = z.input<typeof GetChecklistBoardSchema>;
