export interface CreateCardLabel {
  /** The ID of the Card */
  id: string;
  /** A valid label color or `null`. See [labels](https://developer.atlassian.com/cloud/trello/guides/rest-api/object-definitions/) */
  color: string;
  /** A name for the label */
  name?: string;
}
