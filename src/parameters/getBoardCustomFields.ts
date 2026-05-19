import { z } from 'zod';

export const GetBoardCustomFieldsSchema = z.object({
  /** The ID of the board */
  id: z.unknown(),
});

export type GetBoardCustomFields = z.input<typeof GetBoardCustomFieldsSchema>;
