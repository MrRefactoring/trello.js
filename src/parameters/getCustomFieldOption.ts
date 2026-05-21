import { z } from 'zod';

export const GetCustomFieldOptionSchema = z.object({
  /** ID of the customfielditem. */
  id: z.string(),
  /** ID of the customfieldoption to retrieve. */
  idCustomFieldOption: z.string(),
});

export type GetCustomFieldOption = z.input<typeof GetCustomFieldOptionSchema>;
