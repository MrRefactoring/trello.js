import { z } from 'zod';

export const GetListSchema = z.object({
  /** `all` or a comma separated list of List field names. */
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
  /** The ID of the list */
  id: z.string(),
});

export type GetList = z.input<typeof GetListSchema>;
