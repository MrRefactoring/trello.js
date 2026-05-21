import { z } from 'zod';
import { TrelloIDSchema } from '../models';

export const GetEnterpriseTransferrableOrganizationSchema = z.object({
  /** ID of the Enterprise to retrieve. */
  id: TrelloIDSchema,
  /** An ID of an Organization resource. */
  idOrganization: TrelloIDSchema,
});

export type GetEnterpriseTransferrableOrganization = z.input<typeof GetEnterpriseTransferrableOrganizationSchema>;
