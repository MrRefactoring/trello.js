export interface GetMemberBoardsInvited {
  /** The ID or username of the member */
  id: Record<string, any>;
  /** `all` or a comma-separated list of board [fields](/cloud/trello/guides/rest-api/object-definitions/) */
  fields?: Record<string, any>;
}
