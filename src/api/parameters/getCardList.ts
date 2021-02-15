export interface GetCardList {
  /** The ID of the Card */
  id: Record<string, any>;
  /** `all` or a comma-separated list of list [fields](/cloud/trello/guides/rest-api/object-definitions/) */
  fields?: string;
}
