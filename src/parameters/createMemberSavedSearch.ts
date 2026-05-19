import { z } from 'zod';

export const CreateMemberSavedSearchSchema = z.object({
  /** The name for the saved search */
  name: z.string(),
  /** The search query */
  query: z.string(),
  /** The position of the saved search. `top`, `bottom`, or a positive float. */
  pos: z.unknown(),
  /** The ID or username of the member */
  id: z.unknown(),
});

export type CreateMemberSavedSearch = z.input<typeof CreateMemberSavedSearchSchema>;
