export interface GetBoardsId {
  /** The API key to use */
  key: Record<string, any>;
  /** The API token to use */
  token: Record<string, any>;
  /** This is a nested resource. Read more about actions as nested resources [here](/cloud/trello/guides/rest-api/nested-resources/). */
  actions?: string;
  /** Valid values are one of: `mine` or `none`. */
  boardStars?: string;
  /** This is a nested resource. Read more about cards as nested resources [here](/cloud/trello/guides/rest-api/nested-resources/). */
  cards?: string;
  /** Use with the `cards` param to include card pluginData with the response */
  card_pluginData?: boolean;
  /** This is a nested resource. Read more about checklists as nested resources [here](/cloud/trello/guides/rest-api/nested-resources/). */
  checklists?: string;
  /** This is a nested resource. Read more about custom fields as nested resources [here](#custom-fields-nested-resource). */
  customFields?: boolean;
  /** The fields of the board to be included in the response. Valid values: all or a comma-separated list of: closed, dateLastActivity, dateLastView, desc, descData, idMemberCreator, idOrganization, invitations, invited, labelNames, memberships, name, pinned, powerUps, prefs, shortLink, shortUrl, starred, subscribed, url */
  fields?: string;
  /** This is a nested resource. Read more about labels as nested resources [here](/cloud/trello/guides/rest-api/nested-resources/). */
  labels?: string;
  /** This is a nested resource. Read more about lists as nested resources [here](/cloud/trello/guides/rest-api/nested-resources/). */
  lists?: string;
  /** This is a nested resource. Read more about members as nested resources [here](/cloud/trello/guides/rest-api/nested-resources/). */
  members?: string;
  /** This is a nested resource. Read more about memberships as nested resources [here](/cloud/trello/guides/rest-api/nested-resources/). */
  memberships?: string;
  /** Determines whether the pluginData for this board should be returned. Valid values: true or false. */
  pluginData?: boolean;
  /** This is a nested resource. Read more about organizations as nested resources [here](/cloud/trello/guides/rest-api/nested-resources/). */
  organization?: boolean;
  /** Use with the `organization` param to include organization pluginData with the response */
  organization_pluginData?: boolean;
  myPrefs?: boolean;
  /** Also known as collections, tags, refer to the collection(s) that a Board belongs to. */
  tags?: boolean;
}
