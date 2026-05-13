import { z } from 'zod';

export const RemoveOrganizationMemberSchema = z.object({
  /** The ID or name of the organization */
  id: z.union([z.unknown(), z.string()]),
  /** The ID of the Member to remove from the Workspace */
  idMember: z.unknown(),
});

export type RemoveOrganizationMember = z.input<typeof RemoveOrganizationMemberSchema>;
