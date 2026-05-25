import { z } from 'zod';

export const RemoveEnterpriseAdminSchema = z.object({
  /** ID of the Enterprise to retrieve. */
  id: z.string(),
  /** ID of the member to be removed as an admin from enterprise. */
  idMember: z.string(),
});

export type RemoveEnterpriseAdmin = z.input<typeof RemoveEnterpriseAdminSchema>;
