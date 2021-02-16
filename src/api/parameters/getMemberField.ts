export interface GetMemberField {
  /** The ID or username of the member */
  id: string;
  /** One of the member [fields](https://developer.atlassian.com/cloud/trello/guides/rest-api/object-definitions/) */
  field: string;
}
