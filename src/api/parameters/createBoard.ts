export interface CreateBoard {
  /** The new name for the board. 1 to 16384 characters long. */
  name: string;
  /** Determines whether to use the default set of labels. */
  defaultLabels?: boolean;
  /** Determines whether to add the default set of lists to a board (To Do, Doing, Done). It is ignored if `idBoardSource` is provided. */
  defaultLists?: boolean;
  /** A new description for the board, 0 to 16384 characters long */
  desc?: string;
  /** The id or name of the team the board should belong to. */
  idOrganization?: string;
  /** The id of a board to copy into the new board. */
  idBoardSource?: string;
  /** To keep cards from the original board pass in the value `cards` */
  keepFromSource?: string;
  /** The Power-Ups that should be enabled on the new board. One of: `all`, `calendar`, `cardAging`, `recap`, `voting`. */
  powerUps?: string;
  /** The permissions level of the board. One of: `org`, `private`, `public`. */
  prefs_permissionLevel?: string;
  /** Who can vote on this board. One of `disabled`, `members`, `observers`, `org`, `public`. */
  prefs_voting?: string;
  /** Who can comment on cards on this board. One of: `disabled`, `members`, `observers`, `org`, `public`. */
  prefs_comments?: string;
  /** Determines what types of members can invite users to join. One of: `admins`, `members`. */
  prefs_invitations?: string;
  /** Determines whether users can join the boards themselves or whether they have to be invited. */
  prefs_selfJoin?: boolean;
  /** Determines whether card covers are enabled. */
  prefs_cardCovers?: boolean;
  /** The id of a custom background or one of: `blue`, `orange`, `green`, `red`, `purple`, `pink`, `lime`, `sky`, `grey`. */
  prefs_background?: string;
  /** Determines the type of card aging that should take place on the board if card aging is enabled. One of: `pirate`, `regular`. */
  prefs_cardAging?: string;
}
