export interface GetOrganizationsIdBoards {
  /** The API key to use */
  key: Record<string, any>;
  /** The API token to use */
  token: Record<string, any>;
  /** The ID or name of the organization */
  id: Record<string, any>;
  /** `all` or a comma-separated list of: `open`, `closed`, `members`, `organization`, `public` */
  filter?: string;
  /** `all` or a comma-separated list of board [fields](/cloud/trello/guides/rest-api/object-definitions/) */
  fields?: string;
}
