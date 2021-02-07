export interface GetMembersIdActions {
  /** The API key to use */
  key: Record<string, any>;
  /** The API token to use */
  token: Record<string, any>;
  /** The ID or username of the member */
  id: Record<string, any>;
  /** A comma-separated list of [action types](https://developer.atlassian.com/cloud/trello/guides/rest-api/action-types/). */
  filter?: string;
}
