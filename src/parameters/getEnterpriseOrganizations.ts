import { z } from 'zod';

export const GetEnterpriseOrganizationsSchema = z.object({
  /** ID of the Enterprise to retrieve. */
  id: z.unknown(),
  /** Comma-separated list of organization [fields](/cloud/trello/guides/rest-api/object-definitions/) */
  fields: z.unknown().optional(),
  filter: z.string().optional(),
  /** Any integer greater than and equal to 1. */
  startIndex: z.number().optional(),
  /** Any integer between 0 and 100. */
  count: z.number().optional(),
});

export type GetEnterpriseOrganizations = z.input<typeof GetEnterpriseOrganizationsSchema>;
