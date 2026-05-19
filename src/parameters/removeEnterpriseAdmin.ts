import { z } from 'zod';

export const RemoveEnterpriseAdminSchema = z.object({
  /** ID of the Enterprise to retrieve. */
  id: z.unknown(),
  /** ID of the member to be removed as an admin from enterprise. */
  idMember: z.unknown(),
});

export type RemoveEnterpriseAdmin = z.input<typeof RemoveEnterpriseAdminSchema>;
