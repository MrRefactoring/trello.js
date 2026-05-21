import { z } from 'zod';

export const DeleteOrganizationInviteRestrictionSchema = z.object({
  /** The ID or name of the organization */
  id: z.string(),
});

export type DeleteOrganizationInviteRestriction = z.input<typeof DeleteOrganizationInviteRestrictionSchema>;
