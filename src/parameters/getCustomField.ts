import { z } from 'zod';

export const GetCustomFieldSchema = z.object({
  /** ID of the Custom Field. */
  id: z.string(),
});

export type GetCustomField = z.input<typeof GetCustomFieldSchema>;
