import { z } from 'zod';

export const GetMemberSavedSearchSchema = z.object({
  /** The ID or username of the member */
  id: z.string(),
  /** The ID of the saved search to delete */
  idSearch: z.string(),
});

export type GetMemberSavedSearch = z.input<typeof GetMemberSavedSearchSchema>;
