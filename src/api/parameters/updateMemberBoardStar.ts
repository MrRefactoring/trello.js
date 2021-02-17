export interface UpdateMemberBoardStar {
  /** The ID or username of the member */
  id: string;
  /** The ID of the board star */
  idStar: string;
  /** New position for the starred board. `top`, `bottom`, or a positive float. */
  pos?: 'top' | 'bottom' | number;
}
