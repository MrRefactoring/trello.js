import { z } from 'zod';

export const DeleteLabelSchema = z.object({
  /** The ID of the Label */
  id: z.string(),
});

export type DeleteLabel = z.input<typeof DeleteLabelSchema>;
