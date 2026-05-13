import { z } from 'zod';

export const DeleteOrganizationInviteRestrictionSchema = z.object({
  /** The ID or name of the organization */
  id: z.unknown(),
});

export type DeleteOrganizationInviteRestriction = z.input<typeof DeleteOrganizationInviteRestrictionSchema>;
