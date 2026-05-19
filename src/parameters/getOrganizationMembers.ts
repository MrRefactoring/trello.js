import { z } from 'zod';

export const GetOrganizationMembersSchema = z.object({
  /** The ID or name of the Organization */
  id: z.unknown(),
});

export type GetOrganizationMembers = z.input<typeof GetOrganizationMembersSchema>;
