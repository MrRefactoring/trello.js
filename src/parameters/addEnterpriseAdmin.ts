import { z } from 'zod';
import { TrelloIDSchema } from '../models';

export const AddEnterpriseAdminSchema = z.object({
  /** ID of the enterprise to retrieve. */
  id: TrelloIDSchema,
  /** ID of member to be made an admin of enterprise. */
  idMember: TrelloIDSchema,
});

export type AddEnterpriseAdmin = z.input<typeof AddEnterpriseAdminSchema>;
