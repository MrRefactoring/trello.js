export interface GetMemberBoards {
  /** The ID or username of the member */
  id: string;
  /** `all` or a comma-separated list of: `closed`, `members`, `open`, `organization`, `public`, `starred` */
  filter?: string;
  /**
   * `all` or a comma-separated list of board
   * [fields](https://developer.atlassian.com/cloud/trello/guides/rest-api/object-definitions/)
   */
  fields?: 'all' | string[];
  /** Which lists to include with the boards. One of: `all`, `closed`, `none`, `open` */
  lists?: string;
  /** Whether to include the Organization object with the Boards */
  organization?: boolean;
  /**
   * `all` or a comma-separated list of organization
   * [fields](https://developer.atlassian.com/cloud/trello/guides/rest-api/object-definitions/)
   */
  organizationFields?: 'all' | string[];
}
