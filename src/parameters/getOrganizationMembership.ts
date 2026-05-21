import { z } from 'zod';
import { TrelloIDSchema } from '../models';

export const GetOrganizationMembershipSchema = z.object({
  /** The ID or name of the organization */
  id: TrelloIDSchema,
  /** The ID of the membership to load */
  idMembership: TrelloIDSchema,
  /** Whether to include the Member object in the response */
  member: z.boolean().optional(),
});

export type GetOrganizationMembership = z.input<typeof GetOrganizationMembershipSchema>;
