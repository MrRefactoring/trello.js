import { z } from 'zod';
import { TrelloIDSchema } from '../models';

export const SearchMembersSchema = z.object({
  /** Search query 1 to 16384 characters long */
  query: z.string().max(16394, 'query must be at most 16394 characters'),
  /** The maximum number of results to return. Maximum of 20. */
  limit: z.number().optional(),
  idBoard: TrelloIDSchema.optional(),
  idOrganization: TrelloIDSchema.optional(),
  onlyOrgMembers: z.boolean().optional(),
});

export type SearchMembers = z.input<typeof SearchMembersSchema>;
