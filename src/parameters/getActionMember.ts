import { z } from 'zod';

export const GetActionMemberSchema = z.object({
  /** The ID of the Action */
  id: z.unknown(),
  /** `all` or a comma-separated list of member fields */
  fields: z.unknown().optional(),
});

export type GetActionMember = z.input<typeof GetActionMemberSchema>;
