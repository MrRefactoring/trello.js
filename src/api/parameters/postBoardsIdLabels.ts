export interface PostBoardsIdLabels {
  /** The API key to use */
  key: Record<string, any>;
  /** The API token to use */
  token: Record<string, any>;
  /** The id of the board to update */
  id: string;
  /** The name of the label to be created. 1 to 16384 characters long. */
  name: string;
  /** Sets the color of the new label. Valid values are a label color or `null`. */
  color: string;
}
