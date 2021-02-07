export interface GetMembersIdBoards {
  /** The ID or username of the member */
  id: Record<string, any>;
  /** `all` or a comma-separated list of: `closed`, `members`, `open`, `organization`, `public`, `starred` */
  filter?: string;
  /** `all` or a comma-separated list of board [fields](/cloud/trello/guides/rest-api/object-definitions/) */
  fields?: Record<string, any>;
  /** Which lists to include with the boards. One of: `all`, `closed`, `none`, `open` */
  lists?: string;
  /** Whether to include the Organization object with the Boards */
  organization?: boolean;
  /** `all` or a comma-separated list of organization [fields](/cloud/trello/guides/rest-api/object-definitions/) */
  organization_fields?: Record<string, any>;
}
