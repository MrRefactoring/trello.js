import { z } from 'zod';

export const GetOrganizationMembershipSchema = z.object({
  /** The ID or name of the organization */
  id: z.unknown(),
  /** The ID of the membership to load */
  idMembership: z.unknown(),
  /** Whether to include the Member object in the response */
  member: z.boolean().optional(),
});

export type GetOrganizationMembership = z.input<typeof GetOrganizationMembershipSchema>;
