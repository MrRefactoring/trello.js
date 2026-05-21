import { z } from 'zod';
import { TrelloIDSchema } from '../models';

export const GetNotificationCardSchema = z.object({
  /** The ID of the notification */
  id: TrelloIDSchema,
  /**
   * `all` or a comma-separated list of card
   * [fields](https://developer.atlassian.com/cloud/trello/guides/rest-api/object-definitions/)
   */
  fields: z
    .union([
      z.string(),
      z.array(z.string()),
      z.enum([
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
        z.enum([
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
});

export type GetNotificationCard = z.input<typeof GetNotificationCardSchema>;
