import { z } from 'zod';

export const GetCustomFieldOptionSchema = z.object({
  /** ID of the customfielditem. */
  id: z.unknown(),
  /** ID of the customfieldoption to retrieve. */
  idCustomFieldOption: z.unknown(),
});

export type GetCustomFieldOption = z.input<typeof GetCustomFieldOptionSchema>;
