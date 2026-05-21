import { z } from 'zod';
import { TrelloIDSchema } from '../models';

export const GetMemberSavedSearchesSchema = z.object({
  /** The ID or username of the member */
  id: TrelloIDSchema,
});

export type GetMemberSavedSearches = z.input<typeof GetMemberSavedSearchesSchema>;
