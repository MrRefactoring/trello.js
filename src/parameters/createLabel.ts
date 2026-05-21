import { z } from 'zod';

export const CreateLabelSchema = z.object({
  /** Name for the label */
  name: z.string(),
  /** The color for the label. */
  color: z.union([
    z.string(),
    z.enum(['yellow', 'purple', 'blue', 'red', 'green', 'orange', 'black', 'sky', 'pink', 'lime']),
  ]),
  /** The ID of the Board to create the Label on. */
  idBoard: z.string(),
});

export type CreateLabel = z.input<typeof CreateLabelSchema>;
