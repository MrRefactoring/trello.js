import { z } from 'zod';
import { MemberFieldsSchema } from '../models';

export const GetActionMemberSchema = z.object({
  /** The ID of the Action */
  id: z.string(),
  /** `all` or a comma-separated list of member fields */
  fields: MemberFieldsSchema.optional(),
});

export type GetActionMember = z.input<typeof GetActionMemberSchema>;
