import { z } from 'zod';

export const UpdateOrganizationMembersSchema = z.object({
  /** The ID or name of the organization */
  id: z.unknown(),
  /** An email address */
  email: z.string(),
  /** Name for the member, at least 1 character not beginning or ending with a space */
  fullName: z.string(),
  /** One of: `admin`, `normal` */
  type: z.enum(['admin', 'normal']).optional(),
});

export type UpdateOrganizationMembers = z.input<typeof UpdateOrganizationMembersSchema>;
