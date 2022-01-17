export interface GetOrganizationBoards {
  /** The ID or name of the organization */
  id: string;
  /** `all` or a comma-separated list of: `open`, `closed`, `members`, `organization`, `public` */
  filter?: string;
  /**
   * `all` or a comma-separated list of board
   * [fields](https://developer.atlassian.com/cloud/trello/guides/rest-api/object-definitions/)
   */
  fields?: string;
}
