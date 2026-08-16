import { z } from 'zod';
import { openEnum } from '#/core';

export const GetCardListSchema = z.object({
  /** The ID of the Card */
  id: z.string(),
  /**
   * `all` or a comma-separated list of list
   * [fields](https://developer.atlassian.com/cloud/trello/guides/rest-api/object-definitions/)
   */
  fields: z
    .union([
      z.string(),
      z.array(z.string()),
      openEnum([
        'id',
        'name',
        'closed',
        'pos',
        'softLimit',
        'idBoard',
        'subscribed',
        'color',
        'datasource',
        'filter',
        'type',
        'creationMethod',
        'idOrganization',
      ]),
      z.array(
        openEnum([
          'id',
          'name',
          'closed',
          'pos',
          'softLimit',
          'idBoard',
          'subscribed',
          'color',
          'datasource',
          'filter',
          'type',
          'creationMethod',
          'idOrganization',
        ]),
      ),
    ])
    .optional(),
});

export type GetCardList = z.input<typeof GetCardListSchema>;
