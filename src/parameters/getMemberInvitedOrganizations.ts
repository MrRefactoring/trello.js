import { z } from 'zod';

export const GetMemberInvitedOrganizationsSchema = z.object({
  /** The ID or username of the member */
  id: z.unknown(),
  /**
   * `all` or a comma-separated list of organization
   * [fields](https://developer.atlassian.com/cloud/trello/guides/rest-api/object-definitions/)
   */
  fields: z.unknown().optional(),
});

export type GetMemberInvitedOrganizations = z.input<typeof GetMemberInvitedOrganizationsSchema>;
