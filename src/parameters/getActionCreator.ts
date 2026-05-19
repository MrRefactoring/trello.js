import { z } from 'zod';

export const GetActionCreatorSchema = z.object({
  /** The ID of the Action */
  id: z.unknown(),
  /** `all` or a comma-separated list of member fields */
  fields: z.unknown().optional(),
});

export type GetActionCreator = z.input<typeof GetActionCreatorSchema>;
