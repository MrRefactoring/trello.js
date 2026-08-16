import { z } from 'zod';
import { openEnum } from '#/core';

export const GetActionBoardSchema = z.object({
  /** The ID of the action */
  id: z.string(),
  /** `all` or a comma-separated list of board fields */
  fields: z
    .union([
      z.string(),
      z.array(z.string()),
      openEnum([
        'id',
        'name',
        'desc',
        'descData',
        'closed',
        'idMemberCreator',
        'idOrganization',
        'pinned',
        'url',
        'shortUrl',
        'prefs',
        'labelNames',
        'starred',
        'limits',
        'memberships',
        'enterpriseOwned',
      ]),
      z.array(
        openEnum([
          'id',
          'name',
          'desc',
          'descData',
          'closed',
          'idMemberCreator',
          'idOrganization',
          'pinned',
          'url',
          'shortUrl',
          'prefs',
          'labelNames',
          'starred',
          'limits',
          'memberships',
          'enterpriseOwned',
        ]),
      ),
    ])
    .optional(),
});

export type GetActionBoard = z.input<typeof GetActionBoardSchema>;
