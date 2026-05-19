import { z } from 'zod';

export const GetOrganizationFieldSchema = z.object({
  /** The ID or name of the organization */
  id: z.unknown(),
  /** An organization [field](/cloud/trello/guides/rest-api/object-definitions/) */
  field: z.unknown(),
});

export type GetOrganizationField = z.input<typeof GetOrganizationFieldSchema>;
