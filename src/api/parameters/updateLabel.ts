export interface UpdateLabel {
  /** The ID of the Label */
  id: string;
  /** The new name for the label */
  name?: string;
  /**
   * The new color for the label. See:
   * [fields](https://developer.atlassian.com/cloud/trello/guides/rest-api/object-definitions/) for color options
   */
  color?: string;
}
