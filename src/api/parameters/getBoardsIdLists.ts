export interface GetBoardsIdLists {
  /** The API key to use */
  key: Record<string, any>;
  /** The API token to use */
  token: Record<string, any>;
  /** Filter to apply to Cards. */
  cards?: Record<string, any>;
  /** `all` or a comma-separated list of card [fields](/cloud/trello/guides/rest-api/object-definitions/#card-object) */
  card_fields?: string;
  /** Filter to apply to Lists */
  filter?: string;
  /** `all` or a comma-separated list of list [fields](/cloud/trello/guides/rest-api/object-definitions/) */
  fields?: string;
}
