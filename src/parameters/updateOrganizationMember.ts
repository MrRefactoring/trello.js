import { z } from 'zod';

export const UpdateOrganizationMemberSchema = z.object({
  /** The ID or name of the organization */
  id: z.string(),
  /** The ID or username of the member to update */
  idMember: z.union([z.string(), z.string()]),
  /** One of: `admin`, `normal` */
  type: z.enum(['admin', 'normal']),
});

export type UpdateOrganizationMember = z.input<typeof UpdateOrganizationMemberSchema>;
