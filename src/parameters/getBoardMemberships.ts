import { z } from 'zod';

export const GetBoardMembershipsSchema = z.object({
  /** The ID of the board */
  id: z.unknown(),
  /** One of `admins`, `all`, `none`, `normal` */
  filter: z.enum(['admins', 'all', 'none', 'normal']).optional(),
  /** Works for premium organizations only. */
  activity: z.boolean().optional(),
  /** Shows the type of member to the org the user is. For instance, an org admin will have a `orgMemberType` of `admin`. */
  orgMemberType: z.boolean().optional(),
  /**
   * Determines whether to include a [nested member
   * object](https://developer.atlassian.com/cloud/trello/guides/rest-api/nested-resources/).
   */
  member: z.boolean().optional(),
  /**
   * Fields to show if `member=true`. Valid values: [nested member resource
   * fields](https://developer.atlassian.com/cloud/trello/guides/rest-api/nested-resources/).
   */
  memberFields: z.unknown().optional(),
});

export type GetBoardMemberships = z.input<typeof GetBoardMembershipsSchema>;
