import { z } from 'zod';
import { MemberFieldsSchema } from '../models';

export const GetNotificationSchema = z.object({
  /** The ID of the notification */
  id: z.string(),
  /** Whether to include the board object */
  board: z.boolean().optional(),
  /**
   * `all` or a comma-separated list of board
   * [fields](https://developer.atlassian.com/cloud/trello/guides/rest-api/object-definitions/)
   */
  boardFields: z
    .union([
      z.string(),
      z.array(z.string()),
      z.enum([
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
        z.enum([
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
  /** Whether to include the card object */
  card: z.boolean().optional(),
  /**
   * `all` or a comma-separated list of card
   * [fields](https://developer.atlassian.com/cloud/trello/guides/rest-api/object-definitions/)
   */
  cardFields: z
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
  /** Whether to include the display object with the results */
  display: z.boolean().optional(),
  /** Whether to include the entities object with the results */
  entities: z.boolean().optional(),
  /**
   * `all` or a comma-separated list of notification
   * [fields](https://developer.atlassian.com/cloud/trello/guides/rest-api/object-definitions/)
   */
  fields: z
    .union([
      z.string(),
      z.array(z.string()),
      z.enum([
        'id',
        'unread',
        'type',
        'date',
        'dateRead',
        'data',
        'card',
        'board',
        'idMemberCreator',
        'idAction',
        'reactions',
      ]),
      z.array(
        z.enum([
          'id',
          'unread',
          'type',
          'date',
          'dateRead',
          'data',
          'card',
          'board',
          'idMemberCreator',
          'idAction',
          'reactions',
        ]),
      ),
    ])
    .optional(),
  /** Whether to include the list object */
  list: z.boolean().optional(),
  /** Whether to include the member object */
  member: z.boolean().optional(),
  /**
   * `all` or a comma-separated list of member
   * [fields](https://developer.atlassian.com/cloud/trello/guides/rest-api/object-definitions/)
   */
  memberFields: MemberFieldsSchema.optional(),
  /** Whether to include the member object of the creator */
  memberCreator: z.boolean().optional(),
  /**
   * `all` or a comma-separated list of member
   * [fields](https://developer.atlassian.com/cloud/trello/guides/rest-api/object-definitions/)
   */
  memberCreatorFields: MemberFieldsSchema.optional(),
  /** Whether to include the organization object */
  organization: z.boolean().optional(),
  /**
   * `all` or a comma-separated list of organization
   * [fields](https://developer.atlassian.com/cloud/trello/guides/rest-api/object-definitions/)
   */
  organizationFields: z
    .union([z.string(), z.array(z.string()), z.enum(['id', 'name']), z.array(z.enum(['id', 'name']))])
    .optional(),
});

export type GetNotification = z.input<typeof GetNotificationSchema>;
