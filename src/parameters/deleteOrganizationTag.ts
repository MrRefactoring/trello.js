import { z } from 'zod';

export const DeleteOrganizationTagSchema = z.object({
  /** The ID or name of the organization */
  id: z.string(),
  /** The ID of the tag to delete */
  idTag: z.string(),
});

export type DeleteOrganizationTag = z.input<typeof DeleteOrganizationTagSchema>;
