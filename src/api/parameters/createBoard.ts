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

  preferences?: {
    /** The permissions level of the board. One of: `org`, `private`, `public`. */
    permissionLevel?: 'org' | 'private' | 'public';
    /** Who can vote on this board. One of `disabled`, `members`, `observers`, `org`, `public`. */
    voting?: 'disabled' | 'members' | 'observers' | 'org' | 'public';
    /** Who can comment on cards on this board. One of: `disabled`, `members`, `observers`, `org`, `public`. */
    comments?: 'disabled' | 'members' | 'observers' | 'org' | 'public';
    /** Determines what types of members can invite users to join. One of: `admins`, `members`. */
    invitations?: 'admins' | 'members';
    /** Determines whether users can join the boards themselves or whether they have to be invited. */
    selfJoin?: boolean;
    /** Determines whether card covers are enabled. */
    cardCovers?: boolean;
    /** The id of a custom background or one of: `blue`, `orange`, `green`, `red`, `purple`, `pink`, `lime`, `sky`, `grey`. */
    background?: 'blue' | 'orange' | 'green' | 'red' | 'purple' | 'pink' | 'lime' | 'sky' | 'grey';
    /** Determines the type of card aging that should take place on the board if card aging is enabled. One of: `pirate`, `regular`. */
    cardAging?: 'pirate' | 'regular';
  };

  /**
   * @deprecated Use `preferences.permissionLevel`
   *
   * The permissions level of the board. One of: `org`, `private`, `public`.
   */
  prefsPermissionLevel?: string;

  /**
   * @deprecated Use `preferences.voting`
   *
   * Who can vote on this board. One of `disabled`, `members`, `observers`, `org`, `public`.
   */
  prefsVoting?: string;

  /**
   * @deprecated Use `preferences.comments`
   *
   * Who can comment on cards on this board. One of: `disabled`, `members`, `observers`, `org`, `public`.
   */
  prefsComments?: string;

  /**
   * @deprecated Use `preferences.invitation`
   *
   * Determines what types of members can invite users to join. One of: `admins`, `members`.
   */
  prefsInvitations?: string;

  /**
   * @deprecated Use `preferences.selfJoin`
   *
   * Determines whether users can join the boards themselves or whether they have to be invited.
   */
  prefsSelfJoin?: boolean;

  /**
   *  @deprecated Use `preferences.cardCovers`
   *
   * Determines whether card covers are enabled.
   */
  prefsCardCovers?: boolean;

  /**
   * @deprecated Use `preferences.background`
   *
   * The id of a custom background or one of: `blue`, `orange`, `green`, `red`, `purple`, `pink`, `lime`, `sky`, `grey`.
   */
  prefsBackground?: string;

  /**
   * @deprecated Use `preferences.cardAging`
   *
   * Determines the type of card aging that should take place on the board if card aging is enabled. One of: `pirate`, `regular`.
   */
  prefsCardAging?: string;
}
