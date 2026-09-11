import { z } from 'zod';
import { openEnum } from '#/core';

export const UpdateLabelSchema = z.object({
  /** The new name for the label */
  name: z.string().optional(),
  /**
   * The new color for the label. See:
   * [fields](https://developer.atlassian.com/cloud/trello/guides/rest-api/object-definitions/) for color options
   */
  color: openEnum(['yellow', 'purple', 'blue', 'red', 'green', 'orange', 'black', 'sky', 'pink', 'lime']).optional(),
  /** The ID of the Label */
  id: z.string(),
});

export type UpdateLabel = z.input<typeof UpdateLabelSchema>;
