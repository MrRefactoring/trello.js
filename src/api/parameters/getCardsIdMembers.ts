export interface GetCardsIdMembers {
  /** The ID of the Card */
  id: Record<string, any>;
  /** `all` or a comma-separated list of member [fields](/cloud/trello/guides/rest-api/object-definitions/) */
  fields?: string;
}
