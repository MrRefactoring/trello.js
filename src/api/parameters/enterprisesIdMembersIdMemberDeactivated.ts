export interface EnterprisesIdMembersIdMemberDeactivated {
  /** The API key to use */
  key: Record<string, any>;
  /** The API token to use */
  token: Record<string, any>;
  /** ID of the enterprise to retrieve. */
  id: Record<string, any>;
  /** ID of the Member to deactive. */
  idMember: Record<string, any>;
  /** Determines whether the user is deactivated or not. */
  value: boolean;
  /** A comma separated list of any valid values that the [nested member field resource]() accepts. */
  fields?: Record<string, any>;
  /** Any valid value that the [nested organization resource](/cloud/trello/guides/rest-api/nested-resources/) accepts. */
  organization_fields?: Record<string, any>;
  /** Any valid value that the [nested board resource](/cloud/trello/guides/rest-api/nested-resources/) accepts. */
  board_fields?: Record<string, any>;
}
