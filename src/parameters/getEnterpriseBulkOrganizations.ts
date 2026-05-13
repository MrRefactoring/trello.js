import { z } from 'zod';

export const GetEnterpriseBulkOrganizationsSchema = z.object({
  /** ID of the enterprise to retrieve. */
  id: z.unknown(),
  /** An array of IDs of the organizations to be removed from the enterprise. */
  idOrganizations: z.array(z.unknown()),
});

export type GetEnterpriseBulkOrganizations = z.input<typeof GetEnterpriseBulkOrganizationsSchema>;
