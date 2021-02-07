export interface PutBoardsIdMembersIdmember {
  /** The API key to use */
  key: Record<string, any>;
  /** The API token to use */
  token: Record<string, any>;
  /** One of: admin, normal, observer. Determines the type of member this user will be on the board. */
  type: string;
  /** Optional param that allows organization admins to add multi-board guests onto a board. */
  allowBillableGuest?: boolean;
}
