export interface DeactivateEnterpriseMember {
  /** ID of the enterprise to retrieve. */
  id: string;
  /** ID of the Member to deactive. */
  idMember: string;
  /** Determines whether the user is deactivated or not. */
  value: boolean;
  /** A comma separated list of any valid values that the [nested member field resource]() accepts. */
  fields?: string[];
  /** Any valid value that the [nested organization resource](/cloud/trello/guides/rest-api/nested-resources/) accepts. */
  organization_fields?: string[];
  /** Any valid value that the [nested board resource](/cloud/trello/guides/rest-api/nested-resources/) accepts. */
  board_fields?: string[];
}
