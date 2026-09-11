import { z } from 'zod';
import { openEnum } from '#/core';

export const GetBoardListsSchema = z.object({
  /** Filter to apply to Cards. */
  cards: openEnum(['all', 'closed', 'none', 'open']).optional(),
  /**
   * `all` or a comma-separated list of card
   * [fields](https://developer.atlassian.com/cloud/trello/guides/rest-api/object-definitions/#card-object)
   */
  cardFields: z
    .union([
      openEnum([
        'id',
        'address',
        'badges',
        'checkItemStates',
        'closed',
        'coordinates',
        'creationMethod',
        'dueComplete',
        'dateLastActivity',
        'desc',
        'descData',
        'due',
        'dueReminder',
        'idBoard',
        'idChecklists',
        'idLabels',
        'idList',
        'idMembers',
        'idMembersVoted',
        'idShort',
        'idAttachmentCover',
        'labels',
        'limits',
        'locationName',
        'manualCoverAttachment',
        'name',
        'pos',
        'shortLink',
        'shortUrl',
        'subscribed',
        'url',
        'cover',
        'isTemplate',
      ]),
      z.array(
        openEnum([
          'id',
          'address',
          'badges',
          'checkItemStates',
          'closed',
          'coordinates',
          'creationMethod',
          'dueComplete',
          'dateLastActivity',
          'desc',
          'descData',
          'due',
          'dueReminder',
          'idBoard',
          'idChecklists',
          'idLabels',
          'idList',
          'idMembers',
          'idMembersVoted',
          'idShort',
          'idAttachmentCover',
          'labels',
          'limits',
          'locationName',
          'manualCoverAttachment',
          'name',
          'pos',
          'shortLink',
          'shortUrl',
          'subscribed',
          'url',
          'cover',
          'isTemplate',
        ]),
      ),
    ])
    .optional(),
  /** Filter to apply to Lists */
  filter: openEnum(['all', 'closed', 'none', 'open']).optional(),
  /**
   * `all` or a comma-separated list of list
   * [fields](https://developer.atlassian.com/cloud/trello/guides/rest-api/object-definitions/)
   */
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
  /** The ID of the board */
  id: z.string(),
});

export type GetBoardLists = z.input<typeof GetBoardListsSchema>;
