export interface GetMembersIdOrganizations {
  /** The ID or username of the member */
  id: Record<string, any>;
  /** One of: `all`, `members`, `none`, `public` (Note: `members` filters to only private teams) */
  filter?: string;
  /** `all` or a comma-separated list of organization [fields](/cloud/trello/guides/rest-api/object-definitions/) */
  fields?: Record<string, any>;
  paid_account?: boolean;
}
