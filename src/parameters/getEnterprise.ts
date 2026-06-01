import { z } from 'zod';

export const GetEnterpriseSchema = z.object({
  /** ID of the enterprise to retrieve. */
  id: z.string(),
  /**
   * Comma-separated list of: `id`, `name`, `displayName`, `prefs`, `ssoActivationFailed`, `idAdmins`, `idMembers` (Note
   * that the members array returned will be paginated if `members` is 'normal' or 'admins'. Pagination can be
   * controlled with member_startIndex, etc, but the API response will not contain the total available result count or
   * pagination status data.), `idOrganizations`, `products`, `userTypes`, `idMembers`, `idOrganizations`
   */
  fields: z
    .union([
      z.string(),
      z.array(z.string()),
      z.enum([
        'id',
        'name',
        'displayName',
        'prefs',
        'ssoActivationFailed',
        'idAdmins',
        'idMembers',
        'idOrganizations',
        'products',
        'userTypes',
      ]),
      z.array(
        z.enum([
          'id',
          'name',
          'displayName',
          'prefs',
          'ssoActivationFailed',
          'idAdmins',
          'idMembers',
          'idOrganizations',
          'products',
          'userTypes',
        ]),
      ),
    ])
    .optional(),
  /** One of: `none`, `normal`, `admins`, `owners`, `all` */
  members: z.union([z.string(), z.enum(['none', 'normal', 'admins', 'owners', 'all'])]).optional(),
  /** One of: `avatarHash`, `fullName`, `initials`, `username` */
  memberFields: z.union([z.string(), z.enum(['avatarHash', 'fullName', 'initials', 'username'])]).optional(),
  /**
   * Pass a SCIM-style query to filter members. This takes precedence over the all/normal/admins value of members. If
   * any of the member_* args are set, the member array will be paginated.
   */
  memberFilter: z.string().optional(),
  /**
   * This parameter expects a SCIM-style sorting value prefixed by a `-` to sort descending. If no `-` is prefixed, it
   * will be sorted ascending. Note that the members array returned will be paginated if `members` is 'normal' or
   * 'admins'. Pagination can be controlled with member_startIndex, etc, but the API response will not contain the total
   * available result count or pagination status data.
   */
  memberSort: z.string().optional(),
  /**
   * Deprecated: Please use member_sort. This parameter expects a SCIM-style sorting value. Note that the members array
   * returned will be paginated if `members` is `normal` or `admins`. Pagination can be controlled with
   * `member_startIndex`, etc, and the API response's header will contain the total count and pagination state.
   */
  memberSortBy: z.string().optional(),
  /** Deprecated: Please use member_sort. One of: `ascending`, `descending`, `asc`, `desc` */
  memberSortOrder: z.union([z.string(), z.enum(['ascending', 'descending', 'asc', 'desc'])]).optional(),
  /** Any integer between 0 and 100. */
  memberStartIndex: z.number().optional(),
  /** 0 to 100 */
  memberCount: z.number().optional(),
  /** One of: `none`, `members`, `public`, `all` */
  organizations: z.union([z.string(), z.enum(['none', 'members', 'public', 'all'])]).optional(),
  /** Any valid value that the [nested organization field resource]() accepts. */
  organizationFields: z.string().optional(),
  /** Whether or not to include paid account information in the returned workspace objects */
  organizationPaidAccounts: z.boolean().optional(),
  /** Comma-seperated list of: `me`, `normal`, `admin`, `active`, `deactivated` */
  organizationMemberships: z.string().optional(),
});

export type GetEnterprise = z.input<typeof GetEnterpriseSchema>;
