import { z } from 'zod';
import { TrelloIDSchema } from '../models';

export const GetEnterpriseBulkOrganizationsSchema = z.object({
  /** ID of the enterprise to retrieve. */
  id: TrelloIDSchema,
  /** An array of IDs of the organizations to be removed from the enterprise. */
  idOrganizations: z.array(z.unknown()),
});

export type GetEnterpriseBulkOrganizations = z.input<typeof GetEnterpriseBulkOrganizationsSchema>;
