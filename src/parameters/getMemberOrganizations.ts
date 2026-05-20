import { z } from 'zod';

export const GetMemberOrganizationsSchema = z.object({
  /** The ID or username of the member */
  id: z.unknown(),
  /** One of: `all`, `members`, `none`, `public` (Note: `members` filters to only private Workspaces) */
  filter: z.enum(['all', 'members', 'none', 'public']).optional(),
  /**
   * `all` or a comma-separated list of organization
   * [fields](https://developer.atlassian.com/cloud/trello/guides/rest-api/object-definitions/)
   */
  fields: z.unknown().optional(),
  /** Whether or not to include paid account information in the returned workspace object */
  paidAccount: z.boolean().optional(),
});

export type GetMemberOrganizations = z.input<typeof GetMemberOrganizationsSchema>;
