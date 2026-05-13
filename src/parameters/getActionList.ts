import { z } from 'zod';

export const GetActionListSchema = z.object({
  /** The ID of the action */
  id: z.unknown(),
  /** `all` or a comma-separated list of list fields */
  fields: z.unknown().optional(),
});

export type GetActionList = z.input<typeof GetActionListSchema>;
