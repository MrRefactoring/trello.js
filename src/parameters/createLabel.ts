import { z } from 'zod';

export const CreateLabelSchema = z.object({
  /** Name for the label */
  name: z.string(),
  /** The color for the label. */
  color: z.unknown(),
  /** The ID of the Board to create the Label on. */
  idBoard: z.string(),
});

export type CreateLabel = z.input<typeof CreateLabelSchema>;
