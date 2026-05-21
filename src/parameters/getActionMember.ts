import { z } from 'zod';
import { TrelloIDSchema } from '../models';
import { MemberFieldsSchema } from '../models';

export const GetActionMemberSchema = z.object({
  /** The ID of the Action */
  id: TrelloIDSchema,
  /** `all` or a comma-separated list of member fields */
  fields: MemberFieldsSchema.optional(),
});

export type GetActionMember = z.input<typeof GetActionMemberSchema>;
