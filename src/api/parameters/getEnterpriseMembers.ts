export interface GetEnterpriseMembers {
  /** ID of the Enterprise to retrieve. */
  id: string;
  /** A comma-seperated list of valid [member fields](member). */
  fields?: string;
  /** Pass a [SCIM-style query](https://developer.atlassian.com/cloud/trello/scim/) to filter members. This takes precedence over the all/normal/admins value of members. If any of the below member_* args are set, the member array will be paginated. */
  filter?: string;
  /** This parameter expects a [SCIM-style](https://developer.atlassian.com/cloud/trello/scim/) sorting value prefixed by a `-` to sort descending. If no `-` is prefixed, it will be sorted ascending. Note that the members array returned will be paginated if `members` is 'normal' or 'admins'. Pagination can be controlled with member_startIndex, etc, but the API response will not contain the total available result count or pagination status data. */
  sort?: string;
  /** Deprecated: Please use `sort` instead. This parameter expects a [SCIM-style](https://developer.atlassian.com/cloud/trello/scim/) sorting value. Note that the members array returned will be paginated if `members` is 'normal' or 'admins'. Pagination can be controlled with member_startIndex, etc, but the API response will not contain the total available result count or pagination status data. */
  sortBy?: string;
  /** Deprecated: Please use `sort` instead. One of: `ascending`, `descending`, `asc`, `desc`. */
  sortOrder?: string;
  /** Any integer between 0 and 9999. */
  startIndex?: number;
  /** [SCIM-style filter](https://developer.atlassian.com/cloud/trello/scim/). */
  count?: string;

  organization?: {
    /** Any valid value that the [nested organization field resource](https://developer.atlassian.com/cloud/trello/guides/rest-api/nested-resources/) accepts. */
    fields?: string;
  };

  board?: {
    /** Any valid value that the [nested board resource](https://developer.atlassian.com/cloud/trello/guides/rest-api/nested-resources/) accepts. */
    fields?: string;
  };

  /**
   * @deprecated Use `organization.fields`.
   *
   * Any valid value that the [nested organization field resource](https://developer.atlassian.com/cloud/trello/guides/rest-api/nested-resources/) accepts.
   */
  organizationFields?: string;

  /**
   * @deprecated Use `board.fields`.
   *
   * Any valid value that the [nested board resource](https://developer.atlassian.com/cloud/trello/guides/rest-api/nested-resources/) accepts.
   */
  boardFields?: string;
}
