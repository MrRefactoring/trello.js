import { z } from 'zod';
import { openEnum } from '#/core';

export const UpdateMemberSavedSearchSchema = z.object({
  /** The new name for the saved search */
  name: z.string().optional(),
  /** The new search query */
  query: z.string().optional(),
  /** New position for saves search. `top`, `bottom`, or a positive float. */
  pos: z.union([z.string(), z.number(), openEnum(['top', 'bottom'])]).optional(),
  /** The ID or username of the member */
  id: z.string(),
  /** The ID of the saved search to delete */
  idSearch: z.string(),
});

export type UpdateMemberSavedSearch = z.input<typeof UpdateMemberSavedSearchSchema>;
