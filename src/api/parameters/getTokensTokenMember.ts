export interface GetTokensTokenMember {
  /** The API key to use */
  key: Record<string, any>;
  /** The API token to use */
  token: Record<string, any>;
  token: string;
  /** `all` or a comma-separated list of valid fields for [Member Object](/cloud/trello/guides/rest-api/object-definitions/). */
  fields?: Record<string, any>;
  body?: {};
}
