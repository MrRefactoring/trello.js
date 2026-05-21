import { z } from 'zod';
import { TrelloIDSchema } from '../models';

export const GetOrganizationMembershipsSchema = z.object({
  /** The ID or name of the organization */
  id: TrelloIDSchema,
  /** `all` or a comma-separated list of: `active`, `admin`, `deactivated`, `me`, `normal` */
  filter: z.enum(['all', 'active', 'admin', 'deactivated', 'me', 'normal']).optional(),
  /** Whether to include the Member objects with the Memberships */
  member: z.boolean().optional(),
});

export type GetOrganizationMemberships = z.input<typeof GetOrganizationMembershipsSchema>;
