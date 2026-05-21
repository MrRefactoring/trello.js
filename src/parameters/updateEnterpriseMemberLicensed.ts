import { z } from 'zod';
import { TrelloIDSchema } from '../models';

export const UpdateEnterpriseMemberLicensedSchema = z.object({
  /** ID of the Enterprise. */
  id: TrelloIDSchema,
  /** The ID of the Member */
  idMember: TrelloIDSchema,
  /** Boolean value to determine whether the user should be given an Enterprise license (true) or not (false). */
  value: z.boolean(),
});

export type UpdateEnterpriseMemberLicensed = z.input<typeof UpdateEnterpriseMemberLicensedSchema>;
