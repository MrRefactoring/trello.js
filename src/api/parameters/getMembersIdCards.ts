export interface GetMembersIdCards {
  /** The ID or username of the member */
  id: Record<string, any>;
  /** One of: `all`, `closed`, `none`, `open`, `visible` */
  filter?: string;
}
