import { z } from 'zod';
import { openEnum } from '#/core';

export const UpdateOrganizationMembersSchema = z.object({
  /** The ID or name of the organization */
  id: z.string(),
  /** An email address */
  email: z.string(),
  /** Name for the member, at least 1 character not beginning or ending with a space */
  fullName: z.string(),
  /** One of: `admin`, `normal` */
  type: openEnum(['admin', 'normal']).optional(),
});

export type UpdateOrganizationMembers = z.input<typeof UpdateOrganizationMembersSchema>;
