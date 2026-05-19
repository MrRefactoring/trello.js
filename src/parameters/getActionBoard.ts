import { z } from 'zod';

export const GetActionBoardSchema = z.object({
  /** The ID of the action */
  id: z.unknown(),
  /** `all` or a comma-separated list of board fields */
  fields: z.unknown().optional(),
});

export type GetActionBoard = z.input<typeof GetActionBoardSchema>;
