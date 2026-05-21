import { z } from 'zod';
import { TrelloIDSchema } from '../models';

export const UpdateLabelSchema = z.object({
  /** The new name for the label */
  name: z.string().optional(),
  /**
   * The new color for the label. See:
   * [fields](https://developer.atlassian.com/cloud/trello/guides/rest-api/object-definitions/) for color options
   */
  color: z
    .union([z.string(), z.enum(['yellow', 'purple', 'blue', 'red', 'green', 'orange', 'black', 'sky', 'pink', 'lime'])])
    .optional(),
  /** The ID of the Label */
  id: TrelloIDSchema,
});

export type UpdateLabel = z.input<typeof UpdateLabelSchema>;
