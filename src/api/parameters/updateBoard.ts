export interface UpdateBoard {
  id: string;
  /** The new name for the board. 1 to 16384 characters long. */
  name?: string;
  /** A new description for the board | 0 to 16384 characters long */
  desc?: string;
  /** Whether the board is closed */
  closed?: boolean;
  /** Whether the acting user is subscribed to the board */
  subscribed?: boolean;
  /** The id of the team the board should be moved to */
  idOrganization?: string;

  prefs?: {
    /** One of: org, private, public */
    permissionLevel?: 'org' | 'private' | 'public';
    /** Whether team members can join the board themselves */
    selfJoin?: boolean;
    /** Whether card covers should be displayed on this board */
    cardCovers?: boolean;
    /** Determines whether the Voting Power-Up should hide who voted on cards or not. */
    hideVotes?: boolean;
    /** Who can invite people to this board. One of: admins, members */
    invitations?: 'admins' | 'members';
    /** Who can vote on this board. One of disabled, members, observers, org, public */
    voting?: 'disabled' | 'members' | 'observers' | 'org' | 'public';
    /** Who can comment on cards on this board. One of: disabled, members, observers, org, public */
    comments?: 'disabled' | 'members' | 'observers' | 'org' | 'public';
    /** The id of a custom background or one of: blue, orange, green, red, purple, pink, lime, sky, grey */
    background?: 'blue' | 'orange' | 'green' | 'red' | 'purple' | 'pink' | 'lime' | 'sky' | 'grey';
    /** One of: pirate, regular */
    cardAging?: 'pirate' | 'regular';
    /** Determines whether the calendar feed is enabled or not. */
    calendarFeedEnabled?: boolean;
  };

  labelNames?: {
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
   * @deprecated Use `prefs.permissionLevel` instead.
   *
   *   One of: org | private | public
   */
  permissionLevel?: string;
  /**
   * @deprecated Use `prefs.selfJoin` instead.
   *
   *   Whether team members can join the board themselves
   */
  selfJoin?: boolean;
  /**
   * @deprecated Use `prefs.cardCovers` instead.
   *
   *   Whether card covers should be displayed on this board
   */
  cardCovers?: boolean;
  /**
   * @deprecated Use `prefs.hideVotes` instead.
   *
   *   Determines whether the Voting Power-Up should hide who voted on cards or not.
   */
  hideVotes?: boolean;
  /**
   * @deprecated Use `prefs.invitations` instead.
   *
   *   Who can invite people to this board. One of: admins | members
   */
  invitations?: string;
  /**
   * @deprecated Use `prefs.voting` instead.
   *
   *   Who can vote on this board. One of disabled | members | observers | org | public
   */
  voting?: string;
  /**
   * @deprecated Use `prefs.comments` instead.
   *
   *   Who can comment on cards on this board. One of: disabled | members | observers | org | public
   */
  comments?: string;
  /**
   * @deprecated Use `prefs.background` instead.
   *
   *   The id of a custom background or one of: blue | orange | green | red | purple | pink | lime | sky | grey
   */
  background?: string;
  /**
   * @deprecated Use `prefs.cardAging` instead.
   *
   *   One of: pirate | regular
   */
  cardAging?: string;
  /**
   * @deprecated Use `prefs.calendarFeedEnabled` instead.
   *
   *   Determines whether the calendar feed is enabled or not.
   */
  calendarFeedEnabled?: boolean;

  /**
   * @deprecated Use `labelNames.green` instead.
   *
   *   Name for the green label. 1 to 16384 characters long
   */
  green?: string;
  /**
   * @deprecated Use `labelNames.yellow` instead.
   *
   *   Name for the yellow label. 1 to 16384 characters long
   */
  yellow?: string;
  /**
   * @deprecated Use `labelNames.orange` instead.
   *
   *   Name for the orange label. 1 to 16384 characters long
   */
  orange?: string;
  /**
   * @deprecated Use `labelNames.red` instead.
   *
   *   Name for the red label. 1 to 16384 characters long
   */
  red?: string;
  /**
   * @deprecated Use `labelNames.purple` instead.
   *
   *   Name for the purple label. 1 to 16384 characters long
   */
  purple?: string;
  /**
   * @deprecated Use `labelNames.blue` instead.
   *
   *   Name for the blue label. 1 to 16384 characters long
   */
  blue?: string;
}
