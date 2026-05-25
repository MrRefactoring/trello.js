import { z } from 'zod';

export const DeleteCustomFieldSchema = z.object({
  /** ID of the Custom Field. */
  id: z.string(),
});

export type DeleteCustomField = z.input<typeof DeleteCustomFieldSchema>;
