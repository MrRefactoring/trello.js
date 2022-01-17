export interface GetChecklistBoard {
  /** ID of a checklist. */
  id: string;
  /**
   * `all` or a comma-separated list of board
   * [fields](https://developer.atlassian.com/cloud/trello/guides/rest-api/object-definitions/)
   */
  fields?: string;
}
