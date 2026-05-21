import { z } from 'zod';
import { TrelloIDSchema } from '../models';

export const RemoveOrganizationMemberSchema = z.object({
  /** The ID or name of the organization */
  id: z.union([TrelloIDSchema, z.string()]),
  /** The ID of the Member to remove from the Workspace */
  idMember: TrelloIDSchema,
});

export type RemoveOrganizationMember = z.input<typeof RemoveOrganizationMemberSchema>;
