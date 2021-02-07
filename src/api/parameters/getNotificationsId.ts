export interface GetNotificationsId {
  /** The ID of the notification */
  id: Record<string, any>;
  /** Whether to include the board object */
  board?: boolean;
  /** `all` or a comma-separated list of board [fields](/cloud/trello/guides/rest-api/object-definitions/) */
  board_fields?: Record<string, any>;
  /** Whether to include the card object */
  card?: boolean;
  /** `all` or a comma-separated list of card [fields](/cloud/trello/guides/rest-api/object-definitions/) */
  card_fields?: Record<string, any>;
  /** Whether to include the display object with the results */
  display?: boolean;
  /** Whether to include the entities object with the results */
  entities?: boolean;
  /** `all` or a comma-separated list of notification [fields](/cloud/trello/guides/rest-api/object-definitions/) */
  fields?: Record<string, any>;
  /** Whether to include the list object */
  list?: boolean;
  /** Whether to include the member object */
  member?: boolean;
  /** `all` or a comma-separated list of member [fields](/cloud/trello/guides/rest-api/object-definitions/) */
  member_fields?: Record<string, any>;
  /** Whether to include the member object of the creator */
  memberCreator?: boolean;
  /** `all` or a comma-separated list of member [fields](/cloud/trello/guides/rest-api/object-definitions/) */
  memberCreator_fields?: Record<string, any>;
  /** Whether to include the organization object */
  organization?: boolean;
  /** `all` or a comma-separated list of organization [fields](/cloud/trello/guides/rest-api/object-definitions/) */
  organization_fields?: Record<string, any>;
}
