import { z } from 'zod';

export const CreateCustomFieldOptionSchema = z.object({
  /** ID of the customfield. */
  id: z.unknown(),
  value: z
    .object({
      text: z.string().optional(),
    })
    .optional(),
  color: z.string().optional(),
  pos: z.unknown().optional(),
});

export type CreateCustomFieldOption = z.input<typeof CreateCustomFieldOptionSchema>;
