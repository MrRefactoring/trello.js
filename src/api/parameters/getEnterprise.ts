export interface GetEnterprise {
  /** ID of the enterprise to retrieve. */
  id: string;
  /**
   * Comma-separated list of: `id`, `name`, `displayName`, `prefs`, `ssoActivationFailed`, `idAdmins`, `idMembers` (Note
   * that the members array returned will be paginated if `members` is 'normal' or 'admins'. Pagination can be
   * controlled with member_startIndex, etc, but the API response will not contain the total available result count or
   * pagination status data. Read the SCIM documentation [here]() for more information on filtering), `idOrganizations`,
   * `products`, `userTypes`, `idMembers`, `idOrganizations`
   */
  fields?: string;
  /** One of: `none`, `normal`, `admins`, `owners`, `all` */
  members?: string;

  member?: {
    /** One of: `avatarHash`, `fullName`, `initials`, `username` */
    fields?: 'avatarHash' | 'fullName' | 'initials' | 'username';
    /**
     * Pass a [SCIM-style query](https://developer.atlassian.com/cloud/trello/scim/) to filter members. This takes
     * precedence over the all/normal/admins value of members. If any of the member_* args are set, the member array
     * will be paginated.
     */
    filter?: string;
    /**
     * This parameter expects a [SCIM-style](https://developer.atlassian.com/cloud/trello/scim/) sorting value prefixed
     * by a `-` to sort descending. If no `-` is prefixed, it will be sorted ascending. Note that the members array
     * returned will be paginated if `members` is 'normal' or 'admins'. Pagination can be controlled with
     * member_startIndex, etc, but the API response will not contain the total available result count or pagination status data.
     */
    sort?: string;
    /** Any integer between 0 and 100. */
    startIndex?: number;
    /** 0 to 100 */
    count?: number;
  };

  /**
   * @deprecated Use `member.fields` instead.
   *
   *   One of: `avatarHash`, `fullName`, `initials`, `username`
   */
  memberFields?: string;
  /**
   * @deprecated Use `member.filter` instead.
   *
   *   Pass a [SCIM-style query](https://developer.atlassian.com/cloud/trello/scim/) to filter members. This takes
   *   precedence over the all/normal/admins value of members. If any of the member_* args are set, the member array
   *   will be paginated.
   */
  memberFilter?: string;
  /**
   * @deprecated Use `member.sort` instead.
   *
   *   This parameter expects a [SCIM-style](https://developer.atlassian.com/cloud/trello/scim/) sorting value prefixed by
   *   a `-` to sort descending. If no `-` is prefixed, it will be sorted ascending. Note that the members array
   *   returned will be paginated if `members` is 'normal' or 'admins'. Pagination can be controlled with
   *   member_startIndex, etc, but the API response will not contain the total available result count or pagination status data.
   */
  memberSort?: string;
  /**
   * @deprecated Deprecated: Please use member_sort. This parameter expects a [SCIM-style sorting
   *   value](https://developer.atlassian.com/cloud/trello/scim/). Note that the members array returned will be
   *   paginated if `members` is `normal` or `admins`. Pagination can be controlled with `member_startIndex`, etc, and
   *   the API response's header will contain the total count and pagination state.
   */
  memberSortBy?: string;
  /** @deprecated Deprecated: Please use member_sort. One of: `ascending`, `descending`, `asc`, `desc` */
  memberSortOrder?: string;
  /**
   * @deprecated Use `member.startIndex` instead.
   *
   *   Any integer between 0 and 100.
   */
  memberStartIndex?: number;
  /**
   * @deprecated Use `member.count` instead.
   *
   *   0 to 100
   */
  memberCount?: number;
  /** One of: `none`, `members`, `public`, `all` */
  organizations?: 'none' | 'all' | 'members' | 'public' | string;

  organization?: {
    /** Any valid value that the [nested organization field resource]() accepts. */
    fields?: string;
    paidAccounts?: boolean;
    /** Comma-seperated list of: `me`, `normal`, `admin`, `active`, `deactivated` */
    memberships?:
    | 'me'
    | 'normal'
    | 'admin'
    | 'active'
    | 'deactivated'
    | ('me' | 'normal' | 'admin' | 'active' | 'deactivated')[];
  };

  /**
   * @deprecated Use `organization.fields` instead.
   *
   *   Any valid value that the [nested organization field resource]() accepts.
   */
  organizationFields?: string;
  /** @deprecated Use `organization.paidAccount` instead. */
  organizationPaidAccounts?: boolean;
  /**
   * @deprecated Use `organization.memberships` instead.
   *
   *   Comma-seperated list of: `me`, `normal`, `admin`, `active`, `deactivated`
   */
  organizationMemberships?: string;
}
