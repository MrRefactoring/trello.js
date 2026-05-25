import { z } from 'zod';

export const CreateCustomFieldOptionSchema = z.object({
  /** ID of the customfield. */
  id: z.string(),
  value: z
    .object({
      text: z.string().optional(),
    })
    .optional(),
  color: z.string().optional(),
  pos: z.union([z.string(), z.number(), z.enum(['top', 'bottom'])]).optional(),
});

export type CreateCustomFieldOption = z.input<typeof CreateCustomFieldOptionSchema>;
