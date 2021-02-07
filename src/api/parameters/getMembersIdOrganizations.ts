export interface GetMembersIdOrganizations {
  /** The API key to use */
  key: Record<string, any>;
  /** The API token to use */
  token: Record<string, any>;
  /** The ID or username of the member */
  id: Record<string, any>;
  /** One of: `all`, `members`, `none`, `public` (Note: `members` filters to only private teams) */
  filter?: string;
  /** `all` or a comma-separated list of organization [fields](/cloud/trello/guides/rest-api/object-definitions/) */
  fields?: Record<string, any>;
  paid_account?: boolean;
}
