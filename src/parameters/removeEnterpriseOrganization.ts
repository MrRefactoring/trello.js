import { z } from 'zod';

export const RemoveEnterpriseOrganizationSchema = z.object({
  /** ID of the enterprise to retrieve. */
  id: z.string(),
  /** ID of the organization to be removed from the enterprise. */
  idOrg: z.string(),
});

export type RemoveEnterpriseOrganization = z.input<typeof RemoveEnterpriseOrganizationSchema>;
