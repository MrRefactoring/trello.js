import { z } from 'zod';

export const GetEnterpriseTransferrableOrganizationSchema = z.object({
  /** ID of the Enterprise to retrieve. */
  id: z.unknown(),
  /** An ID of an Organization resource. */
  idOrganization: z.unknown(),
});

export type GetEnterpriseTransferrableOrganization = z.input<typeof GetEnterpriseTransferrableOrganizationSchema>;
