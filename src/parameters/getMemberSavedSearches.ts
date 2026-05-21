import { z } from 'zod';

export const GetMemberSavedSearchesSchema = z.object({
  /** The ID or username of the member */
  id: z.string(),
});

export type GetMemberSavedSearches = z.input<typeof GetMemberSavedSearchesSchema>;
