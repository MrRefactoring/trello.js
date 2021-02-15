export interface CreateBoardChecklist {
  /** The id of the board to update */
  id: string;
  /** The name of the checklist to be created. 1 to 16384 characters long. */
  name: string;
}
