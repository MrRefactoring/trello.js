import { z } from 'zod';

export const AddCardLabelSchema = z.object({
  /** The ID of the Card */
  id: z.unknown(),
  /** The ID of the label to add */
  value: z.unknown().optional(),
});

export type AddCardLabel = z.input<typeof AddCardLabelSchema>;
