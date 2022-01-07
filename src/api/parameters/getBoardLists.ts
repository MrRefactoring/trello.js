export interface GetBoardLists {
  /** The ID of the board */
  id: string;
  /** Filter to apply to Cards. */
  cards?: string[];
  /**
   * `all` or a comma-separated list of card
   * [fields](https://developer.atlassian.com/cloud/trello/guides/rest-api/object-definitions/#card-object)
   */
  cardFields?: string;
  /** Filter to apply to Lists */
  filter?: string;
  /**
   * `all` or a comma-separated list of list
   * [fields](https://developer.atlassian.com/cloud/trello/guides/rest-api/object-definitions/)
   */
  fields?: string;
}
