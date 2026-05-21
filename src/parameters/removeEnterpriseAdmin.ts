import { z } from 'zod';
import { TrelloIDSchema } from '../models';

export const RemoveEnterpriseAdminSchema = z.object({
  /** ID of the Enterprise to retrieve. */
  id: TrelloIDSchema,
  /** ID of the member to be removed as an admin from enterprise. */
  idMember: TrelloIDSchema,
});

export type RemoveEnterpriseAdmin = z.input<typeof RemoveEnterpriseAdminSchema>;
