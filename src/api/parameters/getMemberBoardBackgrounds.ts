export interface GetMemberBoardBackgrounds {
  /** The ID or username of the member */
  id: Record<string, any>;
  /** One of: `all`, `custom`, `default`, `none`, `premium` */
  filter?: string;
}
