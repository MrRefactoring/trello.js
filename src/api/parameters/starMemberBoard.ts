export interface StarMemberBoard {
  /** The ID or username of the member */
  id: string;
  /** The ID of the board to star */
  idBoard: string;
  /** The position of the newly starred board. `top`, `bottom`, or a positive float. */
  pos: 'top' | 'bottom' | number;
}
