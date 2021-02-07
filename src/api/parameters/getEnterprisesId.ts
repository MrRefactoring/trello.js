export interface GetEnterprisesId {
  /** ID of the enterprise to retrieve. */
  id: Record<string, any>;
  /** Comma-separated list of: `id`, `name`, `displayName`, `prefs`, `ssoActivationFailed`, `idAdmins`, `idMembers` (Note that the members array returned will be paginated if `members` is 'normal' or 'admins'. Pagination can be controlled with member_startIndex, etc, but the API response will not contain the total available result count or pagination status data. Read the SCIM documentation [here]() for more information on filtering), `idOrganizations`, `products`, `userTypes`, `idMembers`, `idOrganizations` */
  fields?: string;
  /** One of: `none`, `normal`, `admins`, `owners`, `all` */
  members?: string;
  /** One of: `avatarHash`, `fullName`, `initials`, `username` */
  member_fields?: string;
  /** Pass a [SCIM-style query](/cloud/trello/scim/) to filter members. This takes precedence over the all/normal/admins value of members. If any of the member_* args are set, the member array will be paginated. */
  member_filter?: string;
  /** This parameter expects a [SCIM-style](/cloud/trello/scim/) sorting value prefixed by a `-` to sort descending. If no `-` is prefixed, it will be sorted ascending. Note that the members array returned will be paginated if `members` is 'normal' or 'admins'. Pagination can be controlled with member_startIndex, etc, but the API response will not contain the total available result count or pagination status data. */
  member_sort?: string;
  /** Deprecated: Please use member_sort. This parameter expects a [SCIM-style sorting value](/cloud/trello/scim/). Note that the members array returned will be paginated if `members` is `normal` or `admins`. Pagination can be controlled with `member_startIndex`, etc, and the API response's header will contain the total count and pagination state. */
  member_sortBy?: string;
  /** Deprecated: Please use member_sort. One of: `ascending`, `descending`, `asc`, `desc` */
  member_sortOrder?: string;
  /** Any integer between 0 and 100. */
  member_startIndex?: number;
  /** 0 to 100 */
  member_count?: number;
  /** One of: `none`, `members`, `public`, `all` */
  organizations?: string;
  /** Any valid value that the [nested organization field resource]() accepts. */
  organization_fields?: string;
  organization_paid_accounts?: boolean;
  /** Comma-seperated list of: `me`, `normal`, `admin`, `active`, `deactivated` */
  organization_memberships?: string;
}
