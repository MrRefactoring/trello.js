import { z } from 'zod';

export const DeleteCustomFieldOptionSchema = z.object({
  /** ID of the customfielditem. */
  id: z.string(),
  /** ID of the customfieldoption to retrieve. */
  idCustomFieldOption: z.string(),
});

export type DeleteCustomFieldOption = z.input<typeof DeleteCustomFieldOptionSchema>;
