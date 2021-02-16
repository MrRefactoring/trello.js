export interface StarMemberBoard {
  /** The ID or username of the member */
  id: Record<string, any>;
  /** The ID of the board to star */
  idBoard: Record<string, any>;
  /** The position of the newly starred board. `top`, `bottom`, or a positive float. */
  pos: Record<string, any>;
}
