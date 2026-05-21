import { z } from 'zod';
import { TrelloIDSchema } from '../models';

export const GetEnterpriseBulkTransferrableOrganizationsSchema = z.object({
  /** ID of the Enterprise to retrieve. */
  id: TrelloIDSchema,
  /** An array of IDs of an Organization resource. */
  idOrganizations: z.array(z.unknown()),
});

export type GetEnterpriseBulkTransferrableOrganizations = z.input<
  typeof GetEnterpriseBulkTransferrableOrganizationsSchema
>;
