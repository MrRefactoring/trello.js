import { z } from 'zod';

export const DeleteMemberSavedSearchSchema = z.object({
  /** The ID or username of the member */
  id: z.string(),
  /** The ID of the saved search to delete */
  idSearch: z.string(),
});

export type DeleteMemberSavedSearch = z.input<typeof DeleteMemberSavedSearchSchema>;
