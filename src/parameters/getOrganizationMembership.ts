import { z } from 'zod';

export const GetOrganizationMembershipSchema = z.object({
  /** The ID or name of the organization */
  id: z.string(),
  /** The ID of the membership to load */
  idMembership: z.string(),
  /** Whether to include the Member object in the response */
  member: z.boolean().optional(),
});

export type GetOrganizationMembership = z.input<typeof GetOrganizationMembershipSchema>;
