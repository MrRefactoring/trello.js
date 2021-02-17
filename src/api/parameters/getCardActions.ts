export interface GetCardActions {
  /** The ID of the Card */
  id: string;
  /** A comma-separated list of [action types](https://developer.atlassian.com/cloud/trello/guides/rest-api/action-types/). */
  filter?: string;
}
