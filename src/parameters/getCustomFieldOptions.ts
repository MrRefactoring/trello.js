import { z } from 'zod';

export const GetCustomFieldOptionsSchema = z.object({
  /** ID of the customfield. */
  id: z.unknown(),
});

export type GetCustomFieldOptions = z.input<typeof GetCustomFieldOptionsSchema>;
