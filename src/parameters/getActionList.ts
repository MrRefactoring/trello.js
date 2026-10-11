import { z } from 'zod';
import { openEnum } from '#/core';

export const GetActionListSchema = z.object({
  /** The ID of the action */
  id: z.string(),
  /** `all` or a comma-separated list of list fields */
  fields: z
    .union([
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

export type GetActionList = z.input<typeof GetActionListSchema>;
