export interface AddMemberToBoard {
  /** The id of the board to update */
  id: string;
  /** The id of the member to add to the board. */
  idMember: string;
  /** One of: admin, normal, observer. Determines the type of member this user will be on the board. */
  type: string;
  /** Optional param that allows organization admins to add multi-board guests onto a board. */
  allowBillableGuest?: boolean;
}
