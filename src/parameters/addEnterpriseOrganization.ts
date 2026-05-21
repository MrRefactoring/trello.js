import { z } from 'zod';

export const AddEnterpriseOrganizationSchema = z.object({
  /** ID of the Enterprise to retrieve. */
  id: z.string(),
  /** ID of Organization to be transferred to Enterprise. */
  idOrganization: z.string(),
});

export type AddEnterpriseOrganization = z.input<typeof AddEnterpriseOrganizationSchema>;
