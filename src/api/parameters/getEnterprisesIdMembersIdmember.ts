export interface GetEnterprisesIdMembersIdmember {
  /** The API key to use */
  key: Record<string, any>;
  /** The API token to use */
  token: Record<string, any>;
  /** ID of the enterprise to retrieve. */
  id: Record<string, any>;
  /** An ID of a member resource. */
  idMember: Record<string, any>;
  /** A comma separated list of any valid values that the [nested member field resource]() accepts. */
  fields?: string;
  /** Any valid value that the [nested organization field resource](/cloud/trello/guides/rest-api/nested-resources/) accepts. */
  organization_fields?: string;
  /** Any valid value that the [nested board resource](/cloud/trello/guides/rest-api/nested-resources/) accepts. */
  board_fields?: string;
}
