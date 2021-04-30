export interface GetEnterpriseMember {
  /** ID of the enterprise to retrieve. */
  id: string;
  /** An ID of a member resource. */
  idMember: string;
  /** A comma separated list of any valid values that the [nested member field resource]() accepts. */
  fields?: string;

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
