import { z } from 'zod';

export const GetBoardSchema = z.object({
  /**
   * This is a nested resource. Read more about actions as nested resources
   * [here](https://developer.atlassian.com/cloud/trello/guides/rest-api/nested-resources/).
   */
  actions: z.string().optional(),
  /** Valid values are one of: `mine` or `none`. */
  boardStars: z.union([z.string(), z.enum(['mine', 'none'])]).optional(),
  /**
   * This is a nested resource. Read more about cards as nested resources
   * [here](https://developer.atlassian.com/cloud/trello/guides/rest-api/nested-resources/).
   */
  cards: z.string().optional(),
  /** Use with the `cards` param to include card pluginData with the response */
  cardPluginData: z.boolean().optional(),
  /**
   * This is a nested resource. Read more about checklists as nested resources
   * [here](https://developer.atlassian.com/cloud/trello/guides/rest-api/nested-resources/).
   */
  checklists: z.string().optional(),
  /**
   * This is a nested resource. Read more about custom fields as nested resources
   * [here](#custom-fields-nested-resource).
   */
  customFields: z.boolean().optional(),
  /**
   * The fields of the board to be included in the response. Valid values: all or a comma-separated list of: `closed`,
   * `dateLastActivity`, `dateLastView`, `desc`, `descData`, `idMemberCreator`, `idOrganization`, `invitations`,
   * `invited`, `labelNames`, `memberships`, `name`, `pinned`, `powerUps`, `prefs`, `shortLink`, `shortUrl`,
   * `starred`, `subscribed`, `url`
   */
  fields: z
    .union([
      z.string(),
      z.array(z.string()),
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
      z.array(
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
      ),
    ])
    .optional(),
  /**
   * This is a nested resource. Read more about labels as nested resources
   * [here](https://developer.atlassian.com/cloud/trello/guides/rest-api/nested-resources/).
   */
  labels: z.string().optional(),
  /**
   * This is a nested resource. Read more about lists as nested resources
   * [here](https://developer.atlassian.com/cloud/trello/guides/rest-api/nested-resources/).
   */
  lists: z.string().optional(),
  /**
   * This is a nested resource. Read more about members as nested resources
   * [here](https://developer.atlassian.com/cloud/trello/guides/rest-api/nested-resources/).
   */
  members: z.string().optional(),
  /**
   * This is a nested resource. Read more about memberships as nested resources
   * [here](https://developer.atlassian.com/cloud/trello/guides/rest-api/nested-resources/).
   */
  memberships: z.string().optional(),
  /** Determines whether the pluginData for this board should be returned. Valid values: true or false. */
  pluginData: z.boolean().optional(),
  /**
   * This is a nested resource. Read more about organizations as nested resources
   * [here](https://developer.atlassian.com/cloud/trello/guides/rest-api/nested-resources/).
   */
  organization: z.boolean().optional(),
  /** Use with the `organization` param to include organization pluginData with the response */
  organizationPluginData: z.boolean().optional(),
  myPrefs: z.boolean().optional(),
  /** Also known as collections, tags, refer to the collection(s) that a Board belongs to. */
  tags: z.boolean().optional(),
  id: z.string(),
});

export type GetBoard = z.input<typeof GetBoardSchema>;
