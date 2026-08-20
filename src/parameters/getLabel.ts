import { z } from 'zod';
import { openEnum } from '#/core';

export const GetLabelSchema = z.object({
  /**
   * All or a comma-separated list of
   * [fields](https://developer.atlassian.com/cloud/trello/guides/rest-api/object-definitions/)
   */
  fields: z
    .union([
      z.string(),
      z.array(z.string()),
      openEnum(['id', 'idBoard', 'name', 'color', 'uses']),
      z.array(openEnum(['id', 'idBoard', 'name', 'color', 'uses'])),
    ])
    .optional(),
  /** The ID of the Label */
  id: z.string(),
});

export type GetLabel = z.input<typeof GetLabelSchema>;
