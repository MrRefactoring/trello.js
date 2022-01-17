export interface GetLabel {
  /** The ID of the Label */
  id: string;
  /** All or a comma-separated list of [fields](https://developer.atlassian.com/cloud/trello/guides/rest-api/object-definitions/) */
  fields?: string;
}
