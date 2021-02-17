export interface GetMemberCards {
  /** The ID or username of the member */
  id: string;
  /** One of: `all`, `closed`, `none`, `open`, `visible` */
  filter?: string;
}
