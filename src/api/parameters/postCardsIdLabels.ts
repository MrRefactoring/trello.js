export interface PostCardsIdLabels {
  /** The ID of the Card */
  id: Record<string, any>;
  /** A valid label color or `null`. See [labels](/cloud/trello/guides/rest-api/object-definitions/) */
  color: string;
  /** A name for the label */
  name?: string;
}
