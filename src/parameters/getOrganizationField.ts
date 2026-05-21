import { z } from 'zod';
import { TrelloIDSchema } from '../models';

export const GetOrganizationFieldSchema = z.object({
  /** The ID or name of the organization */
  id: TrelloIDSchema,
  /** An organization [field](https://developer.atlassian.com/cloud/trello/guides/rest-api/object-definitions/) */
  field: z.union([z.string(), z.enum(['id', 'name'])]),
});

export type GetOrganizationField = z.input<typeof GetOrganizationFieldSchema>;
