import { z } from 'zod';

export const CreateBoardLabelSchema = z.object({
  /** The id of the board to update */
  id: z.string(),
  /** The name of the label to be created. 1 to 16384 characters long. */
  name: z.string(),
  /** Sets the color of the new label. Valid values are a label color or `null`. */
  color: z.string(),
});

export type CreateBoardLabel = z.input<typeof CreateBoardLabelSchema>;
