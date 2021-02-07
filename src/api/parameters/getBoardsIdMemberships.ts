export interface GetBoardsIdMemberships {
  /** The API key to use */
  key: Record<string, any>;
  /** The API token to use */
  token: Record<string, any>;
  /** The ID of the board */
  id: Record<string, any>;
  /** One of `admins`, `all`, `none`, `normal` */
  filter?: string;
  /** Works for premium organizations only. */
  activity?: boolean;
  /** Shows the type of member to the org the user is. For instance, an org admin will have a `orgMemberType` of `admin`. */
  orgMemberType?: boolean;
  /** Determines whether to include a [nested member object](/cloud/trello/guides/rest-api/nested-resources/). */
  member?: boolean;
  /** Fields to show if `member=true`. Valid values: [nested member resource fields](/cloud/trello/guides/rest-api/nested-resources/). */
  member_fields?: Record<string, any>;
}
