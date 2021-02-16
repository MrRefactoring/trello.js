export interface GetNotificationCard {
  /** The ID of the notification */
  id: string;
  /** `all` or a comma-separated list of card [fields](/cloud/trello/guides/rest-api/object-definitions/) */
  fields?: 'all' | string[];
}
