export interface CreateBoardLabel {
  /** The id of the board to update */
  id: string;
  /** The name of the label to be created. 1 to 16384 characters long. */
  name: string;
  /** Sets the color of the new label. Valid values are a label color or `null`. */
  color: string;
}
