export interface GetBoardMemberships {
  /** The ID of the board */
  id: string;
  /** One of `admins`, `all`, `none`, `normal` */
  filter?: string;
  /** Works for premium organizations only. */
  activity?: boolean;
  /** Shows the type of member to the org the user is. For instance, an org admin will have a `orgMemberType` of `admin`. */
  orgMemberType?: boolean;
  /**
   * Determines whether to include a [nested member
   * object](https://developer.atlassian.com/cloud/trello/guides/rest-api/nested-resources/).
   */
  member?: boolean;
  /**
   * Fields to show if `member=true`. Valid values: [nested member resource
   * fields](https://developer.atlassian.com/cloud/trello/guides/rest-api/nested-resources/).
   */
  memberFields?: string[];
}
