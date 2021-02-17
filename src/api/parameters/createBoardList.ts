export interface CreateBoardList {
  /** The ID of the board */
  id: string;
  /** The name of the list to be created. 1 to 16384 characters long. */
  name: string;
  /** Determines the position of the list. Valid values: `top`, `bottom`, or a positive number. */
  pos?: string;
}
