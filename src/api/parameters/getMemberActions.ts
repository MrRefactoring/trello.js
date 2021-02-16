export interface GetMemberActions {
  /** The ID or username of the member */
  id: string;
  /** A comma-separated list of [action types](https://developer.atlassian.com/cloud/trello/guides/rest-api/action-types/). */
  filter?: string;
}
