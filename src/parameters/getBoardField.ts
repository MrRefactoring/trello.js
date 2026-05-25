import { z } from 'zod';

export const GetBoardFieldSchema = z.object({
  /** The ID of the board. */
  id: z.string(),
  /**
   * The field you'd like to receive. Valid values: closed, dateLastActivity, dateLastView, desc, descData,
   * idMemberCreator, idOrganization, invitations, invited, labelNames, memberships, name, pinned, powerUps, prefs,
   * shortLink, shortUrl, starred, subscribed, url.
   */
  field: z.union([
    z.string(),
    z.enum([
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
  ]),
});

export type GetBoardField = z.input<typeof GetBoardFieldSchema>;
