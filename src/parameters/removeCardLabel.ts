import { z } from 'zod';

export const RemoveCardLabelSchema = z.object({
  /** The ID of the Card */
  id: z.unknown(),
  /** The ID of the label to remove */
  idLabel: z.unknown(),
});

export type RemoveCardLabel = z.input<typeof RemoveCardLabelSchema>;
