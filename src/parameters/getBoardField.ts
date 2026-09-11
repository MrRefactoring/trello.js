import { z } from 'zod';
import { openEnum } from '#/core';

export const GetBoardFieldSchema = z.object({
  /** The ID of the board. */
  id: z.string(),
  /**
   * The field you'd like to receive. Valid values: closed, dateLastActivity, dateLastView, desc, descData,
   * idMemberCreator, idOrganization, invitations, invited, labelNames, memberships, name, pinned, powerUps, prefs,
   * shortLink, shortUrl, starred, subscribed, url.
   */
  field: openEnum([
    'closed',
    'dateLastActivity',
    'dateLastView',
    'desc',
    'descData',
    'idMemberCreator',
    'idOrganization',
    'invitations',
    'invited',
    'labelNames',
    'memberships',
    'name',
    'pinned',
    'powerUps',
    'prefs',
    'shortLink',
    'shortUrl',
    'starred',
    'subscribed',
    'url',
  ]),
});

export type GetBoardField = z.input<typeof GetBoardFieldSchema>;
