import { z } from 'zod';
import { TrelloIDSchema } from '../models';

export const CreateCardLabelSchema = z.object({
  /** The ID of the Card */
  id: TrelloIDSchema,
  /**
   * A valid label color or `null`. See
   * [labels](https://developer.atlassian.com/cloud/trello/guides/rest-api/object-definitions/)
   */
  color: z.string(),
  /** A name for the label */
  name: z.string().optional(),
});

export type CreateCardLabel = z.input<typeof CreateCardLabelSchema>;
