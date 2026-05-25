import { z } from 'zod';

export const GetEnterpriseMembersSchema = z.object({
  /** ID of the Enterprise to retrieve. */
  id: z.string(),
  /**
   * A comma-seperated list of valid [member
   * fields](https://developer.atlassian.com/cloud/trello/guides/rest-api/object-definitions/#member-object).
   */
  fields: z
    .union([
      z.string(),
      z.array(z.string()),
      z.enum([
        'id',
        'activityBlocked',
        'avatarHash',
        'avatarUrl',
        'bio',
        'bioData',
        'confirmed',
        'fullName',
        'idEnterprise',
        'idMemberReferrer',
        'idPremOrgsAdmin',
        'initials',
        'memberType',
        'nonPublic',
        'nonPublicAvailable',
        'products',
        'status',
        'url',
        'username',
        'idBoards',
        'idOrganizations',
      ]),
      z.array(
        z.enum([
          'id',
          'activityBlocked',
          'avatarHash',
          'avatarUrl',
          'bio',
          'bioData',
          'confirmed',
          'fullName',
          'idEnterprise',
          'idMemberReferrer',
          'idPremOrgsAdmin',
          'initials',
          'memberType',
          'nonPublic',
          'nonPublicAvailable',
          'products',
          'status',
          'url',
          'username',
          'idBoards',
          'idOrganizations',
        ]),
      ),
    ])
    .optional(),
  /**
   * Pass a SCIM-style query to filter members. This takes precedence over the all/normal/admins value of members. If
   * any of the below member_* args are set, the member array will be paginated.
   */
  filter: z.string().optional(),
  /**
   * This parameter expects a SCIM-style sorting value prefixed by a `-` to sort descending. If no `-` is prefixed, it
   * will be sorted ascending. Note that the members array returned will be paginated if `members` is 'normal' or
   * 'admins'. Pagination can be controlled with member_startIndex, etc, but the API response will not contain the total
   * available result count or pagination status data.
   */
  sort: z.string().optional(),
  /**
   * Deprecated: Please use `sort` instead. This parameter expects a SCIM-style sorting value. Note that the members
   * array returned will be paginated if `members` is 'normal' or 'admins'. Pagination can be controlled with
   * member_startIndex, etc, but the API response will not contain the total available result count or pagination status
   * data.
   */
  sortBy: z.string().optional(),
  /** Deprecated: Please use `sort` instead. One of: `ascending`, `descending`, `asc`, `desc`. */
  sortOrder: z.enum(['ascending', 'descending', 'asc', 'desc', 'null']).optional(),
  /** Any integer between 0 and 9999. */
  startIndex: z.number().optional(),
  /** SCIM-style filter. */
  count: z.string().optional(),
  /**
   * Any valid value that the [nested organization field
   * resource](https://developer.atlassian.com/cloud/trello/guides/rest-api/nested-resources/) accepts.
   */
  organizationFields: z.string().optional(),
  /**
   * Any valid value that the [nested board
   * resource](https://developer.atlassian.com/cloud/trello/guides/rest-api/nested-resources/) accepts.
   */
  boardFields: z.string().optional(),
});

export type GetEnterpriseMembers = z.input<typeof GetEnterpriseMembersSchema>;
