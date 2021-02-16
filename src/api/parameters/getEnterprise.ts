export interface GetEnterprise {
  /** ID of the enterprise to retrieve. */
  id: string;
  /** Comma-separated list of: `id`, `name`, `displayName`, `prefs`, `ssoActivationFailed`, `idAdmins`, `idMembers` (Note that the members array returned will be paginated if `members` is 'normal' or 'admins'. Pagination can be controlled with member_startIndex, etc, but the API response will not contain the total available result count or pagination status data. Read the SCIM documentation [here]() for more information on filtering), `idOrganizations`, `products`, `userTypes`, `idMembers`, `idOrganizations` */
  fields?: string;
  /** One of: `none`, `normal`, `admins`, `owners`, `all` */
  members?: string;
  /** One of: `avatarHash`, `fullName`, `initials`, `username` */
  memberFields?: string;
  /** Pass a [SCIM-style query](https://developer.atlassian.com/cloud/trello/scim/) to filter members. This takes precedence over the all/normal/admins value of members. If any of the member_* args are set, the member array will be paginated. */
  memberFilter?: string;
  /** This parameter expects a [SCIM-style](https://developer.atlassian.com/cloud/trello/scim/) sorting value prefixed by a `-` to sort descending. If no `-` is prefixed, it will be sorted ascending. Note that the members array returned will be paginated if `members` is 'normal' or 'admins'. Pagination can be controlled with member_startIndex, etc, but the API response will not contain the total available result count or pagination status data. */
  memberSort?: string;
  /** Deprecated: Please use member_sort. This parameter expects a [SCIM-style sorting value](https://developer.atlassian.com/cloud/trello/scim/). Note that the members array returned will be paginated if `members` is `normal` or `admins`. Pagination can be controlled with `member_startIndex`, etc, and the API response's header will contain the total count and pagination state. */
  memberSortBy?: string;
  /** Deprecated: Please use member_sort. One of: `ascending`, `descending`, `asc`, `desc` */
  memberSortOrder?: string;
  /** Any integer between 0 and 100. */
  memberStartIndex?: number;
  /** 0 to 100 */
  memberCount?: number;
  /** One of: `none`, `members`, `public`, `all` */
  organizations?: string;
  /** Any valid value that the [nested organization field resource]() accepts. */
  organizationFields?: string;
  organizationPaidAccounts?: boolean;
  /** Comma-seperated list of: `me`, `normal`, `admin`, `active`, `deactivated` */
  organizationMemberships?: string;
}
