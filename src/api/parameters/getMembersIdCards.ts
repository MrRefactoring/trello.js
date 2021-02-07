export interface GetMembersIdCards {
  /** The API key to use */
  key: Record<string, any>;
  /** The API token to use */
  token: Record<string, any>;
  /** The ID or username of the member */
  id: Record<string, any>;
  /** One of: `all`, `closed`, `none`, `open`, `visible` */
  filter?: string;
}
