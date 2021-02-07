export interface GetCardsIdBoard {
  /** The API key to use */
  key: Record<string, any>;
  /** The API token to use */
  token: Record<string, any>;
  /** The ID of the Card */
  id: Record<string, any>;
  /** `all` or a comma-separated list of board [fields](/cloud/trello/guides/rest-api/object-definitions/#board-object) */
  fields?: string;
}
