export interface GetEnterprisesIdMembers {
  /** The API key to use */
  key: Record<string, any>;
  /** The API token to use */
  token: Record<string, any>;
  /** ID of the Enterprise to retrieve. */
  id: Record<string, any>;
  /** A comma-seperated list of valid [member fields](member). */
  fields?: string;
  /** Pass a [SCIM-style query](/cloud/trello/scim/) to filter members. This takes precedence over the all/normal/admins value of members. If any of the below member_* args are set, the member array will be paginated. */
  filter?: string;
  /** This parameter expects a [SCIM-style](/cloud/trello/scim/) sorting value prefixed by a `-` to sort descending. If no `-` is prefixed, it will be sorted ascending. Note that the members array returned will be paginated if `members` is 'normal' or 'admins'. Pagination can be controlled with member_startIndex, etc, but the API response will not contain the total available result count or pagination status data. */
  sort?: string;
  /** Deprecated: Please use `sort` instead. This parameter expects a [SCIM-style](/cloud/trello/scim/) sorting value. Note that the members array returned will be paginated if `members` is 'normal' or 'admins'. Pagination can be controlled with member_startIndex, etc, but the API response will not contain the total available result count or pagination status data. */
  sortBy?: string;
  /** Deprecated: Please use `sort` instead. One of: `ascending`, `descending`, `asc`, `desc`. */
  sortOrder?: string;
  /** Any integer between 0 and 9999. */
  startIndex?: number;
  /** [SCIM-style filter](/cloud/trello/scim/). */
  count?: string;
  /** Any valid value that the [nested organization field resource](/cloud/trello/guides/rest-api/nested-resources/) accepts. */
  organization_fields?: string;
  /** Any valid value that the [nested board resource](/cloud/trello/guides/rest-api/nested-resources/) accepts. */
  board_fields?: string;
}
