import { z } from 'zod';
import { openEnum } from '#/core';

export const UpdateOrganizationMemberSchema = z.object({
  /** The ID or name of the organization */
  id: z.string(),
  /** The ID or username of the member to update */
  idMember: z.union([z.string(), z.string()]),
  /** One of: `admin`, `normal` */
  type: openEnum(['admin', 'normal']),
});

export type UpdateOrganizationMember = z.input<typeof UpdateOrganizationMemberSchema>;
