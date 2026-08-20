import { z } from 'zod';
import { openEnum } from '#/core';

export const GetOrganizationMembershipsSchema = z.object({
  /** The ID or name of the organization */
  id: z.string(),
  /** `all` or a comma-separated list of: `active`, `admin`, `deactivated`, `me`, `normal` */
  filter: openEnum(['all', 'active', 'admin', 'deactivated', 'me', 'normal']).optional(),
  /** Whether to include the Member objects with the Memberships */
  member: z.boolean().optional(),
});

export type GetOrganizationMemberships = z.input<typeof GetOrganizationMembershipsSchema>;
