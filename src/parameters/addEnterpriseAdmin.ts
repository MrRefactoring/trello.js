import { z } from 'zod';

export const AddEnterpriseAdminSchema = z.object({
  /** ID of the enterprise to retrieve. */
  id: z.unknown(),
  /** ID of member to be made an admin of enterprise. */
  idMember: z.unknown(),
});

export type AddEnterpriseAdmin = z.input<typeof AddEnterpriseAdminSchema>;
