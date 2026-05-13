import { z } from 'zod';

export const UpdateEnterpriseMemberLicensedSchema = z.object({
  /** ID of the Enterprise. */
  id: z.unknown(),
  /** The ID of the Member */
  idMember: z.unknown(),
  /** Boolean value to determine whether the user should be given an Enterprise license (true) or not (false). */
  value: z.boolean(),
});

export type UpdateEnterpriseMemberLicensed = z.input<typeof UpdateEnterpriseMemberLicensedSchema>;
