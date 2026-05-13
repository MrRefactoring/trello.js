import { z } from 'zod';

export const DeleteCustomFieldOptionSchema = z.object({
  /** ID of the customfielditem. */
  id: z.unknown(),
  /** ID of the customfieldoption to retrieve. */
  idCustomFieldOption: z.unknown(),
});

export type DeleteCustomFieldOption = z.input<typeof DeleteCustomFieldOptionSchema>;
