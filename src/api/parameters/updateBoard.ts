export interface UpdateBoard {
  id: string;
  /** The new name for the board. 1 to 16384 characters long. */
  name?: string;
  /** A new description for the board, 0 to 16384 characters long. */
  desc?: string;
  /** Whether the board is closed. */
  closed?: boolean;
  /** Whether the acting user is subscribed to the board. */
  subscribed?: boolean;
  /** The id of the Workspace the board should be moved to. */
  idOrganization?: string;

  preferences: {
    /** One of: org, private, public. */
    permissionLevel?: 'org' | 'private' | 'public';
    /** Whether Workspace members can join the board themselves. */
    selfJoin?: boolean;
    /** Whether card covers should be displayed on this board. */
    cardCovers?: boolean;
    /** Determines whether the Voting Power-Up should hide who voted on cards or not. */
    hideVotes?: boolean;
    /** Who can invite people to this board. One of: admins, members. */
    invitations?: 'admins' | 'members';
    /** Who can vote on this board. One of disabled, members, observers, org, public. */
    voting?: 'disabled' | 'members' | 'observers' | 'org' | 'public';
    /** Who can comment on cards on this board. One of: disabled, members, observers, org, public. */
    comments?: 'disabled' | 'members' | 'observers' | 'org' | 'public';
    /** The id of a custom background or one of: blue, orange, green, red, purple, pink, lime, sky, grey. */
    background?: 'blue' | 'orange' | 'green' | 'red' | 'purple' | 'pink' | 'lime' | 'sky' | 'grey';
    /** One of: pirate, regular. */
    cardAging?: 'pirate' | 'regular';
    /** Determines whether the calendar feed is enabled or not. */
    calendarFeedEnabled?: boolean;
  };

  labelNames: {
    /** Name for the green label. 1 to 16384 characters long */
    green?: string;
    /** Name for the yellow label. 1 to 16384 characters long */
    yellow?: string;
    /** Name for the orange label. 1 to 16384 characters long */
    orange?: string;
    /** Name for the red label. 1 to 16384 characters long */
    red?: string;
    /** Name for the purple label. 1 to 16384 characters long */
    purple?: string;
    /** Name for the blue label. 1 to 16384 characters long */
    blue?: string;
  };

  /**
   * @deprecated Use `preferences.permissionLevel`.
   *
   * One of: org, private, public.
   */
  prefsPermissionLevel?: string;

  /**
   * @deprecated Use `preferences.selfJoin`.
   *
   * Whether Workspace members can join the board themselves.
   */
  prefsSelfJoin?: boolean;

  /**
   * @deprecated Use `preferences.cardCovers`.
   *
   * Whether card covers should be displayed on this board.
   */
  prefsCardCovers?: boolean;

  /**
   * @deprecated Use `preferences.hideVotes`.
   *
   * Determines whether the Voting Power-Up should hide who voted on cards or not.
   */
  prefsHideVotes?: boolean;

  /**
   * @deprecated Use `preferences.invitations`.
   *
   * Who can invite people to this board. One of: admins, members.
   */
  prefsInvitations?: string;

  /**
   * @deprecated Use `preferences.voting`.
   *
   * Who can vote on this board. One of disabled, members, observers, org, public.
   */
  prefsVoting?: string;

  /**
   * @deprecated Use `preferences.comments`.
   *
   * Who can comment on cards on this board. One of: disabled, members, observers, org, public.
   */
  prefsComments?: string;

  /**
   * @deprecated Use `preferences.background`.
   *
   * The id of a custom background or one of: blue, orange, green, red, purple, pink, lime, sky, grey.
   */
  prefsBackground?: string;

  /**
   * @deprecated Use `preferences.cardAging`
   *
   * One of: pirate, regular.
   */
  prefsCardAging?: string;

  /**
   * @deprecated Use `preferences.calendarFeedEnabled`.
   *
   * Determines whether the calendar feed is enabled or not.
   */
  prefsCalendarFeedEnabled?: boolean;

  /**
   * @deprecated Use `labelNames.green`.
   *
   * Name for the green label. 1 to 16384 characters long.
   */
  green?: string;

  /**
   * @deprecated Use `labelNames.yellow`.
   *
   * Name for the yellow label. 1 to 16384 characters long.
   */
  yellow?: string;

  /**
   * @deprecated Use `labelNames.orange`.
   *
   * Name for the orange label. 1 to 16384 characters long.
   */
  orange?: string;

  /**
   * @deprecated Use `labelNames.red`.
   *
   * Name for the red label. 1 to 16384 characters long.
   */
  red?: string;

  /**
   * @deprecated Use `labelNames.purple`.
   *
   * Name for the purple label. 1 to 16384 characters long.
   */
  purple?: string;

  /**
   * @deprecated Use `labelNames.blue`.
   *
   * Name for the blue label. 1 to 16384 characters long.
   */
  blue?: string;
}
