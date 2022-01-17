export interface GetListBoard {
  /** The ID of the list */
  id: string;
  /**
   * `all` or a comma-separated list of board
   * [fields](https://developer.atlassian.com/cloud/trello/guides/rest-api/object-definitions/#board-object)
   */
  fields?: string;
}
