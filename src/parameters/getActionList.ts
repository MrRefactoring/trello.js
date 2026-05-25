import { z } from 'zod';

export const GetActionListSchema = z.object({
  /** The ID of the action */
  id: z.string(),
  /** `all` or a comma-separated list of list fields */
  fields: z
    .union([
      z.string(),
      z.array(z.string()),
      z.enum([
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
        z.enum([
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
