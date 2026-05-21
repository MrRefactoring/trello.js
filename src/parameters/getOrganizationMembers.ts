import { z } from 'zod';
import { TrelloIDSchema } from '../models';

export const GetOrganizationMembersSchema = z.object({
  /** The ID or name of the Organization */
  id: TrelloIDSchema,
});

export type GetOrganizationMembers = z.input<typeof GetOrganizationMembersSchema>;
