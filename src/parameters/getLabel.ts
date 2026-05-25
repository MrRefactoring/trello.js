import { z } from 'zod';

export const GetLabelSchema = z.object({
  /**
   * All or a comma-separated list of
   * [fields](https://developer.atlassian.com/cloud/trello/guides/rest-api/object-definitions/)
   */
  fields: z
    .union([
      z.string(),
      z.array(z.string()),
      z.enum(['id', 'idBoard', 'name', 'color', 'uses']),
      z.array(z.enum(['id', 'idBoard', 'name', 'color', 'uses'])),
    ])
    .optional(),
  /** The ID of the Label */
  id: z.string(),
});

export type GetLabel = z.input<typeof GetLabelSchema>;
