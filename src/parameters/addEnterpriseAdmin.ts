import { z } from 'zod';

export const AddEnterpriseAdminSchema = z.object({
  /** ID of the enterprise to retrieve. */
  id: z.string(),
  /** ID of member to be made an admin of enterprise. */
  idMember: z.string(),
});

export type AddEnterpriseAdmin = z.input<typeof AddEnterpriseAdminSchema>;
