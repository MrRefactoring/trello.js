import { z } from 'zod';

export const DeactivateOrganizationMemberSchema = z.object({
  /** The ID or name of the organization */
  id: z.unknown(),
  /** The ID or username of the member to update */
  idMember: z.union([z.unknown(), z.string()]),
  value: z.boolean(),
});

export type DeactivateOrganizationMember = z.input<typeof DeactivateOrganizationMemberSchema>;
