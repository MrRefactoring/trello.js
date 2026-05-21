import { z } from 'zod';
import { TrelloIDSchema } from '../models';

export const UpdateOrganizationMemberSchema = z.object({
  /** The ID or name of the organization */
  id: TrelloIDSchema,
  /** The ID or username of the member to update */
  idMember: z.union([z.string(), TrelloIDSchema]),
  /** One of: `admin`, `normal` */
  type: z.enum(['admin', 'normal']),
});

export type UpdateOrganizationMember = z.input<typeof UpdateOrganizationMemberSchema>;
