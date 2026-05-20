import { z } from 'zod';

export const UpdateLabelSchema = z.object({
  /** The new name for the label */
  name: z.string().optional(),
  /**
   * The new color for the label. See:
   * [fields](https://developer.atlassian.com/cloud/trello/guides/rest-api/object-definitions/) for color options
   */
  color: z.unknown().optional(),
  /** The ID of the Label */
  id: z.unknown(),
});

export type UpdateLabel = z.input<typeof UpdateLabelSchema>;
