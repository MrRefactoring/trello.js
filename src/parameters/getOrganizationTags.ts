import { z } from 'zod';
import { TrelloIDSchema } from '../models';

export const GetOrganizationTagsSchema = z.object({
  /** The ID or name of the Organization */
  id: z.union([z.string(), TrelloIDSchema]),
});

export type GetOrganizationTags = z.input<typeof GetOrganizationTagsSchema>;
