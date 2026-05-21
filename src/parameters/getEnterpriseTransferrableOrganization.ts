import { z } from 'zod';

export const GetEnterpriseTransferrableOrganizationSchema = z.object({
  /** ID of the Enterprise to retrieve. */
  id: z.string(),
  /** An ID of an Organization resource. */
  idOrganization: z.string(),
});

export type GetEnterpriseTransferrableOrganization = z.input<typeof GetEnterpriseTransferrableOrganizationSchema>;
