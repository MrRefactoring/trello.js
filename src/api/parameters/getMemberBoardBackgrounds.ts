export interface GetMemberBoardBackgrounds {
  /** The ID or username of the member */
  id: string;
  /** One of: `all`, `custom`, `default`, `none`, `premium` */
  filter?: string;
}
