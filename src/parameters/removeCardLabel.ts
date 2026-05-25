import { z } from 'zod';

export const RemoveCardLabelSchema = z.object({
  /** The ID of the Card */
  id: z.string(),
  /** The ID of the label to remove */
  idLabel: z.string(),
});

export type RemoveCardLabel = z.input<typeof RemoveCardLabelSchema>;
