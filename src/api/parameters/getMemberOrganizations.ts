export interface GetMemberOrganizations {
  /** The ID or username of the member */
  id: string;
  /** One of: `all`, `members`, `none`, `public` (Note: `members` filters to only private teams) */
  filter?: string;
  /** `all` or a comma-separated list of organization [fields](/cloud/trello/guides/rest-api/object-definitions/) */
  fields?: 'all' | string;
  paid_account?: boolean;
}
