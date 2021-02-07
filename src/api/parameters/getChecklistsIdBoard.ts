export interface GetChecklistsIdBoard {
  /** The API key to use */
  key: Record<string, any>;
  /** The API token to use */
  token: Record<string, any>;
  /** ID of a checklist. */
  id: Record<string, any>;
  /** `all` or a comma-separated list of board [fields](/cloud/trello/guides/rest-api/object-definitions/) */
  fields?: string;
}
