export interface GetMemberField {
  /** The ID or username of the member */
  id: Record<string, any>;
  /** One of the member [fields](/cloud/trello/guides/rest-api/object-definitions/) */
  field: Record<string, any>;
}
