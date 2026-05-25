import { z } from 'zod';

export const AddCardLabelSchema = z.object({
  /** The ID of the Card */
  id: z.string(),
  /** The ID of the label to add */
  value: z.string().optional(),
});

export type AddCardLabel = z.input<typeof AddCardLabelSchema>;
