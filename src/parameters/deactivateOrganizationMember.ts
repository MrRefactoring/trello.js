import { z } from 'zod';
import { TrelloIDSchema } from '../models';

export const DeactivateOrganizationMemberSchema = z.object({
  /** The ID or name of the organization */
  id: TrelloIDSchema,
  /** The ID or username of the member to update */
  idMember: z.union([TrelloIDSchema, z.string()]),
  value: z.boolean(),
});

export type DeactivateOrganizationMember = z.input<typeof DeactivateOrganizationMemberSchema>;
