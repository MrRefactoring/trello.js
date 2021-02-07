export interface PutBoardsId {
  id: string;
  /** The new name for the board. 1 to 16384 characters long. */
  name?: string;
  /** A new description for the board, 0 to 16384 characters long */
  desc?: string;
  /** Whether the board is closed */
  closed?: boolean;
  /** Whether the acting user is subscribed to the board */
  subscribed?: Record<string, any>;
  /** The id of the team the board should be moved to */
  idOrganization?: string;
  /** One of: org, private, public */
  permissionLevel?: string;
  /** Whether team members can join the board themselves */
  selfJoin?: boolean;
  /** Whether card covers should be displayed on this board */
  cardCovers?: boolean;
  /** Determines whether the Voting Power-Up should hide who voted on cards or not. */
  hideVotes?: boolean;
  /** Who can invite people to this board. One of: admins, members */
  invitations?: string;
  /** Who can vote on this board. One of disabled, members, observers, org, public */
  voting?: string;
  /** Who can comment on cards on this board. One of: disabled, members, observers, org, public */
  comments?: string;
  /** The id of a custom background or one of: blue, orange, green, red, purple, pink, lime, sky, grey */
  background?: string;
  /** One of: pirate, regular */
  cardAging?: string;
  /** Determines whether the calendar feed is enabled or not. */
  calendarFeedEnabled?: boolean;
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
}
