export interface GetCardBoard {
  /** The ID of the Card */
  id: string;
  /**
   * `all` or a comma-separated list of board
   * [fields](https://developer.atlassian.com/cloud/trello/guides/rest-api/object-definitions/#board-object)
   */
  fields?: string;
}
