export interface GetNotificationMember {
  /** The ID of the notification */
  id: string;
  /** `all` or a comma-separated list of member [fields](/cloud/trello/guides/rest-api/object-definitions/) */
  fields?: 'all' | string[];
}
